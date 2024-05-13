const initialState = {
  selectReceiver: null,
};
const receiverReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_RECEIVER":
      return {
        ...state,
        selectReceiver: action.payload,
      };

    default:
      return state;
  }
};

export default receiverReducer;