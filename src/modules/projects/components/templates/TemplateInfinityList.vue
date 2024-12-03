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
        />
        <BtnTrashFlat
          class="border"
          title="Удалить подзадачу"
          @click="$emit('delete-children-item', item.id)"
        />
      </div>
      <BtnShowCheck
        v-if="nestingLevels < 4"
        class="btn btn-sm btn-dark ms-2"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#collapseExample' + item.id"
        aria-expanded="false"
        :aria-controls="'collapseExample' + item.id"
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
//import { copyInBuffer } from './../../../../helpers/copyInBuffer'
import { factoryTasks } from './../../../../factories/factoryTasks'

//import BtnCopy from './../../../../components/buttons/BtnCopy.vue'
import BtnTrashFlat from './../../../../components/buttons/BtnTrashFlat.vue'
import BtnAddChildrenTask from './../../../../components/buttons/BtnAddChildrenTask.vue'
import BtnShowCheck from './../../../../components/buttons/BtnShowCheck.vue'
//import BtnAddUnderTask from './../../../../components/buttons/BtnAddUnderTask.vue'

export default {
  name: 'TemplateInfinityList',
  components: {
    BtnTrashFlat,
    BtnAddChildrenTask,
    BtnShowCheck
  },
  emits: ['delete-children-item'],
  props: {
    item: Object,
    nestingLevels: Number,
    userMetaDataPremium: Boolean
  },
  methods: {
    addChildren() {
      const child = factoryTasks()
      this.item.childrens.push(child)
      //this.$emit('up-nesting-levels')
    },
    deleteChildrenItem(childrenId) {
      console.log('Templ. deleteChildrenItem() childrenId = ', childrenId)

      this.item.childrens = this.item.childrens.filter(
        item => item.id !== childrenId
      )
      //this.$emit('save-item')
    },

    canCreateUnderTask() {
      if (this.userMetaDataPremium) {
        if (this.item.childrens.length < 64) return true
      } else {
        if (this.item.childrens.length < 8) return true
      }
      return false
    }
  }
}
</script>