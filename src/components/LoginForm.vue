<template>
  <div class="col-6 col-lg-4 p-2">
    <table class="table table-bordered border-left border-right table-sm m-0">
      <tr>
        <td class="w-50 border-right">
          <div class="input-group input-group-sm p-0">
            <input
              type="text"
              class="form-control form-control-sm border-0 rounded-0"
              v-model.trim="login.name"
              @blur="update($event, login.id)"
            />
            <button
              @click="remove(login.id)"
              class="btn btn-outline-light rounded-0 p-0"
              type="button"
              title="Remove"
            >
              <img
                src="@/assets/icons/trash.svg"
                class="m-0 opacity-05"
                width="16"
                height="16"
                alt="Remove"
              />
            </button>
          </div>
        </td>
        <td class>
          <div class="input-group input-group-sm p-0">
            <input
              type="text"
              class="form-control form-control-sm border-0 rounded-0"
              v-model.trim="login.host"
              @blur="update($event, login.id)"
            />
            <a
              class="btn btn-light rounded-0"
              type="button"
              title="Open"
              target="_blank"
              :href="login.host"
            >
              <img
                src="@/assets/icons/box-arrow-up-right.svg"
                class="m-0 opacity-05"
                width="14"
                height="14"
                alt="Open"
              />
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td class="w-50 border-right">
          <div class="input-group input-group-sm p-0">
            <input
              type="text"
              class="form-control form-control-sm border-0 rounded-0"
              v-model.trim="login.login"
              ref="login"
              @blur="update($event, login.id)"
            />
            <button
              @click="copy($refs.login)"
              class="btn btn-light rounded-0 p-0"
              type="button"
              title="Copy"
            >
              <img
                @
                src="@/assets/icons/files.svg"
                class="m-0 opacity-05"
                width="16"
                height="16"
                alt="Copy"
              />
            </button>
          </div>
        </td>
        <td class>
          <div class="input-group input-group-sm p-0">
            <input
              type="text"
              class="form-control form-control-sm border-0 rounded-0"
              v-model.trim="login.pass"
              ref="pass"
              @blur="update($event, login.id)"
            />
            <!-- <button
              @click="type = !type"
              class="btn btn-light rounded-0 p-0"
              type="button"
              title="Show/hide pass"
            >
              <img
                v-if="type"
                src="@/assets/icons/eye-slash.svg"
                class="m-0 opacity-05"
                width="14"
                height="14"
                alt="Show pass"
              />
              <img
                v-else
                src="@/assets/icons/eye.svg"
                class="m-0 opacity-05"
                width="14"
                height="14"
                alt="Hide pass"
              />
            </button>-->
            <button
              @click="copy($refs.pass)"
              class="btn btn-light rounded-0 p-0"
              type="button"
              title="Copy"
            >
              <img
                src="@/assets/icons/files.svg"
                class="m-0 opacity-05"
                width="16"
                height="16"
                alt="Copy"
              />
            </button>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['login', 'logins'],
  data() {
    return {
      nocopy: true,
      type: true
    }
  },
  methods: {
    changeType() {
      this.type = this.type === 'password' ? 'text' : 'password'
    },
    copy(elem) {
      elem.select()
      document.execCommand('copy')
      this.nocopy = false
      elem.blur()
      this.nocopy = true
    },
    remove(id) {},
    async update(e, id) {
      if (e.target.value && this.nocopy) {
        const login = {
          id: this.login.id,
          name: this.login.name,
          host: this.login.host,
          login: this.login.login,
          pass: this.login.pass
        }

        await this.$store.dispatch('updateLogin', { doc: login })
      }
    }
  }
}
</script>

<style scoped>
.btn {
  width: 32px;
}

.opacity-05 {
  opacity: 0.5;
}
</style>