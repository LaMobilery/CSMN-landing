<template>
  <div class="container">
    <div class="contact-button"
         :class="{ active: activeButton === 'phone' }"
         @click="handleActiveButton('phone')">
      <img :src="phone" alt="bouton telephone">
      <div v-if="activeButton === 'phone'" class="info">{{$t('infoContact.phoneNumber')}}</div>
    </div>

    <div class="contact-button"
        :class="{ active: activeButton === 'mail' }"
        @click="handleActiveButton('mail')"
    >
      <img :src="mail" alt="bouton mail">
      <span v-if="activeButton === 'mail'" class="info">{{$t('infoContact.email')}}</span>
    </div>
    <div
        class="contact-button"
        :class="{ active: activeButton === 'messenger' }"
        @click="handleActiveButton('messenger')"
    >
      <img :src="messenger" alt="bouton messenger">
      <span v-if="activeButton === 'messenger'" @click.stop="goToMessenger" class="info">{{$t('infoContact.messenger')}}</span>
    </div>
    <div
        class="contact-button"
        :class="{ active: activeButton === 'whatsapp' }"
        @click="handleActiveButton('whatsapp')"
    >
      <img :src="whatsapp" alt="bouton whatsapp">
      <span v-if="activeButton === 'whatsapp'" class="info">{{$t('infoContact.whatsapp')}}</span>
    </div>
  </div>
</template>

<script setup>
import phone from '@/assets/icons/phone.svg'
import mail from '@/assets/icons/mail.svg'
import messenger from '@/assets/icons/messenger.svg'
import whatsapp from '@/assets/icons/whatsapp.svg'

import { ref } from 'vue'

const activeButton = ref('')

const handleActiveButton = (button) => {
  activeButton.value = activeButton.value === button ? '' : button;
};

const goToMessenger = () => {
  window.open('https://m.me/452269651463869', '_blank');
};
</script>

<style scoped>
.container {
  display: flex;
}

.contact-button {
  cursor: pointer;
  background-color: #fff;
  color: #1C3052;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.3s, padding 0.3s, background 0s, border-radius 0s, box-shadow 0.3s;
}

.contact-button.active {
  width: auto;
  padding: 0 10px;
  background: white;
  border-radius: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .contact-button {
    width: 48px;
    height: 48px;
  }
}
</style>
