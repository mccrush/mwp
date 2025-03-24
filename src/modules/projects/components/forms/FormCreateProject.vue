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
    <BtnAddProject
      class="mt-1"
      :class="{ disabled: !projectName }"
      @click="createProject"
    />
  </div>
</template>

<script>
import { factory_projects } from './../../factories/factory_projects'

import BtnAddProject from './../buttons/BtnAddProject.vue'

export default {
  name: 'FormCreateProject',
  components: {
    BtnAddProject
  },
  emits: ['add-project'],
  props: {
    nextProjectPosition: Number
  },
  data() {
    return {
      projectName: ''
    }
  },
  computed: {},
  methods: {
    createProject() {
      if (this.projectName) {
        let project = factory_projects()
        project.title = this.projectName
        project.position = this.nextProjectPosition
        this.$emit('add-project', { project })
        this.projectName = ''
      }
    }
  }
}
</script>