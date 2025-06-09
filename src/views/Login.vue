<template>
  <div class="min-h-screen flex items-center justify-center bg-background animate-fade-in">
    <form @submit.prevent="login" class="bg-white p-8 rounded shadow-md w-96 space-y-4 transform transition duration-500 hover:scale-105">
      <h1 class="text-2xl font-bold text-primary">Login</h1>
      <input v-model="username" type="text" placeholder="Username" class="w-full p-2 border rounded" required />
      <input v-model="password" type="password" placeholder="Password" class="w-full p-2 border rounded" required />
      <button type="submit" class="w-full bg-primary text-white py-2 rounded hover:bg-accent transition">Login</button>
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    login() {
      if (this.username === 'admin' && this.password === 'password') {
        this.$router.push('/portfolio/profile');
      } else {
        this.error = 'Invalid credentials';
      }
    }
  }
}
</script>

<style>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}
</style>
