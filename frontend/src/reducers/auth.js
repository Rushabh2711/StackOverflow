export const loginReducer = (state = 0, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return 0;
    default:
      return state;
  }
};

export const loginStatusReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
};
