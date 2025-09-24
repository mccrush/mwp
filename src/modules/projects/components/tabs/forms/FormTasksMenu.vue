<script setup>
import BtnTaskMenu from './../../buttons/BtnTaskMenu.vue'
import BtnCopyTask from './../../buttons/BtnCopyTask.vue'
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
            bgColor="#842029"
            @click="emit('set-priority-color', '#842029')"
          />
          <BtnTasksCircle
            bgColor="#997404"
            @click="emit('set-priority-color', '#997404')"
          />
          <BtnTasksCircle
            bgColor="#0f5132"
            @click="emit('set-priority-color', '#0f5132')"
          />
          <BtnTasksCircle
            bgColor="#dee2e6bf"
            @click="emit('set-priority-color', '#212529')"
          />
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
        <div class="btn-group w-100">
          <BtnCopyTask class="" @click="emit('copy-in-buffer')" />
          <BtnTrashTask
            class=""
            title="Удалить задачу"
            @click="emit('delete-item')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.min-width-0 {
  min-width: 0 !important;
}
</style>
