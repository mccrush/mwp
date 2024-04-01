<template>
  <div class="row">
    <TheMenuBar />
    <transition name="fade" mode="out-in">
      <component v-if="project" :is="frameName" :project="project" />
    </transition>
  </div>
</template>

<script>
import TheMenuBar from './../components/interface/TheMenuBar.vue'

import Info from './../frames/Info.vue'
import Pass from './../frames/Pass.vue'
import Contacts from './../frames/Contacts.vue'

export default {
  name: 'index',
  components: {
    TheMenuBar,
    Info,
    Pass,
    Contacts
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
      if (this.projects.length && this.projectId) {
        return this.projects.find(item => item.id == this.projectId)
      }
      return null
    }
  }
}
</script>
