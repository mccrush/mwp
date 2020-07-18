<template>
  <div class="col-6 col-lg-4 p-2">
    <table class="table table-bordered border-left border-right table-sm m-0">
      <tr>
        <td class="w-50 border-right">
          <div class="input-group input-group-sm p-0">
            <input
              type="text"
              class="form-control form-control-sm border-0 rounded-0"
              v-model="login.name"
              @blur="update(login.id)"
            />
            <button
              @click="remove(login.id)"
              class="btn btn-outline-light rounded-0"
              type="button"
              title="Remove"
            >r</button>
          </div>
        </td>
        <td class>
          <div class="input-group input-group-sm p-0">
            <input
              type="text"
              class="form-control form-control-sm border-0 rounded-0"
              v-model="login.host"
              @blur="update(login.id)"
            />
            <a
              class="btn btn-light rounded-0"
              type="button"
              title="Open"
              target="_blank"
              :href="login.host"
            >o</a>
          </div>
        </td>
      </tr>
      <tr>
        <td class="w-50 border-right">
          <div class="input-group input-group-sm p-0">
            <input
              type="text"
              class="form-control form-control-sm border-0 rounded-0"
              v-model="login.login"
              @blur="update(login.id)"
            />
            <button class="btn btn-light rounded-0" type="button" title="Copy">c</button>
          </div>
        </td>
        <td class>
          <div class="input-group input-group-sm p-0">
            <input
              type="text"
              class="form-control form-control-sm border-0 rounded-0"
              v-model="login.pass"
              @blur="update(login.id)"
            />
            <button class="btn btn-light rounded-0" type="button" title="Copy">c</button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['login', 'logins'],
  methods: {
    remove(id) {},
    update(id) {
      const login = {
        id: this.login.id,
        name: this.login.name,
        host: this.login.host,
        login: this.login.login,
        pass: this.login.pass
      }

      // const index = this.logins.findIndex(item => item.id === id)
      // this.logins[index] = log

      // localStorage.setItem('logins', JSON.stringify(this.logins))

      this.$store.dispatch('updateLogin', { doc: login })
    }
  }
}
</script>

<style scoped>
.btn {
  width: 31px;
}
</style>