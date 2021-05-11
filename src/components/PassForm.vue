<template>
  <div class="col-12 col-md-6 border rounded p-2">
    <input
      type="text"
      class="form-control form-control-sm"
      placeholder="Title"
    />
    <!-- -->
    <div class="input-group mt-1">
      <input
        type="text"
        class="form-control form-control-sm"
        placeholder="Login"
      />
      <button class="btn btn-sm btn-light border p-0 ps-3 pe-3">
        <img
          src="img/work_icons/files.svg"
          width="16"
          height="16"
          class="opacity-06 mt-1 mb-1"
        />
      </button>
    </div>
    <!-- -->
    <div class="input-group mt-1">
      <input
        type="password"
        autocomplete="new-password"
        class="form-control form-control-sm"
        placeholder="Password"
      />
      <button class="btn btn-sm btn-light border p-0 ps-3 pe-3">
        <img
          src="img/work_icons/eye-slash.svg"
          width="16"
          height="16"
          class="opacity-06 mt-1 mb-1"
        />
      </button>
      <button class="btn btn-sm btn-light border p-0 ps-3 pe-3">
        <img
          src="img/work_icons/files.svg"
          width="16"
          height="16"
          class="opacity-06 mt-1 mb-1"
        />
      </button>
    </div>
    <!-- -->
    <textarea
      rows="2"
      class="form-control mt-1"
      style="white-space: pre-line"
      placeholder="Comment"
    ></textarea>
    <div class="d-flex justify-content-between">
      <button class="btn btn-sm btn-outline-danger mt-1">Remove pass</button>
      <button class="btn btn-sm btn-light border mt-1">Save pass</button>
    </div>
  </div>
</template>