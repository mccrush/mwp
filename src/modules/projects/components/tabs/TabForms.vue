<template>
  <div class="row border p-2">
    TabForms type = {{ type }}
    <div class="col-12">
      <div v-if="project[type].length" class="row">
        <component
          :is="formComponent"
          v-for="(item, index) in project[type]"
          :key="item.id"
          :item="item"
          :index="index"
          @save-item="saveItem"
          @remove-item="removeItem"
        />
      </div>
      <p v-else>Создайте первую форму</p>
    </div>

    <div>
      <div class="row">
        <div class="col-6 border code p-3">
          <pre> project {{ project }}</pre>
        </div>
        <div class="col-6 border code p-3">
          <pre> project[type] {{ project[type] }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormLinks from './forms/FormLinks.vue'
import FormPasswords from './forms/FormPasswords.vue'
import FormContacts from './forms/FormContacts.vue'

export default {
  components: { FormLinks, FormPasswords, FormContacts },
  emits: ['save-item', 'remove-item'],
  props: {
    project: Object,
    type: String
  },
  computed: {
    formComponent() {
      const component =
        'Form' + this.type[0].toUpperCase() + this.type.substring(1)
      console.log('component = ', component)
      return component
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
    }
  },
  watch: {
    project() {
      console.log('project in TabForm изменился')
    }
  }
}
</script>