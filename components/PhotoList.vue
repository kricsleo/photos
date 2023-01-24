<template>
  <Waterfall :cols="5">
    <PhotoCard v-for="photo in photos" :key="photo.id" :photo="photo" />
  </Waterfall>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import Waterfall from '@kricsleo/waterfall-flow'
import '@kricsleo/waterfall-flow/dist/WaterfallFlow.css';
import { Photo } from '~/types/types';
import PhotoCard from './PhotoCard.vue';

export default Vue.extend({
  components: {
    Waterfall,
    PhotoCard
  },
  data() {
    return {
      photos: [] as Photo[]
    }
  },
  async mounted() {
    const response = await fetch(`https://openapi.kric.cc/unsplash/photos`)
    this.photos = await response.json()
  }
});
</script>

<style scoped lang="scss">

</style>
