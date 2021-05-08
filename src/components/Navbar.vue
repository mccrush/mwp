<template>
  <div class="row border-bottom">
    <div class="col-12 col-sm-4 col-md-3 col-lg-2 col-xxl-1 border-end pt-2">
      <img
        src="/img/logo.png"
        width="30"
        height="30"
        class="d-inline-block align-top mt-1"
        alt="Logo MWP"
      />
      <span class="d-inline-block ms-2 pt-2"><strong>MWP</strong></span>
    </div>
    <div
      class="col-6 col-sm-2 col-md-2 col-xl-1 pt-2 pb-2 pe-0"
      v-for="btn in buttons"
      :key="'bt' + btn.frame"
    >
      <button
        class="btn w-100"
        @click="setFrameName(btn.frame)"
        :class="{
          'btn-light': btn.frame != frameName,
          'btn-dark': btn.frame === frameName
        }"
      >
        {{ btn.title }}
      </button>
    </div>
    <div class="col-2 d-flex justify-content-between">
      <div></div>
      <div class="pt-3">
        <Loading v-if="loading" />
      </div>
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
      buttons,
      filter: '',
      newProjectTitle: ''
    }
  },
  computed: {
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
    }
  }
}
</script>

<style scoped>
.dropdown-item {
  cursor: pointer;
}
</style>