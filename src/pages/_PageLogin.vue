<template>
  <div class="row justify-content-center">
    <div class="my-vh100 col-12 pt-4">
      <form
        @submit.prevent="login"
        class="max-width border rounded text-left mt-5 mb-3 p-3 m-auto"
      >
        <h4 class="text-center mt-2 mb-4">Авторизация</h4>
        <label for="email">Email</label>
        <br />
        <input
          type="text"
          class="form-control"
          id="email"
          required
          v-model="email"
          placeholder="example@mail.ru"
        />
        <br />
        <label for="password">Пароль</label>
        <div class="input-group">
          <input
            :type="passType ? 'password' : 'text'"
            class="form-control"
            id="password"
            required
            v-model="password"
            ref="pass"
            maxlength="20"
          />
          <BtnEyeHide
            v-if="passType"
            class="border"
            @click="passType = !passType"
          />
          <BtnEyeShow v-else class="border" @click="passType = !passType" />
        </div>
        <BtnLogIn class="w-100 mt-3" />
      </form>
    </div>
    <transition name="fade" mode="out-in">
      <Message v-if="error" />
    </transition>
  </div>
</template>

<script>
import BtnEyeHide from './../components/buttons/BtnEyeHide.vue'
import BtnEyeShow from './../components/buttons/BtnEyeShow.vue'
import BtnLogIn from './../components/buttons/BtnLogIn.vue'

import Message from './../components/Message.vue'

export default {
  components: {
    BtnEyeHide,
    BtnEyeShow,
    BtnLogIn,
    Message
  },
  data() {
    return {
      email: '',
      password: '',
      passType: true,
      error: false
    }
  },
  methods: {
    showError() {
      this.error = true
      setTimeout(() => {
        this.error = false
      }, 4000)
    },
    async login() {
      const formData = {
        email: this.email,
        password: this.password
      }

      if (this.email && this.password) {
        try {
          await this.$store.dispatch('logIn', formData)
          //this.$emit('log-in')
        } catch (err) {
          this.showError()
          if (err.code === 'auth/invalid-email') {
            this.$store.commit('addMessage', {
              text: 'Некорректный адрес почты!',
              type: 'bg-danger'
            })
          } else if (err.code === 'auth/invalid-password') {
            this.$store.commit('addMessage', {
              text: 'Некорректный пароль!',
              type: 'bg-danger'
            })
          } else if (err.code === 'auth/wrong-password') {
            this.$store.commit('addMessage', {
              text: 'Неверный пароль!',
              type: 'bg-danger'
            })
          } else if (err.code === 'auth/user-not-found') {
            this.$store.commit('addMessage', {
              text: 'Пользователь с такой почтой не найден',
              type: 'bg-danger'
            })
          } else {
            this.$store.commit('addMessage', {
              text: 'Ошибка: ' + err.code,
              type: 'bg-danger'
            })
          }
        } finally {
        }
      } else {
        this.$store.commit('addMessage', {
          text: 'Ошибка: поля не заполнены',
          type: 'bg-danger'
        })
      }
    }
  }
}
</script>

<style scoped>
.max-width {
  max-width: 300px;
}

.opacity-06 {
  opacity: 0.6;
}
</style>