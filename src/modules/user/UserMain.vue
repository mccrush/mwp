<template>
  <div class="p-2">
    <!-- <div>Отображаемое имя: {{ currentUser.providerData[0].displayName }}</div> -->
    <h4>Настройки аккаунта</h4>
    <div>Email: {{ currentUser.providerData[0].email }}</div>
    <div>
      <button
        class="btn btn-sm btn-dark text-danger mt-2"
        @click="deleteAccaunt"
      >
        Удалить аккаунт
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  },
  methods: {
    deleteAccaunt() {
      if (
        confirm(
          'Также будут удалены все данные пользователя. Вы уверенны в том, что хотите удалить аккаунт?'
        )
      ) {
        console.log('Аккаунт успешно удален')
      }
    }
  }
}
</script>