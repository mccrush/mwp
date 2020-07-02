<template>
  <div class="d-flex flex-row align-items-stretch">
    <div class="flex-shrink-1 border p-3" :class="{'menu': showMenu}">
      <div class="btn btn-sm btn-light float-right menu-toogle" @click="showMenu = !showMenu">
        <img src="@/assets/icons/bootstrap.svg" alt width="32" height="32" title="Bootstrap" />
      </div>
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
  width: 200px;
}

/* .menu-toogle {
  position: absolute;
  top: 20px;
} */
</style>
