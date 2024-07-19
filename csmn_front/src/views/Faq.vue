<template>
  <div class="container">
    <section class="faq">
      <h1>FAQ</h1>
      <AccordionItem title="Combien coûte l'adhésion ?">
        <ul>
          <li>Plongée :</li>
          <ul>
            <li>Formation Niveau 1 : 183 €</li>
            <li>Tout autre niveau ou formation : 140 €</li>
            <li>Encadrant : 76 €</li>
            <li>Réduction : mineurs ou étudiant -25 ans : 30 €</li>
            <li>Réduction famille 2ème membre : 15 €</li>
          </ul>
          <li>Apnée : 80 €</li>
          <li>Formule piscine : 46 €</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Comment se déroule la formation Niveau 1 ?">
        <ul>
          <li>Vous serez intégré à un groupe pour les séances en piscine : le mardi, le jeudi ou le vendredi.</li>
          <li>Vous devrez plonger 4 fois à minima, en milieu naturel (en fosse, en carrière ou en mer).</li>
          <li>Votre formation durera de l'ordre de 3 à 4 mois.</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Comment se déroule la formation en Apnée ?">
        <ul>
          <li>Le club forme au niveau "apnéiste" et "apnéiste confirmé".</li>
          <li>Vous serez intégré à un groupe de 10 apnéiste (maximum).</li>
          <li>Votre formation s'étalera en 4 et 6 mois, à raison d'une séance par semaine.</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Puis-je m'inscrire en cours d'année ?">
        <ul>
          <li>Oui, jusque fin mars.</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Le club propose-t-il des formations passerelles ?">
        <ul>
          <li>Oui et vous pourrez ainsi continuer vos formations aux brevets de la FFESSM.</li>
        </ul>
      </AccordionItem>
      <AccordionItem title="Les enfants peuvent-ils devenir membres du club ?">
        <ul>
          <li>Nous accueillons les ados à partir de 12 ans, afin de passer le Niveau 1.</li>
        </ul>
      </AccordionItem>
    </section>
    <section class="partner">
      <div class="partner-content">
        <h2>Partenaires</h2>
          <div class="white-background">
            <img src="@/assets/images/partenaires/FFESSM-Logo-FFESSM-quadri-300x300%201.svg" alt="logo partenaire 1" class="partner-logo">
          </div>
          <div class="white-background">
            <img src="@/assets/images/partenaires/Les-Hauts-de-France-FFESSM-Logo-quadri-300x300.svg" alt="logo partenaire 1" class="partner-logo">
          </div>
          <div class="white-background">
            <img src="@/assets/images/partenaires/Nord-59-FFESSM-Logo-quadri-300x300.svg" alt="logo partenaire 1" class="partner-logo">
          </div>
          <div class="white-background">
            <img src="@/assets/images/partenaires/image%20(10)%201.svg" alt="logo partenaire 1" class="partner-logo">
          </div>
          <div class="white-background">
            <img src="@/assets/images/partenaires/logo-DORIS-V4b_image600.svg" alt="logo partenaire 1" class="partner-logo">
          </div>
          <div class="white-background">
            <img src="@/assets/images/partenaires/LogoFFESSM_new_cropped.svg" alt="logo partenaire 1" class="partner-logo">
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

</style>
