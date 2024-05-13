import { combineReducers } from "redux";
import socketReducer from "../reducer/socketReducer";

export default combineReducers({
    socket: socketReducer,
})

export const setSocket = (socket) => ({
    type: "SET_SOCKET",
    payload: socket
})
