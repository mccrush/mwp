<template>
  <div>
    <input
      type="text"
      class="form-control form-control-sm"
      placeholder="Название проекта"
      v-model.trim="projectName"
      @keyup.enter="createProject"
    />
    <BtnAddProject class="mt-1" @click="createProject" />
  </div>
</template>

<script>
import { factoryModels } from './../../../../factories/factoryModels'

import BtnAddProject from './../buttons/BtnAddProject.vue'

export default {
  components: {
    BtnAddProject
  },
  emits: ['add-project'],
  data() {
    return {
      projectName: ''
    }
  },
  computed: {},
  methods: {
    createProject() {
      if (this.projectName) {
        let project = factoryModels({ type: 'projects' })
        project.title = this.projectName
        this.$emit('add-project', { project })
        this.projectName = ''
      }
    }
  }
}
</script>