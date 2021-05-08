<template>
  <button v-if="user" class="btn btn-sm btn-light w-100" @click="logOut">
    Logout
  </button>
</template>

<script>
import { auth } from '@/firebase.js'

export default {
  data() {
    return {
      user: auth.currentUser
    }
  },
  mounted() {
    auth.onAuthStateChanged(user => {
      this.user = user
    })
  },
  async logOut() {
    try {
      await this.$store.dispatch('logOut')
    } catch (err) {
      consile.log('Ошибка при выходе из системы')
    }
  }
}
</script>