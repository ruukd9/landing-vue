<script setup>
import { togglePalette } from '@/lib/themeStore'
import { artworks } from '@/lib/artworks'

import Artwork from '@/components/Artwork.vue'
</script>

<template>
  <div class="mt-20 mb-5 px-8 lg:px-10 flex flex-col justify-center items-center gap-10">
    <h1 class="text-4xl text-primary cursor-pointer" @click="togglePalette">artworks</h1>

    <div class="flex flex-col">
      <!-- MAIN -->
      <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5">
        <Artwork v-for="item in artworks.main" :thumb="item" />
      </div>

      <!-- OLD -->
      <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5">
        <Artwork v-for="item in artworks.old" :thumb="item" />
      </div>

      <!-- EXTRA -->
      <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5">
        <Artwork v-for="item in artworks.extra" :thumb="item" />
      </div>

      <!-- TV/MOVIES -->
      <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-5">
        <Artwork v-for="item in artworks.tv" :thumb="item" />
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center text-primary w-full py-6 opacity-80">
    <h6 class="font-medium">made with ♡ - do not steal</h6>
  </div>
</template>
