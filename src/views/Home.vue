<template>
  <div class="d-flex flex-row align-items-stretch">
    <div class="flex-shrink-1 align-self-stretch p-3 menu border-right">
      <router-link
        v-for="(but, index) in buttons"
        tag="button"
        :to="but.link"
        :key="'bt'+index"
        class="btn btn-block text-left"
        :style="'background:'+ but.color"
      >
        <span class="badge bg-light text-dark mr-2">{{index+1}}</span>
        <small>{{but.title}}</small>
      </router-link>
    </div>
    <div class="container-fluid w-100">
      <router-view />
    </div>
  </div>
</template>

<script>
import buttons from '@/data/buttons'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      buttons,
      showMenu: true
    }
  }
}
</script>

<style scoped>
.flex-row {
  height: -webkit-fill-available;
  margin-top: -56px;
  padding-top: 60px;
}
.menu {
  position: relative;
  width: 260px;
}

.b-yellow {
  background: #faedcb;
}

.b-green {
  background: #c9e4de;
}

.b-blue {
  background: #c6def1;
}

.b-purpur {
  background: #dbcdf0;
}

.b-pink {
  background: #f2c6de;
}
</style>
