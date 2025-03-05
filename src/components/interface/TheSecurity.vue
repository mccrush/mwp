<template>
  <div
    class="col-12 col-md-4 border border-success rounded bg-body-tertiary m-auto d-flex mt-5 p-2"
  >
    <div
      class="w-25 border-end d-flex align-items-center justify-content-center pe-2"
    >
      <img
        class="my-sec-image"
        src="/img/work_icons/security_icon.svg"
        alt="Данные защищены"
      />
    </div>
    <div class="w-75 ps-2 d-flex align-items-center justify-content-center">
      <div class="text-center lh-1">
        Ваши данные защищены<br />по стандарту
        <a
          href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
          target="_blank"
          title="Открыть страницу с описанием"
          >AES-256</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-sec-image {
  width: 48px;
}

.border-end {
  border-color: #343a40 !important;
}
</style>