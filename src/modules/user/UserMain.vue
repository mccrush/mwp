<template>
  <div>
    {{ currentUser }}
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  }
}
</script>