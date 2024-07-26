<template>
  <section id="home" class="home-section">
    <div class="overlay">
      <img :src="logo" alt="Club Sous-Marin du Nord Logo" class="logo">

      <button class="member-button" @click="goToMemberSite()">
        <img :src="calendar" alt="logo calendrier">
        Espace membres
      </button>

      <div class="content">
        <h1>{{$t('home.title')}}</h1>
        <h2>{{$t('home.expUnique')}} <br> {{$t('home.allWeek')}}</h2>
        <p>{{$t('home.comeWithUs')}} <br> {{$t('home.inTheClub')}}</p>
        <div class="contact-icons">
          <InfoContact/>
        </div>
      </div>
    </div>
  </section>
  <div>
    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
    </svg>
  </div>

</template>

<script lang="ts" setup>
import logo from '@/assets/images/logo_csmn.png'
import calendar from '@/assets/icons/calendar.svg'
import InfoContact from '@/components/InfoContact.vue'

const goToMemberSite = () => {
  window.open('https://membres.plongee-lille.fr/', '_blank');
}
</script>

<style scoped>
@keyframes zoomBackground {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.home-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
}

.home-section::before {
  content: '';
  position: absolute;
  background-image: url('@/assets/images/background_csmn.jpeg');
  background-size: cover;
  background-position: center;
  animation: zoomBackground 30s infinite;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
}

.logo {
  border: 10px solid #fff;
  border-radius: 5px;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 140px;
  z-index: 10;
}

.content h1 {
  font-size: 40px;
  font-weight: 500;
}

.content h2 {
  margin-bottom: 20px;
  font-size: 64px;
  font-weight: 700;
}

.content p {
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: 500;
}

.contact-icons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.contact-icons a {
  color: white;
  font-size: 2rem;
  margin: 0 10px;
}

.member-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #fff;
  color: #1C3052;
  padding: 10px 20px;
  border: none;
  border-radius: 1000px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.member-button img {
  margin-right: 10px;
}

.member-button:hover {
  background-color: #f5f5f5;
}

.waves {
  position: absolute;
  bottom: 7px;
  width: 100%;
  height:20vh;
  margin-bottom:-7px;
  min-height:100px;
  max-height:150px;
  overflow: hidden;
}

.parallax > use {
  animation: move-forever 35s cubic-bezier(.55,.5,.45,.5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px,0,0);
  }
  100% {
    transform: translate3d(85px,0,0);
  }
}

@media (max-width: 768px) {
  .content h1 {
    font-size: 1.5rem;
  }

  .content h2 {
    font-size: 2rem;
    margin-bottom: 6rem;
  }

  .content p {
    font-size: 1.1rem;
  }

  .contact-icons {
    margin-top: 9rem;
  }

  .logo {
    width: 3rem;
    top: 10px;
    left: 10px;
    border: 5px solid #fff;
  }

  .member-button {
    top: 10px;
    right: 10px;
    padding: 5px 10px;
  }

  .waves {
    display: none;
  }
}
</style>
