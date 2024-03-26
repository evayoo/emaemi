<template>
  <div class="p-20 text-3xl">
    <div class="text-center">
      <h1 class="font-black">Self Accessment</h1>
      <p>How are you feeling today?</p>
    </div>
    <br />
    <h1 class="font-medium">Happiness</h1>
    <br />
    <img src="../img/happy.png" alt="happiness" class="w-screen" />
    <div class="grid grid-cols-5 gap-5">
      <button @click="happiness = 'happy'" class="text-black">Happy</button>
      <button @click="happiness = 'positive'" class="text-black">Positive</button>
      <button @click="happiness = 'so-so'" class="text-black">So-so</button>
      <button @click="happiness = 'negative'" class="text-black">Negative</button>
      <button @click="happiness = 'unhappy'" class="text-black">Unhappy</button>
    </div>
    <br />

    <h1 class="font-medium">Excitement</h1>
    <br />
    <img src="../img/excite.png" alt="happiness" class="w-screen" />

    <div class="grid grid-cols-5 gap-5 text-black">
      <button @click="excitement = 'excited'" class="text-black">Excited</button>
      <button @click="excitement = 'bit excited'" class="text-black">Bit excited</button>
      <button @click="excitement = 'so-so'" class="text-black">So-so</button>
      <button @click="excitement = 'bit calm'" class="text-black">Bit calm</button>
      <button @click="excitement = 'calm'" class="text-black">Calm</button>
    </div>

    &nbsp;
    <h1 class="font-medium">Control</h1>
    &nbsp;
    <img src="../img/ctrl.png" alt="happiness" class="w-screen" />
    <div class="grid grid-cols-5 gap-5 text-black">
      <button @click="control = 'controlled'" class="text-black">Controlled</button>
      <button @click="control = 'bit controlled'" class="text-black">Bit controlled</button>
      <button @click="control = 'so-so'" class="text-black">So-so</button>
      <button @click="control = 'bit in control'" class="text-black">Bit in control</button>
      <button @click="control = 'in control'" class="text-black">In control</button>
    </div>
    <br />
    <br />
    <br />

    <div class="font-medium text-red-300">
      Today I'm feeling {{ happiness }}, {{ excitement }} and {{ control }}
    </div>
    &nbsp; &nbsp;
    <h1 class="font-medium">Would you like to say something?</h1>
    <input type="text" />

    <button
      type="submit"
      class="relative inline-flex items-center rounded-md bg-red-300 px-10 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
    >
      This is how I feel
    </button>

    <!-- <ul>
      <li :class="{ active: modelValue === 'poor' }">
        <button type="button" @click="activate('poor')">Poor</button>
      </li>
      <li :class="{ active: modelValue === 'average' }">
        <button type="button" @click="activate('average')">Average</button>
      </li>
      <li :class="{ active: modelValue === 'great' }">
        <button type="button" @click="activate('great')">Great</button>
      </li>
    </ul> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
const happiness = ref('')
const excitement = ref('')
const control = ref('')
// export default {
//   props: ['modelValue'],
//   emits: ['update:modelValue'],
//   data() {
//     return {
//       activeOption: this.modelValue
//     }
//   },
//   computed: {
//     activeOption() {
//       return this.modelValue
//     }
//   },
//   methods: {
//     activate(option) {
//       this.$emit('update:modelValue', option)
//     }
//   }
// }
</script>
