<template>
  <div class="col-12 col-md-6 p-2">
    <div
      class="border-top border-dark-subtle rounded shadow-sm bg-body-tertiary p-3"
    >
      <div class="d-flex">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Имя"
          v-model="item.title"
          @change="$emit('save-item')"
        />
        <BtnTrash
          class="d-flex align-items-center ms-2"
          title="Удалить контакт"
          @click="$emit('remove-item', { type: item.type, index })"
        />
      </div>

      <!-- -->
      <div class="input-group mt-1">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Телефон"
          v-model="phone"
          @change="saveItem"
        />
        <BtnCopy class="border" @click="copyInBuffer($event)" />
      </div>
      <!-- -->
      <div class="input-group mt-1">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Email"
          v-model="email"
          @change="saveItem"
        />
        <BtnCopy class="border" @click="copyInBuffer($event)" />
      </div>
      <!-- -->
      <!-- <textarea
        rows="2"
        class="form-control mt-1"
        v-model="item.description"
        @change="$emit('save-item')"
      ></textarea> -->
    </div>
  </div>
</template>

<script>
import { encryption, decryption } from './../../helpers/encryption'
import { copyInBuffer } from './../../helpers/copyInBuffer'

import BtnTrash from './../../components/buttons/BtnTrash.vue'
import BtnCopy from './../../components/buttons/BtnCopy.vue'

export default {
  components: {
    BtnTrash,
    BtnCopy
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
      phone: decryption(this.item.phone),
      email: decryption(this.item.email),
      passType: true
    }
  },
  methods: {
    saveItem() {
      if (this.phone.length) this.item.phone = encryption(this.phone)
      if (this.email.length) this.item.email = encryption(this.email)
      this.$emit('save-item')
    },
    copyInBuffer
  }
}
</script>