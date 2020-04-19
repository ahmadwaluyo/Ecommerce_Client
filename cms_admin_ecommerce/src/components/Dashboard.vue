<template>
  <div class="main">
    <Loading v-if="isLoading" />
    <section id="main">
        <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="list-group">
                  <router-link to="/dashboard" class="list-group-item bg-main-color active"><span class="glyphicon glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard <span class="sr-only">(current)</span></router-link>
                    <router-link to="/dashboard/products" class="list-group-item"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Products <span class="sr-only">(current)</span><span class="badge">{{ products.length }}</span></router-link>
                    <router-link to="/dashboard/customers" class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Customers <span class="sr-only">(current)</span><span class="badge">{{ customers.length }}</span></router-link>
                </div>
            </div>
            <div class="col-md-9">
                <div class="panel panel-default">
                <div class="panel-heading bg-main-color">Website Overview</div>
                    <div class="panel-body text-center">
                    <div class="row">
                        <div class="col-md-3 dash-box"><div class="well">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span> <span class="badge">{{ customers.length }}</span> <h4>Customers</h4></div>
                        </div>
                        <div class="col-md-3 dash-box"><div class="well">
                        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> <span class="badge">{{ products.length }}</span> <h4>Products</h4></div>
                        </div>
                        <div class="col-md-3 dash-box"><div class="well">
                        <span class="glyphicon glyphicon-signal" aria-hidden="true"></span> <span class="badge">12,334</span> <h4>Visitors</h4></div>
                        </div>
                    </div>
                    </div>
                </div>
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
  name: 'Dashboard',
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
  .main {
      padding: 0;
      margin-top: 20px;
      width: 100%;
      height: 100%;
    }
  .table, .act {
      text-align: center;
    }
  @import url(../assets/css/style.css);
</style>
