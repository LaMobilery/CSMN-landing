<template>
  <div id="app">
    <Home/>
    <About/>
    <TrainingCatalog/>
    <Travel/>
    <Friendliness/>
    <Contact/>
    <Team/>
    <Faq/>
    <Footer/>
    <ScrollToTop/>
  </div>
</template>

<script setup lang="ts">
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Footer from '@/components/Footer.vue'
import TrainingCatalog from '@/views/TrainingCatalog.vue'
import Travel from '@/views/Travel.vue'
import Map from '@/views/Map.vue'
import Friendliness from '@/views/Friendliness.vue'
import Contact from '@/views/Contact.vue'
import Faq from '@/views/Faq.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import Team from '@/views/Team.vue'
</script>

<style scoped>

</style>
