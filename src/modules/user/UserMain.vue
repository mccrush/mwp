<template>
  <div class="p-3">
    <h4>Настройки аккаунта</h4>

    <div class="row border rounded mt-3 p-3">
      <div class="row">
        <div class="col-12">Email: {{ userEmail }}</div>
      </div>
      <div class="row mt-2">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" />
        </div>
        <div class="col-3 ps-0">
          <BtnUserProfile title="Обновить Email" class="w-100" />
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-4">
          <input type="text" class="form-control form-control-sm" />
        </div>
        <div class="col-3 ps-0">
          <BtnUserProfile title="Обновить Пароль" class="w-100" />
        </div>
      </div>
    </div>

    <div v-if="userMetaData.premium" class="row border rounded mt-3 p-3">
      <div class="col-12 lh-1">
        <p>Статус Про подписки: {{ userMetaData.premium }}</p>
        <p>
          Дата начала Про подписки:
          {{ getLocaleDateFromDateDigit(userMetaData.dateStartPremium) }}
        </p>
        <p>
          Дата окончания Про подписки:
          {{ getLocaleDateFromDateDigit(userMetaData.dateEndPremium) }}
        </p>
      </div>
      <div class="col-3">
        <BtnUserProfile title="Продлить подписку" class="w-100" />
      </div>
      <div class="col-3">
        <BtnUserProfile title="Отменить подписку" class="w-100" />
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
          v-if="userMetaData.premium"
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
  methods: {
    getDateNow,
    getLocaleDateFromDateDigit,
    getDatePlusMonths,
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

    getRemainingDays() {
      return 5
    },
    proOff() {
      const userMetaData = this.userMetaData
      userMetaData.premium = false
      userMetaData.dateStartPremium = getDateNow()
      userMetaData.dateEndPremium = getDatePlusMonths(3)
      this.updateUserMetaData(userMetaData)
    },
    proOn() {
      const userMetaData = this.userMetaData
      userMetaData.premium = true
      userMetaData.dateStartPremium = getDateNow()
      userMetaData.dateEndPremium = getDatePlusMonths(3)
      this.updateUserMetaData(userMetaData)
    }
  }
}
</script>