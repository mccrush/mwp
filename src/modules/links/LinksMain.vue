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
          @click="removeItemProject"
        />
      </div>
    </div>

    <div class="row p-2">
      <LinksForm
        v-for="(link, index) in item.links"
        :item="link"
        :index="index"
        :key="'id' + index"
        @remove-item="removeItem"
      />
    </div>

    <div class="row pt-2">
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
  </div>
</template>

<script>
import BtnTrash from './../../components/buttons/BtnTrash.vue'
import LinksForm from './LinksForm.vue'

export default {
  components: {
    BtnTrash,
    LinksForm
  },
  emits: ['remove-item'],
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
    removeItemProject() {
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
    },

    removeItem({ type, index }) {
      this.$emit('remove-item', { type, index })
    }
  }
}
</script>
