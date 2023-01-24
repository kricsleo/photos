<template>
  <section relative>
    <img :src="photo.urls.regular" block w-full />
    <div absolute bottom-0 duration-150 class="translate-y-100% hover:translate-y-0">
      <a :href="photo.user.links.html" flex items-center gap-5>
        <img :src="photo.user.profile_image.medium" rounded-full w-10 h-10 border-2 border-light />
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
