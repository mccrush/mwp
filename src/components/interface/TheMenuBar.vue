<template>
  <div class="my-vh100 col-12 col-sm-4 col-md-2 border-end">
    <BtnProjectTitle
      v-for="project in projects"
      :key="project.id"
      class="mt-2"
      @click="setCurrentProject(project)"
      :class="{
        'btn-light': !currentProject || project.id != currentProject.id,
        'btn-warning': currentProject && project.id === currentProject.id
      }"
    >
      {{ project.title }}
    </BtnProjectTitle>
    <hr />
    <input
      type="text"
      class="form-control form-control-sm"
      placeholder="Название проекта"
      v-model.trim="projectName"
      @keyup.enter="addProject"
    />
    <BtnAddProject class="mt-1" @click="addProject" />
    <hr />
    <BtnLogOut @click="logOut" />
  </div>
</template>

<script>
import { modelsFactory } from './../../helpers/modelsFactory'

import BtnProjectTitle from './../buttons/BtnProjectTitle.vue'
import BtnAddProject from './../buttons/BtnAddProject.vue'
import BtnLogOut from './../buttons/BtnLogOut.vue'

export default {
  components: {
    BtnProjectTitle,
    BtnAddProject,
    BtnLogOut
  },
  data() {
    return {
      projectName: ''
    }
  },
  computed: {
    currentUserId() {
      return this.$store.getters.currentUserId
    },
    projects() {
      return this.$store.getters.projects
    },
    currentProject() {
      return this.$store.getters.currentProject
    }
  },
  methods: {
    setCurrentProject(currentProject) {
      this.$store.commit('setCurrentProject', { currentProject })
    },
    async addProject() {
      if (this.projectName) {
        let project = modelsFactory({ type: 'projects' })
        project.title = this.projectName

        await this.$store.dispatch('addItemRT', {
          item: project,
          currentUserId: this.currentUserId
        })
        this.$store.commit('setCurrentProject', { currentProject: project })
        this.projectName = ''
      }
    },
    async logOut() {
      await this.$store.dispatch('logOut')
    }
  }
}
</script>