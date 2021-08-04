import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './reducers/categories';
import cart from './reducers/cart';
import products from './reducers/products';

const reducers = combineReducers({
  categories,
  cart,
  products,
})

export default createStore(reducers, composeWithDevTools());
