<template>
  <div class="col-12 col-sm-8 col-md-9 col-lg-10 col-xl-10 col-xxl-10">
    <div class="row p-2">
      <PassForm
        v-for="(password, index) in item.passwords"
        :password="password"
        :index="index"
        :key="'id' + index"
      />
    </div>
  </div>
</template>

<script>
import PassForm from './../../components/PassForm.vue'

export default {
  components: {
    PassForm
  },
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>