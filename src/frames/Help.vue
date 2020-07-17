<template>
  <div class="row">
    <div class="col-12">
      <div class="border-bottom p-2">
        <button @click="mode = 'read'" class="btn btn-light btn-sm">Read</button>
        <button @click="mode = 'edit'" class="btn btn-light btn-sm ml-3">Edit</button>
      </div>
      <Login :mode="mode" />
    </div>
  </div>
</template>

<script>
import Login from '@/components/login/Login'

export default {
  components: {
    Login
  },
  data() {
    return {
      mode: 'read'
    }
  }
}
</script>