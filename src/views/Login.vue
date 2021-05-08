<template>
  <div class="row justify-content-center">
    <div class="col-12 col-sm-8 col-md-6 text-left">
      <p>Пользователь авторизовван {{ authIs }}</p>
      <form
        @submit.prevent="login"
        class="mt-5 mb-3 p-3 border ml-auto mr-auto max-width"
      >
        <h4 class="text-center mt-2 mb-4">Authorization</h4>
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
        <label for="password">Password</label>
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

          <button
            class="btn btn-light p-0 pl-2 pr-2 border"
            type="button"
            @click="passType = !passType"
          >
            <img
              v-if="passType"
              src="img/work_icons/eye-slash.svg"
              width="24"
              height="24"
              alt="Show password"
              class="opacity-06"
            />
            <img
              v-else
              src="img/work_icons/eye.svg"
              width="24"
              height="24"
              alt="Hide password"
              class="opacity-06"
            />
          </button>
        </div>
        <br />
        <button class="btn btn-success btn-block" type="submit">Login</button>
      </form>
    </div>
    <transition name="fade" mode="out-in">
      <Message v-if="error" />
    </transition>
  </div>
</template>

<script>
import Message from '@/components/Message'

export default {
  components: {
    Message
  },
  data() {
    return {
      email: '',
      password: '',
      passType: true,
      error: false,
      authIs: 'Нет'
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
          // Эмитеть событие на смену имени Компонента
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