<template>
  <div class="col-12 p-2 pb-0">
    <div
      class="border-top border-dark-subtle rounded shadow-sm bg-body-tertiary p-2"
    >
      <div class="d-flex justify-content-between">
        <div class="d-flex w-75">
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
              :id="'inputTitle' + item.id"
              class="form-control form-control-sm"
              placeholder="Название"
              maxlength="32"
              v-model.trim="item.title"
              @change="$emit('save-item')"
            />
          </div>
          <BtnTrash
            class="d-flex align-items-center ms-1"
            title="Удалить ссылку"
            @click="$emit('remove-item', { type: item.type, id: item.id })"
          />
        </div>

        <button
          class="btn btn-sm btn-dark"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapseExample' + item.id"
          aria-expanded="false"
          :aria-controls="'collapseExample' + item.id"
        >
          Open
        </button>
      </div>
      <div class="collapse mt-2" :id="'collapseExample' + item.id">
        <div v-if="item.childrens.length" class="card card-body border p-2">
          <TemplateInfinityList
            v-for="(children, index) in item.childrens"
            :key="children.id"
            :item="children"
            :class="{ 'ms-4': index >= 2 }"
          />
        </div>

        <BtnAddChildrenTask v-else class="" @click="addChildren" />
      </div>

      <!-- -->
      <!-- <div class="input-group mt-1">
        <input
          type="text"
          :id="'inputLink' + item.id"
          class="form-control form-control-sm"
          placeholder="URL ссылка"
          maxlength="256"
          v-model.trim="item.link"
          @change="$emit('save-item')"
        />
        <BtnCopy
          v-if="item.link"
          class="border"
          @click="copyInBuffer($event)"
        />
        <BtnLink
          v-if="item.link"
          class="border"
          :href="item.link"
          target="_blank"
          title="Открыть ссылку"
        />
      </div> -->
    </div>
    <!-- -->
  </div>
</template>

<script>
//import { Collapse } from 'bootstrap'
import { copyInBuffer } from './../../../../../helpers/copyInBuffer'
import { factoryTasks } from './../../../../../factories/factoryTasks'

import BtnArrUp from './../../../../../components/buttons/BtnArrUp.vue'
import BtnArrDown from './../../../../../components/buttons/BtnArrDown.vue'
import BtnTrash from './../../../../../components/buttons/BtnTrash.vue'
import BtnCopy from './../../../../../components/buttons/BtnCopy.vue'
import BtnLink from './../../../../../components/buttons/BtnLink.vue'
import BtnAddChildrenTask from './../../../../../components/buttons/BtnAddChildrenTask.vue'

import TemplateInfinityList from './../../templates/TemplateInfinityList.vue'

export default {
  components: {
    BtnArrUp,
    BtnArrDown,
    BtnTrash,
    BtnCopy,
    BtnLink,
    BtnAddChildrenTask,
    TemplateInfinityList
  },
  emits: ['save-item', 'remove-item'],
  props: {
    item: {
      type: Object,
      default: null
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      passType: true
    }
  },
  methods: {
    addChildren() {
      const child = factoryTasks()
      this.item.childrens.push(child)
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
    copyInBuffer
  }
}
</script>