import { toast } from "react-toastify";
import api_url_env from "../config/api";
import axios from "axios";
const API_URL = api_url_env + "/message";

class messageService {
  static async getMessages(receiverId) {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get(
        `${API_URL}/conversation/${receiverId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.isSuccess) {
        // toast.success(response.data.message);
        return response.data.data;
      }
      //   toast.error(response.data.message);
      return null;
    } catch (error) {
      toast.error("Server error");
      return false;
    }
  }

  static async sendMessage(input, receiverId) {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        `${API_URL}/send/${receiverId}`,
        {message: input},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.isSuccess) {
        // toast.success(response.data.message);
        return response.data.data;
      }
      //   toast.error(response.data.message);
      return null;
    } catch (error) {
      toast.error("Server error");
      return false;
    }
  }
}

export default messageService;
