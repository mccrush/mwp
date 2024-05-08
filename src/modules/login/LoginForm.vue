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
        placeholder="example@mail.ru"
        aria-describedby="emailHelp"
      />
      <div
        v-if="error && error.type === 'email'"
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
          minlength="8"
          aria-describedby="passwordHelp"
        />
        <BtnEyeHide
          v-if="passType"
          class="border"
          @click="passType = !passType"
        />
        <BtnEyeShow v-else class="border" @click="passType = !passType" />
      </div>
      <div
        v-if="error && error.type === 'password'"
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
        Минимум: 8 символов, 1 цифра, 1 большая, 1 маленькая латинская буква
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
import { factoryUserApp } from './helpers/factoryUserApp'

import BtnEyeHide from './buttons/BtnEyeHide.vue'
import BtnEyeShow from './buttons/BtnEyeShow.vue'
import BtnLogin from './buttons/BtnLogin.vue'

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
      email: '',
      password: '',
      passType: true,
      error: null,
      regexpEmail: '^\\S+@\\S+\\.\\S+$',
      regexpPassword: '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$'
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  },
  methods: {
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
        this.error = { type: 'email', text: 'Введите Email' }
      } else if (!this.password) {
        this.error = { type: 'password', text: 'Введите пароль' }
      }
    },
    async createAccaunt() {
      if (this.email && this.password) {
        if (
          this.password.length >= 8 &&
          this.password.match(this.regexpPassword)
        ) {
          this.error = null

          const loginData = {
            email: this.email,
            password: this.password
          }

          await this.$store.dispatch('registerUser', loginData)
          const newUser = factoryUserApp(this.currentUser.uid)
          this.$store.dispatch('addItem', { item: newUser })
        } else {
          this.error = {
            type: 'password',
            text: 'Пароль не соответствует требованиям безопасности'
          }
        }
      } else if (!this.email) {
        this.error = { type: 'email', text: 'Введите Email' }
      } else if (!this.password) {
        this.error = { type: 'password', text: 'Введите пароль' }
      }
    },
    restorePassword() {
      if (this.email) {
        this.$store.dispatch('resetPass', { email: this.email })
      } else {
        this.error = { type: 'email', text: 'Введите Email' }
      }
    }
  }
}
</script>