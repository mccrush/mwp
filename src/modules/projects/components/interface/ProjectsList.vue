<template>
  <div
    class="my-vh100 col-3 col-lg-2 d-flex flex-column border-end border-dark-subtle p-0 pb-2"
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
          @click="setCurrentProjectId(project.id)"
          class="text-truncate"
          :class="{
            active: currentProjectId && project.id === currentProjectId
          }"
        >
          {{ project.title }}
        </BtnProjectTitle>
        <BtnEdit
          v-if="currentProjectId && project.id === currentProjectId"
          @click="mod = 'edit'"
        />
      </div>
    </div>

    <!-- Форма редактирования проекта -->
    <div>
      <div class="border-bottom border-black mt-0"></div>
      <div class="border-top border-dark-subtle mb-3"></div>
      <div class="ps-2 pe-2">
        <FormCreateProject
          v-if="mod === 'create' && canCreateProject"
          @add-project="addProject"
        />

        <FormEditProject
          v-if="currentProjectId && mod === 'edit'"
          :item="project"
          @update-project="updateProject"
          @remove-project="removeProject"
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
  name: 'ProjectsList',
  components: {
    BtnProjectTitle,
    BtnEdit,
    FormCreateProject,
    FormEditProject
  },
  props: {
    userId: String,
    projects: Array,
    project: Object,
    currentProjectId: String
  },
  data() {
    return {
      mod: 'create'
    }
  },
  computed: {
    userMetaData() {
      return this.$store.getters.userMetaData
    },
    sortProjects() {
      if (this.projects?.length) {
        return sortMethod(this.projects, 'asc', 'position')
      }
      return []
    },
    canCreateProject() {
      if (this.userMetaData.proStatus) {
        if (this.projects.length < 64) return true
      } else {
        if (this.projects.length < 4) return true
      }
    }
  },
  methods: {
    setCurrentProjectId(currentProjectId) {
      this.mod = 'create'
      this.$store.commit('setCurrentProjectId', {
        currentProjectId
      })
    },

    addProject({ project }) {
      if (this.projects.length) {
        this.projects.push(project)
        this.$store.dispatch('updateProjects', {
          projects: this.projects,
          userId: this.userId
        })
      } else {
        this.projects.push(project)
        this.$store.dispatch('addProjects', {
          projects: this.projects,
          userId: this.userId
        })
      }

      this.$store.commit('setCurrentProjectId', {
        currentProjectId: project.id
      })
    },

    updateProject() {
      this.mod = 'create'

      this.$store.dispatch('updateProjects', {
        projects: this.projects,
        userId: this.userId
      })
    },

    removeProject({ projectId }) {
      if (confirm('Точно удалить?')) {
        this.mod = 'create'
        const projects = this.projects.filter(item => item.id !== projectId)

        this.$store.dispatch('updateProjects', {
          projects,
          userId: this.userId
        })

        this.$store.commit('setCurrentProjectId', {
          currentProjectId: ''
        })
      }
    }
  }
}
</script>