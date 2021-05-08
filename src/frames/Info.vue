<template>
  <div class="col-9">
    <div class="row pt-2">
      <div class="col-6">
        <div class="input-group">
          <input
            type="text"
            class="form-control form-control-sm"
            v-model.trim="project.title"
          />
          <button class="btn btn-sm btn-light border">
            <Loading v-if="false" />
            <span v-if="true">Save</span>
          </button>
        </div>
      </div>
      <div class="col-6"></div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  components: {
    Loading
  },
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  computed: {}
}
</script>
<style scoped>
</style>