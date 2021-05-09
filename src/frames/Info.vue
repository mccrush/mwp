<template>
  <div class="col-12 col-sm-8 col-md-9 col-lg-10 col-xl-10 col-xxl-11">
    <div class="row pt-2">
      <!-- Название проекта -->
      <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
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
      <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3">
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
            title="Открыть проект"
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
      <!-- Диск -->
      <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mt-2">
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
            title="Открыть папку проекта"
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
      <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mt-2">
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
            title="Открыть админку"
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
      <!-- Хостинг -->
      <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mt-2">
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
            title="Открыть хостинг"
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
      <div class="col-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mt-2">
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
            title="Открыть домен"
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
      <!-- Описание проекта -->
      <div class="col-12 col-xxl-8 mt-2">
        <textarea
          rows="5"
          class="form-control"
          placeholder="Description"
          v-html="project.description"
        ></textarea>
        <div class="d-flex justify-content-between">
          <button
            class="btn btn-sm btn-outline-danger mt-2"
            @click="removeProject"
          >
            Удалить проект
          </button>
          <button
            class="btn btn-sm btn-light border mt-2"
            @click="updateProject('description')"
          >
            Save Description
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
      if (confirm('Действительно удалить?')) {
        console.log('Удаление проекта ', this.project.id)
      }
    },
    async updateProject(field) {
      const res = await this.$store.dispatch('updateProject', {
        id: this.project.id,
        field,
        value: this.project[field]
      })
    }
  }
}
</script>
<style scoped>
</style>