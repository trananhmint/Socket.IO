import { combineReducers } from "redux";
import userReducer from "../reducer/userReducer";



export default combineReducers({
    user: userReducer,
})

export const loginSuccessfully = (user) => ({
    type : "LOGIN_SUCCESSFULLY",
    payload : user
})

export const logout = () => ({
    type: "LOGOUT",
})