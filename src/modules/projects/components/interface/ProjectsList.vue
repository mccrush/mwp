<template>
  <div>
    <!-- Список проектов -->
    <div class="overflow-y-auto p-2">
      <div
        v-for="project in sortProjects"
        :key="project.id"
        class="btn-group w-100 mt-2"
        role="group"
      >
        <button
          v-if="mod === 'settings'"
          class="btn btn-sm btn-dark disabled ps-1 pe-1"
        >
          {{ project.position }}
        </button>
        <BtnProjectTitle
          @click="setCurrentProjectId(project.id)"
          class="text-truncate d-sm-none"
          :class="{
            active: currentProjectId && project.id === currentProjectId
          }"
          data-bs-dismiss="offcanvas"
        >
          {{ project.title }}
        </BtnProjectTitle>
        <BtnProjectTitle
          @click="setCurrentProjectId(project.id)"
          class="text-truncate d-none d-sm-block"
          :class="{
            active: currentProjectId && project.id === currentProjectId
          }"
        >
          {{ project.title }}
        </BtnProjectTitle>
        <BtnEdit
          v-if="
            currentProjectId &&
            project.id === currentProjectId &&
            mod !== 'settings'
          "
          @click="mod = 'edit'"
        />
        <BtnArrUp v-if="mod === 'settings'" @click="project.position--" />
        <BtnArrDown v-if="mod === 'settings'" @click="project.position++" />
      </div>
    </div>

    <!-- Форма редактирования проекта -->
    <div>
      <div class="border-bottom border-black mt-0"></div>
      <div class="border-top border-dark-subtle mb-3"></div>
      <div class="ps-2 pe-2">
        <FormCreateProject
          v-if="mod === 'create' && canCreateProject"
          :nextProjectPosition="nextProjectPosition"
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

    <div class="mt-2 ps-2 pe-2">
      <BtnSettingsProjectList
        v-if="mod !== 'settings'"
        @click="mod = 'settings'"
      />
      <BtnSettingsProjectListSave v-else @click="updateProject" />
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../../../../helpers/sortMethod'

import BtnProjectTitle from './../buttons/BtnProjectTitle.vue'
import BtnEdit from './../../../../components/buttons/BtnEdit.vue'
import BtnArrUp from './../../../../components/buttons/BtnArrUp.vue'
import BtnArrDown from './../../../../components/buttons/BtnArrDown.vue'
import BtnSettingsProjectList from './../../../../components/buttons/BtnSettingsProjectList.vue'
import BtnSettingsProjectListSave from './../../../../components/buttons/BtnSettingsProjectListSave.vue'

import FormCreateProject from './../forms/FormCreateProject.vue'
import FormEditProject from './../forms/FormEditProject.vue'

export default {
  name: 'ProjectsList',
  components: {
    BtnProjectTitle,
    BtnEdit,
    BtnArrUp,
    BtnArrDown,
    BtnSettingsProjectList,
    BtnSettingsProjectListSave,
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
    projectsRowId() {
      return this.$store.getters.projectsRowId
    },
    projectsArrayLimit() {
      if (!this.userMetaData.dateEndPro) {
        return this.projects.slice(0, 4)
      }
      return this.projects
    },
    sortProjects() {
      if (this.projects?.length) {
        return sortMethod(this.projectsArrayLimit, 'asc', 'position')
      }
      return []
    },
    canCreateProject() {
      if (this.userMetaData.dateEndPro) {
        if (this.projects.length < 64) return true
      } else {
        if (this.projects.length < 4) return true
      }
    },
    nextProjectPosition() {
      return this.sortProjects.length + 1
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
      this.projects.push(project)
      if (this.projectsRowId) {
        this.$store.dispatch('updateProjects', {
          projects: this.projects,
          userId: this.userId
        })
      } else {
        this.$store.dispatch('addProjects', {
          projects: this.projects,
          userId: this.userId
        })
        this.$store.dispatch('getProjectsRowId', { userId: this.userId })
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