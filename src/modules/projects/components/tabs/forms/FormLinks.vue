<template>
  <div class="col-12 col-md-6 p-2">
    <div
      class="border-top border-dark-subtle rounded shadow-sm bg-body-tertiary p-3"
    >
      <div class="d-flex">
        <div class="input-group">
          <input
            type="text"
            :id="'inputTitle' + item.id"
            class="form-control form-control-sm"
            placeholder="Название"
            maxlength="32"
            v-model.trim="item.title"
            @change="$emit('save-item')"
          />
          <BtnCopy
            v-if="item.title"
            class="border"
            @click="copyInBuffer($event)"
          />
        </div>
        <!-- <div class="btn-group ms-1" role="group">
          <BtnArrUp @click="updatePositionUp" />
          <BtnArrDown @click="updatePositionDown" />
        </div> -->
        <BtnTrash
          class="d-flex align-items-center ms-1"
          title="Удалить ссылку"
          @click="$emit('remove-item', { type: item.type, id: item.id })"
        />
      </div>

      <!-- -->
      <div class="input-group mt-1">
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
          :href="getFoolLink(item.link)"
          target="_blank"
          title="Открыть ссылку"
        />
      </div>
    </div>
    <!-- -->
  </div>
</template>

<script>
import { copyInBuffer } from './../../../../../helpers/copyInBuffer'
import {getFoolLink} from './../../../helpers/getFoolLink'

import BtnArrUp from './../../../../../components/buttons/BtnArrUp.vue'
import BtnArrDown from './../../../../../components/buttons/BtnArrDown.vue'
import BtnTrash from './../../../../../components/buttons/BtnTrash.vue'
import BtnCopy from './../../../../../components/buttons/BtnCopy.vue'
import BtnLink from './../../../../../components/buttons/BtnLink.vue'

export default {
  name: 'FormLinks',
  components: {
    BtnArrUp,
    BtnArrDown,
    BtnTrash,
    BtnCopy,
    BtnLink
  },
  emits: ['save-item', 'remove-item'],
  props: {
    item: Object,
    index: Number
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
    copyInBuffer,
    getFoolLink
  }
}
</script>