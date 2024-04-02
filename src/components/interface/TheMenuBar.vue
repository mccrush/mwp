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
    <FormCreateProject />
    <hr />
    <BtnLogOut @click="logOut" />
  </div>
</template>

<script>
import FormCreateProject from './../forms/FormCreateProject.vue'
import BtnProjectTitle from './../buttons/BtnProjectTitle.vue'

import BtnLogOut from './../buttons/BtnLogOut.vue'

export default {
  components: {
    FormCreateProject,
    BtnProjectTitle,
    BtnLogOut
  },

  computed: {
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

    async logOut() {
      await this.$store.dispatch('logOut')
    }
  }
}
</script>