const initialState = {
  activeCategory: {
    name: '',
    description: '',
  },
  categories: [],
}

function categories(state = initialState, action) {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return (
        {...state, activeCategory: action.payload}
      );
    case 'FETCHED_CATEGORIES':
      return (
        {...state, categories: [...action.payload]}
      );
    default:
      return state;
  }
}

export default categories;
