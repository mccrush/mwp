<template>
  <button class="btn btn-sm shadow-sm btn-light w-100" @click="logOut">
    Logout
  </button>
</template>

<script>
export default {
  methods: {
    async logOut() {
      await this.$store.dispatch('logOut')
    }
  }
}
</script>