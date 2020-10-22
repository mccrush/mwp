<template>
  <div id="app">
    <Navbar />
    <div class="container-fluid pl-0">
      <router-view />
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar,
  },
  async beforeMount() {
    try {
      this.$store.dispatch('getProjects')
    } catch (error) {}
  },
}
</script>

<style>
</style>
