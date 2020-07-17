<template>
  <div id="app">
    <Navbar />
    <Home />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Home from '@/views/Home'

export default {
  components: {
    Navbar,
    Home
  }
}
</script>

<style>
</style>
