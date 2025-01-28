<template>
  <div>
    <input
      type="text"
      id="createNewProject"
      class="form-control form-control-sm"
      placeholder="Название проекта"
      minlength="1"
      maxlength="32"
      v-model.trim="projectName"
      @keyup.enter="createProject"
    />
    <BtnAddProject class="mt-1" @click="createProject" />
  </div>
</template>

<script>
import { createModelItem } from '../../helpers/createModelItem'

import BtnAddProject from './../buttons/BtnAddProject.vue'

export default {
  name: 'FormCreateProject',
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
        let project = createModelItem('projects')
        project.title = this.projectName
        this.$emit('add-project', { project })
        this.projectName = ''
      }
    }
  }
}
</script>