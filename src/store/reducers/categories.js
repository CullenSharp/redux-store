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
  products: [],
  cart: [],
}

initialState.products.push({
  name: 'TV',
  category: 'electronics',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque atque, facilis, quod deleniti assumenda amet autem quibusdam quidem molestiae at unde perferendis fugiat molestias nemo, obcaecati hic sequi facere debitis quia earum. Asperiores eaque, accusamus sapiente consectetur alias porro ratione necessitatibus aliquid aliquam natus tempora expedita ea quo velit placeat quisquam provident eum. Voluptatibus, ratione. Soluta exercitationem asperiores quisquam quos nemo nihil quo! Blanditiis obcaecati dolores magni quis voluptate culpa assumenda beatae at odit. Accusamus deleniti at dignissimos facere sed atque doloremque dolore incidunt id mollitia eveniet, itaque eos debitis soluta praesentium laborum nostrum voluptates maxime fugit! Nam, non. Commodi?',
  quantity: 1,
})

initialState.products.push({
  name: 'Mac',
  category: 'electronics',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque atque, facilis, quod deleniti assumenda amet autem quibusdam quidem molestiae at unde perferendis fugiat molestias nemo, obcaecati hic sequi facere debitis quia earum. Asperiores eaque, accusamus sapiente consectetur alias porro ratione necessitatibus aliquid aliquam natus tempora expedita ea quo velit placeat quisquam provident eum. Voluptatibus, ratione. Soluta exercitationem asperiores quisquam quos nemo nihil quo! Blanditiis obcaecati dolores magni quis voluptate culpa assumenda beatae at odit. Accusamus deleniti at dignissimos facere sed atque doloremque dolore incidunt id mollitia eveniet, itaque eos debitis soluta praesentium laborum nostrum voluptates maxime fugit! Nam, non. Commodi?',
  quantity: 1,
})

initialState.products.push({
  name: 'Crying of the Latke 49',
  category: 'books',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque atque, facilis, quod deleniti assumenda amet autem quibusdam quidem molestiae at unde perferendis fugiat molestias nemo, obcaecati hic sequi facere debitis quia earum. Asperiores eaque, accusamus sapiente consectetur alias porro ratione necessitatibus aliquid aliquam natus tempora expedita ea quo velit placeat quisquam provident eum. Voluptatibus, ratione. Soluta exercitationem asperiores quisquam quos nemo nihil quo! Blanditiis obcaecati dolores magni quis voluptate culpa assumenda beatae at odit. Accusamus deleniti at dignissimos facere sed atque doloremque dolore incidunt id mollitia eveniet, itaque eos debitis soluta praesentium laborum nostrum voluptates maxime fugit! Nam, non. Commodi?',
  quantity: 1,
})

export function setActiveCategory(category) {
  return {
    type: 'SET_ACTIVE_CATEGORY',
    payload: category
  }
}

export function addItemToCart(product) {
  return {
    type: 'ADDED_ITEM_TO_CART',
    payload: product,
  }
}

export function removeItemFromCart(name) {
  return {
    type: 'REMOVED_ITEM_FROM_CART',
    payload: name,
  }
}

export function changeQuantity({name, quantity}) {
  return {
    type: 'CHANGED_QUANTITY_OF_ITEMS_IN_CART',
    payload: {name, quantity}
  }
}

function categories(state = initialState, action) {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return(
        {...state, activeCategory: action.payload}
      );
    case 'ADDED_ITEM_TO_CART':
      const index = state.cart.indexOf(action.payload);
      if (index !== -1) {
        const { cart } = state;
        cart[index].quantity += 1;

        return (
          {...state, cart: [...cart]}
        );
      } else {
        return (
          {...state, cart: [...state.cart, action.payload]}
        );
      }
    case 'REMOVED_ITEM_FROM_CART':
      const filteredCart = state.cart
          .filter( product => product.name !== action.payload);
      return (
        {...state, cart: [...filteredCart]}
      );
    case 'CHANGED_QUANTITY_OF_ITEMS_IN_CART':
        const product = state
            .cart
            .find(product => product.name === action.payload.name);
        
        product.quantity = action.payload.quantity;

        // todo find a better name for this
        const removedItem = state.cart
            .filter( product => product.name !== action.payload.name);

        return(
          {...state, cart: [...removedItem, product]}
        ) 
    default:
      return initialState
  }
}

export default categories;
