<template>
  <div>
    <Waterfall :cols="5" class="waterfall" laneClass="space-y-2">
      <PhotoCard v-for="photo in photos" :key="photo.id" :photo="photo" />
    </Waterfall>
    <Loader :fetcher="fetcher" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import Waterfall from '@kricsleo/waterfall-flow'
import '@kricsleo/waterfall-flow/dist/WaterfallFlow.css';
import { Photo } from '~/types/types';
import PhotoCard from './PhotoCard.vue';
import Loader from './Loader.vue';

export default Vue.extend({
  components: {
    Waterfall,
    PhotoCard,
    Loader
  },
  data() {
    return {
      photos: [] as Photo[],
      page: 1
    }
  },
  methods: {
    async fetcher() {
      const response = await fetch(`https://openapi.kric.cc/unsplash/photos?per_page=30&page=${this.page}`)
      const photos = await response.json()
      this.page += 1;
      this.photos.push(...photos)
    }
  }
});
</script>

<style>
.waterfall {
  gap: 0.5rem;
}
</style>
