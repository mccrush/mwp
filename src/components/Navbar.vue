<template>
  <div class="row border-bottom">
    <div class="col-3 border-end pt-2">
      <img
        src="/img/logo.png"
        width="30"
        height="30"
        class="d-inline-block align-top mt-1"
        alt="Logo MWP"
      />
      <span class="d-inline-block ms-2 pt-2"><strong>MWP</strong></span>
    </div>
    <div
      class="col-2 pt-2 pb-2 pe-0"
      v-for="btn in buttons"
      :key="'bt' + btn.comp"
    >
      <button class="btn btn-light w-100">
        {{ btn.title }}
      </button>
    </div>
    <div class="col-3 d-flex justify-content-between">
      <div></div>
      <Loading v-if="loading" />
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import buttons from '@/data/buttons'
//import { Collapse } from 'bootstrap'

export default {
  components: {
    Loading
  },
  data() {
    return {
      buttons,
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
  methods: {
    settings(id) {
      console.log(id)
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