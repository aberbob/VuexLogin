import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const jwt = require('jsonwebtoken');
import cartStoreModule from './modules/cart.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    status: '',
    token: window.$cookies.get('auth') || '',
    user: jwt.decode(window.$cookies.get('auth'))
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, user) {
      state.status = 'success'
      state.token = window.$cookies.get('auth')
      state.user = user
      state.name = user.fn + user.ln
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
  },
  actions: {
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        window.$cookies.remove('auth')
        resolve()
      })
    },
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: "api/auth/login", data: user, method: 'POST' })
          .then(resp => {
            console.log(resp.data.user)
            const user = resp.data.user
            commit('auth_success', user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            window.$cookies.remove('auth')
            reject(err)
          })
      })
    },
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user,
    name: state => state.name
  },
  modules: {
    cartStoreModule
  }
})

export default store