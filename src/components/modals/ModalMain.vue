<template>
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ modalTitle }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Закрыть"
          ></button>
        </div>
        <component :is="modalType" />
        <!-- <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Закрыть
      </button>
    </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import ModalUser from './ModalUser.vue'
import ModalPremium from './ModalPremium.vue'

export default {
  components: {
    ModalUser,
    ModalPremium
  },
  computed: {
    modalType() {
      return this.$store.getters.modalType
    },
    modalTitle() {
      if (this.modalType === 'ModalUser') {
        return 'Настройки пользователя'
      } else if (this.modalType === 'ModalPremium') {
        return 'Premium подписка'
      }
    }
  }
}
</script>