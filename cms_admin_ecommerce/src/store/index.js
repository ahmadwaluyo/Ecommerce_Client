import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const baseURL = 'https://ecommercehacktiv8.herokuapp.com'
// const baseURL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    products: [],
    customers: [],
    isLoading: false
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_USERS (state, payload) {
      state.customers = payload
    },
    SET_ISLOADING (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    Login ({ commit }, payload) {
      commit('SET_ISLOADING', true)
      return axios({
        method: 'post',
        url: `${baseURL}/login/admin`,
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchUsers (context, payload) {
      axios({
        method: 'get',
        url: `${baseURL}/`
      })
        .then(({ data }) => {
          context.commit('SET_USERS', data)
        })
        .catch(err => {
          this.$vToastify.error(err.response.data, 'Error Fetching Data')
        })
    },
    fetchProducts ({ commit }, payload) {
      commit('SET_ISLOADING', true)
      axios({
        method: 'get',
        url: `${baseURL}/products`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          this.$vToastify.error(err.response.data, 'Error Fetching Data')
        })
        .finally(_ => {
          commit('SET_ISLOADING', false)
        })
    },
    addProduct ({ commit }, payload) {
      commit('SET_ISLOADING', true)
      return axios({
        method: 'post',
        url: `${baseURL}/products`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        }
      })
    },
    getProductById ({ commit }, id) {
      commit('SET_ISLOADING', true)
      return axios({
        method: 'get',
        url: `${baseURL}/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    updateProduct ({ commit }, payload) {
      commit('SET_ISLOADING', true)
      return axios({
        method: 'put',
        url: `${baseURL}/products/${payload.id}`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          name: payload.name,
          image_url: payload.image_url,
          price: payload.price,
          stock: payload.stock,
          category: payload.category
        }
      })
    },
    deleteUser ({ commit }, id) {
      commit('SET_ISLOADING', true)
      return axios({
        method: 'delete',
        url: `${baseURL}/${id}`
      })
    },
    deleteProduct ({ commit }, id) {
      commit('SET_ISLOADING', true)
      return axios({
        method: 'delete',
        url: `${baseURL}/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    }
  }
})
