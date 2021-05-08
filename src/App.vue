<template>
  <div>
    <Navbar />
    <div class="container-fluid pl-0">
      <transition name="fade" mode="out-in">
        <component :is="myComponent" />
      </transition>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar'
import Login from '@/views/Login'

export default {
  components: {
    Navbar,
    Login
  },
  data() {
    return {
      myComponent: 'Login' // localStorage.getItem('info-page') || 'Login'
    }
  },
  methods: {
    getComponent(comp) {
      this.myComponent = comp
    }
  }
}
</script>

<style>
</style>
