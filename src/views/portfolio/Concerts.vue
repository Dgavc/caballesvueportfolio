<template>
<Navbar />
  <div class="p-8 bg-background text-primary min-h-screen animate-fade-in">
    
    <h1 class="text-3xl font-bold mb-6 text-accent">Concerts Gallery</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="(photo, index) in concertPhotos"
        :key="index"
        class="bg-primary rounded-xl p-4 shadow-md text-center text-white"
      >
        <img
          :src="photo"
          alt="Concert photo"
          class="rounded-lg w-full h-84 object-cover mb-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'

// Import images directly
import con1 from '../../assets/images/con1.jpg'
import con2 from '../../assets/images/con2.jpg'
import con3 from '../../assets/images/con3.jpg'
import con4 from '../../assets/images/con4.jpg'
import con5 from '../../assets/images/con5.jpg'
import con6 from '../../assets/images/con6.jpg'

export default {
  components: { Navbar },
  data() {
    return {
      concertPhotos: [con1, con2, con3, con4, con5, con6]
    }
  }
}
</script>
