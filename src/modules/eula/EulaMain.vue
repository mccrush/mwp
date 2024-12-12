<template>
  <div class="row">
    <MenuList :items="dataRazdels" />
    <div class="col-9 col-lg-10"></div>
  </div>
</template>

<script>
import { dataRazdels } from './data/dataRazdels'

import MenuList from './../../components/templates/MenuList.vue'

export default {
  components: { MenuList },
  data() {
    return {
      dataRazdels
    }
  }
}
</script>