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
            placeholder="Имя"
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
          title="Удалить контакт"
          @click="$emit('remove-item', { type: item.type, index })"
        />
      </div>

      <!-- Цикл свободных полей -->
      <div
        v-for="(field, index) in item.fields"
        :key="field + index"
        class="input-group mt-1"
      >
        <input
          type="text"
          :id="'inputField' + index"
          class="form-control form-control-sm"
          placeholder="Введите значение"
          :value="getDecriptField(field)"
          disabled
        />

        <BtnCopy v-if="field" class="border" @click="copyInBuffer($event)" />
        <BtnTrashFlat
          v-if="field"
          class="border"
          title="Удалить поле"
          @click="removeContactFiled(field)"
        />
      </div>

      <!-- Добавление нового свободного пля -->
      <div class="input-group mt-1">
        <input
          type="text"
          :id="'addFirstField' + item.id"
          class="form-control form-control-sm"
          placeholder="Добавить поле"
          v-model.trim="newField"
          @keyup.enter="addContactFiled"
        />

        <BtnAddContactField
          v-if="newField"
          class="border"
          @click="addContactFiled"
        />
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
import { encryption, decryption } from './../../../../../helpers/encryption'
import { copyInBuffer } from './../../../../../helpers/copyInBuffer'

import BtnTrash from './../../../../../components/buttons/BtnTrash.vue'
import BtnCopy from './../../../../../components/buttons/BtnCopy.vue'
import BtnAddContactField from './../../../../../components/buttons/BtnAddContactField.vue'
import BtnTrashFlat from './../../../../../components/buttons/BtnTrashFlat.vue'

export default {
  components: {
    BtnTrash,
    BtnCopy,
    BtnAddContactField,
    BtnTrashFlat
  },
  emits: ['save-item', 'remove-item'],
  props: {
    item: Object,
    index: Number,
    project: Object
  },
  data() {
    return {
      passType: true,
      newField: ''
    }
  },
  methods: {
    copyInBuffer,
    getDecriptField(field) {
      return decryption(field)
    },
    addContactFiled() {
      if (this.newField) {
        const encField = encryption(this.newField)
        this.item.fields.push(encField)
        this.newField = ''
        this.$emit('save-item')
      }
    },
    removeContactFiled(field) {
      this.item.fields = this.item.fields.filter(item => item !== field)
      this.$emit('save-item')
    }
  }
}
</script>