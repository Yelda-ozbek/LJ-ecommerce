const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  roles: [],
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "SET_ROLES":
      return {
        ...state,
        roles: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export default clientReducer;
