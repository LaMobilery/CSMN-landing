<template>
  <div class="facebook-feed" style="min-height: 300px; min-width: 300px;">
    <div class="fb-post" data-href="https://www.facebook.com/shootingstarsroller/posts/pfbid02ZxgWL4v3hJxAbzECTcJWmMo24SVozkAApX2wr8krP9V1RGfWUjtRRoj9Tosfumjil/" data-width="500" data-show-text="true"></div>
  </div>
</template>

<script setup>
import {onMounted, defineProps} from 'vue'

const props = defineProps({
  pageUrl: {
    type: String,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
})

onMounted(() => {
  // Réinitialisez le plugin Facebook après le montage du composant
  if (window.FB) {
    console.log('Facebook SDK chargé', window.FB)
    window.FB.XFBML.parse()
  }
})
</script>