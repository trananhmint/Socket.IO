import { combineReducers } from "redux";
import userReducer from "./userReducer";
import receiverReducer from "./receiverReducer";
import messageReducer from "./messageReducer";
import socketReducer from "./socketReducer";

export default combineReducers({
    user: userReducer,
    receiver: receiverReducer,
    messages: messageReducer,
    socket: socketReducer,
})




