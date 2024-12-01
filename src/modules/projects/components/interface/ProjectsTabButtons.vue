<template>
  <div class="p-2">
    <div v-if="userId" class="row">
      <div
        class="col-6 col-sm-4 pt-2 pb-2"
        v-for="tabButton in dataTabs"
        :key="'bt' + tabButton.type"
      >
        <div class="btn-group w-100" role="group">
          <BtnTabTitle
            class="w-75"
            @click="$store.commit('setViewTab', tabButton.type)"
            :class="{
              active: tabButton.type === viewTab
            }"
          >
            {{ tabButton.title }}
          </BtnTabTitle>
          <BtnAddTabForm
            class="d-flex justify-content-center align-items-center w-25"
            @click="$emit('create-form-item', { type: tabButton.type })"
            v-if="tabButton.type === viewTab && canCreateForm"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dataTabs } from './../../data/dataTabs'

import BtnTabTitle from './../buttons/BtnTabTitle.vue'
import BtnAddTabForm from './../buttons/BtnAddTabForm.vue'

export default {
  components: {
    BtnTabTitle,
    BtnAddTabForm
  },
  emits: ['create-form-item'],
  props: { project: Object },
  data() {
    return {
      dataTabs
    }
  },
  computed: {
    userMetaData() {
      return this.$store.getters.userMetaData
    },
    viewTab() {
      return this.$store.getters.viewTab
    },
    userId() {
      return this.$store.getters.userId
    },
    canCreateForm() {
      if (this.project[this.viewTab]?.length) {
        if (this.userMetaData.premium) {
          if (this.project[this.viewTab].length < 64) return true
        } else {
          if (this.project[this.viewTab].length < 4) return true
        }
      }
      return true
    }
  }
}
</script>