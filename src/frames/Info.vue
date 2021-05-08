<template>
  <div class="col-9">
    <h4>{{ frameName }}</h4>
  </div>
</template>

<script>
export default {
  computed: {
    frameName() {
      return this.$store.getters.frameName
    }
  }
}
</script>
<style scoped>
</style>