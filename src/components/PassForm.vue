<template>
  <div class="col-12 col-md-6 p-2">
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
        <button class="btn btn-sm btn-light border p-0 ps-3 pe-3">
          <img
            src="img/work_icons/files.svg"
            width="16"
            height="16"
            class="opacity-06 mt-1 mb-1"
          />
        </button>
      </div>
      <!-- -->
      <div class="input-group mt-1">
        <input
          type="password"
          autocomplete="new-password"
          class="form-control form-control-sm"
          placeholder="Password"
          v-model="password.password"
        />
        <button class="btn btn-sm btn-light border p-0 ps-3 pe-3">
          <img
            src="img/work_icons/eye-slash.svg"
            width="16"
            height="16"
            class="opacity-06 mt-1 mb-1"
          />
        </button>
        <button class="btn btn-sm btn-light border p-0 ps-3 pe-3">
          <img
            src="img/work_icons/files.svg"
            width="16"
            height="16"
            class="opacity-06 mt-1 mb-1"
          />
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
  methods: {
    removePass() {
      this.$store.commit('removePass', this.index)
      this.$store.dispatch('updatePass')
    },
    updatePass() {
      this.$store.dispatch('updatePass')
    }
  }
}
</script>