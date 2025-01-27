<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';

import { onMounted, watch, ref } from 'vue'
import { propic, getPropicUrl } from '@/lib/propicStore'
import { theme } from '@/lib/themeStore';
import { setPalette, getPaletteScheme } from '@/lib/m3system'

const isPageReady = ref(false)

onMounted(async () => {
  // https://vuejs.org/guide/essentials/watchers.html#watch-source-types
  watch(
    () => theme.mode,
    (mode) => {
      localStorage.theme = mode
      setPalette()
    }
  )

  if(!propic.path){
    await getPropicUrl()
    theme.schemes = await getPaletteScheme()

    setPalette()

    isPageReady.value = true
  }
});
</script>

<style>
  :root {
    --primary: 113, 113, 122;
    --background: 39, 39, 42;
    --on-background: 161, 161, 170;
    --on-primary: 82, 82, 91;
  }
</style>

<template>
  <div class="min-h-screen flex flex-col bg-background">
    <!-- navbar -->
    <div v-show="isPageReady && $route.name!='home'" v-cloak>
      <Navbar />
    </div>

    <!-- main -->
    <div class="flex flex-col flex-1 justify-center items-center p-2">
      <!-- loading -->
      <div class="flex justify-center items-center h-3 w-3" v-show="!isPageReady" v-cloak>
        <span class="animate-ping h-full w-full rounded-full bg-on-background opacity-75"></span>
      </div>

      <!-- content -->
      <Transition name="fade">
        <div v-show="isPageReady" v-cloak class="w-full">
          <RouterView />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style>
  /* https://vuejs.org/guide/built-ins/transition.html#named-transitions */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>