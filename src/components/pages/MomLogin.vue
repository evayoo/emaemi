<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" v-model="email" id="email" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" id="password" required />

      <button
        type="submit"
        class="relative inline-flex items-center rounded-md bg-red-300 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Login
      </button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const login = async () => {
  try {
    const response = await fetch('http://localhost:3000/auth', {
      method: 'POST', // Adjust the method as needed
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    })

    if (response.ok) {
      // Successful login
      errorMessage.value = ''
      alert('Login successful!')
    } else {
      // Failed login
      errorMessage.value = 'Invalid username or password'
    }
  } catch (error) {
    console.error('Error during login:', error)
    errorMessage.value = 'An error occurred during login'
  }
}
</script>

<style scoped>
/* Add your styles if needed */
.error {
  color: red;
  margin-top: 10px;
}
</style>
