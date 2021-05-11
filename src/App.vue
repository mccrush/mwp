<template>
  <div>
    <div class="container-xl shadow pl-0">
      <Navbar />
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
import Logo from '@/views/Logo'
import Index from '@/views/Index'

export default {
  components: {
    Navbar,
    Login,
    Logo,
    Index
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    myComponent() {
      return this.user ? 'Index' : this.user === false ? 'Login' : 'Logo'
    }
  }
}
</script>

<style>
.opacity-06 {
  opacity: 0.6;
}

.cursor-def {
  cursor: default;
}

.my-vh100 {
  height: calc(100vh - 55px); /* Точное число после настройки навбара */
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
