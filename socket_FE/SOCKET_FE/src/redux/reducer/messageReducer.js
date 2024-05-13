const initialState = {
  messages: [],
};
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_MESSAGES":
      return {
        ...state,
        messages: action.payload,
      };
    case "ADD_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }
    default:
      return state;
  }
};

export default messageReducer;
