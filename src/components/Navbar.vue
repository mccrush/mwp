<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="/img/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt
          loading="lazy"
        />
        MWP
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-md-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >Проекты</a>
            <ul class="dropdown-menu shadow-sm border-0" aria-labelledby="navbarDropdown">
              <li
                v-for="(proj, index) in projects"
                :key="'pr'+index"
                @click="setProject(proj.name, proj.alias)"
              >
                <span class="dropdown-item" href>{{proj.name}}</span>
              </li>
            </ul>
          </li>
        </ul>
        <img
          v-if="projectName"
          src="@/assets/icons/chevron-right.svg"
          alt="Row right"
          width="12"
          height="12"
          class="mt-1"
        />
        <span v-if="projectName" class="navbar-brand ml-1">{{projectName}}</span>
      </div>
    </div>
  </nav>
</template>

<script>
import projects from '@/data/projects'
export default {
  data() {
    return {
      projects,
      projectName: localStorage.getItem('projectName') || 'ATIOP'
    }
  },
  methods: {
    setProject(name, alias) {
      this.projectName = name
      localStorage.setItem('projectName', name)
      localStorage.setItem('projectAlias', alias)
    }
  }
}
</script>

<style scoped>
.dropdown-item {
  cursor: pointer;
}
</style>