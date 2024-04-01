<template>
  <div class="col-12 col-sm-8 col-md-9 col-lg-10 col-xl-10 col-xxl-10">
    <!-- Общая информация о проекте -->
    <div class="row pt-2">
      <div class="col-12 col-md-6">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="Название проекта"
          v-model.trim="item.title"
          @change="saveItem"
        />
      </div>
      <div class="col-12 col-md-5 ps-md-0">
        <input
          type="number"
          class="form-control form-control-sm"
          v-model.number="item.position"
          @change="saveItem"
        />
      </div>
      <div class="col-12 col-md-1 mt-md-0 ps-md-0">
        <BtnTrash
          class="text-muted"
          title="Удалить проект"
          @click="removeItem"
        />
      </div>
      <div class="col-12 mt-2">
        <textarea
          rows="3"
          class="form-control"
          placeholder="Описание"
          v-model="item.description"
          @change="saveItem"
        ></textarea>
      </div>
    </div>

    <div class="row pt-2"></div>
  </div>
</template>

<script>
import BtnTrash from './../../components/buttons/BtnTrash.vue'

export default {
  components: {
    BtnTrash
  },
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  computed: {
    currentUserId() {
      return this.$store.getters.currentUserId
    }
  },
  methods: {
    removeItem() {
      if (confirm('Точно удалить?')) {
        this.$store.commit('setProjectId', id)

        this.$store.dispatch('removeItemRT', {
          item: this.item,
          currentUserId: this.currentUserId
        })
      }
    },

    saveItem() {
      this.$store.dispatch('updateItemRT', {
        item: this.item,
        currentUserId: this.currentUserId
      })
    }
  }
}
</script>
