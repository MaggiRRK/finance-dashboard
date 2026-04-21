import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Stats from "../components/Stats";
import Transactions from "../components/Transactions";

import { useEffect, useState } from "react";
import { supabase } from "../supabase";


export default function App() {
const [userData, setUserData] = useState(null);




useEffect(() => {
  const getUser = async () => {
    const { data: authData } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    setUserData(data);
  };

  getUser();
}, []);

useEffect(() => {
  const getUser = async () => {
    const { data: authData } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    setUserData(data);
  };

  getUser();
}, []);

const logout = async () => {
  await supabase.auth.signOut();
  window.location.href = "/";
};

<h1>Welcome {userData?.firstName}</h1>

  return (

    <>
   
    <div className=" flex flex-col lg:flex-row min-h-screen bg-linear-to-r from-purple-500 to-purple-800 ">
      <Sidebar />
      <div className="flex-1 p-6">

        <Header />
        <Cards />
         <Stats />
          <Transactions />
      </div>
    </div>
      </> 
    

  );
}