<template>
  <div class="row border-top border-dark-subtle p-2">
    <div class="col-12">
      <div v-if="projectTypeLength" class="row">
        <component
          :is="formComponent"
          v-for="(item, index) in projectTypeArrayLimit"
          :key="item.id"
          :ref="'formComponent' + item.id"
          :item="item"
          :index="index"
          @save-item="saveItem"
          @remove-item="removeItem"
          @create-form-item="createFormItem"
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
import FormTasks from './forms/FormTasks.vue'
import FormCreateFirstForm from './forms/FormCreateFirstForm.vue'

export default {
  name: 'TabForms',
  components: {
    FormLinks,
    FormPasswords,
    FormContacts,
    FormTasks,
    FormCreateFirstForm
  },
  emits: ['save-item', 'remove-item', 'create-form-item'],
  props: {
    project: Object,
    type: String
  },
  computed: {
    userMetaData() {
      return this.$store.getters.userMetaData
    },
    formComponent() {
      const component =
        'Form' + this.type[0].toUpperCase() + this.type.substring(1)
      return component
    },
    projectTypeArray() {
      if (this.project[this.type]) {
        return this.project[this.type]
      }
      return []
    },
    projectTypeArrayLimit() {
      if (!this.userMetaData.dateEndPro) {
        return this.projectTypeArray.slice(0, 4)
      }
      return this.projectTypeArray
    },
    projectTypeLength() {
      return this.projectTypeArray.length
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

    async createFormItem() {
      this.$emit('create-form-item', { type: this.type })
      await this.$nextTick()
      if (this.type === 'tasks') {
        this.setInputFocus(
          this.projectTypeArrayLimit[this.projectTypeArrayLimit.length - 1].id
        )
      }
    },
    setInputFocus(formId) {
      const comp = this.$refs['formComponent' + formId][0]
      comp.setInputFocus2()
    }
  }
}
</script>