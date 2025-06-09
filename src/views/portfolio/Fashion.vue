<template>
  <div class="bg-background text-primary min-h-screen animate-fade-in">
    <Navbar />
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-6 text-accent">Fashion Gallery</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(photo, index) in fashionPhotos"
          :key="index"
          class="bg-primary rounded-xl p-4 shadow-md text-center text-white"
        >
          <img
            :src="photo"
            alt="Fashion photo"
            class="rounded-lg w-full h-96 object-cover mb-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'

// Import fashion images (adjust filenames if needed)
import fashion1 from '../../assets/images/fashion1.jpg'
import fashion2 from '../../assets/images/fashion2.jpg'
import fashion3 from '../../assets/images/fashion3.jpg'
import fashion4 from '../../assets/images/fashion4.jpg'
import fashion5 from '../../assets/images/fashion5.jpg'
import fashion6 from '../../assets/images/fashion6.jpg'

export default {
  components: { Navbar },
  data() {
    return {
      fashionPhotos: [fashion1, fashion2, fashion3, fashion4, fashion5, fashion6]
    }
  }
}
</script>
