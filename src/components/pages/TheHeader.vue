<template>
  <div class="box-border h-40 w-screen bg-red-300 p-10">
    <nav class="flex space-x-8 text-4xl font-bold">
      <RouterLink to="/">EMAEMI MOMS</RouterLink>
      <RouterLink :to="{ name: 'MomPage' }">Mom Page</RouterLink>
      <RouterLink :to="{ name: 'Signup' }">Sign Up</RouterLink>
      <RouterLink :to="{ name: 'MomLogin' }">Login</RouterLink>
      <RouterLink :to="{ name: 'SelfAccess' }">EMA</RouterLink>
      <RouterLink :to="{ name: 'EmiSuggest' }">EMI</RouterLink>
      <RouterLink :to="{ name: 'ContactUs' }">Contact</RouterLink>
    </nav>
  </div>
  <!-- <div class="flex flex-row">
        <div class="basis-1/4" to="/">EMAEMI MOMS</div>
        <div class="basis-1/4" to="/mompage">Mom Page</div>
        <div class="basis-1/4" to="/login">Login</div>
        <div class="basis-1/4" to="/signup">Sign Up</div>
      </div> -->
</template>

<!-- <style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style> -->
