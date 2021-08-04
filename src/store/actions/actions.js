import axios from 'axios';

/**
 * Creates an action
 * @param {object} category
 * @returns {object} action
 */
export const setActiveCategory = (category) => ({
  type: 'SET_ACTIVE_CATEGORY',
  payload: category
})

/**
 * Creates an action
 * @param {object} product
 * @returns {object} action
 */
export const addItemToCart = (product) => ({
  type: 'ADDED_ITEM_TO_CART',
  payload: product,
})

/**
 * Creates an action
 * @param {string} name
 * @returns {object} action
 */
export const removeItemFromCart = (_id) => ({
  type: 'REMOVED_ITEM_FROM_CART',
  payload: _id,
});

/**
 * Creates an action
 * @param {array} products 
 * @returns 
 */
export const setProducts = (products) => ({
  type: 'FETCHED_PRODUCTS',
  payload: products,
});

/**
 * Creates an async action
 * Dispatches setProducts
 * @returns {function}
 */
export const fetchProducts = () => async (dispatch, getState) => {
  const response = await axios
      .get('https://api-js401.herokuapp.com/api/v1/products');

  const {results} = response.data;

  dispatch(setProducts(results));
}

const actions = {
  setActiveCategory,
  addItemToCart,
  removeItemFromCart,
}

export default actions;
