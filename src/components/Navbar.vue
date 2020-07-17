<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white border-bottom">
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
      <div v-if="user" class="collapse navbar-collapse" id="navbarSupportedContent">
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
          class
        />
        <span
          v-if="projectName"
          class="navbar-brand bg-light p-0 pl-3 pr-3 rounded-lg ml-2 mr-2 project-name"
        >{{projectName}}</span>
        <a
          v-if="projectName"
          href="https://drive.google.com/drive/folders/18xYc_spl0XP5Rx-4kmvhZTvP2IgCStQp"
          target="_blank"
          title="Open project folder"
          class="btn btn-sm p-0 pl-1 pr-1"
        >
          <img
            src="@/assets/icons/folder-symlink.svg"
            alt="Folder icon"
            width="16"
            height="16"
            class
          />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from '@/main.js'
import projects from '@/data/projects'

export default {
  data() {
    return {
      user: auth.currentUser,
      projects,
      projectName: localStorage.getItem('projectName') || 'ATIOP'
    }
  },
  // computed: {
  //   projectName() {
  //     return localStorage.getItem('projectName') || 'ATIOP'
  //   }
  // },
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
.project-name {
  font-size: 1rem;
}
</style>