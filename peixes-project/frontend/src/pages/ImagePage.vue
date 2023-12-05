<template>
    <div v-if="picture">
      <h1>Image Detail Page</h1>
      <div>
        <img :src="picture.url" alt="Image">
        <p v-if="picture.author">Author: {{ picture.author.username }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, onMounted } from 'vue';
  import type { Picture } from '@/types';
  import { api } from '@/api';
  
  export default {
    name: 'ImageDetailPage',
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const picture = ref<Picture | null>(null);
  
      onMounted(async () => {
        // Carregar detalhes da imagem com base no ID fornecido
        const response = await api.get(`/pictures/${props.id}`);
        picture.value = response.data;
      });
  
      return { picture };
    },
  };
  </script>