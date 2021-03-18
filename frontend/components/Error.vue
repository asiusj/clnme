<template v-if="data.status === true">
  <div class="ml-4 p-4">
    <h5>Some error:</h5>
    <div><b>Error name:</b> {{ data.error.name }}</div>
    <div><b>Was cached at: </b>{{ data.wasCachedAt }}</div>
    <div><b>Error message:</b> {{ data.error.message }}</div>
    <div><b>Stack:</b> {{ data.error.stack }}</div>
  </div>
</template>

<script>
export default {
  name: "Error",
  computed: {
    data() {
      return this.$store.getters["SERVER_ERROR"];
    },
  },
};
</script>

<style>
</style>