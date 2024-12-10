<template>
  <div class="login-form col-md-4 border rounded m-auto p-3">
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
        Минимум: 8 символов, 1 цифра, 1 большая, 1 маленькая латинская буква.
        Например: f2Rs14vZw
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
import { factoryUsers } from './../../factories/factoryUsers'
import { createExampleProject } from './helpers/createExampleProject'

import BtnEyeHide from './components/buttons/BtnEyeHide.vue'
import BtnEyeShow from './components/buttons/BtnEyeShow.vue'
import BtnLogin from './components/buttons/BtnLogin.vue'

export default {
  components: { BtnEyeHide, BtnEyeShow, BtnLogin },
  data() {
    return {
      dataLogin: {
        login: { header: 'Аторизация', button: 'Войти' },
        create: { header: 'Регистрация', button: 'Зарегистрироваться' },
        restore: {
          header: 'Восстановление пароля',
          button: 'Восстановить пароль'
        }
      },
      mod: 'login',
      email: 'mccrush2027@gmail.com',
      password: 'm[pass]29081988',
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

    logIn() {
      if (this.email && this.password) {
        const loginData = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('logIn', loginData)
      } else if (!this.email) {
        //this.error = { type: 'email', text: 'Введите Email' }
        this.showMeesageForUser({
          message: { type: 'email', text: 'Введите Email' }
        })
      } else if (!this.password) {
        //this.error = { type: 'password', text: 'Введите пароль' }
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
          const userMetaData = factoryUsers()
          userMetaData.projects = createExampleProject
          const result = await this.$store.dispatch('registerUser', {
            loginData,
            userMetaData
          })

          if (result === 200) {
            this.$store.commit('setViewPage', 'PageConfirm')
          }
          //const newUser = factoryUsers(this.userId)
          //this.$store.dispatch('addItem', { item: newUser })
        } else {
          // this.error = {
          //   type: 'password',
          //   text: 'Пароль не соответствует требованиям безопасности'
          // }
          this.showMeesageForUser({
            message: {
              type: 'password',
              text: 'Пароль не соответствует требованиям безопасности'
            }
          })
        }
      } else if (!this.email) {
        //this.error = { type: 'email', text: 'Введите Email' }
        this.showMeesageForUser({
          message: { type: 'email', text: 'Введите Email' }
        })
      } else if (!this.password) {
        //this.error = { type: 'password', text: 'Введите пароль' }
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
        //this.error = { type: 'email', text: 'Введите Email' }
        this.showMeesageForUser({
          message: { type: 'email', text: 'Введите Email' }
        })
      }
    }
  }
}
</script>