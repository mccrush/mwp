<template>
  <div class="col-12 col-sm-8 col-md-9 col-lg-10 col-xl-10 col-xxl-10">
    <div class="row p-2">
      <PasswordsForm
        v-for="(password, index) in item.passwords"
        :item="password"
        :index="index"
        :key="'id' + index"
        @remove-item="removeItem"
      />
    </div>
  </div>
</template>

<script>
import PasswordsForm from './PasswordsForm.vue'

export default {
  components: {
    PasswordsForm
  },
  emits: ['remove-item'],
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  methods: {
    removeItem({ type, index }) {
      this.$emit('remove-item', { type, index })
    }
  }
}
</script>