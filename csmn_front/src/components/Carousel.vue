<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-item"
          :class="{ active: index === currentSlide, prev: index === previousSlide }"
      >
        <img :src="slide.image" alt="photo club">
      </div>
    </div>
    <div class="carousel-indicators">
      <span
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-indicator"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from 'vue'
import photo1 from '@/assets/images/about/carousel1.jpg';
import photo2 from '@/assets/images/about/carousel2.jpg';
import photo3 from '@/assets/images/about/carousel3.jpg';
import photo4 from '@/assets/images/about/carousel4.jpg';

const slides = ref([
  { image: photo1},
  { image: photo2 },
  { image: photo3 },
  { image: photo4 },
]);

const slideInterval = 5000
const currentSlide = ref(0);
const previousSlide = ref(null);

const goToSlide = (index) => {
  previousSlide.value = currentSlide.value;
  currentSlide.value = index;
};

const nextSlide = () => {
  previousSlide.value = currentSlide.value;
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

onMounted(() => {
  setInterval(nextSlide, slideInterval);
});

onUnmounted(() => {
  clearInterval(nextSlide);
});
</script>

<style scoped>

.carousel {
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 10px;
  position: relative;

}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-item {
  min-width: 100%;
  opacity: 0;
  transition: opacity 2s;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-item.active {
  opacity: 1;
  position: relative;
}

.carousel-item.prev {
  opacity: 0;
}

.carousel-item img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.carousel-indicator {
  width: 10px;
  height: 10px;
  background-color: #ddd;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.5s;
}

.carousel-indicator.active {
  background-color: #1C3052;
}
</style>