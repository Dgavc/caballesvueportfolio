<template>
  <Navbar />
  <div class="p-8 bg-background text-primary min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Creative Page</h1>
    <p>This is a creative space where you can add anything you want. It could be your hobbies, testimonials, or even a blog!</p>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>
