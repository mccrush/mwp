<template>
  <div class="col-12 col-sm-8 col-md-9 col-lg-10 col-xl-10 col-xxl-10">
    <div class="row pt-2">
      <!-- Название проекта -->
      <div class="col-12 col-md-6 col-lg-5 col-xl-4 col-xxl-4">
        <div class="input-group">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Project name"
            v-model.trim="project.title"
            @keyup.enter="updateProject('title')"
          />
          <button
            class="btn btn-sm btn-light border"
            @click="updateProject('title')"
          >
            <span v-if="true">Save</span>
          </button>
        </div>
      </div>
      <!-- Конец Название проекта -->
      <!-- Url проекта -->
      <div
        class="col-12 col-md-6 col-lg-5 col-xl-4 col-xxl-4 mt-2 mt-md-0 ps-md-0"
      >
        <div class="input-group">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Url"
            v-model.trim="project.url"
            @keyup.enter="updateProject('url')"
          />
          <button
            class="btn btn-sm btn-light border"
            @click="updateProject('url')"
          >
            <span v-if="true">Save</span>
          </button>
          <a
            class="btn btn-sm btn-light border p-0 ps-3 pe-3"
            :href="project.url"
            target="_blank"
            title="Open project"
          >
            <img
              src="img/work_icons/arrow-up-right-square.svg"
              width="16"
              height="16"
              class="opacity-06 mt-1"
            />
          </a>
        </div>
      </div>
      <!-- Конец Url проекта -->
      <div class="d-none d-md-block col-12"></div>
      <!-- Диск -->
      <div class="col-12 col-md-6 col-lg-5 col-xl-4 col-xxl-4 mt-2">
        <div class="input-group">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Disk folder"
            v-model.trim="project.disk"
            @keyup.enter="updateProject('disk')"
          />
          <button
            class="btn btn-sm btn-light border"
            @click="updateProject('disk')"
          >
            <span v-if="true">Save</span>
          </button>
          <a
            class="btn btn-sm btn-light border p-0 ps-3 pe-3"
            :href="project.disk"
            target="_blank"
            title="Open folder of project"
          >
            <img
              src="img/work_icons/arrow-up-right-square.svg"
              width="16"
              height="16"
              class="opacity-06 mt-1"
            />
          </a>
        </div>
      </div>
      <!-- Конец Диск-->
      <!-- Админка -->
      <div class="col-12 col-md-6 col-lg-5 col-xl-4 col-xxl-4 mt-2 ps-md-0">
        <div class="input-group">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Admin url"
            v-model.trim="project.admin"
            @keyup.enter="updateProject('admin')"
          />
          <button
            class="btn btn-sm btn-light border"
            @click="updateProject('admin')"
          >
            <span v-if="true">Save</span>
          </button>
          <a
            class="btn btn-sm btn-light border p-0 ps-3 pe-3"
            :href="project.admin"
            target="_blank"
            title="Open admin panel"
          >
            <img
              src="img/work_icons/arrow-up-right-square.svg"
              width="16"
              height="16"
              class="opacity-06 mt-1"
            />
          </a>
        </div>
      </div>
      <!-- Конец Админка -->
      <div class="d-none d-md-block col-12"></div>
      <!-- Хостинг -->
      <div class="col-12 col-md-6 col-lg-5 col-xl-4 col-xxl-4 mt-2">
        <div class="input-group">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Hosting url"
            v-model.trim="project.hosting"
            @keyup.enter="updateProject('hosting')"
          />
          <button
            class="btn btn-sm btn-light border"
            @click="updateProject('hosting')"
          >
            Save
          </button>
          <a
            class="btn btn-sm btn-light border p-0 ps-3 pe-3"
            :href="project.hosting"
            target="_blank"
            title="Open hosting"
          >
            <img
              src="img/work_icons/arrow-up-right-square.svg"
              width="16"
              height="16"
              class="opacity-06 mt-1"
            />
          </a>
        </div>
      </div>
      <!-- Конец Хостинг -->
      <!-- Домен -->
      <div class="col-12 col-md-6 col-lg-5 col-xl-4 col-xxl-4 mt-2 ps-md-0">
        <div class="input-group">
          <input
            type="text"
            class="form-control form-control-sm"
            placeholder="Domen url"
            v-model.trim="project.domen"
            @keyup.enter="updateProject('domen')"
          />
          <button
            class="btn btn-sm btn-light border"
            @click="updateProject('domen')"
          >
            Save
          </button>
          <a
            class="btn btn-sm btn-light border p-0 ps-3 pe-3"
            :href="project.domen"
            target="_blank"
            title="Open domen"
          >
            <img
              src="img/work_icons/arrow-up-right-square.svg"
              width="16"
              height="16"
              class="opacity-06 mt-1"
            />
          </a>
        </div>
      </div>
      <!-- Конец Домен -->
      <div class="d-none d-md-block col-12"></div>
      <!-- Описание проекта -->
      <div class="col-12 col-lg-10 col-xl-8 col-xxl-8 mt-2">
        <textarea
          rows="5"
          class="form-control"
          style="white-space: pre-line"
          placeholder="Description"
          v-model="project.description"
        ></textarea>
        <div class="d-flex justify-content-between">
          <button
            class="btn btn-sm btn-outline-danger mt-2"
            @click="removeProject"
          >
            Remove project
          </button>
          <button
            class="btn btn-sm btn-light border mt-2"
            @click="updateProject('description')"
          >
            Save description
          </button>
        </div>
      </div>
      <!-- Конец Описание проекта -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    project: {
      type: Object,
      default: null
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    async removeProject() {
      if (confirm('Are you sure?')) {
        console.log('Удаление проекта ', this.project.id)
        this.$store.commit('removeProject', this.project.id)
        await this.$store.dispatch('removeProject', this.project.id)
      }
    },
    async updateProject(field) {
      await this.$store.dispatch('updateProject', {
        id: this.project.id,
        field,
        value: this.project[field]
      })
    }
  }
}
</script>
