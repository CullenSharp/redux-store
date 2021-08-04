const initialState = [];

// take whole product obj
function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADDED_ITEM_TO_CART':
      return(
        [...state, action.payload]
      );
    case 'REMOVED_ITEM_FROM_CART':
      return(
        state
            .filter(product => product._id !== action.payload)
      );
    default:
      return state;
  }
}

export default cart;
