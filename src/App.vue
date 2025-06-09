<template>
  <div class="fade-in">
    <router-view />
  </div>
</template>

<style>
.fade-in {
  animation: fadeIn 1s ease-out forwards;
}
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
