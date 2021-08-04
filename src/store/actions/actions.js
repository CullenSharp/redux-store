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

const actions = {
  setActiveCategory,
  addItemToCart,
  removeItemFromCart,
}

export default actions;
