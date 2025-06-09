<template>
  <nav class="bg-primary text-white px-6 py-4 shadow-md flex justify-between items-center">
    <router-link to="/" class="text-xl font-bold text-accent">My Portfolio</router-link>

    <ul class="flex space-x-6 items-center">
      <li>
        <router-link to="/portfolio/profile" class="hover:text-accent">Profile</router-link>
      </li>

      <!-- Click Dropdown -->
      <li class="relative">
        <button @click="toggleDropdown" class="hover:text-accent focus:outline-none">
          Showcase ▾
        </button>

        <ul
          v-show="showDropdown"
          class="absolute top-full left-0 mt-2 bg-primary text-white shadow-lg rounded-md w-40 z-50"
        >
          <li>
            <router-link
              to="/portfolio/concerts"
              class="block px-4 py-2 hover:bg-accent hover:text-background"
              @click="closeDropdown"
            >Concerts</router-link>
          </li>
          <li>
            <router-link
              to="/portfolio/fashion"
              class="block px-4 py-2 hover:bg-accent hover:text-background"
              @click="closeDropdown"
            >Fashion</router-link>
          </li>
          <li>
            <router-link
              to="/portfolio/portraits"
              class="block px-4 py-2 hover:bg-accent hover:text-background"
              @click="closeDropdown"
            >Portraits</router-link>
          </li>
        </ul>
      </li>

      <li>
        <router-link to="/portfolio/contact" class="hover:text-accent">Contact</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showDropdown: false
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    closeDropdown() {
      this.showDropdown = false
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside)
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    closeDropdown() {
      this.showDropdown = false
    },
    handleClickOutside(e) {
      const dropdown = this.$el.querySelector('ul')
      if (dropdown && !dropdown.contains(e.target) && !this.$el.contains(e.target)) {
        this.showDropdown = false
      }
    }
  }
}
</script>
