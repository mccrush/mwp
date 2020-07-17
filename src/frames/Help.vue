<template>
  <div class="row">
    <div class="col-12">
      <div class="border-bottom p-2 pl-0">
        <button
          @click="mode = 'read'"
          class="btn btn-light btn-sm"
          :class="mode === 'read' ? ' active' : ''"
        >Read</button>
        <button
          @click="mode = 'edit'"
          class="btn btn-light btn-sm ml-2"
          :class="mode === 'edit' ? ' active' : ''"
        >Edit</button>
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