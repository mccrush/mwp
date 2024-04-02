<template>
  <div>
    <input
      type="text"
      class="form-control form-control-sm"
      placeholder="Название проекта"
      v-model.trim="item.title"
      @change="saveItem"
    />
    <input
      type="number"
      class="form-control form-control-sm mt-1"
      placeholder="Позиция"
      v-model.number="item.position"
      @change="saveItem"
    />
    <div class="btn-group w-100 mt-1" role="group">
      <BtnSave title="Сохранить изменения" @click="$emit('close-form')" />
      <BtnTrash title="Удалить проект" @click="removeItem" />
    </div>
  </div>
</template>

<script>
import BtnSave from './../buttons/BtnSave.vue'
import BtnTrash from './../buttons/BtnTrash.vue'

export default {
  components: {
    BtnSave,
    BtnTrash
  },
  emits: ['close-form'],
  props: {
    item: {
      type: Object
    }
  },
  computed: {
    currentUserId() {
      return this.$store.getters.currentUserId
    }
  },
  methods: {
    saveItem() {
      this.$store.dispatch('updateItemRT', {
        item: this.item,
        currentUserId: this.currentUserId
      })
    },
    removeItem() {
      if (confirm('Точно удалить?')) {
        this.$store.dispatch('removeItemRT', {
          item: this.item,
          currentUserId: this.currentUserId
        })
      }
    }
  }
}
</script>