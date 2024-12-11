<template>
  <div class="row border-bottom border-black">
    <div
      class="col-3 col-lg-2 d-flex justify-content-between border-end border-dark-subtle pt-2 pb-2"
    >
      <div>
        <transition mode="out-in">
          <TheSpinner v-if="loading" />
          <img
            v-else
            src="/img/logo.png"
            width="30"
            height="30"
            class="logo-image d-inline-block align-top mt-1"
            :class="{ rotate: loading }"
            alt="Logo MWP"
            title="Manager of Web Projects"
          />
        </transition>

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

    <div class="col-9 col-lg-10 d-flex justify-content-end align-items-center">
      <BtnPageProjects
        v-if="isLoggedIn && viewPage !== 'PageProjects'"
        class="me-2"
        @click="$store.commit('setViewPage', 'PageProjects')"
      />
      <BtnPagePremium
        v-if="isLoggedIn && userMetaData && !userMetaData.premium"
        class="me-2"
        @click="$store.commit('setViewPage', 'PagePrice')"
      />
      <BtnPageDoc
        class="me-2"
        @click="$store.commit('setViewPage', 'PageDoc')"
      />

      <BtnPageLogin
        v-if="!isLoggedIn"
        class="me-2"
        @click="$store.commit('setViewPage', 'PageLogin')"
      />

      <div v-if="isLoggedIn" class="dropdown">
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

import TheSpinner from './TheSpinner.vue'
import BtnPageProjects from './../buttons/BtnPageProjects.vue'
import BtnPagePremium from './../buttons/BtnPagePremium.vue'
import BtnPageDoc from './../buttons/BtnPageDoc.vue'
import BtnPageUser from './../buttons/BtnPageUser.vue'
import BtnPageLogin from './../buttons/BtnPageLogin.vue'

export default {
  components: {
    TheSpinner,
    BtnPageProjects,
    BtnPagePremium,
    BtnPageDoc,
    BtnPageUser,
    BtnPageLogin
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
    userMetaData() {
      return this.$store.getters.userMetaData
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