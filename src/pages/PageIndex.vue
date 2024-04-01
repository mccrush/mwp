<template>
  <div class="row">
    <TheMenuBar />
    <transition name="fade" mode="out-in">
      <component
        v-if="currentProject"
        :is="frameName"
        :item="currentProject"
        @save-item="saveItem"
        @remove-item="removeItem"
      />
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
    currentUserId() {
      return this.$store.getters.currentUserId
    },
    frameName() {
      return this.$store.getters.frameName
    },
    currentProject() {
      return this.$store.getters.currentProject
    }
  },
  methods: {
    // Удаление самого проекта
    saveItem() {
      this.$store.commit('setCurrentProject', {
        currentProject: this.currentProject
      })
      this.$store.dispatch('updateItemRT', {
        item: this.currentProject,
        currentUserId: this.currentUserId
      })
    },

    // Удаление детей проекта
    removeItem({ type, index }) {
      let currentProject = this.currentProject
      //console.log('currentProject[type]=', currentProject[type])
      currentProject[type].splice(index, 1)
      this.$store.commit('setCurrentProject', {
        currentProject
      })
      this.$store.dispatch('updateItemRT', {
        item: currentProject,
        currentUserId: this.currentUserId
      })
    }
  }
}
</script>
