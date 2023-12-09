<script lang="ts">
import Nav from '@/pages/Nav.vue';
import { useUserStore } from '@/stores/userStore';
import { ref, onMounted } from 'vue';

export default {
  components: { Nav },
  setup() {
    const userStore = useUserStore();
    const username = ref('');

    // if (userStore.role == "admin") {
    //   username.value = userStore.user.username;
    // }

    // onMounted(() => {
    
    // });

    return { username };
  },
};

</script>

<template>
    <Nav />

    <div>
        <h1> Você está no perfil de {{ username }}</h1>
    </div>
</template>
  
  
  <style>
    /* Estilos do componente, se necessário... */
  </style>