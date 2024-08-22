<template>
  <div class="card" :style="{backgroundImage: `url(${backgroundImage})`}">
    <div class="background"></div>
    <div class="content">
      <p class="title">{{ title }}</p>
      <span>{{ subtitle }}</span>
      <p>{{ text }}</p>
      <span>{{ easterEgg }}</span>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  easterEgg: {
    type: String,
    required: false
  },
  backgroundImage: {
    type: String,
    required: false
  }
});

</script>

<style scoped>
.card {
  margin-right: 1rem;
  width: 300px;
  padding: 20px;
  color: #fff;
  border-radius: 10px;
  position: relative;
  margin-top: 20px;
  background-size: cover;
  background-position: center;
}

.background {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background:rgba(28, 48, 82, 0.9);
  opacity: 0.9;
  background-size: cover;
  border-radius: 10px;
}

.content {
  position: relative;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin: 0;
}

.card span {
  font-size: 18px;
  font-style: italic;
  color: #FFBF29;
}
</style>