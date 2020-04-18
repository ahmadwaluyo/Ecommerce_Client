<template>
  <div class="card col-12 col-lg-6 mb-3 mr-auto shadow-sm d-flex table-bordered box-product" style="max-width: 540px;max-height: 540px;">
    <div class="row d-flex flex-row-reverse cursor-pointer set-cursor">
      <div @click="redirToEditPage(product.id)"><i class="fa fa-pen-square edit cursor"></i></div>
      <div @click.prevent="deleteProduct(product.id)"><i class="fa fa-trash delete cursor"></i></div>
    </div>
      <div class="row no-gutters d-flex align-items-center">
        <div class="col-md-4">
          <img :src="`${product.image_url}`" class="card-img shoes-img mx-auto" alt="image">
        </div>
        <div class="col-md-8">
          <div class="card-body d-flex flex-column justify-content-center">
            <h4 class="card-title">{{ product.name }}</h4>
            <p class="card-text">Price: {{ product.price }}</p>
            <p class="card-text">Category: {{ product.category }}
            <div class="d-flex">
              <p class="card-text mr-auto">Stock: {{ product.stock }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  methods: {
    redirToEditPage: function (id) {
      this.$router.push(`/dashboard/edit/${id}`)
    },
    deleteProduct: function (id) {
      this.$store.dispatch('deleteProduct', id)
        .then(({ data }) => {
          this.$vToastify.success(`Successfully deleted ${data.name}`)
          this.$store.dispatch('fetchProducts')
        })
        .catch(err => {
          this.$vToastify.error(err.response.data, 'Oops')
        })
    }
  }
}
</script>

<style>
.box-product {
  max-width: 540px;
  height: 200px;
  margin: 10px;
}
.cursor {
  cursor: pointer;
}
.redir {
  cursor: pointer;
  color: blue;
}
.set-cursor {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.edit {
  margin: 8px 0px 8px 8px;
}
.delete {
  margin: 8px
}
.fa-mars {
  color: rgb(62, 83, 179);
}
.fa-venus {
  color: rgb(233, 111, 182)
}
@media (min-width: 763px) {
  .shoes-img {
    object-fit: cover;
    width: 10rem;
    height: 10rem;
  }
}
</style>
