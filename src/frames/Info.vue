<template>
  <div class="col-9">
    <div class="row pt-2">
      <div class="col-6">
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
      <div class="col-6">
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
            class="btn btn-sm btn-light border"
            :href="project.url"
            target="_blank"
            title="Открыть проект"
          >
            <span v-if="true">Go</span>
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