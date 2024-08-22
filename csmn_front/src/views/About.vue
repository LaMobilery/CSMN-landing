<template>
  <section class="about">
    <div class="flex-row">
      <div class="left-block">
        <h1>{{$t('about.title')}}</h1>
        <p class="info">{{$t('about.description')}}</p>
      </div>
      <div class="right-block">
          <Carousel/>
      </div>
    </div>
    <div class="bottom-block">
      <p class="ready">{{$t('about.ready')}}</p>
      <YoutubeButton
        title="Club Sous-Marin du Nord"
        :goToYoutubeChannel="goToYoutubeChannel"
      />

      <a :href="pdfUrl" target="_blank" style="margin: 1.5rem">
        <img :src="download" alt="bouton téléchargement">
        {{$t('about.download')}}
      </a>
    </div>
  </section>
  <div class="waves">
    <div class="image-wrapper">
      <img :src="wave1" class="wave wave1">
    </div>
    <div class="image-wrapper">
      <img :src="wave2" class="wave wave2">
    </div>
    <div class="image-wrapper">
      <img :src="wave3" class="wave wave3">
    </div>
  </div>
</template>

<script lang="ts" setup>
import Carousel from '@/components/Carousel.vue'
import download from '@/assets/icons/download.svg'
import pdfUrl from '@/assets/pdf/Dossier-Inscription-CSMN-2024-2025.pdf'
import wave1 from '@/assets/waves/wave1.svg'
import wave2 from '@/assets/waves/wave2.svg'
import wave3 from '@/assets/waves/wave3.svg'
import YoutubeButton from '@/components/YoutubeButton.vue'

const goToYoutubeChannel = () => {
  window.open('https://www.youtube.com/@CLUBSOUS-MARINDUNORD/community', '_blank');
}
</script>

<style scoped>
.about {
  margin-top: 3rem;
}

.flex-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
}

section {
  color:#1C3052;
}

h1 {
  font-size: 32px;
  font-weight: 700;
}

.info {
  font-weight: 400;
  font-size: 20px;
}

.ready {
  font-size: 32px;
  font-weight: 400;
  font-style: italic;
  color: #67ACDA;
}

.left-block {
  padding: 0 4rem 0 0;
  width: 40%;
}

.right-block {
  width: 60%;
}

.bottom-block {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bottom-block a {
  color: #1C3052;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  text-decoration: underline;
}

.bottom-block img {
  width: 32px;
  height: 32px;
  margin-right: .5rem;
}

.waves {
  position: relative;
  width: 100%;
  height: 25vh;
  z-index: -1;
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



@media (max-width: 768px) {
  .flex-row {
    flex-direction: column;
    width: 100%;
  }

  .left-block {
    padding: 0 0 2rem 0;
    width: 100%;
  }

  .right-block {
    width: 100%;
  }

  .waves {
    height: 5vh;
  }
}
</style>
