export const loggedReducer = (state = 0, action) => {
  switch (action.type) {
    case "SIGNIN":
      return action.payload;
    case "LOGOUT":
      return 0;
    default:
      return state;
  }
};
