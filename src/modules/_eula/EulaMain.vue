<template>
  <div class="row">
    <MenuList :items="dataEulaRazdels" />
    <div class="col-9 col-lg-10 p-5 my-vh100 overflow-y-auto">
      <h4 class="mb-4">Пользовательское соглашение</h4>
      <div v-for="razdel in dataEulaRazdels" :key="razdel.alias" class="mb-5">
        <h5 :id="razdel.alias" class="mb-3">{{ razdel.title }}</h5>
        <component :is="razdel.component" />
      </div>
    </div>
  </div>
</template>

<script>
import { dataEulaRazdels } from './data/dataEulaRazdels'

import MenuList from './../../components/templates/MenuList.vue'
import EulaRazdel1 from './razdels/EulaRazdel1.vue'
import EulaRazdel2 from './razdels/EulaRazdel2.vue'
import EulaRazdel3 from './razdels/EulaRazdel3.vue'

export default {
  components: {
    MenuList,
    EulaRazdel1,
    EulaRazdel2,
    EulaRazdel3
  },
  data() {
    return {
      dataEulaRazdels
    }
  }
}
</script>