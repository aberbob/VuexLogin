function saveCart(cart) {
  localStorage.cart = JSON.stringify(cart);
}

function loadCart() {
  if (localStorage.cart) {
    return JSON.parse(localStorage.cart);
  } else {
    return [];
  }
}

export default {
  state: {
    cart: loadCart()
  },
  mutations: {
    addToCart(state, item){
      state.cart.push(item);
      saveCart(state.cart);
    },
    removeFromCart(state, item){
      let itemIndex = state.cart.indexOf(item);
      state.cart.splice(itemIndex, 1);
      saveCart(state.cart);
    }
  },
  actions: {
    persistCart(context) {
      saveCart(context.state.cart);
    }
  },
  getters: {
    cart: state => state.cart
  }
};
