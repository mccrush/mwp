<template>
  <div class="row justify-content-center">
    <div class="my-vh100 col-12 pt-4">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from './../modules/login/LoginForm.vue'

export default {
  name: 'PageLogin',
  components: {
    LoginForm
  },
  data() {
    return {}
  },
  methods: {
    showError() {
      this.error = true
      setTimeout(() => {
        this.error = false
      }, 4000)
    }
  }
}
</script>

<style scoped>
.max-width {
  max-width: 300px;
}

.opacity-06 {
  opacity: 0.6;
}
</style>