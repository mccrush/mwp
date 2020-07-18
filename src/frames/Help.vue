<template>
  <div class="row p-1 pt-2">
    <LoginForm v-for="(login, index) in logins" :key="'lg'+index" :logins="logins" :login="login" />
    <div class="col-6 col-lg-4 p-2">
      <button @click="create" class="btn btn-sm btn-light text-muted">Добавить</button>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  components: { LoginForm },
  // data() {
  //   return {
  //     logins: JSON.parse(localStorage.getItem('logins')) || []
  //   }
  // },
  computed: {
    logins() {
      return this.$store.getters.logins
    }
  },
  methods: {
    create() {
      const login = {
        id: Date.now().toString(),
        name: '',
        host: '',
        login: '',
        pass: ''
      }
      this.$store.dispatch('addDoc', { doc: login })
    }
  }
}
</script>

<style>
</style>