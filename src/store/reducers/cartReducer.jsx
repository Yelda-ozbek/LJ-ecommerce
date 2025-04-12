const initialState = {
    cart: [],
    payment: {},
    address: {},
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CART":
        return { ...state, cart: action.payload };
  
      case "SET_PAYMENT":
        return { ...state, payment: action.payload };
  
      case "SET_ADDRESS":
        return { ...state, address: action.payload };
  
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.product.id !== action.payload),
        };
        case "INCREASE_QUANTITY":
            return {
              ...state,
              cart: state.cart.map((item) =>
                item.product.id === action.payload
                  ? { ...item, count: item.count + 1 }
                  : item
              ),
            };
          
          case "DECREASE_QUANTITY":
            return {
              ...state,
              cart: state.cart
                .map((item) =>
                  item.product.id === action.payload
                    ? { ...item, count: item.count - 1 }
                    : item
                )
                .filter((item) => item.count > 0), // 0 olanları sepetten çıkar
            };
            case "CLEAR_CART":
                return {
                  ...state,
                  cart: [],
                  payment: {},
                  address: {},
                };
      default:
        return state;
    }
    
  };
  
  export default cartReducer;
  