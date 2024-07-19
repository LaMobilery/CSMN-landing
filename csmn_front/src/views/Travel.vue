<template>
  <section class="travel-section">
    <div class="container">
      <div class="top-content">
        <h1>Les voyages</h1>
        <!-- TODO : Retirer ce commentaire pour afficher le bouton youtube -->
        <!--
        <div class="logo_yt" @click="goToYoutubeChannel">
          <span>Les vidéos</span>
          <img :src="logo_yt">
        </div>
      -->
      </div>

      <div class="travels">
        <div class="image-block">
          <div class="image-container">
            <img :src="gwada1" alt="photo Guadeloupe" class="image-top">
            <div class="separator"></div>
            <img :src="gwada2" alt="photo Guadeloupe" class="image-bottom">
          </div>

          <div class="caption">
            <h3>Guadeloupe</h3>
            <p>Réserve Cousteau</p>
          </div>
        </div>

        <div class="image-block">
          <div class="image-container">
            <img :src="egypte1" alt="photo Guadeloupe" class="image-top">
            <div class="separator"></div>
            <img :src="egypte2" alt="photo Guadeloupe" class="image-bottom">
          </div>

          <div class="caption">
            <h3>Egypte</h3>
            <p>Croisière et plongée du bord</p>
          </div>
        </div>

        <div class="image-block">
          <div class="image-container">
            <img :src="espagne1" alt="photo Guadeloupe" class="image-top">
            <div class="separator"></div>
            <img :src="espagne2" alt="photo Guadeloupe" class="image-bottom">
          </div>

          <div class="caption">
            <h3>Espagne</h3>
            <p>Estartit îles Medes</p>
          </div>
        </div>

        <div class="image-block">
          <div class="image-container">
            <img :src="bretagne1" alt="photo Guadeloupe" class="image-top">
            <div class="separator"></div>
            <img :src="bretagne2" alt="photo Guadeloupe" class="image-bottom">
          </div>

          <div class="caption">
            <h3>Bretagne</h3>
            <p>Tombants et épaves</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import gwada1 from '@/assets/images/voyages/Voyage-Guadeloupe1.png';
import gwada2 from '@/assets/images/voyages/Voyage-Guadeloupe2.png';
import bretagne1 from '@/assets/images/voyages/Voyage-Bretagne1.jpg';
import bretagne2 from '@/assets/images/voyages/Voyage-Bretagne2.jpg';
import egypte1 from '@/assets/images/voyages/Voyage-Egypte1.jpg';
import egypte2 from '@/assets/images/voyages/Voyage-Egypte2.jpg';
import espagne1 from '@/assets/images/voyages/Voyage-Espagne1.jpg';
import espagne2 from '@/assets/images/voyages/Voyage-Espagne2.jpg';
import logo_yt from '@/assets/icons/logo_yt.png';

const goToYoutubeChannel = () => {
  window.open('https://www.youtube.com/', '_blank');
}
</script>

<style scoped>
h1 {
  font-size: 2rem;
}

.top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo_yt {
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: #263D63;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 1000px;
}

/* add hover effect to logo yt */
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
}

.image-block {
  border-radius: 15px;
  color: white;
  text-align: center;
  margin: 0 2rem;
}

.image-container {
  border-radius: 10px;
  overflow: hidden;
}

.image-top,
.image-bottom {
  display: block;
  width: 100%;
  height: 300px;
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
</style>
