<template>
  <div class="row p-1 pt-2">
    <LoginForm v-for="(login, index) in logins" :key="'lg'+index" :logins="logins" :login="login" />
    <div class="col-6 col-lg-4 p-2">
      <button
        @click="logins.push({id: '887', name: '', host: '', login: '', pass: ''})"
        class="btn btn-sm btn-light text-muted"
      >Добавить</button>
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  components: { LoginForm },
  data() {
    return {
      logins: JSON.parse(localStorage.getItem('logins')) || []
    }
  },
  computed: {
    // logins() {
    //   return JSON.parse(localStorage.getItem('logins')) || []
    // }
  }
}
</script>

<style>
</style>