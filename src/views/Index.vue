<template>
  <div class="row">
    <MenuBar />
    <div class="col-9"></div>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'
// import buttons from '@/data/buttons'
// import devel from '@/frames/Devel'
// import tz from '@/frames/Tz'
// import project from '@/frames/Project'
// import test from '@/frames/Test'
// import help from '@/frames/Help'

export default {
  name: 'index',
  components: {
    MenuBar
    // devel,
    // tz,
    // project,
    // test,
    // help
  },
  data() {
    return {}
  }
}
</script>
