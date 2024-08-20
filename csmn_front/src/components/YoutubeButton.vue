<template>
  <div class="logo_yt" @click="goToYoutubeChannel">
    <span>{{ title }}</span>
    <img :src="logo_yt" alt="Youtube logo">
  </div>
</template>


<script setup lang="ts">
import logo_yt from '@/assets/icons/logo_yt.png';

const { title, goToYoutubeChannel } = defineProps(['title', 'goToYoutubeChannel']);
</script>

<style scoped>
.logo_yt {
  cursor: pointer;
  height: fit-content;
  color: #fff !important;
  display: flex;
  align-items: center;
  background-color: #263D63;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 1000px;
}

.logo_yt:hover {
  background-color: #1c2e4a;
}

.logo_yt span {
  padding: 0 1rem;
  border-radius: 1000px;
}

.logo_yt img {
  margin: -1px;
}
</style>