<template>
  <div class="container">
    <div class="row">
      <div class="col-10 offset-1">
        <div class="font-weight-bolder">
          {{ title }}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-10 offset-1">
        <LazyListItem
          v-for="(product, i) in products"
          :key="i"
          :data="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  fetch() {
    return this.$store.dispatch("PRODUCT_LIST");
  },
  computed: {
    title() {
      return this.$store.getters["CATEGORY_TITLE"];
    },
    products() {
      return this.$store.getters["PRODUCTS"];
    },
  },
};
</script>

<style>
</style>