<template>
  <div class="my-vh100 col-12 col-sm-4 col-md-2 border-end">
    <div
      v-for="project in sortProjects"
      :key="project.id"
      class="btn-group w-100 mt-2"
      role="group"
    >
      <BtnProjectTitle
        class=""
        @click="setCurrentProject(project)"
        :class="{
          'btn-light': !currentProject || project.id != currentProject.id,
          'btn-warning': currentProject && project.id === currentProject.id
        }"
      >
        {{ project.title }}
      </BtnProjectTitle>
      <BtnEdit
        v-if="currentProject && project.id === currentProject.id"
        :class="{
          'btn-light': !currentProject || project.id != currentProject.id,
          'btn-warning': currentProject && project.id === currentProject.id
        }"
        @click="mod = 'edit'"
      />
    </div>
    <hr />
    <FormCreateProject v-if="mod === 'create'" />
    <FormEditProject
      v-if="currentProject && mod === 'edit'"
      :item="currentProject"
      @close-form="mod = 'create'"
    />
    <hr />
    <BtnLogOut @click="logOut" />
  </div>
</template>

<script>
import { sortMethod } from './../../helpers/sortMethod'

import FormCreateProject from './../forms/FormCreateProject.vue'
import FormEditProject from './../forms/FormEditProject.vue'
import BtnProjectTitle from './../buttons/BtnProjectTitle.vue'

import BtnEdit from './../buttons/BtnEdit.vue'
import BtnLogOut from './../buttons/BtnLogOut.vue'

export default {
  components: {
    FormCreateProject,
    FormEditProject,
    BtnProjectTitle,
    BtnEdit,
    BtnLogOut
  },
  data() {
    return {
      mod: 'create'
    }
  },
  computed: {
    projects() {
      return this.$store.getters.projects
    },
    currentProject() {
      return this.$store.getters.currentProject
    },
    sortProjects() {
      return sortMethod(this.projects, 'desc', 'position')
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