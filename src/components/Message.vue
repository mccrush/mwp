<template>
  <div
    class="message rounded-lg shadow-sm text-left text-light"
    :class="message.type"
  >{{message.text}}</div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.getters.message
    }
  }
}
</script>

<style scoped>
.message {
  width: 260px;
  position: absolute;
  top: 20px;
  right: 20px;
  line-height: 1.2;
  background: #fff;
  padding: 12px 12px;
}
</style>