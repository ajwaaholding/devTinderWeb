import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import useStore from "../store/usestore";
import { fetchUserProfile } from "../constants/globalUtils";
import Spinner from "./Spinner";

export const Body = () => {
  const { user, addUser } = useStore((state) => state);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const getUser = async () => {
    try {
      if (user) {
        setLoading(false);
        return;
      }
      const data = await fetchUserProfile();

      if (data.status === 404) {
        setLoading(false);
        navigate("/login", { replace: true });
        return;
      }

      addUser(data?.data?.data);
      setLoading(false);

      if (location.pathname === "/login" || location.pathname === "/signup") {
        navigate("/feeds", { replace: true });
      }
    } catch (err) {
      setLoading(false);
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
