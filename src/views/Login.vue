<template>
  <div class="login">
    <h1>Moto Dashboard</h1>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" type="email" />
      <input v-model="password" placeholder="Password" type="password" />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import Userfront from '@userfront/core'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const { email, password } = this
      Userfront.login({
        method: 'password',
        email: email,
        password: password
      })
    }
  }
}
</script>

<style scoped>
</style>
