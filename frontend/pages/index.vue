<template>
  <div v-if="!errorStatus" class="pt-4">
    <h3 class="text-center">Hello world!</h3>
    <List />
  </div>
  <Error v-else />
</template>

<script>
export default {
  computed: {
    errorStatus() {
      return this.$store.getters["ERROR_STATUS"];
    },
  },
};
</script>