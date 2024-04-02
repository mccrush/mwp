<template>
  <div class="row border-bottom">
    <div
      class="col-12 col-sm-4 col-md-2 d-flex justify-content-between border-end pt-2 pb-2"
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
          ><strong>MWP</strong
          ><code class="text-muted ms-2"
            ><small>v{{ version }}</small></code
          ></span
        >
      </div>
      <div class="pt-2">
        <Loading v-if="loading" />
      </div>
    </div>

    <div class="col-12 col-sm-8 col-md-10">
      <div class="row">
        <div
          class="col-6 col-sm-4 pt-2 pb-2"
          v-for="btn in buttons"
          :key="'bt' + btn.frame"
        >
          <div class="btn-group w-100" role="group">
            <BtnFrameTitle
              class="w-75"
              @click="setFrameName(btn)"
              :class="{
                'btn-light': btn.frame != frameName,
                'btn-dark': btn.frame === frameName
              }"
              :disabled="!currentUserId"
            >
              {{ btn.title }}
            </BtnFrameTitle>
            <BtnAdd
              class="d-flex justify-content-center align-items-center w-25"
              :class="{
                'btn-light': btn.frame != frameName,
                'btn-dark': btn.frame === frameName
              }"
              @click="createItem(btn.type)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { version } from './../../../package.json'
import { modelsFactory } from './../../helpers/modelsFactory'
import buttons from './../../data/buttons'

import Loading from './../Loading.vue'
import BtnFrameTitle from './../buttons/BtnFrameTitle.vue'
import BtnAdd from './../buttons/BtnAdd.vue'

export default {
  components: {
    Loading,
    BtnFrameTitle,
    BtnAdd
  },
  data() {
    return {
      version,
      buttons
    }
  },
  computed: {
    currentUserId() {
      return this.$store.getters.currentUserId
    },
    currentProject() {
      return this.$store.getters.currentProject
    },

    frameName() {
      return this.$store.getters.frameName
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    setFrameName(btn) {
      this.$store.commit('setFrameName', btn.frame)
      this.$store.commit('setFrameType', btn.type)
    },
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
      this.$store.commit('setCurrentProject', { currentProject })
    }
  }
}
</script>