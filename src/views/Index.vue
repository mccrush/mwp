<template>
  <div class="row">
    <MenuBar />
    <transition name="fade" mode="out-in">
      <component :is="frameName" />
    </transition>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar'

import Info from '@/frames/Info'
import Pass from '@/frames/Pass'
import Contacts from '@/frames/Contacts'

export default {
  name: 'index',
  components: {
    MenuBar,
    Info,
    Pass,
    Contacts
  },
  data() {
    return {}
  },
  computed: {
    frameName() {
      return this.$store.getters.frameName
    }
  }
}
</script>
