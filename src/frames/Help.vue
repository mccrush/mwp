<template>
  <div class="row p-1 pt-2">
    <div v-for="(login, index) in logins" :key="'lg'+index" class="col-6 p-2">
      <table class="table table-bordered border-left border-right table-sm m-0">
        <tr>
          <td class="w-50 border-right">
            <div class="input-group input-group-sm p-0">
              <input type="text" class="form-control form-control-sm border-0 rounded-0" />
            </div>
          </td>
          <td class="p-0">
            <div class="input-group input-group-sm p-0">
              <input type="text" class="form-control form-control-sm border-0 rounded-0" />
              <button class="btn btn-light rounded-0" type="button" title="Open">o</button>
            </div>
          </td>
        </tr>
        <tr>
          <td class="p-0 w-50 border-right">
            <div class="input-group input-group-sm p-0">
              <input type="text" class="form-control form-control-sm border-0 rounded-0" />
              <button class="btn btn-light rounded-0" type="button" title="Copy">c</button>
            </div>
          </td>
          <td class="p-0">
            <div class="input-group input-group-sm p-0">
              <input type="text" class="form-control form-control-sm border-0 rounded-0" />
              <button class="btn btn-light rounded-0" type="button" title="Copy">c</button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logins: [
        { name: '', host: '', login: '', pass: '' },
        { name: '', host: '', login: '', pass: '' }
      ]
    }
  },
  computed: {
    logins() {
      return false
    }
  }
}
</script>