<template>
  <div class="row">
    <div
      class="my-vh100 col-sm-3 col-lg-2 d-none d-sm-flex flex-column border-end border-dark-subtle p-0 pb-2"
    >
      <ProjectsList
        :userId="userId"
        :projects="projects"
        :project="project"
        :currentProjectId="currentProjectId"
      />
    </div>

    <div class="col-12 col-sm-9 col-lg-10">
      <div v-if="project">
        <ProjectsTabButtons
          :project="project"
          @create-form-item="createFormItem"
        />
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
      <div v-else class="pt-4">
        <h6 class="text-center">
          Выберите проект из списка слева<br />
          или создайте новый проект
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import { createModelItem } from './helpers/createModelItem'

import ProjectsList from './components/interface/ProjectsList.vue'
import ProjectsTabButtons from './components/interface/ProjectsTabButtons.vue'

import TabForms from './components/tabs/TabForms.vue'

export default {
  name: 'ProjectsMain',
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
      const form = createModelItem(type)

      let project = this.project
      if (!project[type]) {
        project[type] = []
      }
      project[type].push(form)

      let projects = this.projects
      const index = projects.findIndex(item => item.id === project.id)
      projects[index] = project

      this.$store.dispatch('updateProjects', {
        projects: this.projects,
        userId: this.userId
      })
    },

    saveItem() {
      this.$store.dispatch('updateProjects', {
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

      this.$store.dispatch('updateProjects', {
        projects: this.projects,
        userId: this.userId
      })
    }
  }
}
</script>