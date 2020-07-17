<template>
  <div>
    <component :is="mode" />
  </div>
</template>

<script>
import LoginRead from '@/components/login/LoginRead'
import LoginEdit from '@/components/login/LoginEdit'

export default {
  components: {
    read: LoginRead,
    edit: LoginEdit
  },
  props: ['mode']
}
</script>

<style>
</style>