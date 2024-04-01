<template>
  <div class="col-12 col-sm-8 col-md-9 col-lg-10 col-xl-10 col-xxl-10">
    <div class="row p-2">
      <ContForm
        v-for="(contact, index) in item.contacts"
        :contact="contact"
        :index="index"
        :key="'id' + index"
      />
    </div>
  </div>
</template>

<script>
import ContForm from './../../components/ContForm.vue'

export default {
  components: {
    ContForm
  },
  props: {
    item: {
      type: Object,
      default: null
    }
  }
}
</script>