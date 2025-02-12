<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasUserForm"
    aria-labelledby="offcanvasUserFormLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasUserFormLabel">Проекты</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>

    <div class="offcanvas-body">
      <ProjectsList
        v-if="userId"
        :userId="userId"
        :projects="projects"
        :project="project"
        :currentProjectId="currentProjectId"
      />
    </div>
  </div>
</template>

<script>
import ProjectsList from './../../modules/projects/components/interface/ProjectsList.vue'

export default {
  name: 'TheOffcanvas',
  components: { ProjectsList },
  computed: {
    userId() {
      return this.$store.getters.userId
    },
    projects() {
      return this.$store.getters.projects
    },
    currentProjectId() {
      return this.$store.getters.currentProjectId
    },
    project() {
      if (this.projects.length) {
        const findDroject = this.projects.find(
          item => item.id === this.currentProjectId
        )
        return findDroject || null
      }
      return null
    }
  }
}
</script>