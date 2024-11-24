<template>
  <div class="row border-top p-2">
    <div class="col-12">
      <div v-if="projectTypeLength" class="row">
        <component
          :is="formComponent"
          v-for="(item, index) in project[type]"
          :key="item.id"
          :item="item"
          :index="index"
          :project="project"
          @save-item="saveItem"
          @remove-item="removeItem"
        />
      </div>
      <div v-else class="row">
        <FormCreateFirstForm @create-form-item="createFormItem" />
      </div>
    </div>
  </div>
</template>

<script>
import FormLinks from './forms/FormLinks.vue'
import FormPasswords from './forms/FormPasswords.vue'
import FormContacts from './forms/FormContacts.vue'
import FormCreateFirstForm from './forms/FormCreateFirstForm.vue'

export default {
  components: { FormLinks, FormPasswords, FormContacts, FormCreateFirstForm },
  emits: ['save-item', 'remove-item', 'create-form-item'],
  props: {
    project: Object,
    type: String
  },
  computed: {
    formComponent() {
      const component =
        'Form' + this.type[0].toUpperCase() + this.type.substring(1)
      return component
    },
    projectTypeLength() {
      const length = this.project[this.type].length
      return length
    }
  },
  methods: {
    saveItem() {
      this.$emit('save-item')
    },

    removeItem({ type, id }) {
      if (confirm('Точно удалить?')) {
        this.$emit('remove-item', { type, id })
      }
    },

    createFormItem() {
      this.$emit('create-form-item', { type: this.type })
    }
  }
}
</script>