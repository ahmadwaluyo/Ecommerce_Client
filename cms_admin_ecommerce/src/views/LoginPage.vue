<template>
  <div class="login-page">
    <Loading v-show="isLoading" />
    <form @submit.prevent="Login">
      <div class="d-flex flex-column">
        <img src="../../public/camera-logo.png" style="width: 50px" alt="Logo">
      </div>
      <h2 class="mb-3">Admin Login</h2>
    <div class="form-group mt-5">
      <label for="exampleInputEmail1">Email address</label>
      <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="admin@gmail.com">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="123123">
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
  </div>
</template>

<script>
import Loading from '../components/Loading'
export default {
  name: 'LoginPage',
  components: {
    Loading
  },
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    Login: function () {
      this.$store.commit('SET_ISLOADING', true)
      this.$store.dispatch('Login', { email: this.email, password: this.password })
        .then(({ data }) => {
          this.$vToastify.success('Successfully Login', 'Hello, Admin!')
          localStorage.setItem('token', data.token)
          this.$router.push('/dashboard')
        })
        .catch(err => {
          this.$vToastify.error(err.response.data, 'Login Error')
        })
        .finally(_ => {
          this.$store.commit('SET_ISLOADING', false)
        })
    }
  },
  computed: {
    isLoading: function () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style>
.login-page {
  background: linear-gradient(180deg, rgb(25, 218, 252) 0%, rgba(43,43,43,1) 100%);
  background-size: cover;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
</style>
