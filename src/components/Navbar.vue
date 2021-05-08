<template>
  <div class="row border ps-3 pe-4 pt-3 pb-3">
    <div class="col-2 border">
      <img
        src="/img/logo.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt="Logo MWP"
      />
    </div>
    <div class="col-9 border"></div>
    <div class="col-1 border">
      <button
        v-if="user"
        class="btn btn-sm btn-light text-muted"
        @click="logOut"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase.js'
//import { Collapse } from 'bootstrap'

export default {
  data() {
    return {
      user: auth.currentUser,
      filter: '',
      newProjectTitle: ''
    }
  },
  computed: {
    projects() {
      return this.$store.getters.projects
    },
    projectTitle() {
      return this.$store.getters.project.title || 'Select proj'
    },
    filteringProjects() {
      if (!this.filter) {
        return this.projects
      }
      if (this.filter) {
        return this.$store.getters.projects.filter(
          project =>
            project.title.toUpperCase().indexOf(this.filter.toUpperCase()) != -1
        )
      }
    }
  },
  mounted() {
    auth.onAuthStateChanged(user => {
      this.user = user
    })
  },
  methods: {
    settings(id) {
      console.log(id)
    },
    async logOut() {
      try {
        await this.$store.dispatch('logOut')
      } catch (err) {
        consile.log('Ошибка при выходе из системы')
      }
    },
    setProject(title, id) {
      this.$store.commit('setProjectId', id)
    },
    async addProject() {
      this.newProjectTitle = ''
      await this.$store.dispatch('addProject', this.newProjectTitle)
    }
  }
}
</script>

<style scoped>
.dropdown-item {
  cursor: pointer;
}
</style>