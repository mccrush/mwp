<template>
  <div class="col-12 col-md-6 col-lg-4 p-2">
    <div class="border rounded p-1">
      <input
        type="text"
        class="form-control form-control-sm"
        placeholder="Title"
        v-model="password.title"
      />
      <!-- -->
      <div class="input-group mt-1">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Login"
          v-model="password.login"
        />
        <button
          class="btn btn-sm btn-light border"
          @click="copyInBuffer($event)"
        >
          Copy
        </button>
      </div>
      <!-- -->
      <div class="input-group mt-1">
        <input
          :type="passType ? 'password' : 'text'"
          autocomplete="new-password"
          class="form-control form-control-sm"
          placeholder="Password"
          v-model="password.password"
        />
        <button
          class="btn btn-sm btn-light border p-0 ps-3 pe-3"
          @click="passType = !passType"
        >
          <img
            src="/img/work_icons/eye-slash.svg"
            width="16"
            height="16"
            class="opacity-06 mt-1 mb-1"
          />
        </button>
        <button
          class="btn btn-sm btn-light border"
          @click="copyInBuffer($event)"
        >
          Copy
        </button>
      </div>
      <!-- -->
      <textarea
        rows="2"
        class="form-control mt-1"
        style="white-space: pre-line"
        placeholder="Comment"
        v-model="password.comment"
      ></textarea>
      <div class="d-flex justify-content-between">
        <button class="btn btn-sm btn-outline-danger mt-1" @click="removePass">
          Remove pass
        </button>
        <button class="btn btn-sm btn-light border mt-1" @click="updatePass">
          Save pass
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    password: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      passType: true
    }
  },
  methods: {
    removePass() {
      this.$store.commit('removePass', this.index)
      this.$store.dispatch('updatePass')
    },
    updatePass() {
      this.$store.dispatch('updatePass')
    },
    copyInBuffer(e) {
      const el = e.target.parentNode.firstChild
      el.select()
      if (document.execCommand('copy')) {
        console.log('Результат скопирован в буфер')
      }
    }
  }
}
</script>