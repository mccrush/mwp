<template>
  <div
    class="my-vh100 col-12 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2 border-end"
  >
    <BtnProjectTitle
      v-for="project in projects"
      :key="project.id"
      class="mt-2"
      @click="setCurrentProject(project)"
      :class="{
        'btn-light': project.id != currentProject.id,
        'btn-warning': project.id === currentProject.id
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
    // projectId() {
    //   return this.$store.getters.projectId
    // }
    currentProject() {
      return this.$store.getters.currentProject
    }
  },
  methods: {
    // setProjectId(id) {
    //   this.$store.commit('setProjectId', id)
    // },
    setCurrentProject(currentProject) {
      this.$store.commit('setCurrentProject', { currentProject })
    },
    async addProject() {
      if (this.projectName) {
        let project = modelsFactory({ type: 'projects' })
        project.title = this.projectName
        this.$store.commit('setCurrentProject', { currentProject: project })
        await this.$store.dispatch('addItemRT', {
          item: project,
          currentUserId: this.currentUserId
        })
        this.projectName = ''
      }
    },
    async logOut() {
      await this.$store.dispatch('logOut')
    }
  }
}
</script>