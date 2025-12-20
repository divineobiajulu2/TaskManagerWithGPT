import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/accounts/api/token/`, {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
