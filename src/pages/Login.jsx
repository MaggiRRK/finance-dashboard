import { useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const register = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData.session) {
      alert("User not logged in yet");
      return;
    }

    const user = sessionData.session.user;

    const { error: insertError } = await supabase.from("users").insert([
      {
        id: user.id,
        firstName: form.firstName,
        lastName: form.lastName,
      },
    ]);

    if (insertError) {
      alert(insertError.message);
      return;
    }

    navigate("/dashboard");
  };

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) alert(error.message);
    else navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5c5870]">
      <div className="w-237.5 bg-[#2c2638] rounded-2xl flex overflow-hidden shadow-2xl">

        {/* LEFT */}
        <div className="w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-5 left-5 text-white font-bold">
            AMU
          </div>

          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-2xl font-semibold">
              Capturing Moments,<br />Creating Memories
            </h2>
          </div>
        </div>

        <div className="w-1/2 p-10 text-white">

          <h1 className="text-3xl font-bold mb-2">
            {isLogin ? "Login" : "Create an account"}
          </h1>

          <p className="text-sm text-gray-400 mb-6">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-purple-400 cursor-pointer underline"
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>

          {!isLogin && (
            <div className="flex gap-3 mb-4">
              <input
                name="firstName"
                onChange={handleChange}
                className="w-1/2 p-3 rounded bg-[#3a3347]"
                placeholder="First name"
              />
              <input
                name="lastName"
                onChange={handleChange}
                className="w-1/2 p-3 rounded bg-[#3a3347]"
                placeholder="Last name"
              />
            </div>
          )}

          <input
            name="email"
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded bg-[#3a3347]"
            placeholder="Email"
          />

          <input
            name="password"
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded bg-[#3a3347]"
            placeholder="Enter your password"
            type="password"
          />

          {!isLogin && (
            <div className="flex items-center gap-2 text-sm mb-6">
              <input type="checkbox" />
              <span>I agree to the Terms & Conditions</span>
            </div>
          )}

          <button
            onClick={isLogin ? login : register}
            className="w-full bg-purple-600 py-3 rounded-xl mb-6"
          >
            {isLogin ? "Login" : "Create account"}
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="text-sm">Or continue with</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          <div className="flex gap-3">
            <button className="w-1/2 border border-gray-500 py-3 rounded-xl">
              Google
            </button>
            <button className="w-1/2 border border-gray-500 py-3 rounded-xl">
              Apple
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}