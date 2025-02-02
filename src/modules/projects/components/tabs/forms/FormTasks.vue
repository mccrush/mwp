<template>
  <div class="col-12 p-2 pb-0">
    <div
      class="border-top border-dark-subtle rounded shadow-sm bg-body-tertiary p-2"
    >
      <div class="d-flex justify-content-between">
        <div class="d-flex w-75">
          <div class="input-group">
            <div class="input-group-text border ps-2 pe-2">
              <input
                type="checkbox"
                class="form-check-input border mt-0"
                aria-label="Checkbox"
                @change="toggleStatus"
                :checked="item.status === 'done'"
              />
            </div>
            <input
              type="text"
              :id="'inputTitle' + item.id"
              class="form-control form-control-sm"
              maxlength="128"
              aria-label="Задача"
              v-model.trim="item.title"
              @change="$emit('save-item')"
            />
          </div>
          <BtnTrash
            class="d-flex align-items-center ms-1"
            title="Удалить задачу"
            @click="$emit('remove-item', { type: item.type, id: item.id })"
          />
        </div>

        <BtnShowCheck
          class=""
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapseUnderTask' + item.id"
          aria-expanded="false"
          :aria-controls="'collapseUnderTask' + item.id"
          :childrensLength="item.childrens.length"
        />
      </div>

      <div class="collapse mt-1" :id="'collapseUnderTask' + item.id">
        <div
          v-if="item.childrens.length"
          class="card card-body border mb-1 p-2 pt-1"
        >
          <TemplateInfinityList
            v-for="children in item.childrens"
            :key="children.id"
            :item="children"
            :nestingLevels="nestingLevels"
            :userMetaDataPremium="userMetaData.proStatus"
            @save-item="$emit('save-item')"
            @delete-children-item="deleteChildrenItem"
          />
        </div>

        <BtnAddChildrenTask v-if="canCreateUnderTask()" @click="addChildren" />
      </div>
    </div>
    <!-- -->
  </div>
</template>

<script>
import { copyInBuffer } from './../../../../../helpers/copyInBuffer'
import { factory_tasks } from '../../../factories/factory_tasks'

import BtnArrUp from './../../../../../components/buttons/BtnArrUp.vue'
import BtnArrDown from './../../../../../components/buttons/BtnArrDown.vue'
import BtnTrash from './../../../../../components/buttons/BtnTrash.vue'
import BtnCopy from './../../../../../components/buttons/BtnCopy.vue'
import BtnLink from './../../../../../components/buttons/BtnLink.vue'
import BtnAddChildrenTask from './../../../../../components/buttons/BtnAddChildrenTask.vue'
import BtnShowCheck from './../../../../../components/buttons/BtnShowCheck.vue'

import TemplateInfinityList from './../../templates/TemplateInfinityList.vue'

export default {
  name: 'FormTasks',
  components: {
    BtnArrUp,
    BtnArrDown,
    BtnTrash,
    BtnCopy,
    BtnLink,
    BtnAddChildrenTask,
    BtnShowCheck,
    TemplateInfinityList
  },
  emits: ['save-item', 'remove-item'],
  props: {
    item: Object,
    index: Number
  },
  data() {
    return {
      passType: true,
      nestingLevels: 1
    }
  },
  computed: {
    userMetaData() {
      return this.$store.getters.userMetaData
    }
  },
  methods: {
    addChildren() {
      const child = factory_tasks()
      this.item.childrens.push(child)
      this.$emit('save-item')
    },
    deleteChildrenItem(childrenId) {
      //console.log('Per. deleteChildrenItem() childrenId = ', childrenId)
      this.item.childrens = this.item.childrens.filter(
        item => item.id !== childrenId
      )
      this.$emit('save-item')
    },
    toggleStatus() {
      this.item.status = this.item.status === 'active' ? 'done' : 'active'
      this.$emit('save-item')
    },
    // updatePositionUp() {
    //   this.item.position--
    //   this.$emit('save-item')
    // },
    // updatePositionDown() {
    //   this.item.position++
    //   this.$emit('save-item')
    // },
    copyInBuffer,
    canCreateUnderTask() {
      if (this.userMetaData.proStatus) {
        if (this.item.childrens.length < 64) return true
      } else {
        if (this.item.childrens.length < 8) return true
      }
      return false
    }
  }
}
</script>