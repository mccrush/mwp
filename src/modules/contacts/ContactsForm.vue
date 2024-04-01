<template>
  <div class="col-12 col-md-6 col-lg-4 p-2">
    <div class="border rounded p-1">
      <div class="d-flex">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Название"
          v-model="item.title"
        />
        <BtnTrash
          class="ms-2"
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
          v-model="item.phone"
        />
        <BtnCopy class="border" @click="copyInBuffer($event)" />
      </div>
      <!-- -->
      <div class="input-group mt-1">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Email"
          v-model="item.email"
        />
        <BtnCopy class="border" @click="copyInBuffer($event)" />
      </div>
      <!-- -->
      <textarea
        rows="2"
        class="form-control mt-1"
        placeholder="Комментарий"
        v-model="item.description"
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
  emits: ['remove-item'],
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