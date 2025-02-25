<template>
  <div>
    <div
      class="my-container-992 container-xl shadow rounded text-body-secondary pl-0"
    >
      <TheNavbar />
      <div class="row border-top border-dark-subtle"></div>
      <transition name="fade" mode="out-in">
        <component :is="myComponent" />
      </transition>
    </div>
    <TheMessage />
  </div>
</template>

<script>
import { router } from './router'

import TheNavbar from './components/interface/TheNavbar.vue'
import TheMessage from './components/interface/TheMessage.vue'

import PageLogin from './pages/PageLogin.vue'
import PageUser from './pages/PageUser.vue'
import PagePrice from './pages/PagePrice.vue'
import PageProjects from './pages/PageProjects.vue'
import PageConfirm from './pages/PageConfirm.vue'
import PageRestorePassword from './pages/PageRestorePassword.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
    TheMessage,
    PageLogin,
    PageUser,
    PagePrice,
    PageProjects,
    PageConfirm,
    PageRestorePassword
  },
  computed: {
    userId() {
      return this.$store.getters.userId
    },
    // isLoggedIn() {
    //   return this.$store.getters.isLoggedIn
    // },
    loadingData() {
      return this.$store.getters.loadingData
    },
    viewPage() {
      return this.$store.getters.viewPage
    },
    myComponent() {
      return router(this.viewPage)
    },
    projectsLength() {
      return this.$store.getters.projectsLength
    }
  }
  // watch: {
  //   isLoggedIn(n) {
  //     if (n === null) {
  //       document.location.reload()
  //     }
  //   }
  // }
}
</script>

<style>
.btn-close:focus {
  box-shadow: none;
}

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
  height: calc(100vh - 52px); /* Точное число после настройки навбара */
}

.my-container-992 {
  max-width: 992px;
}

.table-striped > tbody > tr > * {
  color: rgba(222, 226, 230, 0.75) !important;
}

textarea {
  font-size: 0.875rem !important;
}

/*.form-control {
  color: rgba(222, 226, 230, 0.75);
}*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
