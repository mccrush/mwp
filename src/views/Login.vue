<template>
  <div class="row justify-content-center">
    <vue-headful title="Авторизация" description="Авторизация" />
    <div class="col-12 col-sm-8 col-md-6 text-left">
      <form @submit.prevent="login" class="mt-5 mb-3 p-3 shadow-sm ml-auto mr-auto max-width">
        <h4 class="text-center mt-2 mb-4">Авторизация</h4>
        <label for="email">Почта</label>
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

          <div class="input-group-append">
            <button
              class="btn btn-light p-0 pl-2 pr-2 border"
              type="button"
              @click="passType = !passType"
            >
              <img
                v-if="passType"
                src="@/assets/icons/eye-slash.svg"
                width="24"
                height="24"
                alt="Показать пароль"
                class="opacity-06"
              />
              <img
                v-else
                src="@/assets/icons/eye.svg"
                width="24"
                height="24"
                alt="Скрыть пароль"
                class="opacity-06"
              />
            </button>
          </div>
        </div>
        <br />
        <button class="btn btn-success btn-block" type="submit">Войти</button>
      </form>
    </div>
    <transition name="fade" mode="out-in">
      <Message v-if="error" />
    </transition>
  </div>
</template>

<script>
import { auth } from '@/main.js'
import vueHeadful from 'vue-headful'
import Message from '@/components/Message'

export default {
  components: {
    vueHeadful,
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
  beforeMount() {
    if (auth.currentUser) {
      this.$router.push('/admin')
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
          this.$router.push('/admin')
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