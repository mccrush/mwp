<script setup>
const { bgColor } = defineProps({
  bgColor: {
    type: String,
    default: '#dee2e6bf'
  }
})
</script>

<template>
  <button class="btn btn-dark lh-1 text-body-secondary p-1 pt-2 pb-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      :fill="bgColor"
      class="bi bi-circle"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
      />
    </svg>
  </button>
</template>