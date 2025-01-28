<template>
  <div class="mt-1">
    <div class="d-flex justify-content-between">
      <div class="input-group">
        <div class="input-group-text border ps-2 pe-2">
          <input
            type="checkbox"
            class="form-check-input border mt-0"
            @change="toggleStatus"
            :checked="item.status === 'done'"
          />
        </div>
        <input
          type="text"
          :id="'inputField' + item.id"
          class="form-control form-control-sm"
          maxlength="128"
          v-model.trim="item.title"
          @change="$emit('save-item')"
        />
        <BtnTrashFlat
          class="border"
          title="Удалить подзадачу"
          @click="$emit('delete-children-item', item.id)"
        />
      </div>
      <BtnShowCheck
        v-if="nestingLevels < 4"
        class="ms-2"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#collapseExample' + item.id"
        aria-expanded="false"
        :aria-controls="'collapseExample' + item.id"
        :childrensLength="item.childrens.length"
      />
      <!-- <BtnAddUnderTask
        v-else-if="canCreateUnderTask() && nestingLevels < 4"
        class="btn btn-sm btn-dark ms-2"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#collapseExample' + item.id"
        aria-expanded="false"
        :aria-controls="'collapseExample' + item.id"
        @click="addChildren"
      /> -->
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
          :nestingLevels="nestingLevels + 1"
          :userMetaDataPremium="userMetaDataPremium"
          @save-item="$emit('save-item')"
          @delete-children-item="deleteChildrenItem"
        />
      </div>
      <BtnAddChildrenTask
        v-if="canCreateUnderTask()"
        class="mt-1 ms-2"
        @click="addChildren"
      />
    </div>
  </div>
</template>

<script>
import { factory_tasks } from '../../factories/factory_tasks'

import BtnTrashFlat from './../../../../components/buttons/BtnTrashFlat.vue'
import BtnAddChildrenTask from './../../../../components/buttons/BtnAddChildrenTask.vue'
import BtnShowCheck from './../../../../components/buttons/BtnShowCheck.vue'

export default {
  name: 'TemplateInfinityList',
  components: {
    BtnTrashFlat,
    BtnAddChildrenTask,
    BtnShowCheck
  },
  emits: ['save-item', 'delete-children-item'],
  props: {
    item: Object,
    nestingLevels: Number,
    userMetaDataPremium: Boolean
  },
  methods: {
    addChildren() {
      const child = factory_tasks()
      this.item.childrens.push(child)
      this.$emit('save-item')
    },
    deleteChildrenItem(childrenId) {
      console.log('Templ. deleteChildrenItem() childrenId = ', childrenId)

      this.item.childrens = this.item.childrens.filter(
        item => item.id !== childrenId
      )
      this.$emit('save-item')
    },

    canCreateUnderTask() {
      if (this.userMetaDataPremium) {
        if (this.item.childrens.length < 64) return true
      } else {
        if (this.item.childrens.length < 8) return true
      }
      return false
    },

    toggleStatus() {
      this.item.status = this.item.status === 'active' ? 'done' : 'active'
      this.$emit('save-item')
    }
  }
}
</script>