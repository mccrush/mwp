<template>
  <div class="d-flex flex-row align-items-stretch">
    <div class="flex-shrink-1 border p-3" :class="{'menu': showMenu}">
      <button
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
      </button>

      <button class="btn btn-block btn-warning text-left mt-5">1. Требования</button>
      <button class="btn btn-block btn-warning text-left">2. Проектирование</button>
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
  width: 260px;
}

/* .menu-toogle {
  position: absolute;
  top: 20px;
} */
</style>
