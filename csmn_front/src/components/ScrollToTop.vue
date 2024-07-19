<template>
  <div v-if="visible" class="scroll-to-top" @click="scrollToTop">
    <img :src="scrollToTopImage"/>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import scrollToTopImage from '@/assets/icons/scrollToTop.svg'

const visible = ref(false);

const toggleVisibility = () => {
  visible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', toggleVisibility);
});

onUnmounted(() => {
  window.removeEventListener('scroll', toggleVisibility);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #1C3052;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
}

.scroll-to-top:hover {
  background-color: #0056b3;
}
</style>
