<template>
  <section class="travel-section">
    <div class="container">
      <div class="top-content">
        <h1>{{ $t('travel.title') }}</h1>
        <div class="logo_yt" @click="goToYoutubeChannel">
          <span>{{ $t('travel.videos') }}</span>
          <img :src="logo_yt">
        </div>
      </div>

      <div class="travels">
        <div class="image-block">
          <div class="image-container">
            <img :src="voyage1" alt="photo" class="image-top">
            <div class="separator"></div>
            <img :src="voyage2" alt="photo" class="image-bottom">
          </div>

          <div class="caption">
            <h3>{{ $t('travel.travel1.title') }}</h3>
            <p>{{ $t('travel.travel1.description') }}</p>
          </div>
        </div>

        <div class="image-block">
          <div class="image-container">
            <img :src="voyage3" alt="photo" class="image-top">
            <div class="separator"></div>
            <img :src="voyage4" alt="photo" class="image-bottom">
          </div>

          <div class="caption">
            <h3>{{ $t('travel.travel2.title') }}</h3>
            <p>{{ $t('travel.travel2.description') }}</p>
          </div>
        </div>

        <div class="image-block">
          <div class="image-container">
            <img :src="voyage5" alt="photo" class="image-top">
            <div class="separator"></div>
            <img :src="voyage6" alt="photo" class="image-bottom">
          </div>

          <div class="caption">
            <h3>{{ $t('travel.travel3.title') }}</h3>
            <p>{{ $t('travel.travel3.description') }}</p>
          </div>
        </div>

        <div class="image-block">
          <div class="image-container">
            <img :src="voyage7" alt="photo" class="image-top">
            <div class="separator"></div>
            <img :src="voyage8" alt="photo" class="image-bottom">
          </div>

          <div class="caption">
            <h3>{{ $t('travel.travel4.title') }}</h3>
            <p>{{ $t('travel.travel4.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="waves">
    <img :src="wave1" class="wave wave1">
    <img :src="wave2" class="wave wave2">
    <img :src="wave3" class="wave wave3">
  </div>
</template>

<script lang="ts" setup>
import voyage1 from '@/assets/images/voyages/Voyage1.png';
import voyage2 from '@/assets/images/voyages/Voyage2.jpg';
import voyage3 from '@/assets/images/voyages/Voyage3.jpg';
import voyage4 from '@/assets/images/voyages/Voyage4.jpg';
import voyage5 from '@/assets/images/voyages/Voyage5.jpg';
import voyage6 from '@/assets/images/voyages/Voyage6.png';
import voyage7 from '@/assets/images/voyages/Voyage7.jpeg';
import voyage8 from '@/assets/images/voyages/Voyage8.jpeg';
import logo_yt from '@/assets/icons/logo_yt.png';
import wave1 from '@/assets/waves/wave4.svg'
import wave2 from '@/assets/waves/wave5.svg'
import wave3 from '@/assets/waves/wave6.svg'

const goToYoutubeChannel = () => {
  window.open('https://www.youtube.com/playlist?list=PLnzBg8pBqF1y0xTaS7tIcsfgtUzqfEAvs', '_blank');
}
</script>

<style scoped>
h1 {
  font-size: 2rem;
}

.container {
  margin-top: -8rem;
}

.top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
}

.logo_yt {
  cursor: pointer;
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

.travel-section {
  background-color: #1C3052;
  color: #fff;
}

.travels {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 4rem;
}

.image-block {
  border-radius: 15px;
  color: white;
  text-align: center;
  margin: 0 2rem;
  z-index: 2;
}

.image-container {
  border-radius: 10px;
  overflow: hidden;
}

.image-top,
.image-bottom {
  display: block;
  width: 100%;
  height: 350px;
}

img {
  object-fit: cover;
}

.separator {
  height: 3px;
  background-color: #FFBF29;
  position: relative;
  z-index: 1;
}

.caption {
  padding: 10px 0;
  margin: 1rem 0;
  text-align: left;
}

.caption h3 {
  margin: 0;
  font-size: 1rem;
}

.caption p {
  margin: 0;
  color: #FFBF29;
  font-size: 1rem;
}

.waves {
  position: relative;
  background-color: #1C3052;
  width: 100%;
  height: 25vh;
  z-index: 1;
}

.wave {
  position: absolute;
  width: 100%;
  height: auto;
}

.wave1 {
  bottom: 0;
  z-index: 1;
}

.wave2 {
  bottom: 0;
  width: 100%;
}

.wave3 {
  bottom: 0;
}

@media(max-width: 768px) {
  .travels {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .travels::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  .image-top,
  .image-bottom {
    display: block;
    width: 300px;
    height: 350px;
  }

  .image-block {
    margin: 0 1rem;
  }

  .top-content {
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
}
</style>
