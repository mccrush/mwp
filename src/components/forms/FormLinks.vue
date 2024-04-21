<template>
  <div class="col-12 col-md-6 p-2">
    <div
      class="border-top border-dark-subtle rounded shadow-sm bg-body-tertiary p-3"
    >
      <div class="d-flex">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Название"
          v-model="item.title"
          @change="$emit('save-item')"
        />
        <!-- <div class="btn-group ms-1" role="group">
          <BtnArrUp @click="updatePositionUp" />
          <BtnArrDown @click="updatePositionDown" />
        </div> -->
        <BtnTrash
          class="d-flex align-items-center ms-1"
          title="Удалить ссылку"
          @click="$emit('remove-item', { type: item.type, index })"
        />
      </div>

      <!-- -->
      <div class="input-group mt-1">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Ссылка"
          v-model="item.link"
          @change="$emit('save-item')"
        />
        <BtnCopy class="border" @click="copyInBuffer($event)" />
        <BtnLink
          class="border"
          :class="{ disabled: !item.link }"
          :href="item.link"
          target="_blank"
          title="Открыть ссылку"
        />
      </div>
    </div>
    <!-- -->
  </div>
</template>

<script>
import { copyInBuffer } from './../../helpers/copyInBuffer'

import BtnArrUp from './../../components/buttons/BtnArrUp.vue'
import BtnArrDown from './../../components/buttons/BtnArrDown.vue'
import BtnTrash from './../../components/buttons/BtnTrash.vue'
import BtnCopy from './../../components/buttons/BtnCopy.vue'
import BtnLink from './../../components/buttons/BtnLink.vue'

export default {
  components: {
    BtnArrUp,
    BtnArrDown,
    BtnTrash,
    BtnCopy,
    BtnLink
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