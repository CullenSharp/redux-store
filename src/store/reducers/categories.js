const initialState = {
  activeCategory: '',
  categories: ['electronics', 'books'],
  products: [],
}

initialState.products.push({
  name: 'TV',
  category: 'Electronics',
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque atque, facilis, quod deleniti assumenda amet autem quibusdam quidem molestiae at unde perferendis fugiat molestias nemo, obcaecati hic sequi facere debitis quia earum. Asperiores eaque, accusamus sapiente consectetur alias porro ratione necessitatibus aliquid aliquam natus tempora expedita ea quo velit placeat quisquam provident eum. Voluptatibus, ratione. Soluta exercitationem asperiores quisquam quos nemo nihil quo! Blanditiis obcaecati dolores magni quis voluptate culpa assumenda beatae at odit. Accusamus deleniti at dignissimos facere sed atque doloremque dolore incidunt id mollitia eveniet, itaque eos debitis soluta praesentium laborum nostrum voluptates maxime fugit! Nam, non. Commodi?",
})

initialState.products.push({
  name: 'Mac',
  category: 'Electronics',
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque atque, facilis, quod deleniti assumenda amet autem quibusdam quidem molestiae at unde perferendis fugiat molestias nemo, obcaecati hic sequi facere debitis quia earum. Asperiores eaque, accusamus sapiente consectetur alias porro ratione necessitatibus aliquid aliquam natus tempora expedita ea quo velit placeat quisquam provident eum. Voluptatibus, ratione. Soluta exercitationem asperiores quisquam quos nemo nihil quo! Blanditiis obcaecati dolores magni quis voluptate culpa assumenda beatae at odit. Accusamus deleniti at dignissimos facere sed atque doloremque dolore incidunt id mollitia eveniet, itaque eos debitis soluta praesentium laborum nostrum voluptates maxime fugit! Nam, non. Commodi?",
})

export function setActiveCategory(category) {
  return {
    type: 'SET_ACTIVE_CATEGORY',
    payload: category
  }
}

function categories(state = initialState, action) {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return(
        {...state, activeCategory: action.payload}
      );
    case 'SET_ACTIVE_PRODUCTS':
      return(
        {...state, activeProducts: action.payload}
      );
    default:
      return initialState
  }
}

export default categories;
