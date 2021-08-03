const initialState = {
  activeCategory: '',
  categories: ['electronics', 'books'],
  products: []
}

function categories(state = initialState, action) {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      state.activeCategory = action.payload;
      break;
    default:
      return initialState
  }
}

export default categories;
