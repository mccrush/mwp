<template>
  <div class="row">
    <MenuList :items="dataEulaRazdels" />
    <div class="col-9 col-lg-10 p-3">
      <h4 class="mb-3">Пользовательское соглашение</h4>
      <div v-for="razdel in dataEulaRazdels" :key="razdel.alias">
        <h5 :id="razdel.alias">{{ razdel.title }}</h5>
        <component :is="razdel.component" />
        <hr />
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