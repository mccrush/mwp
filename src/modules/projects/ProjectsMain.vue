<template>
  <div>
    <div class="row">
      <ProjectsList />

      <div v-if="project" class="col-9 col-lg-10 border-top border-dark-subtle">
        <ProjectsTabButtons @create-form-item="createFormItem" />
        <transition name="fade" mode="out-in">
          <TabForms
            :project="project"
            :type="viewTab"
            @save-item="saveItem"
            @remove-item="removeItem"
          />
        </transition>

        <div class="row">
          <div class="col-6 border code p-3">
            projects =
            <pre>{{ projects }}</pre>
          </div>
          <div class="col-6 border code p-3">
            project =
            <pre>{{ project }}</pre>
          </div>
        </div>
      </div>
      <div v-else class="col-10 border-top border-dark-subtle">
        <p>Выберите проект из списка слева</p>
      </div>
    </div>
  </div>
</template>

<script>
import { dataTabs } from './data/dataTabs'
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
      return (
        this.projects.find(item => item.id === this.currentProjectId) || null
      )
    }
  },
  methods: {
    createFormItem({ type }) {
      const form = factoryModels({ type })
      console.log('form = ', form)

      let project = this.project
      project[type].push(form)

      let projects = this.projects
      const index = projects.findIndex(item => item.id === project.id)
      projects[index] = project

      console.log('ProjectsMain.vue new projects = ', projects)

      this.$store.dispatch('updateProjectData', {
        projects: projects,
        userId: this.userId
      })
    },

    saveItem() {
      console.log('Проекты будут обновлены в БД')
      console.log('this.projects = ', this.projects)
      //return
      this.$store.dispatch('updateProjectData', {
        projects: this.projects,
        userId: this.userId
      })
    },

    removeItem({ type, id }) {
      console.log('remove type = ', type)
      console.log('remove id = ', id)

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
  },
  watch: {
    projects() {
      console.log('projects in ProjectsMain изменился')
    },
    project() {
      console.log('project in ProjectsMain изменился')
    }
  }
}
</script>