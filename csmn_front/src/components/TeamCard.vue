<template>
  <div class="card-container">
    <img :src="photo" alt="photo"/>
    <span id="role">{{ role }}</span>
    <span id="name">{{ name }}</span>
    <span id="email">{{ email }}</span>
  </div>
</template>

<script setup>
// create photo props to receive the photo from the parent component
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
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

#role {
  font-size: .9rem;
  font-weight: 700;
}

#email {
  font-weight: 700;
}

</style>