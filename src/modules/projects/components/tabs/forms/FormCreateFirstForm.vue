<template>
  <div class="col-12 col-md-6 p-2">
    <div
      class="border-top border-dark-subtle rounded shadow-sm bg-body-tertiary p-3"
    >
      <div class="d-flex">
        <!-- <input
          type="text"
          id="createFirstForm"
          class="form-control form-control-sm"
          placeholder="Название"
          value="Создайте первую форму"
          disabled
        /> -->

        <BtnCreateFirstForm
          class="w-100"
          title="Создать первую форму"
          @click="$emit('create-form-item')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BtnCreateFirstForm from './../../../../../components/buttons/BtnCreateFirstForm.vue'

export default {
  name: 'FormCreateFirstForm',
  components: { BtnCreateFirstForm },
  emits: ['create-form-item']
}
</script>