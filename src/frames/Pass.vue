<template>
  <div class="col-12 col-sm-8 col-md-9 col-lg-10 col-xl-10 col-xxl-10">
    <div class="row p-2">
      <PassForm
        v-for="(password, index) in project.passwords"
        :password="password"
        :key="'id' + index"
      />
    </div>
  </div>
</template>

<script>
import PassForm from '@/components/PassForm'

export default {
  components: {
    PassForm
  },
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  methods: {
    addForm() {},
    updateForm() {},
    removeForm() {}
  }
}
</script>
<style scoped>
</style>