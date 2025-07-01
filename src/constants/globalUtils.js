import axios from "axios";
import { GET_PROFILE, LOG_OUT_API, LOGIN_API } from "./api";

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(
      LOGIN_API,
      { email, password },

      {
        withCredentials: true,
      }
    );

    return { data: response.data, status: 1 };
  } catch (error) {
    return { data: null, status: error.status };
  }
};

export const fetchUserProfile = async () => {
  try {
    const response = await axios.get(
      GET_PROFILE,

      {
        withCredentials: true,
      }
    );

    return { data: response.data, status: 1 };
  } catch (error) {
    // const errorMessage =
    //   error.response?.data?.message || error.message || "Login failed";
    return { data: null, status: error.status };
  }
};

export const logOutUser = async () => {
  try {
    const response = await axios.post(
      LOG_OUT_API,
      {},
      {
        withCredentials: true,
      }
    );

    return { data: response.data, status: 1 };
  } catch (error) {
    return { data: null, status: error.status };
  }
};
