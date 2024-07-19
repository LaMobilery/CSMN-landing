<template>
  <section id="friendliness">
    <h1>La convivialité</h1>

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
            <img
                v-if="index !== currentPhotoIndex"
                :src="photo">
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import photo1 from '@/assets/images/convivialite/Convivialite1.png'
import photo2 from '@/assets/images/convivialite/Convivialite2.png'
import photo3 from '@/assets/images/convivialite/Convivialite3.png'
import photo4 from '@/assets/images/convivialite/Convivialite4.png'

const photos = ref([photo1, photo2, photo3, photo4])

const currentPhotoIndex = ref(0)
const facebookPageUrl = 'https://www.facebook.com/ClubSousMarinNord';

const changePhoto = (index) => {
  currentPhotoIndex.value = index
}

onMounted(() => {
  // Load the Facebook SDK
  if (window.FB) {
    window.FB.XFBML.parse();
  } else {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
});

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

.active {
  display: none;
}

.facebook-widget {
  flex: 1;
}
</style>
