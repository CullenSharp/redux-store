const initialState = [];

function products(state = initialState, action) {
  switch (action.type) {
    case 'ADDED_ITEM_TO_CART':
      return state
          .map(product => {
            if (product._id === action.payload._id) {
              product.inStock -= 1;
            }
            return product;
          })
    case 'REMOVED_ITEM_FROM_CART':
      return state
          .map(product => {
            if (product._id === action.payload) {
              product.inStock += 1;
            }
            return product;
          })
    default:
      return state;
  }
}

export default products;
