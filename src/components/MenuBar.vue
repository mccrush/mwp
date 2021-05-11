<template>
  <div
    class="my-vh100 col-12 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2 border-end"
  >
    <button
      v-for="project in projects"
      :key="project.id"
      class="btn shadow-sm w-100 mt-2"
      @click="setProjectId(project.id)"
      :class="{
        'btn-light': project.id != projectId,
        'btn-warning': project.id === projectId
      }"
    >
      {{ project.title }}
    </button>
    <hr />
    <input
      type="text"
      class="form-control form-control-sm"
      placeholder="Project name"
      v-model.trim="projectName"
      @keyup.enter="addProject"
    />
    <button
      class="btn btn-success shadow-sm btn-sm w-100 mt-1"
      @click="addProject"
    >
      Add Project
    </button>
    <hr />
    <LogOut />
  </div>
</template>

<script>
import createProject from '@/scripts/createProject'
import LogOut from '@/components/LogOut'

export default {
  components: {
    LogOut
  },
  data() {
    return {
      projectName: ''
    }
  },
  computed: {
    projects() {
      return this.$store.getters.projects
    },
    projectId() {
      return this.$store.getters.projectId
    }
  },
  methods: {
    setProjectId(id) {
      this.$store.commit('setProjectId', id)
    },
    async addProject() {
      if (this.projectName) {
        const project = createProject(this.projectName)
        this.$store.commit('addProject', project)
        this.projectName = ''
        await this.$store.dispatch('addProject', project)
      }
    }
  }
}
</script>