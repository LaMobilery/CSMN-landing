<template>
  <div class="card-container">
    <img :src="photo" alt="photo"/>
    <span id="role">{{ role }}</span>
    <span id="name">{{ name }}</span>
    <span id="email">{{ email }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  photo: String,
  role: String,
  name: String,
  email: String
})
</script>

<style scoped>
.card-container {
  background-color: #B3D6ED;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  border-radius: 5px;
  height: 300px;
  max-width: 243px;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
  object-position: center;
}

span {
  display: block;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#role {
  font-size: clamp(0.8rem, 1.5vw, 1rem);
  font-weight: 500;
}

#name {
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 500;
}

#email {
  font-size: clamp(0.7rem, 1.5vw, .9rem);
  font-weight: 700;
}

</style>