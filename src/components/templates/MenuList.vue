<template>
  <div
    class="my-vh100 col-3 col-lg-2 d-flex flex-column border-end border-dark-subtle p-0 pb-2"
  >
    <div class="overflow-y-auto p-2">
      <div
        v-for="item in items"
        :key="item.id"
        class="btn-group w-100 mt-2"
        role="group"
      >
        <a
          class="btn btn-sm btn-dark text-truncate text-start"
          :href="'#' + item.alias"
        >
          {{ item.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>