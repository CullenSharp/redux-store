const initialState = {
  activeCategory: {
    name: '',
    description: '',
  },
  categories: [
    {
      name: 'electronics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus.'
    },
    {
      name: 'books',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum.'
    } 
  ],
}

function categories(state = initialState, action) {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return(
        {...state, activeCategory: action.payload}
      );
    default:
      return state;
  }
}

export default categories;
