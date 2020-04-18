<template>
  <div class="main">
    <section id="main">
        <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="list-group">
                    <a href="index.html" class="list-group-item active bg-main-color">
                        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
                    </a>
                    <a></a>
                    <router-link to="/dashboard/products" class="list-group-item"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Products <span class="sr-only">(current)</span><span class="badge">33</span></router-link>
                    <router-link to="/dashboard/customers" class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Customers <span class="sr-only">(current)</span><span class="badge">203</span></router-link>
                </div>
            </div>
            <div class="col-md-9">
                <div class="panel panel-default">
                <div class="panel-heading bg-main-color">Website Overview</div>
                    <div class="panel-body text-center">
                    <div class="row">
                        <div class="col-md-3 dash-box"><div class="well">
                        <span class="glyphicon glyphicon-user" aria-hidden="true"></span> <span class="badge">203</span> <h4>Customers</h4></div>
                        </div>
                        <div class="col-md-3 dash-box"><div class="well">
                        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> <span class="badge">33</span> <h4>Products</h4></div>
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
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Joined</th>
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
import CustomerUser from './CustomerUser'
export default {
  name: 'Dashboard',
  components: {
    CustomerUser
  },
  computed: {
    customers: function () {
      return this.$store.state.customers
    }
  },
  created () {
    this.$store.dispatch('fetchUsers')
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
  @import url(../assets/css/style.css);
</style>
