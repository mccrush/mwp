<template>
  <div class="row">
    <div class="menu col-3 border-end">
      <button
        v-for="project in projects"
        :key="project.id"
        class="btn w-100 mt-2"
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
        placeholder="Project Name"
        v-model.trim="projectName"
        @keyup.enter="addProject"
      />
      <button class="btn btn-success btn-sm w-100 mt-1" @click="addProject">
        Add Project
      </button>
      <hr />
      <LogOut />
    </div>
    <div class="col-9"></div>
  </div>
</template>

<script>
import createProject from '@/scripts/createProject'
import LogOut from '@/components/LogOut'
// import buttons from '@/data/buttons'
// import devel from '@/frames/Devel'
// import tz from '@/frames/Tz'
// import project from '@/frames/Project'
// import test from '@/frames/Test'
// import help from '@/frames/Help'

export default {
  name: 'index',
  components: {
    LogOut
    // devel,
    // tz,
    // project,
    // test,
    // help
  },
  data() {
    return {
      projectName: '',
      showMenu: true,
      comp: 'devel'
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
        const res = await this.$store.dispatch('addProject', project)
        this.projectName = ''
      }
    }
  }
}
</script>

<style scoped>
.menu {
  height: calc(100vh - 48px); /* Точное число после настройки навбара */
}

.b-yellow {
  background: #faedcb;
}

.b-green {
  background: #c9e4de;
}

.b-blue {
  background: #c6def1;
}

.b-purpur {
  background: #dbcdf0;
}

.b-pink {
  background: #f2c6de;
}
</style>
