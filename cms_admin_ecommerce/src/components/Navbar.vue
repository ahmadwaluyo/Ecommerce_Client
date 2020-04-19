<template>
  <nav class="navbar navbar-default fixed-top hoverable">
    <div class="container">
      <div class="navbar-header">
        <router-link class="navbar-brand logo" to="/dashboard"> <img src="../../public/camera-logo.png" alt="Logo" style="height: 4rem"> Focusbelantara</router-link>
      </div>
      <ul class="nav navbar-nav font-weight-bold">
        <li><router-link class="nav-item nav-link route" to="/dashboard/">Dashboard<span class="sr-only">(current)</span></router-link></li>
        <li><router-link class="nav-item nav-link route" to="/dashboard/products">All Product<span class="sr-only">(current)</span></router-link></li>
        <li><router-link class="nav-item nav-link route" to="/dashboard/add">Add New Product<span class="sr-only">(current)</span></router-link></li>
        <li><router-link class="nav-item nav-link route" to="/dashboard/customers">Customers<span class="sr-only">(current)</span></router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right logout">
        <li><a class="glyphicon glyphicon-log-out" @click="signOut"><span class="sr-only">(current)</span></a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    signOut: function () {
      this.$vToastify.prompt({
        body: 'Are you sure you want to Logout?',
        answers: { Yes: true, No: false }
      })
        .then(value => {
          if (value) {
            localStorage.clear()
            this.$router.push('/')
          }
        })
    }
  }
}
</script>

<style>
@import url(../assets/css/style.css);
a {
  cursor: pointer;
}
.route {
  margin-top: 10px;
}
.route:hover {
  background-color: #3b6978 !important;
}
.logout {
  margin-top: 10px;
  display: flex;
  background-color: #204051;
  border-radius: 100%;
}
.logout a {
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  height: 5rem;
  width: 5rem;
}
.logout:hover {
  background-color: #3b6978;
}
</style>
