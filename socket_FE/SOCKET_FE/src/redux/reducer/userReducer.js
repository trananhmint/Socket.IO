const initialState = {
  user: null,
  isLogin: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESSFULLY":
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
        user: null,
      }

    default:
      return state;
  }
};

export default userReducer;
