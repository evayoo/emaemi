<template>
  <TheHeader />
  <!-- <pre>There are {{ countries.length }} countries</pre> -->
  <!-- <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul> -->
  <RouterView />
</template>

<script setup>
import TheHeader from './components/pages/TheHeader.vue'
import { RouterView } from 'vue-router'

import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>
