import axios from "axios";
import { toast } from "react-toastify";
import api_url_env from "../config/api";
const API_URL = api_url_env + "/auth";

class authService {
  static async register(input) {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        fullName: input.fullName,
        username: input.username,
        password: input.password,
        confirmPassword: input.confirmPassword
      });
      if(response.data.isSuccess) {
        toast.success(response.data.message);
        return true;
      }
      toast.error(response.data.message);
      return false;

    } catch (error) {
        toast.error('API server error')
        return false;
    }
  }

  static async login(input) {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username: input.username,
        password: input.password
      });
      if(response.data.isSuccess) {
        toast.success(response.data.message);
        return response.data.data;
      }
      toast.error(response.data.message);
      return null;
    } catch (error) {
      toast.error('API server error');
        return null;
    }
  }
}

export default authService;
