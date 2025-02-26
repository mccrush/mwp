<template>
  <div class="row border-bottom border-black">
    <div
      class="col-sm-3 col-lg-2 d-none d-sm-flex justify-content-between border-end border-dark-subtle pt-2 pb-2"
    >
      <div>
        <transition mode="out-in">
          <TheSpinner v-if="loading || loadingData" />
          <img
            v-else
            src="/img/logo.png"
            width="30"
            height="30"
            class="logo-image d-inline-block align-top mt-1"
            alt="Logo MWP"
            title="Manager of Web Projects"
          />
        </transition>

        <span
          class="cursor-def d-none d-sm-inline-block text-body-secondary ms-2 pt-2"
          ><strong>MWP</strong>
          <span class="d-none d-md-inline-block">
            <code class="text-body-secondary ms-2">
              <small>v{{ version }}</small>
            </code></span
          >
        </span>
      </div>
    </div>

    <div
      class="mw-h-50 col-12 col-sm-9 col-lg-10 d-flex justify-content-between align-items-center"
    >
      <div>
        <BtnShowOffcanvas
          v-if="isLoggedIn && viewPage === 'PageProjects'"
          class="d-sm-none"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasUserForm"
          aria-controls="offcanvasUserForm"
        />
      </div>
      <div class="d-flex">
        <BtnPageProjects
          v-if="isLoggedIn && viewPage !== 'PageProjects'"
          class="me-2"
          @click="$store.commit('setViewPage', 'PageProjects')"
        />
        <BtnPagePremium
          v-if="
            isLoggedIn &&
            userMetaData &&
            !userMetaData.dateEndPro &&
            viewPage !== 'PagePrice'
          "
          class="me-2"
          @click="$store.commit('setViewPage', 'PagePrice')"
        />
        <BtnPageDoc
          v-if="!isLoggedIn"
          class="me-2"
          href="https://doc.mwpapp.ru/"
          target="_blank"
          title="Открыть руководство"
        />

        <!-- <BtnPageLogin
          v-if="!isLoggedIn && viewPage !== 'PageLogin'"
          class="me-2"
          @click="$store.commit('setViewPage', 'PageLogin')"
        /> -->

        <div v-if="isLoggedIn" class="dropdown">
          <BtnPageUser data-bs-toggle="dropdown" aria-expanded="false" />

          <div class="dropdown-menu dropdown-menu-end p-2">
            <a
              class="btn btn-dark btn-sm text-body-secondary w-100"
              href="https://doc.mwpapp.ru/"
              target="_blank"
              >Руководство</a
            >
            <a
              class="btn btn-dark btn-sm text-body-secondary w-100 mt-2"
              @click="$store.commit('setViewPage', 'PageUser')"
              >Настройки</a
            >
            <div class="text-center small mt-2 mb-1">
              <code class="text-primary-emphasis">
                {{ currentUserEmailFormated }}</code
              >
            </div>

            <a
              class="btn btn-dark btn-sm text-body-secondary w-100"
              href="#"
              @click="logOut"
              >Выйти</a
            >
          </div>
        </div>
      </div>
    </div>
    <TheOffcanvas />
  </div>
</template>

<script>
import { version } from './../../../package.json'

import TheSpinner from './TheSpinner.vue'
import BtnPageProjects from './../buttons/BtnPageProjects.vue'
import BtnPagePremium from './../buttons/BtnPagePremium.vue'
import BtnPageDoc from './../buttons/BtnPageDoc.vue'
import BtnPageUser from './../buttons/BtnPageUser.vue'
//import BtnPageLogin from './../buttons/BtnPageLogin.vue'
import BtnShowOffcanvas from './../buttons/BtnShowOffcanvas.vue'

import TheOffcanvas from './../interface/TheOffcanvas.vue'

export default {
  name: 'TheNavbar',
  components: {
    TheSpinner,
    BtnPageProjects,
    BtnPagePremium,
    BtnPageDoc,
    BtnPageUser,
    BtnShowOffcanvas,
    TheOffcanvas
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
    },
    loadingData() {
      return this.$store.getters.loadingData
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
.mw-h-50 {
  height: 50px;
}
</style>