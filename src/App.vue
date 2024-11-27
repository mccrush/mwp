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
import { router } from './router'
import TheNavbar from './components/interface/TheNavbar.vue'

import PageLogin from './pages/PageLogin.vue'
import PageUser from './pages/PageUser.vue'
import PagePrice from './pages/PagePrice.vue'
import PageDoc from './pages/PageDoc.vue'
import PageProjects from './pages/PageProjects.vue'
import PageConfirm from './pages/PageConfirm.vue'

export default {
  components: {
    TheNavbar,
    PageLogin,
    PageUser,
    PagePrice,
    PageDoc,
    PageProjects,
    PageConfirm
  },
  computed: {
    viewPage() {
      return this.$store.getters.viewPage
    },
    myComponent() {
      return router(this.viewPage)
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
