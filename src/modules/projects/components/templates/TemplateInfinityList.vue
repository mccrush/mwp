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
          v-model.trim="item.title"
        />
        <BtnTrashFlat
          class="border"
          title="Удалить подзадачу"
          @click="$emit('delete-children-item', item.id)"
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
          @delete-children-item="deleteChildrenItem"
        />
      </div>
      <BtnAddChildrenTask
        v-if="item.childrens.length < 32"
        class="mt-1 ms-2"
        @click="addChildren"
      />
    </div>
  </div>
</template>

<script>
//import { copyInBuffer } from './../../../../helpers/copyInBuffer'
import { factoryTasks } from './../../../../factories/factoryTasks'

//import BtnCopy from './../../../../components/buttons/BtnCopy.vue'
import BtnTrashFlat from './../../../../components/buttons/BtnTrashFlat.vue'
import BtnAddChildrenTask from './../../../../components/buttons/BtnAddChildrenTask.vue'
import BtnShowCheck from './../../../../components/buttons/BtnShowCheck.vue'

export default {
  name: 'TemplateInfinityList',
  components: { BtnTrashFlat, BtnAddChildrenTask, BtnShowCheck },
  emits: ['delete-children-item'],
  props: {
    item: Object
  },
  methods: {
    addChildren() {
      const child = factoryTasks()
      this.item.childrens.push(child)
    },
    deleteChildrenItem(childrenId) {
      console.log('Templ. deleteChildrenItem() childrenId = ', childrenId)

      this.item.childrens = this.item.childrens.filter(
        item => item.id !== childrenId
      )

      //this.$emit('save-item')
    }
  }
}
</script>