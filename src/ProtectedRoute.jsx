import { Navigate } from "react-router-dom";
import { supabase } from "../supabase";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  if (user === undefined) return null;

  if (!user) return <Navigate to="/" />;

  return children;
}