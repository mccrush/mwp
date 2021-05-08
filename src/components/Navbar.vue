<template>
  <div class="row border-bottom pt-2 pb-2">
    <div class="col-2">
      <img
        src="/img/logo.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt="Logo MWP"
      />
      <span class="d-inline-block ms-2 pt-1"><strong>MWP</strong></span>
    </div>
    <div class="col-8"></div>
    <div class="col-2 d-flex justify-content-between">
      <button
        v-if="user"
        class="btn btn-sm btn-light text-muted"
        @click="logOut"
      >
        Logout
      </button>
      <Loading v-if="loading" />
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase.js'
import Loading from '@/components/Loading'
//import { Collapse } from 'bootstrap'

export default {
  components: {
    Loading
  },
  data() {
    return {
      user: auth.currentUser,
      filter: '',
      newProjectTitle: ''
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    },
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