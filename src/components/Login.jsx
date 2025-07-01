import React, { useEffect, useState } from "react";
import { loginUser } from "../constants/globalUtils";
import useStore from "../store/usestore";
import { useNavigate } from "react-router";
import Spinner from "./Spinner";
const Login = () => {
  const { user, addUser } = useStore((state) => state);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return navigate("/feeds", { replace: true });
    }
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.password) {
      newErrors.password = "Required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      const { email, password } = formData;
      const res = await loginUser({ email, password });
      addUser(res.data);
      setIsLoading(false);
      if (res.status === 1) {
        return navigate("/feeds", { replace: true });
      }
      console.log(res, "res");
    }
  };
  if (loading) return <Spinner />;
  return (
    <div className=" bg-gradient-to-br from-pink-50 to-red-50 flex items-center justify-center p-4">
      <div className="w-full m- max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <svg
              className="w-10 h-10 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Welcome Back
          </h2>

          <p className="text-center text-black mb-8">
            Log in to your account to continue
          </p>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 text-black rounded-lg border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-red-500 focus:border-transparent`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 text-black rounded-lg border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-red-500 focus:border-transparent`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">{errors.password}</p>
                )}
              </div>
            </div>

            <div className="mt-4 text-right">
              <a
                href="#forgot-password"
                className="text-sm text-red-500 hover:text-red-700"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-6 px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Logging in...
                </span>
              ) : (
                "Log In"
              )}
            </button>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                Don't have an account?{" "}
                <a
                  href="#signup"
                  className="text-red-500 hover:text-red-700 font-medium"
                >
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
