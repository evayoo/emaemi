<template>
  <div class="px-10 sm:px-10 lg:px-10">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="mt-10 text-base font-semibold leading-10 text-gray-900">Self-Assessment</h1>
        <p class="mt-10 text-sm text-gray-700">
          A list of your feeling including your happiness, excitement and control.
        </p>
      </div>
      <div class="mt-10 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          class="block rounded-md bg-red-400 px-10 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          How are you feeling?
        </button>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="px-10 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Date / Time
                </th>
                <th scope="col" class="px-10 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Happiness
                </th>

                <th scope="col" class="px-10 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Excitement
                </th>
                <th scope="col" class="px-10 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Control
                </th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">EMI suggestion</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="person in people" :key="person.time">
                <td
                  class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                >
                  {{ person.time }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ person.happy }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ person.excite }}
                </td>
                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {{ person.ctrl }}
                </td>
                <td
                  class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                >
                  <a href="#" class="text-indigo-600 hover:text-indigo-900"
                    >Edit<span class="sr-only">, {{ person.time }}</span></a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const people = [
  {
    time: '2021-09-01 14:00:00',
    happy: 'happy',
    excite: 'calm',
    ctrl: 'in control'
  },
  {
    time: '2021-09-02 14:00:00',
    happy: 'unhappy',
    excite: 'calm',
    ctrl: 'controlled'
  },
  {
    time: '2021-09-03 14:00:00',
    happy: 'happy',
    excite: 'excited',
    ctrl: 'in control'
  }
  // More
]
</script>
