<template>
  <div>
    <input
      type="text"
      class="form-control form-control-sm"
      placeholder="Название проекта"
      v-model.trim="projectName"
      @keyup.enter="addProject"
    />
    <BtnAddProject class="mt-1" @click="addProject" />
  </div>
</template>

<script>
import { modelsFactory } from './../../helpers/modelsFactory'

import BtnAddProject from './../buttons/BtnAddProject.vue'

export default {
  components: {
    BtnAddProject
  },
  data() {
    return {
      projectName: ''
    }
  },
  computed: {
    currentUserId() {
      return this.$store.getters.currentUserId
    }
  },
  methods: {
    async addProject() {
      if (this.projectName) {
        let project = modelsFactory({ type: 'projects' })
        project.title = this.projectName

        await this.$store.dispatch('addItemRT', {
          item: project,
          currentUserId: this.currentUserId
        })
        this.projectName = ''
      }
    }
  }
}
</script>