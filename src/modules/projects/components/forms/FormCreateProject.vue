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
import { factoryModels } from './../../../../factories/factoryModels'

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
    userId() {
      return this.$store.getters.userId
    }
  },
  methods: {
    async addProject() {
      if (this.projectName) {
        let project = factoryModels({ type: 'projects' })
        project.title = this.projectName

        await this.$store.dispatch('addItemRT', {
          item: project,
          userId: this.userId
        })
        this.projectName = ''
      }
    }
  }
}
</script>