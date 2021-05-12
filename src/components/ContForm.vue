<template>
  <div class="col-12 col-md-6 col-lg-4 p-2">
    <div class="border rounded p-1">
      <input
        type="text"
        class="form-control form-control-sm"
        placeholder="Name"
        v-model="contact.name"
      />
      <!-- -->
      <div class="input-group mt-1">
        <input
          type="tel"
          autocomplete="off"
          class="form-control form-control-sm"
          placeholder="Phone"
          v-model="contact.phone"
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
          type="email"
          autocomplete="off"
          class="form-control form-control-sm"
          placeholder="Email"
          v-model="contact.email"
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
      <textarea
        rows="2"
        class="form-control mt-1"
        style="white-space: pre-line"
        placeholder="Comment"
        v-model="contact.comment"
      ></textarea>
      <div class="d-flex justify-content-between">
        <button class="btn btn-sm btn-outline-danger mt-1" @click="removeCont">
          Remove cont
        </button>
        <button class="btn btn-sm btn-light border mt-1" @click="updateCont">
          Save cont
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    removeCont() {
      this.$store.commit('removeCont', this.index)
      this.$store.dispatch('updateCont')
    },
    updateCont() {
      this.$store.dispatch('updateCont')
    }
  }
}
</script>