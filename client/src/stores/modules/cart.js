import axios from "axios";

function saveCart(cart) {
  axios.post("api/CartDrafts/",  {
    items: JSON.stringify(cart)
  });
}

export default {
  state: {
    cart: []
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
    },
    initializeCart(state, cartData) {
      state.cart = cartData;
    }
  },
  actions: {
    persistCart(context) {
      saveCart(context.state.cart);
    },
    loadSavedCart({commit}) {
      return axios.get("api/CartDrafts/").then(resp => {
        commit('initializeCart', resp.data);
      });
    }
  },
  getters: {
    cart: state => state.cart
  }
};
