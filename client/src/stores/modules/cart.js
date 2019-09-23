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
    }
  }
};
