<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';

import { onMounted, watch, ref } from 'vue'
import { propic, getPropicUrl } from '@/lib/propicStore'
import { theme } from '@/lib/themeStore';

const isPageReady = ref(false)

/* PALETTE HANDLING */
import {
  hexFromArgb,
  themeFromSourceColor,
  sourceColorFromImage
} from '@material/material-color-utilities';

function hexToRgb(hex) {
  if(hex[0]=='#'){ hex = hex.substring(1) }
  var comps = hex.match(/.{1,2}/g)
  return `${parseInt(comps[0], 16)}, ${parseInt(comps[1], 16)}, ${parseInt(comps[2], 16)}`
}

function setPalette() {
  const colors = theme.schemes[theme.mode]
  if(!colors){ return }

  document.documentElement.style.setProperty('--background', hexToRgb(colors.background))
  document.documentElement.style.setProperty('--primary', hexToRgb(colors.primary))
  document.documentElement.style.setProperty('--on-background', hexToRgb(colors.onBackground))
  document.documentElement.style.setProperty('--on-primary', hexToRgb(colors.onPrimary))
  document.querySelector('meta[name="theme-color"]').setAttribute("content", hexToRgb(colors.background))

  document.documentElement.dataset.theme = theme.mode

  isPageReady.value = true
}

async function loadAndSetScheme() {
  const img = document.createElement("img")
  img.setAttribute('src', propic.path)
  img.setAttribute('crossorigin', 'anonymous')

  document.querySelector('link[id="favicon"]').setAttribute("href", propic.path)

  const sourceColor = await sourceColorFromImage(img)
  // const mainHct = Hct.fromInt(sourceColor)
  const m3theme = themeFromSourceColor(sourceColor)

  const dark = m3theme.schemes.dark
  const light = m3theme.schemes.light

  const palette = {
    dark: {
      primary: hexFromArgb(dark.primary),
      background: hexFromArgb(dark.background),
      onPrimary: hexFromArgb(dark.onPrimary),
      onBackground: hexFromArgb(dark.onBackground)
    },
    light: {
      primary: hexFromArgb(light.primary),
      background: hexFromArgb(light.background),
      onPrimary: hexFromArgb(light.onPrimary),
      onBackground: hexFromArgb(light.onBackground)
    }
  }

  theme.schemes = palette
  setPalette()
}

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
    loadAndSetScheme()
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
    <div v-show="$route.name!='home'">
      <Navbar />
    </div>

    <!-- main -->
    <div class="min-h-screen flex flex-col justify-center items-center p-2">
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