<script setup lang="ts">
import { computed, ref, onMounted, defineProps } from 'vue';
import axios from 'axios';
import type { AxiosResponse } from 'axios';

const props = defineProps<{
  status: string,
  msg: string
}>();

const userImage = ref<AxiosResponse | null>(null);

const icon = computed(() => {
  switch (Number(props.status)) {
    case 404:
      return 'exclamation-octagon';
    case 401:
    case 403:
      return 'hand-thumbs-down';
    case 500:
      return 'tropical-storm';
    default:
      return 'info-square';
  }
});


</script>

<template>
  <div>
    <h1><i :class="'bi bi-' + icon"></i></h1>
    <h1>Ops... Alguma coisa deu errado</h1>
    <h2 v-if="msg !== undefined" class="text-muted">{{ msg }}</h2>

    <div>
    <!-- <image :src = "" alt = "Image" /> -->
    </div>

    <router-link to="/" replace>
      <button type="button" class="btn btn-lg btn-outline-secondary">
        <i class="bi bi-arrow-right-square-fill"></i> Voltar
      </button>
    </router-link>
  </div>
</template>

<style>
h1, h2 {
    text-align: center;
}
</style>

