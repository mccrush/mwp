<template>
  <div class="row border-bottom border-black">
    <div
      class="col-3 col-lg-2 d-flex justify-content-between border-end border-dark-subtle pt-2 pb-2"
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
        <span class="cursor-def d-inline-block text-body-secondary ms-2 pt-2"
          ><strong>MWP</strong>
          <a
            href="https://github.com/mccrush/mwp"
            target="_blank"
            title="Go to GitHub"
            class="text-decoration-none"
          >
            <code class="text-body-secondary ms-2">
              <small>v{{ version }}</small>
            </code></a
          >
        </span>
      </div>
    </div>

    <div
      v-if="isLoggedIn"
      class="col-9 col-lg-10 d-flex justify-content-end align-items-center"
    >
      <BtnPageProjects
        v-if="viewPage !== 'PageProjects'"
        class="me-2"
        @click="$store.commit('setViewPage', 'PageProjects')"
      />
      <BtnPagePremium
        v-if="userData && !userData.premium"
        class="me-2"
        @click="$store.commit('setViewPage', 'PagePrice')"
      />
      <BtnPageDoc
        class="me-2"
        @click="$store.commit('setViewPage', 'PageDoc')"
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
          <li><a class="dropdown-item" href="#" @click="logOut">Выйти</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { version } from './../../../package.json'

import BtnPageProjects from './../buttons/BtnPageProjects.vue'
import BtnPagePremium from './../buttons/BtnPagePremium.vue'
import BtnPageDoc from './../buttons/BtnPageDoc.vue'
import BtnPageUser from './../buttons/BtnPageUser.vue'

export default {
  components: {
    BtnPageProjects,
    BtnPagePremium,
    BtnPageDoc,
    BtnPageUser
  },
  data() {
    return {
      version
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    userEmail() {
      return this.$store.getters.userEmail
    },
    userData() {
      return this.$store.getters.userData
    },
    currentUserEmailFormated() {
      if (this.userEmail) {
        return this.userEmail.split('@')[0].substring(0, 16)
      }
      return ''
    },
    viewPage() {
      return this.$store.getters.viewPage
    },
    loading() {
      return this.$store.getters.loading
    },
    loadingRT() {
      return this.$store.getters.loadingRT
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut')
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