<template>
  <div class="accordion-item">
    <div class="accordion-header" @click="toggle">
      <h3>{{ title }}</h3>
      <span>{{ isOpen ? '▲' : '▼' }}</span>
    </div>
    <div v-if="isOpen" class="accordion-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.accordion-item {
  margin-bottom: 1rem;
  border-bottom: 1px solid #67ACDA;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
}

.accordion-header h3 {
  margin: 0;
}

.accordion-content {
  padding: 1rem;
}
</style>
