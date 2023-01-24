<template>
  <section class="photo" relative overflow-hidden>
    <a :href="photo.links.html" flex target="_blank" :width="photo.width" :height="photo.height">
      <img :src="photo.urls.regular" />
    </a>
    <div absolute w-full bottom-0 duration-150 p-5 text-light class="translate-y-100% author">
      <a :href="photo.user.links.html" inline-flex items-center gap-5 target="_blank">
        <img :src="photo.user.profile_image.medium" rounded-full w-10 h-10 border-2 />
        <p>{{ photo.user.name }}</p>
      </a>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { PropType } from 'vue/types/v3-component-props';
  import { Photo } from '@/types/types'

  export default Vue.extend({
    props: {
      photo: Object as PropType<Photo>
    },
  });
</script>

<style scoped>
.photo:hover .author {
  transform: translateY(0);
}
.author {
  background-image: linear-gradient(rgba(0, 0, 0, 0.34) 0px, rgba(0, 0, 0, 0.34) 3.5%, rgba(0, 0, 0, 0.33) 7%, rgba(0, 0, 0, 0.31) 10.35%, rgba(0, 0, 0, 0.29) 13.85%, rgba(0, 0, 0, 0.26) 17.35%, rgba(0, 0, 0, 0.23) 20.85%, rgba(0, 0, 0, 0.21) 24.35%, rgba(0, 0, 0, 0.19) 27.85%, rgba(0, 0, 0, 0.17) 31.35%, rgba(0, 0, 0, 0.14) 34.85%, rgba(0, 0, 0, 0.13) 38.35%, rgba(0, 0, 0, 0.11) 41.85%, rgba(0, 0, 0, 0.1) 45.35%, rgba(0, 0, 0, 0.1) 48.85%, rgba(0, 0, 0, 0.1) 52.35%, rgba(0, 0, 0, 0.11) 55.85%, rgba(0, 0, 0, 0.13) 59.35%, rgba(0, 0, 0, 0.14) 62.85%, rgba(0, 0, 0, 0.17) 66.35%, rgba(0, 0, 0, 0.19) 69.85%, rgba(0, 0, 0, 0.21) 73.35%, rgba(0, 0, 0, 0.23) 76.85%, rgba(0, 0, 0, 0.26) 80.35%, rgba(0, 0, 0, 0.29) 83.85%, rgba(0, 0, 0, 0.31) 87.35%, rgba(0, 0, 0, 0.33) 90.85%, rgba(0, 0, 0, 0.34) 94.35%, rgba(0, 0, 0, 0.34) 97.85%, rgba(0, 0, 0, 0.35));
}
</style>
