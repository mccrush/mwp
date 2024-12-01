<template>
  <div class="mt-1">
    <div class="d-flex justify-content-between">
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
          maxlength="64"
        />

        <BtnCopy
          v-if="item.title"
          class="border"
          @click="copyInBuffer($event)"
        />
        <BtnTrashFlat
          v-if="item.title"
          class="border"
          title="Удалить задачу"
          @click="removeContactFiled(item.id)"
        />
      </div>

      <BtnShowCheck
        class="btn btn-sm btn-dark ms-2"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#collapseExample' + item.id"
        aria-expanded="false"
        :aria-controls="'collapseExample' + item.id"
      />
    </div>

    <div class="collapse ms-4" :id="'collapseExample' + item.id">
      <div
        v-if="item.childrens.length"
        class="card card-body border-0 p-0 ps-2"
      >
        <TemplateInfinityList
          v-for="children in item.childrens"
          :key="children.id"
          :item="children"
          class=""
        />
      </div>
      <BtnAddChildrenTask class="mt-1 ms-2" @click="addChildren" />
    </div>
  </div>
</template>

<script>
import { copyInBuffer } from './../../../../helpers/copyInBuffer'
import { factoryTasks } from './../../../../factories/factoryTasks'

import BtnCopy from './../../../../components/buttons/BtnCopy.vue'
import BtnTrashFlat from './../../../../components/buttons/BtnTrashFlat.vue'
import BtnAddChildrenTask from './../../../../components/buttons/BtnAddChildrenTask.vue'
import BtnShowCheck from './../../../../components/buttons/BtnShowCheck.vue'

export default {
  name: 'TemplateInfinityList',
  components: { BtnCopy, BtnTrashFlat, BtnAddChildrenTask, BtnShowCheck },
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