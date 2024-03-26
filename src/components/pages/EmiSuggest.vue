<template>
  <img src="../img/emi.jpg" alt="mom" class="size-96 absolute top-10 right-10 rounded-full" />
  <div class="p-20 text-3xl">
    <p>
      Dear Eva,
      <br />
      I'm sorry to hear that.
    </p>
    <br />
    <button @click="generateQuote">Here is a suggestion for you:</button>
    <br />
    <p>{{ quote }}</p>
    &nbsp;
    <button
      type="submit"
      class="relative inline-flex items-center rounded-md bg-red-300 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
    >
      I feel better now
    </button>
  </div>
</template>

<script>
import { createApp, ref } from 'vue'

createApp({
  setup() {
    const quotes = ref([
      'Take a break',
      'Go for a walk',
      'Take a deep breath',
      'Try this yoga for 10 minutes',
      'Drink gingerlemon tea',
      'Have a warm bath',
      'Listen to your favorite music',
      'Read a book',
      'Call a friend',
      'Write a journal',
      'Do some gardening',
      'Do some painting',
      'Do some cooking',
      'Do some baking',
      'Do some knitting',
      'Do some sewing',
      'Do some cleaning',
      'Do some decluttering',
      'Do some organizing',
      'Do some rearranging',
      'Do some decorating',
      'Do some planning',
      'Do some budgeting',
      'Do some shopping',
      'Do some reading',
      'Do some writing',
      'Do some drawing',
      'Do some coloring',
      'Do some crafting',
      'Do some scrapbooking',
      'Do some cardmaking',
      'Do some blogging',
      'Do some vlogging',
      'Do some podcasting',
      'Do some meditating',
      'Do some praying',
      'Do some fasting',
      'Do some exercising',
      'Do some stretching',
      'Do some walking',
      'Do some running',
      'Do some jogging',
      'Do some swimming',
      'Do some biking',
      'Do some hiking',
      'Do some climbing',
      'Do some dancing',
      'Do some singing',
      'Do some playing',
      'Do some acting'
    ])
    const quote = ref('')

    const generateQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.value.length)
      quote.value = quotes.value[randomIndex]
    }

    return { quote, generateQuote }
  }
}).mount('#app')
</script>
