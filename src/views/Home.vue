<template>
  <div class="d-flex flex-row align-items-stretch">
    <div class="flex-shrink-1 border p-3 menu">
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

      <button class="b-yellow btn btn-block text-left">
        <span class="badge bg-light text-dark mr-2">1</span>
        <small>Требования</small>
      </button>
      <button class="b-green btn btn-block text-left">
        <span class="badge bg-light text-dark mr-2">2</span>
        <small>Проектирование</small>
      </button>
      <button class="b-blue btn btn-block text-left">
        <span class="badge bg-light text-dark mr-2">3</span>
        <small>Разработка</small>
      </button>
      <button class="b-purpur btn btn-block text-left">
        <span class="badge bg-light text-dark mr-2">4</span>
        <small>Внедрение</small>
      </button>
      <button class="b-pink btn btn-block text-left">
        <span class="badge bg-light text-dark mr-2">5</span>
        <small>Сопровождение</small>
      </button>
    </div>
    <div class="content w-100 border p-3">Home</div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
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
