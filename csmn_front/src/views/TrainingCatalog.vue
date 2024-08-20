<template>
  <div class="main-container">
    <section class="container">
      <div class="flex-row">
        <h1>Catalogue des formations</h1>

        <YoutubeButton
            :title="$t('travel.videos')"
            :goToYoutubeChannel="goToYoutubeChannel"
        />
      </div>

      <div class="filters">
        <div class="filter" @click="filterBy('all')">{{ $t('training.filter.all') }}</div>
        <div class="filter" @click="filterBy('discovery')">{{ $t('training.filter.discovery') }}</div>
        <div class="filter" @click="filterBy('advanced')">{{ $t('training.filter.advanced') }}</div>
        <div class="filter" @click="filterBy('other')">{{ $t('training.filter.other') }}</div>
        <div class="filter" @click="filterBy('management')">{{ $t('training.filter.management') }}</div>
      </div>

      <div class="cards">
        <div v-for="(card, index) in TrainingCardsFiltered">
          <TrainingCard :key="index"
                        :title="card.title.toUpperCase()"
                        :subtitle="card.subtitle"
                        :text="card.text"
                        :background-image="formationImages[index]"/>
        </div>
      </div>

    </section>
    <div class="wave-container">
      <img :src="waveSeparator"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TrainingCard from '@/components/TrainingCard.vue'
import {ref} from 'vue'
import waveSeparator from '../../src/assets/waves/training-wave.svg'
import formation0 from '@/assets/images/formations/Formation0.jpg'
import formation1 from '@/assets/images/formations/Formation1.png'
import formation2 from '@/assets/images/formations/Formation2.png'
import formation3 from '@/assets/images/formations/Formation3.jpg'
import formation4 from '@/assets/images/formations/Formation4.jpg'
import formation5 from '@/assets/images/formations/Formation5.jpg'
import formation6 from '@/assets/images/formations/Formation6.jpg'
import formation7 from '@/assets/images/formations/Formation7.jpg'
import formation8 from '@/assets/images/formations/Formation8.jpg'
import formation9 from '@/assets/images/formations/Formation9.jpg'
import formation10 from '@/assets/images/formations/Formation10.jpg'
import YoutubeButton from '@/components/YoutubeButton.vue'

const formationImages = [
  formation0,
  formation1,
  formation2,
  formation3,
  formation4,
  formation5,
  formation6,
  formation7,
  formation8,
  formation9,
  formation10
]

const filterBy = (tag: string) => {
  TrainingCardsFiltered.value = TrainingCards.filter(card => card.tag === tag)

  if (tag === 'all') {
    TrainingCardsFiltered.value = TrainingCards
  }
}

const goToYoutubeChannel = () => {
  window.open('https://www.youtube.com/playlist?list=PLnzBg8pBqF1zlU_T0DwueIp_X5LrglP2X', '_blank');
}

