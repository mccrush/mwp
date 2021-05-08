<template>
  <div>
    <div class="container-fluid pl-0">
      <Navbar />
      <transition name="fade" mode="out-in">
        <component :is="myComponent" />
      </transition>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import { auth } from '@/firebase.js'
import Navbar from '@/components/Navbar'
import Login from '@/views/Login'
import Index from '@/views/Index'

export default {
  components: {
    Navbar,
    Login,
    Index
  },
  data() {
    return {
      myComponent: localStorage.getItem('mwp-page') || 'Login'
    }
  },
  beforeMount() {
    if (auth.currentUser) {
      localStorage.setItem('mwp-page', 'Index')
    } else {
      localStorage.setItem('mwp-page', 'Login')
    }
  }
  // methods: {
  //   getComponent(comp) {
  //     this.myComponent = comp
  //   }
  // }
}
</script>

<style>
.opacity-06 {
  opacity: 0.6;
}

.btn:focus,
.btn-check:focus + .btn-outline-dark,
.form-control:focus,
.form-select:focus,
.accordion-button:focus,
.navbar-toggler:focus {
  outline: 0 !important;
  /* border-color: #6c757d !important; */
  box-shadow: none !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
