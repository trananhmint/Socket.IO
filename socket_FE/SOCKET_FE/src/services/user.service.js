import axios from "axios";
import api_url_env from "../config/api";
import { toast } from "react-toastify";

const API_URL = api_url_env + "/users";

class userService {
  static async getAllReceivers() {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${API_URL}/get-all-receivers`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.data.isSuccess) {
        // toast.success(response.data.message);
        return response.data.data;
      }
      toast.error(response.data.message);
      return null;
    } catch (error) {
      toast.error("Server error");
      return false;
    }
  }
}

export default userService;
