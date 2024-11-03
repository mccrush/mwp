<template>
  <div>
    <div class="row">
      <ProjectsList />

      <div class="col-10 border-top border-dark-subtle">
        <ProjectsTabButtons @create-form-item="createFormItem" />
        <transition name="fade" mode="out-in">
          <component :is="tabComponent" :project="currentProject" />
        </transition>

        <div class="row">
          <!-- <div class="col-6 border code p-3">
            <pre>{{ userData }}</pre>
          </div> -->
          <div class="col-6 border code p-3">
            <pre>{{ projects }}</pre>
          </div>
          <div class="col-6 border code p-3">
            <pre>{{ currentProject }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dataTabs } from './data/dataTabs'
import { factoryModels } from './../../factories/factoryModels'

import ProjectsList from './components/interface/ProjectsList.vue'
import ProjectsTabButtons from './components/interface/ProjectsTabButtons.vue'

import TabLinks from './components/tabs/TabLinks.vue'
import TabPasswords from './components/tabs/TabPasswords.vue'
import TabContacts from './components/tabs/TabContacts.vue'

export default {
  components: {
    ProjectsList,
    ProjectsTabButtons,
    TabLinks,
    TabPasswords,
    TabContacts
  },
  computed: {
    userId() {
      return this.$store.getters.userId
    },
    viewTab() {
      return this.$store.getters.viewTab
    },
    tabComponent() {
      return dataTabs.find(item => item.viewTab === this.viewTab).viewTab
    },
    projects() {
      return this.$store.getters.projects
    },
    currentProject() {
      return this.$store.getters.currentProject
    }
  },
  methods: {
    createFormItem({ type }) {
      const form = factoryModels({ type })
      console.log('form = ', form)

      let project = this.currentProject
      project[type].push(form)

      let projects = this.projects
      const index = projects.findIndex(item => item.id === project.id)
      projects[index] = project

      console.log('new projects = ', projects)

      this.$store.dispatch('updateProjectData', {
        projects: projects,
        userId: this.userId
      })
    }
  }
}
</script>