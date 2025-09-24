<script setup>
import BtnTaskMenu from './../../buttons/BtnTaskMenu.vue'
import BtnTrashTask from './../../buttons/BtnTrashTask.vue'
import BtnTasksCircle from './../../buttons/BtnTasksCircle.vue'
import BtnPositionUp from '../../buttons/BtnPositionUp.vue'
import BtnPositionDown from '../../buttons/BtnPositionDown.vue'

const emit = defineEmits([
  'set-priority-color',
  'delete-item',
  'change-position'
])

const { index } = defineProps({
  index: {
    type: Number,
    required: true
  },
  length: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="dropdown ms-1">
    <BtnTaskMenu class="" data-bs-toggle="dropdown" aria-expanded="false" />
    <div
      class="min-width-0 dropdown-menu dropdown-menu-start border-0 border-top border-dark-subtle shadow bg-body-tertiary p-1"
    >
      <div>
        <div class="btn-group w-100">
          <BtnTasksCircle
            bgColor="#dc3545"
            @click="emit('set-priority-color', '#dc3545')"
          />
          <BtnTasksCircle
            bgColor="#ffc107"
            @click="emit('set-priority-color', '#ffc107')"
          />
          <BtnTasksCircle
            bgColor="#198754"
            @click="emit('set-priority-color', '#198754')"
          />
          <BtnTasksCircle @click="emit('set-priority-color', '')" />
        </div>
      </div>
      <div class="mt-1">
        <div class="btn-group w-100">
          <BtnPositionUp
            :disabled="index === 0"
            @click="emit('change-position', 'up')"
          />
          <BtnPositionDown
            :disabled="index === length - 1"
            @click="emit('change-position', 'down')"
          />
        </div>
      </div>
      <div class="mt-1">
        <BtnTrashTask
          class="w-100"
          title="Удалить задачу"
          @click="emit('delete-item')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.min-width-0 {
  min-width: 0 !important;
}
</style>
