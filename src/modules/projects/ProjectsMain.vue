<template>
  <div>
    <div class="row">
      <ProjectsList
        :userId="userId"
        :projects="projects"
        :project="project"
        :currentProjectId="currentProjectId"
      />

      <div v-if="project" class="col-9 col-lg-10 border-top border-dark-subtle">
        <ProjectsTabButtons @create-form-item="createFormItem" />
        <transition name="fade" mode="out-in">
          <TabForms
            :project="project"
            :type="viewTab"
            @save-item="saveItem"
            @remove-item="removeItem"
            @create-form-item="createFormItem"
          />
        </transition>
      </div>
      <div v-else class="col-10 border-top border-dark-subtle">
        <p>Выберите проект из списка слева</p>
      </div>
    </div>
  </div>
</template>

<script>
import { factoryModels } from './../../factories/factoryModels'

import ProjectsList from './components/interface/ProjectsList.vue'
import ProjectsTabButtons from './components/interface/ProjectsTabButtons.vue'

import TabForms from './components/tabs/TabForms.vue'

export default {
  components: {
    ProjectsList,
    ProjectsTabButtons,
    TabForms
  },
  computed: {
    userId() {
      return this.$store.getters.userId
    },
    viewTab() {
      return this.$store.getters.viewTab
    },
    projects() {
      return this.$store.getters.projects
    },
    currentProjectId() {
      return this.$store.getters.currentProjectId
    },
    project() {
      if (this.projects.length) {
        const findDroject = this.projects.find(
          item => item.id === this.currentProjectId
        )
        return findDroject || null
      }
      return null
    }
  },
  methods: {
    createFormItem({ type }) {
      const form = factoryModels({ type })

      let project = this.project
      project[type].push(form)

      let projects = this.projects
      const index = projects.findIndex(item => item.id === project.id)
      projects[index] = project

      this.$store.dispatch('updateProjectData', {
        projects: projects,
        userId: this.userId
      })
    },

    saveItem() {
      this.$store.dispatch('updateProjectData', {
        projects: this.projects,
        userId: this.userId
      })
    },

    removeItem({ type, id }) {
      let project = this.project
      const items = project[type].filter(item => item.id !== id)

      project[type] = items

      let projects = this.projects
      const index = projects.findIndex(item => item.id === project.id)
      projects[index] = project

      this.$store.dispatch('updateProjectData', {
        projects: projects,
        userId: this.userId
      })
    }
  }
}
</script>