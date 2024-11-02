<template>
  <div
    class="my-vh100 col-2 d-flex flex-column border-top border-dark-subtle border-end border-black p-0 pb-2"
  >
    <!-- Список проектов -->
    <div class="overflow-y-auto p-2">
      <div
        v-for="project in sortProjects"
        :key="project.id"
        class="btn-group w-100 mt-2"
        role="group"
      >
        <BtnProjectTitle
          @click="setCurrentProject(project)"
          class="text-truncate"
          :class="{
            active: currentProject && project.id === currentProject.id
          }"
        >
          {{ project.title }}
        </BtnProjectTitle>
        <BtnEdit
          v-if="currentProject && project.id === currentProject.id"
          @click="mod = 'edit'"
        />
      </div>
    </div>

    <!-- Форма редактирования проекта -->
    <div>
      <div class="border-bottom border-black mt-0"></div>
      <div class="border-top border-dark-subtle mb-3"></div>
      <div class="ps-2 pe-2">
        <FormCreateProject v-if="mod === 'create'" @add-project="addProject" />

        <FormEditProject
          v-if="currentProject && mod === 'edit'"
          :item="currentProject"
          @close-form="mod = 'create'"
          @set-mod-create="mod = 'create'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../../../../helpers/sortMethod'

import BtnProjectTitle from './../buttons/BtnProjectTitle.vue'
import BtnEdit from './../../../../components/buttons/BtnEdit.vue'

import FormCreateProject from './../forms/FormCreateProject.vue'
import FormEditProject from './../forms/FormEditProject.vue'

export default {
  components: {
    BtnProjectTitle,
    BtnEdit,
    FormCreateProject,
    FormEditProject
  },
  data() {
    return {
      mod: 'create'
    }
  },
  computed: {
    userId() {
      return this.$store.getters.userId
    },
    projects() {
      return this.$store.getters.projects
    },
    sortProjects() {
      return sortMethod(this.projects, 'desc', 'position')
    },
    currentProject() {
      return this.$store.getters.currentProject
    }
  },
  methods: {
    setCurrentProject(currentProject) {
      this.$store.commit('setCurrentProject', { currentProject })
    },

    addProject({ project }) {
      this.projects.push(project)

      this.$store.dispatch('updateProjectData', {
        projects: this.projects,
        userId: this.userId
      })
    }
  }
}
</script>