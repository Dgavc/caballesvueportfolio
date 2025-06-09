<template>
  <Navbar />
  <div class="p-8 bg-background text-primary min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Contact Me</h1>
    <form class="space-y-4 max-w-lg">
      <input type="text" placeholder="Name" class="w-full p-2 border rounded" />
      <input type="email" placeholder="Email" class="w-full p-2 border rounded" />
      <textarea placeholder="Message" class="w-full p-2 border rounded"></textarea>
      <button class="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition">Send Message</button>
    </form>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>
