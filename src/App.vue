<template>
  <div id="app">
    <Navbar />
    <div class="container-fluid pl-0">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  async beforeMount() {
    try {
      this.$store.dispatch('getLogins')
    } catch (error) {}
  }
}
</script>

<style>
</style>
