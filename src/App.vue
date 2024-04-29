<template>
  <div>
    <div class="my-container-992 container-xl shadow text-body-secondary pl-0">
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
//import PageLogo from './pages/PageLogo.vue'
import PageIndex from './pages/PageIndex.vue'
//import PageSettings from './pages/PageSettings.vue'

export default {
  components: {
    TheNavbar,
    PageLogin,
    PageIndex
  },
  computed: {
    currentUserId() {
      return this.$store.getters.currentUserId
    },
    currentPage() {
      return this.$store.getters.currentPage
    },
    projects() {
      return this.$store.getters.projects
    },
    myComponent() {
      //return 'PageLogin'
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
  height: calc(100vh - 51px); /* Точное число после настройки навбара */
}

.my-container-992 {
  max-width: 992px;
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

.form-control {
  border-color: #495057;
  /* border-color: rgba(0, 0, 0, 0) !important; */
}

textarea {
  font-size: 0.875rem !important;
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
