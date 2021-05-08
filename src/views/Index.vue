<template>
  <div class="row">
    <div class="menu col-2 border">
      Menu
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
    </div>
    <div class="col-10 border"></div>
  </div>
</template>

<script>
import createProject from '@/scripts/createProject'
// import buttons from '@/data/buttons'
// import devel from '@/frames/Devel'
// import tz from '@/frames/Tz'
// import project from '@/frames/Project'
// import test from '@/frames/Test'
// import help from '@/frames/Help'

export default {
  name: 'index',
  components: {
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
  methods: {
    addProject() {
      const project = createProject(this.projectName)
      console.log('new project', project)
      this.projectName = ''
    }
  }
}
</script>

<style scoped>
.menu {
  height: calc(100vh - 35px); /* Точное число после настройки навбара */
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
