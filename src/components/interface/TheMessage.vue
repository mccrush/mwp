<template>
  <div>
    <transition name="fade" mode="out-in">
      <div
        v-if="message.text"
        class="mess-alert alert alert-dismissible lh-sm fade show"
        role="alert"
        :class="message.bg"
      >
        {{ message.text }}
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          @click="hideMessage"
        ></button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.getters.message
    }
  },
  methods: {
    hideMessage() {
      this.$store.commit('addMessage', { text: '', bg: '' })
    }
  },
  watch: {
    message() {
      if (this.message.text) {
        setTimeout(() => {
          this.$store.commit('addMessage', { text: '', bg: '' })
        }, 4800)
      }
    }
  }
}
</script>

<style scoped>
.mess-alert {
  position: fixed;
  width: 384px;
  bottom: 16px;
  right: 32px;
}
</style>