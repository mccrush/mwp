<template>
  <div class="login-form col-sm-8 col-md-6 col-lg-4 border rounded m-auto p-3">
    <h4 class="text-center mt-2">{{ dataLogin[mod].header }}</h4>

    <div class="mt-3">
      <label class="form-label" for="email">Email</label>
      <input
        type="text"
        class="form-control"
        :class="{ 'is-valid': email.match(regexpEmail) }"
        id="email"
        required
        v-model.trim="email"
        placeholder="username@email.com"
        aria-describedby="emailHelp"
        minlength="5"
        maxlength="64"
      />
      <div
        v-if="showMessage && error && error.type === 'email'"
        id="emailHelp"
        class="form-text text-danger lh-1"
      >
        {{ error.text }}
      </div>
    </div>

    <div v-if="mod === 'login' || mod === 'create'" class="mt-3">
      <label class="form-label" for="password">Пароль</label>
      <div class="input-group">
        <input
          :type="passType ? 'password' : 'text'"
          class="form-control"
          :class="{ 'is-valid': password.match(regexpPassword) }"
          id="password"
          required
          v-model.trim="password"
          ref="pass"
          aria-describedby="passwordHelp"
          minlength="8"
          maxlength="32"
          @keyup.enter="auth"
        />
        <BtnEyeHide
          v-if="passType"
          class="border"
          @click="passType = !passType"
        />
        <BtnEyeShow v-else class="border" @click="passType = !passType" />
      </div>
      <div
        v-if="showMessage && error && error.type === 'password'"
        id="passwordHelp"
        class="form-text text-danger lh-1"
      >
        {{ error.text }}
      </div>
      <div
        v-else-if="mod === 'create'"
        id="passwordHelp"
        class="form-text lh-1"
      >
        <span>
          Минимум: 8 символов, 1 цифра, 1 большая, 1 маленькая латинская буква.
          Например: f2Rs14vZw
        </span>
        <div class="border rounded-1 text-primary-emphasis mt-2 p-2">
          Нажимая на кнопку «Зарегистрироваться», вы принимаете
          <a
            href="https://doc.mwpapp.ru/eula/"
            target="_blank"
            title="Открыть соглашение"
            >«Пользовательское соглашение»</a
          >
        </div>
      </div>
    </div>

    <BtnLogin class="w-100 mt-3" :title="dataLogin[mod].button" @click="auth">{{
      dataLogin[mod].button
    }}</BtnLogin>

    <div class="d-flex justify-content-between mt-3">
      <BtnLogin
        v-if="mod === 'create' || mod === 'restore'"
        class="btn btn-sm btn-dark text-body-secondary w-50"
        @click="mod = 'login'"
        ><small>{{ dataLogin['login'].button }}</small></BtnLogin
      >
      <BtnLogin
        v-if="mod === 'login' || mod === 'restore'"
        class="btn btn-sm btn-dark text-body-secondary w-50"
        @click="mod = 'create'"
      >
        <small>{{ dataLogin['create'].button }}</small></BtnLogin
      >
      <BtnLogin
        v-if="mod === 'login' || mod === 'create'"
        class="btn btn-sm btn-dark text-body-secondary w-50"
        @click="mod = 'restore'"
        ><small>{{ dataLogin['restore'].button }}</small></BtnLogin
      >
    </div>
  </div>
</template>

<script>
import { factory_users } from './factories/factory_users'

import BtnEyeHide from './components/buttons/BtnEyeHide.vue'
import BtnEyeShow from './components/buttons/BtnEyeShow.vue'
import BtnLogin from './components/buttons/BtnLogin.vue'

const devMode = import.meta.env.MODE
const devEmail = import.meta.env.VITE_LOGIN
const devPass = import.meta.env.VITE_PASSWORD

export default {
  name: 'LoginForm',
  components: { BtnEyeHide, BtnEyeShow, BtnLogin },
  data() {
    return {
      dataLogin: {
        login: { header: 'Авторизация', button: 'Войти' },
        create: { header: 'Регистрация', button: 'Зарегистрироваться' },
        restore: {
          header: 'Восстановление пароля',
          button: 'Восстановить пароль'
        }
      },
      mod: 'login',
      email: devMode === 'development' ? devEmail : '',
      password: devMode === 'development' ? devPass : '',
      passType: true,
      error: null,
      showMessage: false,
      regexpEmail: '^\\S+@\\S+\\.\\S+$',
      regexpPassword: '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$'
    }
  },
  computed: {
    userId() {
      return this.$store.getters.userId
    }
  },
  methods: {
    showMeesageForUser({ message }) {
      this.error = message
      this.showMessage = true
      setTimeout(() => {
        this.showMessage = false
      }, 4800)
    },
    auth() {
      switch (this.mod) {
        case 'login':
          this.logIn()
          break
        case 'create':
          this.createAccaunt()
          break
        case 'restore':
          this.restorePassword()
          break
      }
    },

    async logIn() {
      if (this.email && this.password) {
        const loginData = {
          email: this.email,
          password: this.password
        }

        const result = await this.$store.dispatch('logIn', loginData)

        if (result === 400) {
          this.$store.commit('addMessage', {
            text: 'Ошибка авторизации! Проверьте правильность логина и пароля',
            bg: 'alert-danger'
          })
        }
      } else if (!this.email) {
        this.showMeesageForUser({
          message: { type: 'email', text: 'Введите Email' }
        })
      } else if (!this.password) {
        this.showMeesageForUser({
          message: { type: 'password', text: 'Введите пароль' }
        })
      }
    },

    async createAccaunt() {
      if (this.email && this.password) {
        if (
          this.password.length >= 8 &&
          this.password.match(this.regexpPassword)
        ) {
          this.error = null
          this.showMessage = false

          const loginData = {
            email: this.email,
            password: this.password
          }
          const userMetaData = factory_users()

          const result = await this.$store.dispatch('registerUser', {
            loginData,
            userMetaData
          })

          if (result === 200) {
            this.$store.commit('addMessage', {
              text: 'Проверьте почту и подтвердите Email',
              bg: 'alert-primary'
            })
          } else {
            this.$store.commit('addMessage', {
              text: 'Ошибка при создании аккаунта',
              bg: 'alert-danger'
            })
          }
        } else {
          this.showMeesageForUser({
            message: {
              type: 'password',
              text: 'Пароль не соответствует требованиям безопасности'
            }
          })
        }
      } else if (!this.email) {
        this.showMeesageForUser({
          message: { type: 'email', text: 'Введите Email' }
        })
      } else if (!this.password) {
        this.showMeesageForUser({
          message: { type: 'password', text: 'Введите пароль' }
        })
      }
    },

    async restorePassword() {
      if (this.email) {
        const result = await this.$store.dispatch('restoreUserPassword', {
          email: this.email
        })

        this.$store.commit('addMessage', {
          text: 'Ссылка для сброса пароля отправлена вам на Email',
          bg: 'alert-primary'
        })

        this.email = ''
      } else {
        this.showMeesageForUser({
          message: { type: 'email', text: 'Введите Email' }
        })
      }
    }
  }
}
</script>