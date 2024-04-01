<template>
  <div class="col-12 col-sm-8 col-md-9 col-lg-10 col-xl-10 col-xxl-10">
    <div class="row p-2">
      <ContactsForm
        v-for="(contact, index) in item.contacts"
        :item="contact"
        :index="index"
        :key="'id' + index"
        @save-item="saveItem"
        @remove-item="removeItem"
      />
    </div>
  </div>
</template>

<script>
import ContactsForm from './ContactsForm.vue'

export default {
  components: {
    ContactsForm
  },
  emits: ['save-item', 'remove-item'],
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  methods: {
    saveItem() {
      this.$emit('save-item')
    },

    removeItem({ type, index }) {
      this.$emit('remove-item', { type, index })
    }
  }
}
</script>