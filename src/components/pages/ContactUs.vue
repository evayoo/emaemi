<template>
  <div class="p-20 text-3xl">
    <div class="text-center">
      <p class="font-black">About Us</p>
      <p>Makers of EMAEMI</p>
    </div>
    &nbsp;
    <div class="flex justify-evenly">
      <img src="../img/Woo.jpg" alt="Woo" class="h-96 rounded-full" />
      <p class="pt-40">
        Woo Yoo <br />
        MSc Researcher at the Psychology Faculty of the University of Bern <br />
        President of the Biomedical Engineering Society
      </p>
    </div>
    &nbsp;
    <div class="flex justify-evenly">
      <img src="../img/Chaewon-2.jpg" alt="Chaewon" class="h-96 rounded-full" />
      <p class="pt-40">
        Chaewon Yoo <br />
        Web Developer intern at Powercoders <br />
        Writer of children's book "Cycling the silk road"
      </p>
    </div>
    &nbsp;
    <div class="text-center">
      <p class="font-black">Contact Us</p>
      <p>
        Would you like to get in-depth consultation with us?
        <br />
        Do you have ideas to improve our website?
      </p>
    </div>
    &nbsp;

    <form>
      <h1 class="font-medium object-center">Contact form</h1>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      <br />
      <button
        type="submit"
        class="object-center relative inline-flex items-center rounded-md bg-red-300 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Submit
      </button>
    </form>
  </div>
</template>
