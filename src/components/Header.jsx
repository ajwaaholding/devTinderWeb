import { useEffect } from "react";
import useStore from "../store/usestore";
import { logOutUser } from "../constants/globalUtils";
import { Link, useNavigate } from "react-router";
export const Header = () => {
  const { user, logout } = useStore((state) => state);
  const Navigate = useNavigate();
  const handleLogOut = async () => {
    await logOutUser();
    logout();
    Navigate("/login");
  };

  return (
    <div className="navbar bg-red-500 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">DevChat</a>
      </div>
      <div className="flex gap-2">
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.data?.data?.profileUrl}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <Link to={"/login"}>Login</Link>

              <li>
                <a>Settings</a>
              </li>
              <li onClick={handleLogOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
