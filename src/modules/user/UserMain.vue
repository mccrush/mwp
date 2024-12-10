<template>
  <div class="p-3">
    <h4>Настройки аккаунта</h4>

    <div class="row border rounded mt-3 p-3">
      <div class="row">
        <div class="col-12">Email: {{ userEmail }}</div>
      </div>
      <!-- <div class="row mt-2">
        <div class="col-4">
          <input
            type="text"
            class="form-control form-control-sm"
            v-model="newEmail"
          />
        </div>
        <div class="col-3 ps-0">
          <BtnUserProfile
            title="Обновить Email"
            class="w-100"
            @click="updateUserEmail"
          />
        </div>
      </div> -->

      <!-- <div class="row mt-2">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" />
        </div>
        <div class="col-3 ps-0">
          <BtnUserProfile title="Обновить Пароль" class="w-100" />
        </div>
      </div> -->
    </div>

    <div class="row border rounded mt-3 p-3">
      <div class="col-12 lh-1">
        <p>
          Подписка Pro:
          <strong>{{ getSubscribeStatus(userMetaData.subscription) }}</strong>
        </p>
        <div v-if="userMetaData.subscription">
          <p class="mb-2">
            Дата начала подписки:
            {{ getLocaleDateFromDateDigit(userMetaData.dateStartPremium) }}
          </p>
          <p class="mb-2">
            Дата окончания подписки:
            {{ getLocaleDateFromDateDigit(userMetaData.dateEndPremium) }}
          </p>
        </div>
        <div v-if="userMetaData.premium">
          <p>
            Функции Pro доступны до:
            {{ getLocaleDateFromDateDigit(userMetaData.dateEndPremium) }}
          </p>
        </div>
      </div>
      <div v-if="!userMetaData.subscription" class="col-3">
        <BtnUserProfile
          title="Оформить подписку"
          class="w-100"
          @click="onUserSubscription"
        />
      </div>
      <div v-if="userMetaData.subscription" class="col-3">
        <BtnUserProfile
          title="Продлить подписку"
          class="w-100"
          @click="renewUserSubscription"
        />
      </div>
      <div v-if="userMetaData.subscription" class="col-3">
        <BtnUserProfile
          title="Отменить подписку"
          class="w-100"
          @click="offUserSubscription"
        />
      </div>
    </div>

    <div class="row border rounded mt-3 p-3">
      <div class="col-3">
        <BtnUserProfile
          title="Сбросить данные"
          class="text-danger w-100"
          @click="resetUserMetaData"
        />
      </div>
      <div class="col-3">
        <BtnUserProfile
          title="Удалить аккаунт"
          class="text-danger w-100"
          @click="deleteAccaunt"
        />
      </div>
      <div class="col-3">
        <BtnUserProfile
          v-if="userMetaData.subscription"
          title="Отключить Pro"
          class="text-primary w-100"
          @click="proOff"
        />
        <BtnUserProfile
          v-else
          title="Сделать Pro"
          class="text-primary w-100"
          @click="proOn"
        />
      </div>
    </div>
  </div>
</template>

<script>
import getDateNow from './../../helpers/getDateNow'
import getLocaleDateFromDateDigit from './../../helpers/getLocaleDateFromDateDigit'
import getDatePlusMonths from './../../helpers/getDatePlusMonths'
import { factoryUsers } from './../../factories/factoryUsers'

import BtnUserProfile from './components/buttons/BtnUserProfile.vue'

export default {
  components: { BtnUserProfile },
  computed: {
    userEmail() {
      return this.$store.getters.userEmail
    },
    userMetaData() {
      return this.$store.getters.userMetaData
    }
  },
  data() {
    return {
      newEmail: ''
    }
  },
  methods: {
    getDateNow,
    getLocaleDateFromDateDigit,
    getDatePlusMonths,
    //////////////////////////////////////
    // async updateUserEmail() {
    //   if (this.newEmail) {
    //     const res = await this.$store.dispatch('updateUserEmail', {
    //       email: this.newEmail
    //     })
    //     if (res === 200) {
    //       this.newEmail = ''
    //       this.$store.commit('addMessage', {
    //         text: 'Email успешно обновлен',
    //         bg: 'alert-success'
    //       })
    //     }
    //   }
    // },
    ///////////////////////////////////////////
    updateUserMetaData(userMetaData) {
      this.$store.dispatch('updateUserMetaData', { userMetaData })
    },
    resetUserMetaData() {
      if (confirm('Точно сбросить все данные?')) {
        const userMetaData = factoryUsers()
        this.$store.dispatch('resetUserMetaData', { userMetaData })
      }
    },
    deleteAccaunt() {
      if (
        confirm(
          'Также будут удалены все данные пользователя. Вы уверенны, что хотите удалить аккаунт?'
        )
      ) {
        console.log('LOG: Аккаунт успешно удален')
      }
    },
    ///////////////////////////////////////////
    getSubscribeStatus(subscription) {
      return subscription ? 'Активна' : 'Не активна'
    },

    onUserSubscription() {
      console.log('LOG: Подписка будет оформлена...')
    },

    renewUserSubscription() {
      console.log('LOG: Подписка будет продлена...')
    },

    offUserSubscription() {
      if (confirm('Уверены, что хотите отменить подписку?')) {
        const userMetaData = this.userMetaData
        userMetaData.subscription = false
        this.updateUserMetaData(userMetaData)

        this.$store.commit('addMessage', {
          text: 'Подписка успешно отменена',
          bg: 'alert-success'
        })
      }
    },

    proOff() {
      const userMetaData = this.userMetaData
      userMetaData.premium = false
      userMetaData.subscription = false
      this.updateUserMetaData(userMetaData)
    },
    proOn() {
      const userMetaData = this.userMetaData
      userMetaData.premium = true
      userMetaData.subscription = true
      userMetaData.dateStartPremium = getDateNow()
      userMetaData.dateEndPremium = getDatePlusMonths(3)
      this.updateUserMetaData(userMetaData)
    }
    /////////////////////////////////////////////////////
  }
}
</script>