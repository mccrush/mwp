<template>
  <div>
    <input
      type="text"
      id="titleProject"
      class="form-control form-control-sm"
      placeholder="Название проекта"
      minlength="1"
      maxlength="32"
      v-model.trim="item.title"
    />
    <input
      type="number"
      id="positionProject"
      class="form-control form-control-sm mt-1"
      placeholder="Позиция"
      min="0"
      max="64"
      @input="maxLength"
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
  name: 'FormEditProject',
  components: {
    BtnSave,
    BtnTrash
  },
  emits: ['remove-project', 'update-project'],
  props: {
    item: Object
  },
  methods: {
    maxLength() {
      if (this.item.position > 64) {
        this.item.position = 64
      }

      // if (String(this.item.position).length >= 2) {
      //   this.item.position = +String(this.item.position).substring(0, 2)
      // }
    }
  }
}
</script>