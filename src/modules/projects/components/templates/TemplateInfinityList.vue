<template>
  <div class="mt-1">
    <div class="input-group">
      <div class="input-group-text ps-2 pe-2">
        <input
          type="checkbox"
          class="form-check-input mt-0"
          @change="toggleStatus"
          :checked="item.status === 'done'"
        />
      </div>
      <input
        type="text"
        :id="'inputField' + item.id"
        class="form-control form-control-sm"
        placeholder="Введите значение"
        maxlength="64"
      />

      <BtnCopy
        v-if="item.title.length"
        class="border"
        @click="copyInBuffer($event)"
      />
      <BtnTrashFlat
        v-if="item.title.length"
        class="border"
        title="Удалить задачу"
        @click="removeContactFiled(item.id)"
      />
    </div>

    <TemplateInfinityList
      v-for="children in item.childrens"
      :key="children.id"
      :item="children"
    />

    <BtnAddChildrenTask class="mt-2" @click="addChildren" />
  </div>
</template>

<script>
import { copyInBuffer } from './../../../../helpers/copyInBuffer'
import { factoryTasks } from './../../../../factories/factoryTasks'

import BtnCopy from './../../../../components/buttons/BtnCopy.vue'
import BtnTrashFlat from './../../../../components/buttons/BtnTrashFlat.vue'
import BtnAddChildrenTask from './../../../../components/buttons/BtnAddChildrenTask.vue'

export default {
  name: 'TemplateInfinityList',
  components: { BtnCopy, BtnTrashFlat, BtnAddChildrenTask },
  props: {
    item: Object
  },
  methods: {
    addChildren() {
      const child = factoryTasks()
      this.item.childrens.push(child)
    },
    removeContactFiled(id) {
      this.item.childrens = this.item.childrens.filter(item => item.id !== id)
      //this.$emit('save-item')
    },
    copyInBuffer
  }
}
</script>