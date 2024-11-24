<template>
  <div class="p-2">
    <h4>Настройки аккаунта</h4>
    <div>Email: {{ userEmail }}</div>
    <div>
      <button
        class="btn btn-sm btn-dark text-danger mt-2"
        @click="deleteAccaunt"
      >
        Удалить аккаунт
      </button>
    </div>

    <div><p>Срок до которого активна Pro подписка</p></div>
    <div><p>Возможность продления подписки</p></div>
    <div><p>Возможность отключения подписки</p></div>
    <div><p>Возможность обновить пароль</p></div>
    <div><p>Возможность обновить почту</p></div>
  </div>
</template>

<script>
import { factoryUsers } from './../../factories/factoryUsers'

export default {
  computed: {
    userEmail() {
      return this.$store.getters.userEmail
    },
    userMetaData() {
      return this.$store.getters.userMetaData
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