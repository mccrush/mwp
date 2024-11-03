<template>
  <div class="row border p-2">
    TabLinks
    <p v-if="!project.links.length">Создайте первую ссылку</p>
    <div v-else class="row">
      <TabLinks v-for="item in project.links" :key="item.id" :item="item" />
    </div>

    <div>
      <div class="row">
        <div class="col-6 border code p-3">
          <pre>{{ project.links }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabLinks from './forms/FormLinks.vue'

export default {
  components: { TabLinks },

  props: {
    project: Object
  }
}
</script>