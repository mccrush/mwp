<template>
  <div class="row">
    <vueHeadful title="MWP - Ошибка 404" description="Страница не найдена" />
    <div class="col-12">
      <h2 class="text-uppercase mt-2 bold">Ошибка 404</h2>
      <h4>Страница не найдена</h4>
      <p>
        <router-link to="/" tag="a">Перейти на главную</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import vueHeadful from 'vue-headful'

export default {
  components: {
    vueHeadful
  }
}
</script>

