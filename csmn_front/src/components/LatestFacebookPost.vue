<template>
  <div class="facebook-plugin" style="border:5px solid red;">
    <div id="fb-root"></div>
    <div
        class="fb-page"
        :data-href="pageUrl"
        data-tabs="timeline"
        data-width="500"
        data-height="700"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
        data-lazy="true"
    >
      <blockquote :cite="pageUrl" class="fb-xfbml-parse-ignore">
        <a :href="pageUrl">{{ pageName }}</a>
      </blockquote>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  pageUrl: {
    type: String,
    required: true
  },
  pageName: {
    type: String,
    required: true
  }
});

onMounted(() => {
  window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v17.0'
    });
    FB.Event.subscribe('xfbml.render', function() {
      console.log('Le plugin Facebook a été rendu');
    });
  };

  const initFacebookSDK = () => {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      setTimeout(initFacebookSDK, 100);
    }
  };

  // Charger le SDK Facebook
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v17.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  initFacebookSDK();
});
</script>