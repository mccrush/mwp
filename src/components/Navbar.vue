<template>
  <nav class="navbar navbar-expand-md navbar-light bg-white border-bottom">
    <div class="container-fluid">
      <router-link tag="a" class="navbar-brand" to="/">
        <img
          src="/img/logo.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt="Logo MWP"
          loading="lazy"
        />
        MWP
      </router-link>
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
              class="nav-link dropdown-toggle p-1 pl-2 pr-2 rounded-sm border"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >{{projectTitle}}</a>
            <ul class="dropdown-menu shadow-sm border-0" aria-labelledby="navbarDropdown">
              <li class="pl-1 pr-1">
                <input
                  type="search"
                  class="form-control form-control-sm border"
                  autofocus
                  ref="filter"
                  v-model="filter"
                />
              </li>
              <li>
                <hr class="dropdown-divider m-2" />
              </li>
              <li
                v-for="(proj, index) in filteringProjects"
                :key="'pr'+index"
                @click="setProject(proj.title, proj.id)"
              >
                <span class="dropdown-item">{{proj.title}}</span>
              </li>
            </ul>
          </li>
        </ul>
        <a
          v-if="projectTitle"
          href="https://drive.google.com/drive/folders/18xYc_spl0XP5Rx-4kmvhZTvP2IgCStQp"
          target="_blank"
          title="Open project folder"
          class="btn btn-sm btn-light ml-2"
        >
          <img
            src="@/assets/icons/folder-symlink.svg"
            alt="Folder icon"
            width="16"
            height="16"
            class="opacity-05"
          />
        </a>
        <input
          type="text"
          class="form-control form-control-sm ml-2 w-25"
          placeholder="Add new project"
          v-model.trim="newProjectTitle"
          @keypress.enter="addProject"
        />
      </div>
      <button v-if="user" class="btn btn-sm btn-light text-muted mr-0" @click="logOut">Logout</button>
    </div>
  </nav>
</template>

<script>
import { auth } from '@/main.js'

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
    meven() {
      alert('ms')
    },
    async logOut() {
      try {
        await this.$store.dispatch('logOut')
        this.$router.push('login')
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
.project-name {
  font-size: 1rem;
}

.opacity-05 {
  opacity: 0.5;
}
</style>