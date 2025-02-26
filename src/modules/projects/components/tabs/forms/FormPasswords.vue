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
        <BtnTrash
          class="d-flex align-items-center ms-1"
          title="Удалить пароль"
          @click="$emit('remove-item', { type: item.type, id: item.id })"
        />
      </div>

      <!-- -->
      <div class="input-group mt-1">
        <input
          type="text"
          :id="'inputLink' + item.id"
          class="form-control form-control-sm"
          placeholder="Ссылка на авторизацию"
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

      <!-- -->
      <div class="input-group mt-1">
        <input
          type="text"
          :id="'inputLogin' + item.id"
          class="form-control form-control-sm"
          placeholder="Логин"
          maxlength="64"
          v-model.trim="login"
          @change="saveItem"
        />
        <BtnCopy v-if="login" class="border" @click="copyInBuffer($event)" />
      </div>
      <!-- -->
      <div class="input-group mt-1">
        <input
          :type="passType ? 'password' : 'text'"
          autocomplete="off"
          :id="'inputPass' + item.id"
          class="form-control form-control-sm"
          placeholder="Пароль"
          maxlength="32"
          v-model.trim="password"
          @change="saveItem"
        />
        <BtnEyeHide
          v-if="password && passType"
          class="border"
          @click="passType = !passType"
        />
        <BtnEyeShow
          v-else-if="password && !passType"
          class="border"
          @click="passType = !passType"
        />
        <BtnCopy v-if="password" class="border" @click="copyInBuffer($event)" />
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
import { encryption, decryption } from './../../../../../helpers/encryption'
import { copyInBuffer } from './../../../../../helpers/copyInBuffer'
import {getFoolLink} from './../../../helpers/getFoolLink'

import BtnTrash from './../../../../../components/buttons/BtnTrash.vue'
import BtnEyeHide from './../../../../../components/buttons/BtnEyeHide.vue'
import BtnEyeShow from './../../../../../components/buttons/BtnEyeShow.vue'
import BtnCopy from './../../../../../components/buttons/BtnCopy.vue'
import BtnLink from './../../../../../components/buttons/BtnLink.vue'

export default {
  name: 'FormPasswords',
  components: {
    BtnTrash,
    BtnEyeHide,
    BtnEyeShow,
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
      login: decryption(this.item.login) || '',
      password: decryption(this.item.password) || '',
      link: this.item.link,
      //login: this.item.login,
      //password: this.item.password,
      passType: true
    }
  },
  methods: {
    saveItem() {
      if (this.login.length) {
        this.item.login = encryption(this.login)
      } else {
        this.item.login = ''
      }

      if (this.password.length) {
        this.item.password = encryption(this.password)
      } else {
        this.item.password = ''
      }
      //console.log('before save this.item.login = ', this.item.login)
      //console.log('before save this.item.password = ', this.item.password)
      this.$emit('save-item')
    },
    copyInBuffer,
    getFoolLink
  },
  watch: {
    item(n) {
      this.login = decryption(n.login)
      this.password = decryption(n.password)
      this.link = n.link
    }
  }
}
</script>