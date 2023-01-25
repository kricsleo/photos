<template>
  <section class="photo" overflow-hidden bg-dark rounded-1>
    <a :href="photo.links.html" flex target="_blank" :width="photo.width" :height="photo.height">
      <img :src="photo.urls.regular" />
    </a>
    <p m-2 v-if="photo.alt_description" class="text-#dcdde3">{{ photo.alt_description }}</p>
    <div flex items-center m-2 text-sm class="text-#999ea7">
      <a :href="photo.user.links.html" inline-flex items-center gap-2 overflow-hidden mr-2 target="_blank">
        <img :src="photo.user.profile_image.medium" rounded-full w-6 h-6 />
        <p text-ellipsis overflow-hidden whitespace-nowrap>{{ photo.user.name }}</p>
      </a>
      <div ml-auto shrink-0 i-carbon:favorite />
      <span ml-1>{{ photo.likes }}</span>
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
