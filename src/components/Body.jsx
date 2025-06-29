import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const Body = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
