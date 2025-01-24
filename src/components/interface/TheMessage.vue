<template>
  <div>
    <transition name="slide-fade">
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
  name: 'TheMessage',
  computed: {
    message() {
      return this.$store.getters.message
    }
  },
  methods: {
    hideMessage() {
      this.$store.commit('addMessage', { text: '' })
    }
  },
  watch: {
    message() {
      if (this.message.text) {
        setTimeout(() => {
          this.$store.commit('addMessage', { text: '' })
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>