<template>
  <section id="friendliness">

    <div class="top-content">

      <h1>{{$t('friendliness.title')}}</h1>
      <div class="social-media">
        <span>Suivez-nous sur  </span>
        <img @click="goToInstagram" :src="insta" alt="lien instagram">
        <img @click="goToFacebook" :src="facebookLogo" alt="lien facbook">
      </div>

    </div>

    <div class="content">
      <div class="carousel-container">
        <div class="main-photo">
          <img :src="photos[currentPhotoIndex]" alt="Main Photo">
        </div>
        <div class="thumbnail-container">
          <div
              v-for="(photo, index) in photos"
              :key="index"
              class="thumbnail"
              :class="{ active: index === currentPhotoIndex }"
              @click="changePhoto(index)"
          >
            <img :src="photo">
          </div>
        </div>
      </div>

<!--      <div>-->
<!--      <LatestFacebookPost-->
<!--          :pageUrl="facebookPageUrl"-->
<!--          pageName="Club Sous-Marin du Nord"-->
<!--      />-->
<!--      </div>-->
    </div>

  </section>
  <div class="waves">
    <img :src="wave1" class="wave wave1">
    <img :src="wave2" class="wave wave2">
    <img :src="wave3" class="wave wave3">
  </div>
</template>

<script setup>
import {ref} from 'vue'
import photo1 from '@/assets/images/convivialite/Convivialite1.jpeg'
import photo2 from '@/assets/images/convivialite/Convivialite2.jpeg'
import photo3 from '@/assets/images/convivialite/Convivialite3.jpeg'
import photo4 from '@/assets/images/convivialite/Convivialite4.jpeg'
import wave1 from '@/assets/waves/wave7.svg'
import wave2 from '@/assets/waves/wave8.svg'
import wave3 from '@/assets/waves/wave9.svg'
import insta from '@/assets/icons/insta.svg'
import facebookLogo from '@/assets/icons/facebook_logo.svg'
import LatestFacebookPost from '@/components/LatestFacebookPost.vue'

const photos = ref([photo1, photo2, photo3, photo4])

const currentPhotoIndex = ref(0)
const facebookPageUrl = 'https://www.facebook.com/ClubSousMarinNord/';

const changePhoto = (index) => {
  currentPhotoIndex.value = index
}

const goToInstagram = () => {
  window.open('https://www.instagram.com/csmn_lille/', '_blank')
}

const goToFacebook = () => {
  window.open('https://www.facebook.com/ClubSousMarinNord/', '_blank')
}
</script>

<style scoped>
h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 100px;
}

.main-photo {
  width: 100%;
  overflow: hidden;
}

.main-photo img {
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.thumbnail-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.thumbnail:not(:first-child) {
  margin-left: 15px;
}

.thumbnail {
  cursor: pointer;
  flex: 1;
  transition: transform 0.2s;
  border-radius: 16px;
  overflow: hidden;
}

.thumbnail img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 16px;
}

.thumbnail:hover {
  transform: scale(1.1);
}

.thumbnail .active {
  display: none;
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
  z-index: -10;
}

@media(max-width:768px) {
  .content {
    flex-direction: column;
  }

  .carousel-container {
    width: 100%;
  }

  .thumbnail-container {
    margin-top: 20px;
  }
}

.top-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -2rem;
}

.social-media {
  display: flex;
  align-items: center;
  color: #fff;
  padding: .5rem;
  border-radius: 5000px;
  background-color: #1C3052;
}

.social-media img {
  cursor: pointer;
  width: 32px;
  height: 32px;
  margin-left: 10px;
}

@media (max-width: 768px) {
  .top-content {
    flex-direction: column;
    align-items: flex-start;
    margin-top: -1rem;
  }

  .social-media {
    margin-bottom: 2rem;
  }

  .waves {
    position: relative;
    width: 100%;
    height: 10vh;
    z-index: -1;
  }
}
</style>
