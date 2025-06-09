<template>
  <div class="min-h-screen flex flex-col bg-background text-primary">
    <Navbar />

    <main class="flex-grow p-12 flex flex-col items-center justify-center">
      <div class="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between">
        <!-- Text Section -->
        <div class="text-left space-y-4">
          <h2 class="text-2xl">Hi! I am</h2>
          <h1 class="text-6xl font-black text-primary">Gio Caballes</h1>
          <p class="text-lg text-secondary">
            A passionate photographer specializing in Concerts, Fashion, and Portrait photography.
          </p>
          <div class="space-x-4 text-blue-600">
            <a href="https://www.instagram.com/re.dgavc/" class="hover:underline">Instagram</a>
            <a href="https://www.facebook.com/danielski.gc/" class="hover:underline">Facebook</a>
          </div>
        </div>

        <!-- Image Section -->
        <div class="mt-8 md:mt-0 md:ml-12">
          <img
            src="C:\Users\DanielGioAngeloVCaba\final-photography-portfolio-fixed\src\assets\images\_DSF3958.jpg"
            alt="Profile"
            class="w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>
