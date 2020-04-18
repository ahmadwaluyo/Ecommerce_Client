<template>
  <div class="main">
    <Loading v-if="isLoading"/>
    <section id="main">
        <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="list-group">
                    <a href="index.html" class="list-group-item active bg-main-color">
                        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
                    </a>
                    <a></a>
                    <router-link to="/dashboard" class="list-group-item"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Home <span class="sr-only">(current)</span></router-link>
                    <router-link to="/dashboard/products" class="list-group-item"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Products <span class="sr-only">(current)</span><span class="badge">{{ products.length }}</span></router-link>
                </div>
            </div>
            <div class="col-md-9">
                <div class="panel panel-default">
                <div class="panel-heading bg-main-color">Latest Users</div>
                    <div class="panel-body">
                    <table class="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th class="act">Name</th>
                                <th class="act">Email</th>
                                <th class="act">Joined</th>
                                <th class="act">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <CustomerUser v-for="customer in customers" :key="customer.id" :customer="customer"/>
                        </tbody>
                        </table>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import Loading from './Loading'
import CustomerUser from './CustomerUser'
export default {
  name: 'Customers',
  components: {
    CustomerUser,
    Loading
  },
  computed: {
    customers: function () {
      return this.$store.state.customers
    },
    products: function () {
      return this.$store.state.products
    },
    isLoading: function () {
      return this.$store.state.isLoading
    }
  },
  created () {
    this.$store.dispatch('fetchUsers')
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>
  .table, .act {
    text-align: center;
  }
</style>
