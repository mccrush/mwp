<template>
  <div class="row border-bottom">
    <div
      class="col-12 col-sm-4 col-md-3 col-lg-2 col-xxl-2 d-flex justify-content-between border-end pt-2"
    >
      <div class="">
        <img
          src="/img/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top mt-1"
          alt="Logo MWP"
          title="Manager of Web Projects"
        />
        <span
          class="cursor-def d-inline-block ms-2 pt-2"
          title="Manager of Web Projects"
          ><strong>MWP</strong></span
        >
      </div>
      <div class="pt-2">
        <Loading v-if="loading" />
      </div>
    </div>
    <div
      class="col-6 col-sm-2 col-md-2 col-xl-2 pt-2 pb-2 pe-0"
      v-for="btn in buttons"
      :key="'bt' + btn.frame"
    >
      <button
        class="btn shadow-sm w-100"
        @click="setFrameName(btn.frame)"
        :class="{
          'btn-light': btn.frame != frameName,
          'btn-dark': btn.frame === frameName
        }"
        :disabled="!user"
      >
        {{ btn.title }}
      </button>
    </div>
    <div class="col-6 col-sm-2 col-md-2 col-xl-2 pt-2 pb-2 pe-0">
      <button
        v-if="frameName === 'Pass'"
        class="btn btn-success shadow-sm w-100"
        @click="createPass"
      >
        <small>Add pass</small>
      </button>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import buttons from '@/data/buttons'
//import { Collapse } from 'bootstrap'

export default {
  components: {
    Loading
  },
  data() {
    return {
      buttons
    }
  },
  computed: {
    user() {
      return this.$store.getters.user
    },
    frameName() {
      return this.$store.getters.frameName
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    setFrameName(frame) {
      this.$store.commit('setFrameName', frame)
    },
    createPass() {
      this.$store.commit('addPass')
      this.$store.dispatch('addPass')
    }
  }
}
</script>

<style scoped>
.dropdown-item {
  cursor: pointer;
}
</style>