<template>
  <div class="row border p-2">
    TabLinks type = {{ type }}
    <div class="col-12">
      <p v-if="!project[type].length">Создайте первую форму</p>
      <div v-else class="row">
        <component
          :is="formComponent"
          v-for="(item, index) in project[type]"
          :key="item.id"
          :item="item"
          :index="index"
        />
        <!-- <FormLinks v-for="item in project[type]" :key="item.id" :item="item" /> -->
      </div>
    </div>

    <div>
      <div class="row">
        <div class="col-6 border code p-3">
          <pre>{{ project[type] }}</pre>
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
  }
}
</script>