const TrainingCards = [
  {
    title: 'Baptême de plongée',
    subtitle: 'Osez respirer sous l’eau !',
    text: 'Plongez dans l\'aventure et explorez un monde fascinant. Une expérience inoubliable d\'émerveillement et de découverte. Les baptêmes de plongée sont organisés en soirée, la semaine à la piscine Marx Dormoy. Baptêmes ouverts à tous à partir de 12 ans. Les participants mineurs doivent présenter une autorisation parentale. Prenez simplement votre équipement de piscine et contactez-nous pour participer à l’activité.',
    tag: 'discovery'
  },
  {
    title: 'Niveau 1',
    subtitle: 'Devenez explorateur des fonds sous-marins !',
    text: 'Passer votre niveau 1 de plongée vous ouvrira les portes d\'un monde sous-marin extraordinaire. L\'apprentissage de la plongée vous permettra de vivre des expériences uniques de découverte et de détente.',
    tag: 'discovery'
  },
  {
    title: 'Niveau 2',
    subtitle: 'Découvrez l\'autonomie !',
    text: 'Le niveau 2 marque une progression significative dans votre pratique de la plongée en vous offrant l\'autonomie. De plus, ce niveau, ouvre de nouvelles perspectives pour explorer un monde sous-marin encore plus vaste et captivant.',
    tag: 'advanced'
  },
  {
    title: 'Niveau 3',
    subtitle: 'Plongez en totale autonomie !',
    text: 'En obtenant ce plus haut niveau de certification en plongée, vous deviendrez un plongeur aguerri et expérimenté capable d\'explorer en toute sécurité des sites sous-marins exceptionnels.',
    tag: 'advanced'
  },
  {
    title: 'Niveau 4',
    subtitle: 'Guidez d’autres plongeurs !',
    text: 'En devenant guide de palanquée, vous aurez la possibilité de partager votre passion et être le leader des aventures sous-marines des autres plongeurs. Grâce aux nombreux encadrants du CSMN, vous pourrez bénéficier d\'un soutien solide et progresser de manière efficace dans la préparation de votre Niveau 4.',
    tag: 'management'
  },
  {
    title: 'Initiateur',
    subtitle: 'Transmettez votre savoir !',
    text: 'Vous souhaitez dispenser des baptêmes ou former au Niveau 1. Le CSMN propose une formation de qualité pour préparer les candidats à l\'examen d\'initiateur Club.',
    tag: 'management'
  },
  {
    title: 'GAZ',
    subtitle: 'Devenez experts des mélanges gazeux !',
    text: 'Le CSMN est l\'un des rares clubs de plongée de la région à proposer des formations Nitrox et Nitrox Confirmé.',
    tag: 'advanced'
  },
  {
    title: 'BIOLOGIE',
    subtitle: 'Dialoguez avec les poissons !',
    text: 'Envie de mieux comprendre l\'écosystème marin !!! Le CSMN propose une formation en biologie sous-marine. Cette formation vous permettra d\'apprécier davantage la  diversité de la vie marine que vous rencontrez lors de vos plongées.',
    tag: 'other'
  },
  {
    title: 'Photo / Video',
    subtitle: 'Photographiez les couleurs des fonds-marins !',
    text: 'Capturez vos souvenirs sous marins. Le CSMN soutient nos plongeurs photographes et vidéastes à échanger et partager autour de cette passion.',
    tag: 'other'
  },
  {
    title: 'Apnée',
    subtitle: 'Plongez léger !',
    text: 'Découvrez et explorez ce nouveau monde où le silence règne en maître.',
    tag: 'other'
  },
  {
    title: 'Tir sur cible',
    subtitle: '3, 2, 1, Tirez !',
    text: 'Discipline qui associe habileté, concentration et contrôle de la respiration. Venez profiter des sessions divertissantes de tir sur cible au CSMN.',
    tag: 'other'
  },
]

const TrainingCardsFiltered = ref(TrainingCards)
</script>

<style scoped>

h1 {
  font-size: 2rem;
}

.main-container {
  display: flex;
  flex-direction: column;
}

.container{
  background-color: #67ACDA;
  padding-right: 0 !important;
}

.filters {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.filter {
  background-color: #B3D5EC;
  padding: 10px;
  border-radius: 500px;
  cursor: pointer;
  margin: 0 .2rem;
}

.cards {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  position: relative;
  z-index: 2;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.cards::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.card span {
  font-size: 18px;
  font-style: italic;
  color: #FFBF29;
}

.wave-container {
  background-color: #67ACDA;
  position: relative;
  margin-top: -2rem;
  width: 100%;
  height: 30vh;
}

.wave-container img {
  position: absolute;
  width: 100%;
  height: auto;
}

.logo_yt {
  cursor: pointer;
  height: fit-content;
  color: #fff !important;
  display: flex;
  align-items: center;
  background-color: #263D63;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 1000px;
  margin-right: 3rem;
}

.logo_yt:hover {
  background-color: #1c2e4a;
}

.logo_yt span {
  padding: 0 1rem;
  border-radius: 1000px;
}

.flex-row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -4rem;
}

@media(max-width: 768px) {
  .filters {
    display: none;
  }

  .flex-row {
    flex-direction: column;
    margin-top: -1rem;
    align-items: flex-start;
  }

  .logo_yt {
    cursor: pointer;
    height: fit-content;
    color: #fff !important;
    display: flex;
    align-items: center;
    background-color: #263D63;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 1000px;
    margin-right: 3rem;
  }

  .wave-container {
    margin-top: -1rem;
  }

  .wave-container img {
    height: 100%;
  }
}

</style>
