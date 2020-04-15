import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// const baseURL = 'https://ecommercehacktiv8.herokuapp.com'
const baseURL = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    products: [],
    isLoading: false
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_ISLOADING (state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
    signIn (context, payload) {
      return axios({
        method: 'post',
        url: `${baseURL}/login`,
        data: {
          email: payload.email,
          password: payload.password
        }
      })
    },
    fetchProducts (context, payload) {
      context.commit('SET_ISLOADING', true)
      axios({
        method: 'get',
        url: `${baseURL}/products`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data)
        })
        .catch(err => {
          this.$vToastify.error(err.response.data, 'Error Fetching Data')
        })
        .finally(_ => {
          context.commit('SET_ISLOADING', false)
        })
    },
    addProduct (context, payload) {
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
    getProductById (context, id) {
      context.commit('SET_ISLOADING', true)
      return axios({
        method: 'get',
        url: `${baseURL}/products/${id}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
    },
    updateProduct (context, payload) {
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
    deleteProduct (context, id) {
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
