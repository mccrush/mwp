<template>
  <div class="row">
    <TheMenuBar />

    <div class="col-10 border-top border-dark-subtle">
      <div v-if="currentProject" class="row p-1">
        <component
          :is="frameName"
          v-for="(item, index) in projectArraySort"
          :item="item"
          :index="index"
          :key="'id' + index"
          @save-item="saveItem"
          @remove-item="removeItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../helpers/sortMethod'

import TheMenuBar from './../components/interface/TheMenuBar.vue'
import FormLinks from './../components/forms/FormLinks.vue'
import FormPasswords from './../components/forms/FormPasswords.vue'
import FormContacts from './../components/forms/FormContacts.vue'
import FormSettings from './../components/forms/FormSettings.vue'

export default {
  components: {
    TheMenuBar,
    FormLinks,
    FormPasswords,
    FormContacts,
    FormSettings
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
    frameType() {
      return this.$store.getters.frameType
    },
    currentProject() {
      return this.$store.getters.currentProject
    },
    projectArray() {
      if (this.currentProject) {
        return this.currentProject[this.frameType]
      }
      return []
    },
    projectArraySort() {
      return sortMethod(this.projectArray, 'asc', 'position')
    }
  },
  methods: {
    // Обновление проекта
    saveItem() {
      this.$store.dispatch('updateItemRT', {
        item: this.currentProject,
        currentUserId: this.currentUserId
      })
    },

    // Удаление самого проекта
    removeItemProject() {
      this.$store.dispatch('removeItemRT', {
        item: this.currentProject,
        currentUserId: this.currentUserId
      })
    },

    // Удаление детей проекта
    removeItem({ type, index }) {
      let currentProject = this.currentProject
      currentProject[type].splice(index, 1)

      this.saveItem()
    }
  }
}
</script>
