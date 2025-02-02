<template>
  <div class="p-3">
    <h4>Настройки аккаунта</h4>

    <div class="row border rounded mt-3 p-3">
      <div class="row">
        <div class="col-12">Email: {{ userEmail }}</div>
      </div>
    </div>

    <!-- <div>
      <pre>{{ userMetaData }}</pre>
    </div> -->

    <div class="row border rounded mt-3 p-3">
      <div class="col-12 lh-1">
        <p>
          Pro функции:
          <strong>{{ getSubscribeStatus(userMetaData.dateEndPro) }}</strong>
        </p>
        <div v-if="userMetaData.dateEndPro">
          <div class="d-sm-flex">
            <div>Дата начала Pro функций:</div>
            <div class="mt-2 ms-sm-2 mt-sm-0">
              <small class="font-monospace border rounded mt-1 ps-1 pe-1">
                {{ getLocaleDateFromDateDigit(userMetaData.dateStartPro) }}
              </small>
            </div>
          </div>

          <div class="d-sm-flex mt-3">
            <div>Дата окончания Pro функций:</div>
            <div class="mt-2 ms-sm-2 mt-sm-0">
              <small class="font-monospace border rounded ps-1 pe-1">
                {{ getLocaleDateFromDateDigit(userMetaData.dateEndPro) }}
              </small>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="!userMetaData.dateEndPro"
        class="col-12 col-sm-6 col-md-4 mt-3"
      >
        <BtnUserProfile
          title="Включить Pro функции"
          class="w-100"
          :disabled="devMode !== 'development'"
          @click="$store.commit('setViewPage', 'PagePrice')"
        />
      </div>

      <div v-if="userMetaData.dateEndPro" class="col-12 col-sm-6 col-md-4 mt-3">
        <BtnUserProfile
          title="Продлить Pro функции"
          class="w-100"
          @click="$store.commit('setViewPage', 'PagePrice')"
        />
      </div>

      <!-- <div v-if="userMetaData.dateEndPro" class="col-12 col-sm-6 col-md-4 mt-3">
        <BtnUserProfile
          title="Отключить Pro функции"
          class="w-100"
          @click="offUserSubscription"
        />
      </div> -->
    </div>

    <div v-if="devMode === 'development'" class="row border rounded mt-3 p-3">
      <div class="col-12 col-md-3">
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
      <div class="col-12 col-md-3">
        <BtnUserProfile
          v-if="userMetaData.dateEndPro"
          title="Отключить Pro функции"
          class="text-primary w-100"
          @click="proOff"
        />
        <BtnUserProfile
          v-else
          title="Включить Pro функции"
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

    getSubscribeStatus(dateEndPro) {
      return dateEndPro ? 'Включены' : 'Отключены'
    },

    ///////////////////////////////////////////
    // Доступны толкь в режиме разработки

    updateUserMetaData(userMetaData) {
      this.$store.dispatch('updateUserMetaData', { userMetaData })
    },
    resetUserMetaData() {
      if (confirm('Точно сбросить все данные?')) {
        const userMetaData = factory_users()
        this.$store.dispatch('resetUserMetaData', { userMetaData })
      }
    },

    proOff() {
      const userMetaData = this.userMetaData
      userMetaData.dateStartPro = ''
      userMetaData.dateEndPro = ''
      this.updateUserMetaData(userMetaData)
    },
    proOn() {
      const userMetaData = this.userMetaData
      userMetaData.dateStartPro = String(new Date())
      userMetaData.dateEndPro = getDatePlusMonths(3)
      this.updateUserMetaData(userMetaData)
    }
    /////////////////////////////////////////////////////
  }
}
</script>