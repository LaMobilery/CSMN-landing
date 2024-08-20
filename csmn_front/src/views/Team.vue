<template>
  <section class="container">

    <h1>{{ $t('team.title') }}</h1>

    <div class="team-cards">
      <div v-for="(card, index) in TeamCards">
        <TeamCard :key="index"
                  :photo="card.photo"
                  :role="card.role"
                  :name="card.name"
                  :email="card.email"/>
      </div>
    </div>
  </section>
  <div class="waves">
    <img :src="wave1" class="wave wave1">
    <img :src="wave2" class="wave wave2">
    <img :src="wave3" class="wave wave3">
  </div>
</template>
<script setup lang="ts">
import wave1 from '@/assets/waves/wave1.svg'
import wave2 from '@/assets/waves/wave2.svg'
import wave3 from '@/assets/waves/wave13.svg'
import TeamCard from '@/components/TeamCard.vue'
import president from '@/assets/images/team/president.jpeg'


const TeamCards = [
  {
    photo: president,
    role: 'Président',
    name: 'Fabrice BELLOTTI',
    email: 'president@plongee-lille.fr'
  },  {
    photo: president,
    role: 'Secrétaire',
    name: 'Cécile CAULLERY',
    email: 'secretaire@plongee-lille.fr'
  },  {
    photo: president,
    role: 'Trésorier',
    name: 'David TAQUET',
    email: 'tresorier@plongee-lille.fr'
  },  {
    photo: president,
    role: 'Président Adjoint',
    name: 'Christophe QUIVRON',
  },  {
    photo: president,
    role: 'Membre',
    name: 'Nathan BAELEN',
  },  {
    photo: president,
    role: 'Membre',
    name: 'Bertrand DIGONNET',
  },  {
    photo: president,
    role: 'Membre',
    name: 'Sylvie CHERRIER',
  },  {
    photo: president,
    role: 'Membre',
    name: 'Harold DESCAMPS',
  },  {
    photo: president,
    role: 'Membre',
    name: 'Pascal D’HARLINGUE',
  },  {
    photo: president,
    role: 'Membre',
    name: 'Anna TOMCZAK',
  },  {
    photo: president,
    role: 'Membre',
    name: 'Jean-Michel MYENS',
  }
]
</script>

<style scoped>
h1 {
  font-size: 2rem;
}

.waves {
  position: relative;
  width: 100%;
  height: 30vh;
  z-index: -1;
}

.wave {
  position: absolute;
  width: 100%;
  height: auto;
}

.wave1 {
  bottom: 0;
  z-index: 100;
  transform: rotateY(180deg);
}

.wave2 {
  bottom: 0;
  width: 100%;
  z-index: 1;
}

.wave3 {
  bottom: 0;
  z-index: 99;
}

.container {
  padding-right: 0 !important;
}

.team-cards {
  display: flex;
  gap: 1.5rem;
  flex-direction: row;
  overflow-x: auto;
  position: relative;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.team-cards::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

@media (max-width: 425px) {
  .waves {
    margin-top: -8rem;
  }
}

@media (max-width: 768px) {
  .waves {
    margin-top: -5rem;
  }
}

</style>