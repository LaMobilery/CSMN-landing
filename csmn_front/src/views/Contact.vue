<template>
  <section class="contact">
    <div class="left-block">
      <h2>{{$t('contact.title')}}</h2>
      <div class="flex-row">
          <img :src="mapCsmn" alt="Carte du CSMN" />
          <div class="address">
            <h3>{{$t('contact.csmn')}}</h3>
            <span>
              {{$t('contact.address.line1')}}
              <br>
              {{$t('contact.address.line2')}}
              <br>
              {{$t('contact.address.line3')}}
            </span>
          </div>
      </div>

      <p>
        {{$t('contact.schedule.line1')}}
        <strong>
          {{$t('contact.schedule.line2')}}
        </strong>
      </p>
      <p>
        {{$t('contact.access')}}
      </p>

      <div class="contact-us">
        <h2> {{$t('contact.contactUs')}}</h2>
        <InfoContact/>
      </div>
    </div>

    <div class="right-block">
      <ContactForm/>
    </div>
  </section>
  <div class="waves">
    <img :src="wave1" class="wave wave1">
    <img :src="wave2" class="wave wave2">
    <img :src="wave3" class="wave wave3">
  </div>
</template>

<script lang="ts" setup>
import wave1 from '@/assets/waves/wave10.svg'
import wave2 from '@/assets/waves/wave11.svg'
import wave3 from '@/assets/waves/wave12.svg'
import mapCsmn from '@/assets/images/map_csmn.svg'
import InfoContact from '@/components/InfoContact.vue'
import ContactForm from '@/components/ContactForm.vue'
</script>

<style scoped>
.contact {
  background-color: #1C3052;
  display: flex;
  flex-direction: row;
}

.left-block {
  flex: 2;
  margin-right: 2rem;
}

.contact-us {
  margin-top: 2rem;
  z-index: 100;
}

.right-block {
  flex: 1;
}

.flex-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
}

img {
  width: 90%;
}

.address {
  margin-left: 2rem;
  color: #FFBF29;
}

h3, span {
  color: #FFBF29;
}

p {
  color: #fff;
  font-size: 20px;
}

h2 {
  font-size: 32px;
  font-weight: 700;
  color: #B3D6ED;
}

.waves {
  position: relative;
  width: 100%;
  height: 30vh;
  background-color: #1C3052;
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
  z-index: 10;
}
</style>
