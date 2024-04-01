<template>
  <div>
    <div class="container-xl shadow pl-0">
      <TheNavbar />
      <transition name="fade" mode="out-in">
        <component :is="myComponent" />
      </transition>
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/interface/TheNavbar.vue'
import PageLogin from './pages/PageLogin.vue'
import PageLogo from './pages/PageLogo.vue'
import PageIndex from './pages/PageIndex.vue'

export default {
  components: {
    TheNavbar,
    PageLogin,
    PageLogo,
    PageIndex
  },
  computed: {
    currentUserId() {
      return this.$store.getters.currentUserId
    },
    projects() {
      return this.$store.getters.projects
    },
    myComponent() {
      if (this.currentUserId) {
        return 'PageIndex'
      } else {
        return 'PageLogin'
      }
    }
  }
}
</script>

<style>
.opacity-06 {
  opacity: 0.6;
}

.cursor-pointer,
.dropdown-item {
  cursor: pointer;
}

.cursor-default {
  cursor: default;
}

.my-vh100 {
  height: calc(100vh - 55px); /* Точное число после настройки навбара */
}

.btn:focus,
.btn-close:focus,
.btn-check:focus + .btn-outline-dark,
.form-control:focus,
.form-select:focus,
.form-select:active,
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
