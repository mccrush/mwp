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
          v-model.trim="item.title"
          @change="$emit('save-item')"
        />
        <BtnTrash
          class="d-flex align-items-center ms-2"
          title="Удалить пароль"
          @click="$emit('remove-item', { type: item.type, index })"
        />
      </div>

      <!-- -->
      <!-- <div class="input-group mt-1">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Ссылка"
          v-model.trim="item.link"
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
      </div> -->
      <!-- -->
      <div class="input-group mt-1">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Логин"
          v-model="login"
          @change="saveItem"
        />
        <BtnCopy class="border" @click="copyInBuffer($event)" />
      </div>
      <!-- -->
      <div class="input-group mt-1">
        <input
          :type="passType ? 'password' : 'text'"
          autocomplete="new-password"
          class="form-control form-control-sm"
          placeholder="Пароль"
          v-model="password"
          @change="saveItem"
        />
        <BtnEyeHide
          v-if="passType"
          class="border"
          @click="passType = !passType"
        />
        <BtnEyeShow v-else class="border" @click="passType = !passType" />
        <BtnCopy class="border" @click="copyInBuffer($event)" />
      </div>
      <!-- -->
      <!-- <textarea
        rows="2"
        class="form-control mt-1"
        v-model.trim="item.description"
        @change="$emit('save-item')"
      ></textarea> -->
    </div>
  </div>
</template>

<script>
import { encryption, decryption } from './../../helpers/encryption'
import { copyInBuffer } from './../../helpers/copyInBuffer'

import BtnTrash from './../../components/buttons/BtnTrash.vue'
import BtnEyeHide from './../../components/buttons/BtnEyeHide.vue'
import BtnEyeShow from './../../components/buttons/BtnEyeShow.vue'
import BtnCopy from './../../components/buttons/BtnCopy.vue'
import BtnLink from './../../components/buttons/BtnLink.vue'

export default {
  components: {
    BtnTrash,
    BtnEyeHide,
    BtnEyeShow,
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
      login: decryption(this.item.login),
      //login: this.item.login,
      password: decryption(this.item.password),
      //password: this.item.password,
      passType: true
    }
  },
  methods: {
    saveItem() {
      if (this.login.length) this.item.login = encryption(this.login)
      if (this.password.length) this.item.password = encryption(this.password)
      this.$emit('save-item')
    },
    copyInBuffer
  }
  // watch: {
  //   item(n) {
  //     this.login = decryption(n.login)
  //     this.password = decryption(n.password)
  //   }
  // }
}
</script>