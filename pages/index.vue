<template>
  <div>
    <div text-gray text-20 font-italic font-mono text-center>
      What's New
    </div>
    <p text-right text-xs text-gray font-italic leading-8>
      Powered by 
      <a href="https://github.com/kricsleo/waterfall-flow" target="_blank" underline>waterfall-flow</a>
      and
      <a href="https://unsplash.com" target="_blank" underline>unsplash.com</a>
    </p>
    <PhotoList />
  </div>
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
  min-height: 100vh;
  margin-left: calc(100vw - 100%);
  padding: 0 10vw;
  overflow-Y: scroll;
  background-color: #18191e;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  display: none;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 999rem;
  /* background-color: rgba(107, 114, 128, 0.5); */
}
</style>
