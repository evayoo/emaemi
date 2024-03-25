<template>
  <TheHeader />

  <RouterView />
</template>

<script setup>
import TheHeader from './components/pages/TheHeader.vue'
import { RouterView } from 'vue-router'
</script>
