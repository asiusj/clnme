<template>
  <div class="border-top">
    <div class="row">
      <div class="col-4 pl-2">
        {{ data.title }}
      </div>
      <div class="col-4">Price: {{ data.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
</style>