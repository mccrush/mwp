<template>
  <div>
    <div class="row">
      <ProjectsList />

      <div class="col-10 border-top border-dark-subtle">
        <ProjectsTabButtons />
        <transition name="fade" mode="out-in">
          <component :is="tabComponent" />
        </transition>

        <div class="row">
          <div class="col-6 border code p-3">
            <pre>{{ userData }}</pre>
          </div>
          <div class="col-6 border code p-3">
            <pre>{{ projects }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dataTabs } from './data/dataTabs'

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
    userData() {
      return this.$store.getters.userData
    },
    viewTab() {
      return this.$store.getters.viewTab
    },
    tabComponent() {
      return dataTabs.find(item => item.viewTab === this.viewTab).viewTab
    },
    projects() {
      return this.$store.getters.projects
    }
  },
  methods: {}
}
</script>