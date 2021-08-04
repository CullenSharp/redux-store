import { combineReducers, applyMiddleware, createStore  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import categories from './reducers/categories';
import cart from './reducers/cart';
import products from './reducers/products';

const reducers = combineReducers({
  categories,
  cart,
  products,
})

const middlewares = applyMiddleware(thunk);
export default createStore(reducers, composeWithDevTools(middlewares));
