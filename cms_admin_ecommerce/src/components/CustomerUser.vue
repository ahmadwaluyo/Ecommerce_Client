<template>
  <tr>
    <td>{{ customer.username }}</td>
    <td>{{ customer.email }}</td>
    <td>{{ customer.createdAt }}</td>
  </tr>
</template>

<script>
export default {
  name: 'CustomerUser',
  props: ['customer']
}
</script>

<style>

</style>
