<template>
  <section class="contact-form">
    <h2>Formulaire de contact</h2>
    <p class="subtitle">Écrivez-nous !</p>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Nom et prénom*</label>
        <div class="input-container">
          <input type="text" id="name" v-model="form.name" required>
          <i class="fa fa-user"></i>
        </div>
      </div>
      <div class="form-group">
        <label for="email">E-mail*</label>
        <div class="input-container">
          <input type="email" id="email" v-model="form.email" required>
          <i class="fa fa-envelope"></i>
        </div>
      </div>
      <div class="form-group">
        <label for="phone">Téléphone</label>
        <div class="input-container">
          <input type="tel" id="phone" v-model="form.phone">
          <i class="fa fa-phone"></i>
        </div>
      </div>
      <div class="form-group">
        <label for="message">Dîtes-nous de quoi vous avez besoin...*</label>
        <textarea id="message"  v-model="form.message" required></textarea>
      </div>
      <p class="mandatory-note">* Champ obligatoire</p>
      <button type="submit" class="submit-button">Envoyer</button>
    </form>

    <transition name="fade">
      <div v-if="snackbar" class="snackbar" :style="isValid ?  {backgroundColor: '#4CAF50'} : { backgroundColor: '#D32F2F'}">{{ snackMessage }}</div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const snackbar = ref(false);
const isValid = ref(false);
const snackMessage = ref('');

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});

const submitForm = async () => {
  try {
    await axios.post('/send-mail', form.value);
    snackMessage.value = 'Votre message a bien été envoyé !';
    snackbar.value = true;
    isValid.value = true;
    form.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    snackMessage.value = 'Une erreur est survenue, veuillez réessayer plus tard.';
    snackbar.value = true;
    isValid.value = false;
  }

  setTimeout(() => {
    snackbar.value = false;
  }, 3000);
};
</script>

<style scoped>
.contact-form {
  background-color: #1C3052;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  color: #B3D6ED;
}

.contact-form h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.subtitle {
  color: #FFBF29;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.input-container {
  position: relative;
}

.input-container input,
.input-container textarea {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 1rem;
  border: 2px solid #B3D6ED;
  border-radius: 5px;
  background-color: #fff;
  color: #1C3052;
  font-size: 1rem;
  box-sizing: border-box;
}

.input-container textarea {
  resize: none;
  height: 100px;
}

.input-container i {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #B3D6ED;
  font-size: 1.25rem;
}

textarea {
  width: 100%;
  height: 300px;
  border-radius: 5px;
  resize: none;
}

.mandatory-note {
  font-size: 0.875rem;
  color: #B3D6ED;
  margin-bottom: 1.5rem;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 25px;
  background-color: #70aee0;
  color: #1C3052;
  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #5a98c8;
}

.snackbar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

#message {
    font-size: 20px;
}

/* Animation de fondu */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
