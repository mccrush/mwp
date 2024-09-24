<template>
  <div class="row border-bottom border-black">
    <div
      class="col-12 col-sm-4 col-md-2 d-flex justify-content-between border-end border-dark-subtle pt-2 pb-2"
    >
      <div class="">
        <img
          src="/img/logo.png"
          width="30"
          height="30"
          class="logo-image d-inline-block align-top mt-1"
          :class="{ rotate: loadingRT || loading }"
          alt="Logo MWP"
          title="Manager of Web Projects"
        />
        <span
          class="cursor-def d-inline-block text-body-secondary ms-2 pt-2"
          title="Manager of Web Projects"
          ><strong>MWP</strong
          ><code class="text-body-secondary ms-2"
            ><small>v{{ version }}</small></code
          ></span
        >
      </div>
    </div>

    <div
      v-if="userApp"
      class="col-12 col-sm-8 col-md-10 d-flex justify-content-end align-items-center"
    >
      <BtnPageProjects
        class="me-2"
        @click="$store.commit('setViewPage', 'PageProjects')"
      />
      <BtnPagePremium
        class="me-2"
        :class="{ 'text-body-secondary': userApp.premium }"
        @click="$store.commit('setViewPage', 'PagePrice')"
      />

      <div class="dropdown">
        <BtnPageUser
          class="dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ currentUserEmailFormated }}
        </BtnPageUser>
        <ul class="dropdown-menu dropdown-menu-end">
          <li @click="$store.commit('setViewPage', 'PageUser')">
            <a class="dropdown-item">Настройки</a>
          </li>
          <li><a class="dropdown-item" href="#">Выйти</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { version } from './../../../package.json'
import { modelsFactory } from './../../helpers/modelsFactory'

import BtnPageProjects from './../buttons/BtnPageProjects.vue'
import BtnPagePremium from './../buttons/BtnPagePremium.vue'
import BtnPageUser from './../buttons/BtnPageUser.vue'

export default {
  components: {
    BtnPageProjects,
    BtnPagePremium,
    BtnPageUser
  },
  data() {
    return {
      version
    }
  },
  computed: {
    userApp() {
      return this.$store.getters.userApp
    },
    currentUserId() {
      return this.$store.getters.currentUserId
    },
    currentUserEmail() {
      return this.$store.getters.currentUserEmail
    },
    currentUserEmailFormated() {
      return this.currentUserEmail.split('@')[0].substring(0, 16)
    },
    currentProject() {
      return this.$store.getters.currentProject
    },
    loading() {
      return this.$store.getters.loading
    },
    loadingRT() {
      return this.$store.getters.loadingRT
    }
  },
  methods: {
    createItem(type) {
      let item = modelsFactory({ type })
      let currentProject = this.currentProject
      if (!currentProject[type]) {
        currentProject[type] = []
      }
      currentProject[type].push(item)

      this.$store.dispatch('updateItemRT', {
        item: currentProject,
        currentUserId: this.currentUserId
      })
    }
  }
}
</script>

<style scoped>
.rotate {
  animation: rotation 2s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>