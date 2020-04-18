<template>
  <tr>
    <td>{{ customer.username }}</td>
    <td>{{ customer.email }}</td>
    <td>{{ customer.createdAt }}</td>
    <td><a @click="redirToDeleteUser(customer.id)" class="glyphicon glyphicon-remove"></a></td>
  </tr>
</template>

<script>
export default {
  name: 'CustomerUser',
  props: ['customer'],
  methods: {
    redirToDeleteUser: function (id) {
      this.$store.dispatch('deleteUser', id)
        .then(_ => {
          this.$vToastify.success('Successfully deleted user')
          this.$store.dispatch('fetchUsers')
        })
        .catch(err => {
          this.$vToastify.error(err.response.data, 'Oops')
        })
    }
  }
}
</script>

<style>

</style>
