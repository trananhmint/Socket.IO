import { combineReducers } from "redux";
import receiverReducer from "../reducer/receiverReducer";

export default combineReducers ({
    receiver: receiverReducer,
})

export const selectReceiver = (receiver) => ({
    type: "SELECT_RECEIVER",
    payload: receiver
})



