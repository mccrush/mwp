<template>
  <div
    class="my-vh100 col-12 col-sm-4 col-md-2 d-flex flex-column border-top border-dark-subtle border-end border-black p-0 pb-2"
  >
    <div class="overflow-y-auto p-2">
      <div
        v-for="project in sortProjects"
        :key="project.id"
        class="btn-group w-100 mt-2"
        role="group"
      >
        <BtnProjectTitle
          @click="setCurrentProject(project)"
          class="text-truncate"
          :class="{
            active: currentProject && project.id === currentProject.id
          }"
        >
          {{ project.title }}
        </BtnProjectTitle>
        <BtnEdit
          v-if="currentProject && project.id === currentProject.id"
          @click="mod = 'edit'"
        />
      </div>
    </div>

    <div>
      <div class="border-bottom border-black mt-0"></div>
      <div class="border-top border-dark-subtle mb-3"></div>
      <div class="ps-2 pe-2">
        <FormCreateProject v-if="mod === 'create'" />
        <FormEditProject
          v-if="currentProject && mod === 'edit'"
          :item="currentProject"
          @close-form="mod = 'create'"
          @set-mod-create="mod = 'create'"
        />
      </div>

      <div class="border-bottom border-black mt-3"></div>
      <div class="border-top border-dark-subtle mb-3"></div>
      <!-- <div class="ps-2 pe-2">
        <BtnSettings />
      </div> -->
      <div class="ps-2 pe-2">
        <BtnUserSettings class="text-truncate" title="Настройки аккаунта">
          {{ userName }}
        </BtnUserSettings>
      </div>
      <div class="mt-2 ps-2 pe-2">
        <BtnLogOut @click="logOut" title="Выйти из приложения" />
      </div>
      <div class="mt-2 ps-2 pe-2">
        <BtnPremium title="Оформить Premium подписку" />
      </div>
    </div>
  </div>
</template>

<script>
import { sortMethod } from './../../helpers/sortMethod'

import FormCreateProject from './../forms/FormCreateProject.vue'
import FormEditProject from './../forms/FormEditProject.vue'
import BtnProjectTitle from './../buttons/BtnProjectTitle.vue'

import BtnEdit from './../buttons/BtnEdit.vue'
import BtnLogOut from './../buttons/BtnLogOut.vue'
import BtnUserSettings from './../buttons/BtnUserSettings.vue'
import BtnPremium from './../buttons/BtnPremium.vue'

export default {
  components: {
    FormCreateProject,
    FormEditProject,
    BtnProjectTitle,
    BtnEdit,
    BtnLogOut,
    BtnUserSettings,
    BtnPremium
  },
  data() {
    return {
      mod: 'create'
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    },
    userName() {
      return this.currentUser.email.split('@')[0]
    },
    projects() {
      return this.$store.getters.projects
    },
    currentProject() {
      return this.$store.getters.currentProject
    },
    sortProjects() {
      return sortMethod(this.projects, 'desc', 'position')
    }
  },
  methods: {
    setCurrentProject(currentProject) {
      this.$store.commit('setCurrentProject', { currentProject })
    },

    logOut() {
      this.$store.dispatch('logOut')
    }

    // setPage(page) {
    //   this.$store.commit('setCurrentPage', { page })
    // }

    // setFrameName(btn) {
    //   this.$store.commit('setFrameName', 'settings')
    // }
  }
}
</script>