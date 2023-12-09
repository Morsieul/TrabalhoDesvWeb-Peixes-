<script lang="ts">
import { ref, computed } from 'vue';
import { useUserStore } from '@/stores/userStore';

export default {
  name: 'NavBar',
  setup() {
    const userStore = useUserStore();

    const isAuthenticated = ref(false);

    if( useUserStore().user.username != null) {
        isAuthenticated.value = true;
    }

    const username = computed(() => userStore.user?.username);
    const userId = computed(() => userStore.user?.id);


    function logout() {
      
      console.log('Logout');
      userStore.logout();
      isAuthenticated.value = false;
    }

    return { isAuthenticated, username, userId, logout };
  },
};
</script>


<template>
  <nav>
    <router-link to="/">Peixies</router-link>
    <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
    <router-link v-if="!isAuthenticated" to="/signup">Sign Up</router-link>
    
  <div  v-if="isAuthenticated" class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
     {{ username }}
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Profile</a></li>
    <li><a class="dropdown-item" @click = "logout"> Log out</a></li>
  </ul>
</div>
   
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  color: rgb(148, 0, 0);
}

.user-menu {
  display: flex;
  align-items: center;
}

.menu-options {
  position: absolute;
  background-color: #c20000;
  color: rgb(92, 0, 0);
  padding: 10px;
  top: 40px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
