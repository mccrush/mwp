<template>
  <div class="d-flex flex-row align-items-stretch">
    <div class="flex-shrink-1 align-self-stretch p-3 pl-0 menu border-right">
      <button
        v-for="(but, index) in buttons"
        type="button"
        :key="'bt'+index"
        class="btn btn-block text-left pl-2"
        :style="'background:'+ but.color"
        @click="comp = but.comp"
      >
        <span class="badge bg-light text-dark mr-2">{{index+1}}</span>
        <small>{{but.title}}</small>
      </button>
    </div>
    <div class="container-fluid w-100">
      <component :is="comp" />
    </div>
  </div>
</template>

<script>
import buttons from '@/data/buttons'
import devel from '@/frames/Devel'
import tz from '@/frames/Tz'
import project from '@/frames/Project'
import test from '@/frames/Test'
import help from '@/frames/Help'

export default {
  name: 'index',
  components: {
    devel,
    tz,
    project,
    test,
    help
  },
  data() {
    return {
      buttons,
      showMenu: true,
      comp: 'devel'
    }
  }
}
</script>

<style scoped>
.flex-row {
  height: -webkit-fill-available;
  margin-top: -56px;
  padding-top: 56px;
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
