<template>
  <div flex justify-center py-5>
    <div v-observe:loader="active" i-carbon:circle-dash text-8 animate-spin class="text-#999ea7" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { PropType } from 'vue/types/v3-component-props';
  import { vueObserverDirectives, observerManager } from '@kricsleo/observer-vue'
  
  Vue.directive('observe', vueObserverDirectives)

  export default Vue.extend({
    props: {
      fetcher: Function as PropType<() => Promise<any>>
    },
    data() {
      return {
        loading: false
      }
    },
    mounted() {
      observerManager.registerObserver('loader', { rootMargin: '0% 0% 100% 0%'})
    },
    beforeDestroy() {
      observerManager.deleteObserver('loader')
    },
    methods: {
      async active() {
        console.log('active')
        if(this.loading) {
          return
        }
        this.loading = true
        this.fetcher().finally(() => this.loading = false)
      }
    }
  });
</script>
