const initialState = {
    categories: [],
    productList: [],
    total: 0,
    limit: 25,
    offset: 0,
    filter: "",
    fetchState: "NOT_FETCHED",
    sort:"",
    search:"",
    singleProduct:null,
    page:1,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CATEGORIES":
        return { ...state, categories: action.payload };
      case "SET_PRODUCT_LIST":
        return { ...state, productList: action.payload };
      case "SET_TOTAL":
        return { ...state, total: action.payload };
      case "SET_FETCH_STATE":
        return { ...state, fetchState: action.payload };
      case "SET_LIMIT":
        return { ...state, limit: action.payload };
      case "SET_OFFSET":
        return { ...state, offset: action.payload };
      case "SET_FILTER":
        return { ...state, filter: action.payload };
        case "SET_SORT":
  return { ...state, sort: action.payload };
  case "SET_SEARCH":
  return { ...state, search: action.payload };
  case "SET_SINGLE_PRODUCT":
    return {
      ...state,
      singleProduct: action.payload,
    };
    case "SET_PAGE":         
    return { ...state, page: action.payload };
      default:
        return state;
    }
  };
  
  export default productReducer;
  