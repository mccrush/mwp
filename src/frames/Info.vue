<template>
  <div class="col-12 col-sm-8 col-md-9 col-lg-10 col-xl-10 col-xxl-11">
    <div class="row pt-2">
      <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
        <div class="input-group">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Project Name"
            v-model.trim="project.title"
            @keyup.enter="updateProject('title')"
          />
          <button
            class="btn btn-sm btn-light border"
            @click="updateProject('title')"
          >
            <span v-if="true">Save</span>
          </button>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
        <div class="input-group">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Url"
            v-model.trim="project.url"
            @keyup.enter="updateProject('url')"
          />
          <button
            class="btn btn-sm btn-light border"
            @click="updateProject('url')"
          >
            <span v-if="true">Save</span>
          </button>
          <a
            class="btn btn-sm btn-light border p-0 ps-3 pe-3"
            :href="project.url"
            target="_blank"
            title="Открыть проект"
          >
            <img
              src="img/work_icons/arrow-up-right-square.svg"
              width="16"
              height="16"
              class="opacity-06 mt-1"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    async updateProject(field) {
      const res = await this.$store.dispatch('updateProject', {
        id: this.project.id,
        field,
        value: this.project[field]
      })
    }
  }
}
</script>
<style scoped>
</style>