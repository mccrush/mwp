<template>
  <div class="row p-1 pt-2">
    <LoginForm
      v-for="(login, index) in logins"
      :key="'lg' + index"
      :logins="logins"
      :login="login"
    />
    <div class="col-6 col-lg-4 p-2">
      <button @click="create" class="btn btn-sm btn-light text-muted">
        Add
      </button>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  components: { LoginForm },
  computed: {
    projects() {
      return this.$store.getters.projects
    },
    logins() {
      return this.projects.logins
    },
  },
  methods: {
    create() {
      const login = {
        id: Date.now().toString(),
        name: '',
        host: '',
        login: '',
        pass: '',
      }
      this.$store.dispatch('addDoc', { doc: login })
    },
  },
}
</script>

<style>
</style>