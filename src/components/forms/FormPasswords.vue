<template>
  <div class="col-12 col-md-6 p-2">
    <div class="rounded shadow-sm bg-body-tertiary p-3">
      <div class="d-flex">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Название"
          v-model="item.title"
          @change="$emit('save-item')"
        />
        <BtnTrash
          class="d-flex align-items-center ms-2"
          title="Удалить пароль"
          @click="$emit('remove-item', { type: item.type, index })"
        />
      </div>

      <!-- -->
      <div class="input-group mt-1">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Логин"
          v-model="item.login"
          @change="$emit('save-item')"
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
          v-model="item.password"
          @change="$emit('save-item')"
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
      <textarea
        rows="1"
        class="form-control mt-1"
        v-model="item.description"
        @change="$emit('save-item')"
      ></textarea>
    </div>
  </div>
</template>

<script>
import BtnTrash from './../../components/buttons/BtnTrash.vue'
import BtnEyeHide from './../../components/buttons/BtnEyeHide.vue'
import BtnEyeShow from './../../components/buttons/BtnEyeShow.vue'
import BtnCopy from './../../components/buttons/BtnCopy.vue'

export default {
  components: {
    BtnTrash,
    BtnEyeHide,
    BtnEyeShow,
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
      passType: true
    }
  },
  methods: {
    copyInBuffer(e) {
      const el = e.target.parentNode.parentNode.firstChild
      navigator.clipboard.writeText(el.value)
    }
  }
}
</script>