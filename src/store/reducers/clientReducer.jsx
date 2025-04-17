// src/store/reducers/clientReducer.js

const initialState = {
    user: null,
    roles: [],
    addressList: [],
    creditCards: [],
    theme: "light",
    language: "tr",
  };
  
  export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USER":
        return { ...state, user: action.payload };
      case "SET_ROLES":
        return { ...state, roles: action.payload };
      case "SET_LANGUAGE":
        return { ...state, language: action.payload };
      case "SET_THEME":
        return { ...state, theme: action.payload };
      case "LOGOUT":
        return { ...initialState }; // tüm client bilgilerini sıfırla
      default:
        return state;
    }
  };
  
  
  export default clientReducer;
  