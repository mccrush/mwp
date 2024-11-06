<template>
  <div class="row border-top p-2">
    <div class="col-12">
      <div v-if="project[type].length" class="row">
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
      <p v-else>Создайте первую форму</p>
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
  }
}
</script>