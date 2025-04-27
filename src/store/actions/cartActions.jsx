export const setCart = (cartItems) => ({
    type: "SET_CART",
    payload: cartItems,
  });
  
  export const setPayment = (paymentInfo) => ({
    type: "SET_PAYMENT",
    payload: paymentInfo,
  });
  
  export const setAddress = (addressInfo) => ({
    type: "SET_ADDRESS",
    payload: addressInfo,
  });
  
  export const removeFromCart = (productId) => ({
    type: "REMOVE_FROM_CART",
    payload: productId,
  });
  export const increaseQuantity = (productId) => ({
    type: "INCREASE_QUANTITY",
    payload: productId,
  });
  
  export const decreaseQuantity = (productId) => ({
    type: "DECREASE_QUANTITY",
    payload: productId,
  });
  export const clearCart = () => ({
    type: "CLEAR_CART",
  });
  export const addToCart = (item) => ({
    type: "ADD_TO_CART",
    payload: item,
  });
  

  
  
  