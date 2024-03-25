<template>
  <form @submit.prevent="handleSubmit">
    <label>First name:</label>
    <input type="text" required v-model="firstName" />
    <label>Last name:</label>
    <input type="text" required v-model="lastName" />
    <label>Id:</label>
    <input type="text" required v-model="id" />
    <label>Email:</label>
    <input type="email" required v-model="email" />
    <label>Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>
    <label>Birthday:</label>
    <input type="date" required v-model="date" />
    <label>Country of Origin:</label>
    <input type="text" required v-model="country" />
    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and conditions</label>
    </div>
    <div class="form-control">
      <br />
      <h2 class="">What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interest" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="tutorials"
          v-model="interest"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="nothing"
          v-model="interest"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>

    <div class="submit">
      <button
        class="relative inline-flex items-center rounded-md bg-red-300 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        Register
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      id: '',
      email: '',
      password: '',
      date: '',
      country: '',
      terms: false,
      passwordError: ''
    }
  },
  methods: {
    async handleSubmit() {
      this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long'

      if (!this.passwordError) {
        // Prepare the data to be sent to the backend
        const formData = {
          email: this.email,
          password: this.password,
          language: this.language,
          interests: this.interests,
          terms: this.terms
        }

        try {
          const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          })

          if (response.ok) {
            // Registration successful
            alert('Sign up successful!')
            // You can redirect the user or perform other actions here
          } else {
            // Handle registration failure
            console.error('Registration failed')
          }
        } catch (error) {
          console.error('Error during registration:', error)
        }
      }
    }
  }
}
</script>

<style>
form {
  max-width: 800px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 1em;
  text-transform: uppercase;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 450px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type='checkbox'] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background: transparent;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 1em;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

.submit {
  text-align: center;
}

.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
