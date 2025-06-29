import axios from "axios";
import { LOGIN_API } from "./api";

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(
      LOGIN_API,
      { email, password }
      //   {
      //     withCredentials: true,
      //   }
    );
    console.log(response, "testdta");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || "Login failed";
    throw new Error(errorMessage);
  }
};
