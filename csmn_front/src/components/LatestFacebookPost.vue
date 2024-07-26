<template>
  <div class="facebook-feed">
    <div
        class="fb-page"
        :data-href="props.pageUrl"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
    >
      <blockquote :cite="props.pageUrl" class="fb-xfbml-parse-ignore">
        <a :href="props.pageUrl">{{ props.pageName }}</a>
      </blockquote>
    </div>
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
    window.FB.XFBML.parse()
  }
})
</script>