<template>
  <section>
    <img :src="photo.urls.regular" />
    <div>
      <a :href="photo.user.links.html" flex>
        <img :src="photo.user.profile_image.medium" />
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
