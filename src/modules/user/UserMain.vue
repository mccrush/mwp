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
          Pro функции:
          <strong>{{ getSubscribeStatus(userMetaData.subscription) }}</strong>
        </p>
        <div v-if="userMetaData.subscription">
          <p class="mb-2">
            Дата начала Pro функций:
            <small class="font-monospace border rounded ps-1 pe-1">
              {{ getLocaleDateFromDateDigit(userMetaData.dateStartPremium) }}
            </small>
          </p>
          <p class="mb-2">
            Дата окончания Pro функций:
            <small class="font-monospace border rounded ps-1 pe-1">
              {{ getLocaleDateFromDateDigit(userMetaData.dateEndPremium) }}
            </small>
          </p>
        </div>
        <div v-if="userMetaData.proStatus">
          <p>
            Функции Pro доступны до:
            <small class="font-monospace border rounded ps-1 pe-1">
              {{ getLocaleDateFromDateDigit(userMetaData.dateEndPremium) }}
            </small>
          </p>
        </div>
      </div>
      <div v-if="!userMetaData.subscription" class="col-3">
        <BtnUserProfile
          title="Включить Pro функции"
          class="w-100"
          :disabled="devMode !== 'development'"
          @click="onUserSubscription"
        />
      </div>
      <div v-if="userMetaData.subscription" class="col-3">
        <BtnUserProfile
          title="Продлить Pro функции"
          class="w-100"
          @click="renewUserSubscription"
        />
      </div>
      <div v-if="userMetaData.subscription" class="col-3">
        <BtnUserProfile
          title="Отключить Pro функции"
          class="w-100"
          @click="offUserSubscription"
        />
      </div>
    </div>

    <div v-if="devMode === 'development'" class="row border rounded mt-3 p-3">
      <div class="col-3">
        <BtnUserProfile
          title="Сбросить данные"
          class="text-danger w-100"
          @click="resetUserMetaData"
        />
      </div>
      <!-- <div class="col-3">
        <BtnUserProfile
          title="Удалить аккаунт"
          class="text-danger w-100"
          @click="deleteAccaunt"
        />
      </div> -->
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

    <div class="row border rounded mt-3 p-3">
      <div class="col-12">
        <a
          href="https://doc.mwpapp.ru/eula/"
          target="_blank"
          title="Открыть Пользовательское соглашение"
          >Пользовательское соглашение</a
        >
      </div>
    </div>

    <div class="row border rounded mt-3 p-3">
      <div class="col-12">
        Для удаления своего аккаунта и всех связанных с ним данных, напишите нам
        на почту mccrush2027@gmail.com
      </div>
    </div>

    <!-- <div class="row border rounded mt-3 p-3">
      <div class="col-3">
        <BtnUserProfile
          title="Данные в JSON"
          class="w-100"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseUserData"
          aria-expanded="false"
          aria-controls="collapseUserData"
        />
      </div>
      <div class="col-3">
        <BtnUserProfile
          title="Копировать"
          class="w-100"
          @click="copyInBufferData(userMetaData.projects.links)"
        />
      </div>
      <div class="col-12">
        <div class="collapse small mt-1" id="collapseUserData">
          <pre
            >{{ userMetaData.projects }}
            </pre
          >
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import getDateNow from './../../helpers/getDateNow'
import getLocaleDateFromDateDigit from './../../helpers/getLocaleDateFromDateDigit'
import getDatePlusMonths from './../../helpers/getDatePlusMonths'
//import { copyInBufferText } from './../../helpers/copyInBufferText'
import { factory_users } from '../login/factories/factory_users'

import BtnUserProfile from './components/buttons/BtnUserProfile.vue'

const devMode = import.meta.env.MODE

export default {
  name: 'UserMain',
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
      newEmail: '',
      devMode
    }
  },
  methods: {
    // copyInBufferData(data) {
    //   const pretty = JSON.stringify(data, undefined, 2)
    //   copyInBufferText(pretty)

    //   this.$store.commit('addMessage', {
    //     text: 'Данные скопированы в буфер обмена',
    //     bg: 'alert-success'
    //   })
    // },
    // copyInBufferText,
    getDateNow,
    getLocaleDateFromDateDigit,
    getDatePlusMonths,

    ///////////////////////////////////////////
    updateUserMetaData(userMetaData) {
      this.$store.dispatch('updateUserMetaData', { userMetaData })
    },
    resetUserMetaData() {
      if (confirm('Точно сбросить все данные?')) {
        const userMetaData = factory_users()
        this.$store.dispatch('resetUserMetaData', { userMetaData })
      }
    },

    exportUserProjects() {
      console.log('LOG: Данные будут эеспортированны в JSON формате')
    },
    ///////////////////////////////////////////
    getSubscribeStatus(subscription) {
      return subscription ? 'Включены' : 'Отключены'
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
      userMetaData.proStatus = false
      userMetaData.subscription = false
      this.updateUserMetaData(userMetaData)
    },
    proOn() {
      const userMetaData = this.userMetaData
      userMetaData.proStatus = true
      userMetaData.subscription = true
      userMetaData.dateStartPremium = getDateNow()
      userMetaData.dateEndPremium = getDatePlusMonths(3)
      this.updateUserMetaData(userMetaData)
    }
    /////////////////////////////////////////////////////
  }
}
</script>