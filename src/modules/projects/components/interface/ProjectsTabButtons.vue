<template>
  <div class="border p-2">
    <div v-if="userId" class="row">
      <div
        class="col-6 col-sm-4 pt-2 pb-2"
        v-for="tabButton in dataTabs"
        :key="'bt' + tabButton.type"
      >
        <div class="btn-group w-100" role="group">
          <BtnTabTitle
            class="w-75"
            @click="$store.commit('setViewTab', tabButton.viewTab)"
            :class="{
              active: tabButton.viewTab === viewTab
            }"
          >
            {{ tabButton.title }}
          </BtnTabTitle>
          <BtnAddTabForm
            class="d-flex justify-content-center align-items-center w-25"
            @click="$emit('create-form-item', { type: tabButton.type })"
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
  data() {
    return {
      dataTabs
    }
  },
  computed: {
    viewTab() {
      return this.$store.getters.viewTab
    },
    userId() {
      return this.$store.getters.userId
    }
    // currentProject() {
    //   return this.$store.getters.currentProject
    // },
  },
  methods: {
    createItem() {}
  }
}
</script>