<script setup lang="ts">
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
