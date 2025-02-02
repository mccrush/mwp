<template>
  <div class="p-3">
    <h4>Оформление Pro функций</h4>
    <p class="m-0">Выберите период оплаты</p>
    <p class="lh-sm small">
      От 1 месяца до года. При оформлении на год,
      <span class="text-primary-emphasis">2 месяца в подарок!</span>
    </p>
    <div>
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
      <BtnPay class="mt-3 w-100"></BtnPay>
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
    summa() {
      if (this.period == 12) return 4800
      return this.period * this.price
    },
    getDateEndPro() {
      return getLocaleDateTimeFromDate(getDateAfterMonths(this.period))
    }
  }
}
</script>