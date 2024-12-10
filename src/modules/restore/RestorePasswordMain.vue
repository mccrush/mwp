<template>
  <div class="p-3">
    <h4>Введите новый пароль</h4>

    <div class="row border rounded mt-3 p-3">
      <div class="row mt-2">
        <span class="small mb-2"
          >Минимум: 8 символов, 1 цифра, 1 большая, 1 маленькая латинская
          буква.<br />
          Например: f2Rs14vZw</span
        >
        <div class="col-4">
          <input
            type="text"
            class="form-control form-control-sm"
            v-model.trim="newPassword"
          />
        </div>
        <div class="col-3 ps-0">
          <BtnRestorePass
            title="Обновить Пароль"
            class="w-100"
            :disabled="isPasswordCorrect"
            @click="updateUserPassword"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BtnRestorePass from './components/buttons/BtnRestorePass.vue'

export default {
  components: { BtnRestorePass },
  data() {
    return {
      newPassword: '',
      regexpPassword: '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$'
    }
  },
  computed: {
    isPasswordCorrect() {
      if (
        this.newPassword.length >= 8 &&
        this.newPassword.match(this.regexpPassword)
      ) {
        return false
      }
      return true
    }
  },
  methods: {
    async updateUserPassword() {
      if (this.newPassword) {
        if (
          this.newPassword.length >= 8 &&
          this.newPassword.match(this.regexpPassword)
        ) {
          const res = await this.$store.dispatch('updateUserPassword', {
            password: this.newPassword
          })
          if (res === 200) {
            this.newPassword = ''
            this.$store.commit('addMessage', {
              text: 'Пароль успешно обновлен',
              bg: 'alert-success'
            })
            setTimeout(() => {
              this.$store.commit('setViewPage', 'PageProjects')
            }, 3600)
          }
        } else {
          this.$store.commit('addMessage', {
            text: 'Пароль не соответствует требованиям безопасности',
            bg: 'alert-danger'
          })
        }
      } else {
        this.$store.commit('addMessage', {
          text: 'Введите пароль',
          bg: 'alert-warning'
        })
      }
    }
  }
}
</script>