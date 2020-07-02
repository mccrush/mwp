<template>
  <div class="d-flex flex-row align-items-stretch">
    <div class="flex-shrink-1 p-3 menu">
      <!-- <button
        class="btn btn-sm btn-light float-right p-1 menu-toogle"
        @click="showMenu = !showMenu"
      >
        <img
          v-if="showMenu"
          src="@/assets/icons/chevron-left.svg"
          alt
          width="24"
          height="24"
          title="Закрыть"
        />
        <img
          v-else
          src="@/assets/icons/chevron-right.svg"
          alt
          width="24"
          height="24"
          title="Открыть"
        />
      </button>-->

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
    <div class="container-fluid w-100 border p-3">
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
