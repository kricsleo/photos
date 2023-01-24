<template>
  <PhotoList />
</template>

<script lang="ts">
import Vue from 'vue'
import PhotoList from '~/components/PhotoList.vue'

export default Vue.extend({
  components: { PhotoList },
})
</script>

<style>
body {
  overflow: scroll;
}
</style>
