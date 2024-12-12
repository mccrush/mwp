<template>
  <div class="row">
    <MenuList :items="dataDocRazdels" />
    <div class="col-9 col-lg-10 p-3">
      <h4 class="mb-3">Руководство пользователя</h4>
      <div v-for="razdel in dataDocRazdels" :key="razdel.alias">
        <h5 :id="razdel.alias">{{ razdel.title }}</h5>
        <component :is="razdel.component" />
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { dataDocRazdels } from './data/dataDocRazdels'

import MenuList from './../../components/templates/MenuList.vue'
import DocRazdel1 from './razdels/DocRazdel1.vue'
import DocRazdel2 from './razdels/DocRazdel2.vue'
import DocRazdel3 from './razdels/DocRazdel3.vue'
import DocRazdel4 from './razdels/DocRazdel4.vue'
import DocRazdel5 from './razdels/DocRazdel5.vue'
import DocRazdel6 from './razdels/DocRazdel6.vue'

export default {
  components: {
    MenuList,
    DocRazdel1,
    DocRazdel2,
    DocRazdel3,
    DocRazdel4,
    DocRazdel5,
    DocRazdel6
  },
  data() {
    return {
      dataDocRazdels
    }
  }
}
</script>