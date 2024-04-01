<template>
  <div class="row">
    <TheMenuBar />
    <transition name="fade" mode="out-in">
      <component v-if="project" :is="frameName" :item="project" />
    </transition>
  </div>
</template>

<script>
import TheMenuBar from './../components/interface/TheMenuBar.vue'

import LinksMain from './../modules/links/LinksMain.vue'
import PasswordsMain from './../modules/passwords/PasswordsMain.vue'
import ContactsMain from './../modules/contacts/ContactsMain.vue'

export default {
  components: {
    TheMenuBar,
    LinksMain,
    PasswordsMain,
    ContactsMain
  },
  data() {
    return {}
  },
  computed: {
    frameName() {
      return this.$store.getters.frameName
    },
    projectId() {
      return this.$store.getters.projectId
    },
    projects() {
      return this.$store.getters.projects
    },
    project() {
      const project = this.projects.find(item => item.id === this.projectId)
      if (project) {
        return project
      }
      return null
    }
  }
}
</script>
