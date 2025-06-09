<template>
  <div class="bg-background text-primary min-h-screen animate-fade-in">
    <Navbar />
    <div class="p-8">
      <h1 class="text-3xl font-bold mb-6 text-accent">Portraits Gallery</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(photo, index) in portraitPhotos"
          :key="index"
          class="bg-primary rounded-xl p-4 shadow-md text-center text-white"
        >
          <div class="w-full aspect-[4/5] mb-2">
            <img
              :src="photo"
              alt="Portrait photo"
              class="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'

// Import portrait images
import portrait1 from '../../assets/images/portrait1.jpg'
import portrait2 from '../../assets/images/portrait2.jpg'
import portrait3 from '../../assets/images/portrait3.jpg'
import portrait4 from '../../assets/images/portrait4.jpg'
import portrait5 from '../../assets/images/portrait5.jpg'
import portrait6 from '../../assets/images/portrait6.jpg'

export default {
  components: { Navbar },
  data() {
    return {
      portraitPhotos: [
        portrait1,
        portrait2,
        portrait3,
        portrait4,
        portrait5,
        portrait6
      ]
    }
  }
}
</script>
