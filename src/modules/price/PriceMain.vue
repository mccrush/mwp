<template>
  <div class="p-3">
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
      <div class="col-12 col-sm-8 col-md-6 col-lg-4">
        <label for="customRange3" class="form-label small"
          >Период оплаты, до {{ getDateEndPro }}</label
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
        <BtnPay class="mt-3 w-100" @click="getConfirmationKey"></BtnPay>
      </div>
    </div>
  </div>
</template>

<script>
import { getDateAfterMonths } from './helpers/getDateAfterMonths'
import { getLocaleDateTimeFromDate } from './helpers/getLocaleDateTimeFromDate'

import BtnPay from './components/buttons/BtnPay.vue'

export default {
  name: 'PriceMain',
  components: { BtnPay },
  data() {
    return {
      period: 2,
      price: 480
    }
  },
  computed: {
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
        return getLocaleDateTimeFromDate(
          getDateAfterMonths(this.userMetaData.dateEndPro, this.period)
        )
      }
      return getLocaleDateTimeFromDate(getDateAfterMonths('', this.period))
    }
  },
  methods: {
    getLocaleDateTimeFromDate,
    async getConfirmationKey() {
      try {
        const res = await fetch('https://api.yookassa.ru/v3/payments', {
          method: 'POST',
          headers: {
            'Idempotence-Key': 'my-idem-potence-key',
            'Content-Type': 'application/json',
            Authorization:
              'Basic ' +
              btoa('1032599:test_fe-_OOs5UEnpyrx0sNcHTGz7RRzy7BrOjKPv8cWny_I')
          },
          body: JSON.stringify({
            amount: {
              value: this.summa,
              currency: 'RUB'
            },
            confirmation: {
              type: 'embedded'
            },
            capture: true,
            description: 'Оплата периода ' + this.period + ' мес.'
          })
        })

        const data = await JSON.parse(res.json())
        if (data) {
          console.log('getConfirmationKey() res data = ', data)
        }
      } catch (error) {
        console.error('getConfirmationKey() error = ', error)
      }
    }
  }
}
</script>