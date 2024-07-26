<template>
  <div class="container">
    <section class="faq">
      <h1>{{ $t('faq.title') }}</h1>
      <AccordionItem :title="$t('faq.questions.q1.question')">
        <ul>
          <li>{{ $t('faq.questions.q1.answer1') }}</li>
          <ul>
            <li>{{ $t('faq.questions.q1.answer2') }}</li>
            <li>{{ $t('faq.questions.q1.answer3') }}</li>
            <li>{{ $t('faq.questions.q1.answer4') }}</li>
            <li>{{ $t('faq.questions.q1.answer5') }}</li>
            <li>{{ $t('faq.questions.q1.answer6') }}</li>
          </ul>
          <li>{{ $t('faq.questions.q1.answer7') }}</li>
          <li>{{ $t('faq.questions.q1.answer8') }}</li>
        </ul>
      </AccordionItem>
      <AccordionItem :title="$t('faq.questions.q2.question')">
        <ul>
          <li>{{ $t('faq.questions.q2.answer1') }}</li>
          <li>{{ $t('faq.questions.q2.answer2') }}</li>
          <li>{{ $t('faq.questions.q2.answer3') }}</li>
        </ul>
      </AccordionItem>
      <AccordionItem :title="$t('faq.questions.q3.question')">
        <ul>
          <li>{{ $t('faq.questions.q3.answer1') }}</li>
          <li>{{ $t('faq.questions.q3.answer2') }}</li>
          <li>{{ $t('faq.questions.q3.answer3') }}</li>
        </ul>
      </AccordionItem>
      <AccordionItem :title="$t('faq.questions.q4.question')">
        <ul>
          <li>{{ $t('faq.questions.q4.answer') }}</li>
        </ul>
      </AccordionItem>
      <AccordionItem :title="$t('faq.questions.q5.question')">
        <ul>
          <li>{{ $t('faq.questions.q5.answer1') }}</li>
        </ul>
      </AccordionItem>
      <AccordionItem :title="$t('faq.questions.q6.question')">
        <ul>
          <li>{{ $t('faq.questions.q6.answer1') }}</li>
        </ul>
      </AccordionItem>
    </section>
    <section class="partner">
        <h2>Partenaires</h2>
      <div class="partner-content">
          <div class="white-background">
            <a href="https://ffessm.fr/" target="_blank">
              <img src="@/assets/images/partenaires/FFESSM-Logo.svg" alt="logo partenaire 1" class="partner-logo">
            </a>
          </div>
          <div class="white-background">
            <a href="http://www.ffessm-hdf.fr/" target="_blank">
              <img src="../assets/images/partenaires/Les-Hauts-de-France-FFESSM.svg" alt="logo partenaire 1" class="partner-logo">
            </a>
          </div>
          <div class="white-background">
            <a href="https://www.codep59-ffessm.fr/" target="_blank">
              <img src="../assets/images/partenaires/Nord-59-FFESSM.svg" alt="logo partenaire 1" class="partner-logo">
            </a>
          </div>
          <div class="white-background">
            <a href="https://guide-centres-plongee.longitude181.org/" target="_blank">
              <img src="@/assets/images/partenaires/longitude.svg" alt="logo partenaire 1" class="partner-logo">
            </a>
          </div>
          <div class="white-background">
            <a href="https://doris.ffessm.fr/" target="_blank">
              <img src="../assets/images/partenaires/logo-DORIS.svg" alt="logo partenaire 1" class="partner-logo">
            </a>
          </div>
          <div class="white-background">
            <a href="https://www.ffessm.lafont-assurances.com/" target="_blank">
              <img src="../assets/images/partenaires/LogoFFESSM.svg" alt="logo partenaire 1" class="partner-logo">
            </a>
          </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import AccordionItem from '@/components/AccordionItem.vue'
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  background-color: #B3D6ED;
  margin-top: -3rem;
}

.faq {
  flex: 3;
}

.partner {
  flex: 1;
}

.partner-content {
  margin: 2rem 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  background-color: #C0DDF1;
  border-radius: 16px;
}

.white-background {
  background-color: white;
  padding: 1rem;
  width: 80%;
  border-radius: 16px;
  margin-bottom: 1rem;
}

.partner-logo {
  width: 100%;
}

@media(max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .partner-content {
    margin: 0;
    padding: 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #fff;
  }

  .partner {
    background-color: #fff;
  }

  .white-background {
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);
    width: 70%;
  }
}

</style>
