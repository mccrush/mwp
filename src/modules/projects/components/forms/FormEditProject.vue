<template>
  <div>
    <input
      type="text"
      id="titleProject"
      class="form-control form-control-sm"
      placeholder="Название проекта"
      v-model.trim="item.title"
    />
    <input
      type="number"
      id="positionProject"
      class="form-control form-control-sm mt-1"
      placeholder="Позиция"
      v-model.number="item.position"
    />
    <div class="btn-group w-100 mt-1" role="group">
      <BtnSave title="Сохранить изменения" @click="$emit('update-project')" />
      <BtnTrash
        title="Удалить проект"
        @click="$emit('remove-project', { projectId: item.id })"
      />
    </div>
  </div>
</template>

<script>
import BtnSave from './../../../../components/buttons/BtnSave.vue'
import BtnTrash from './../../../../components/buttons/BtnTrash.vue'

export default {
  components: {
    BtnSave,
    BtnTrash
  },
  emits: ['remove-project', 'update-project'],
  props: {
    item: {
      type: Object
    }
  }
}
</script>