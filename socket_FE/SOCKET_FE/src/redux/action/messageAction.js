import { combineReducers } from "redux";
import messageReducer from "../reducer/messageReducer";

export default combineReducers ({
    messages: messageReducer,
})

export const storeMessages = (messages) => ({
    type: "STORE_MESSAGES",
    payload: messages
})

export const addMessage = (message) => ({
    type: "ADD_MESSAGE",
    payload: message
})