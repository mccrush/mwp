<template>
  <div class="row p-3">
    <div class="col-12 col-md-5 p-md-0 pe-3">
      <h4>Оформление Pro функций</h4>
      <p class="m-0">Выберите период оплаты</p>
      <p class="lh-sm small">
        От 1 месяца до года.<br />При оформлении на год,
        <span class="text-primary-emphasis">2 месяца в подарок!</span>
      </p>

      <div v-if="userMetaData.dateEndPro" class="d-sm-flex mt-2 mb-2">
        <div>Дата окончания Pro функций:</div>
        <div class="mt-2 ms-sm-2 mt-sm-0">
          <small class="font-monospace border rounded ps-1 pe-1">
            {{ getLocaleDateTimeFromDate(userMetaData.dateEndPro) }}
          </small>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <label for="customRange3" class="form-label small"
            >Период оплаты, до
            {{ getLocaleDateTimeFromDate(getDateEndPro) }}</label
          >
          <input
            type="range"
            class="form-range"
            min="1"
            max="12"
            step="1"
            id="customRange3"
            v-model.number="period"
          />
          <div class="d-flex justify-content-between">
            <div>{{ period }} мес.</div>
            <div>
              {{ summa }} ₽
              <span
                v-if="period == 12"
                class="ms-1 text-body-tertiary text-decoration-line-through small"
                >5760 ₽</span
              >
            </div>
          </div>
          <!-- Еще нужно сохранять дату приобретения Pro -->
          <BtnPay class="mt-3 w-100" @click="getPayId"></BtnPay>

          <div class="border rounded-1 lh-1 small p-2 mt-3">
            Нажимая на кнопку «Оплатить»,<br />вы принимаете
            <a
              href="https://doc.mwpapp.ru/eula/"
              target="_blank"
              title="Открыть Пользовательское соглашение"
              >«Пользовательское соглашение»</a
            >
          </div>

          <div class="border rounded-1 text-center lh-1 small p-2 mt-2">
            Деменко Сергей Николаевич<br />ИНН&nbsp;222514507009<br />
            mccrush2027@gmail.com
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-7 mt-3 mt-md-0">
      <PriceTable />
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { getDateNow2 } from './helpers/getDateNow2'
import { getDateAfterMonths } from './helpers/getDateAfterMonths'
import { getLocaleDateTimeFromDate } from './helpers/getLocaleDateTimeFromDate'
import { supabase } from './../../supabase/supabaseClient'

import BtnPay from './components/buttons/BtnPay.vue'
import PriceTable from './components/PriceTable.vue'

export default {
  name: 'PriceMain',
  components: { BtnPay, PriceTable },
  data() {
    return {
      period: 2,
      price: 480
    }
  },
  computed: {
    userId() {
      return this.$store.getters.userId
    },
    userEmail() {
      return this.$store.getters.userEmail
    },
    userMetaData() {
      return this.$store.getters.userMetaData
    },
    summa() {
      if (this.period == 12) return 4800
      return this.period * this.price
    },
    getDateEndPro() {
      if (this.userMetaData.dateEndPro) {
        return getDateAfterMonths(this.userMetaData.dateEndPro, this.period)
      }
      return getDateAfterMonths('', this.period)
    }
  },
  methods: {
    getLocaleDateTimeFromDate,
    async getPayId() {
      try {
        const { data, error } = await supabase.functions.invoke(
          'browser-with-cors',
          {
            body: JSON.stringify({
              idempotencekey: uuidv4(),
              userid: this.userId,
              datestatr: getDateNow2(),
              dateend: this.getDateEndPro,
              summa: this.summa,
              description: 'Оплата периода ' + this.period + ' мес.'
            })
          }
        )

        if (error) throw error

        if (data) {
          //console.log('getPayId() data =', data)
          const { confirmation } = data
          //console.log('getPayId() message =', message)
          //console.log('getPayId() confirmation =', confirmation)
          this.$store.dispatch('logOut')
          window.location.href = confirmation
        }
      } catch (error) {
        console.error('getPayId() error = ', error)
      }
    }
  }
}
</script>