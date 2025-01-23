<script>
import Propic from '@/components/Propic.vue'
import Socials from '@/components/Socials.vue'

import { togglePalette } from '@/lib/themeStore'
import { propic } from '@/lib/propicStore'

export default {
  data(){
    return {
      ready: propic.path != null,
    }
  },
  methods: {
    togglePalette
  },
  components: {
    Propic, Socials
  }
}
</script>

<template>
  <div class="flex-col flex md:flex-row gap-8">
    <div class="flex justify-center cursor-pointer" @click="togglePalette">
      <Propic @imgload="ready=true"/>
    </div>

    <div class="flex flex-col gap-4 justify-between">
      <div class="flex flex-col gap-2">
        <div>
          <h1 class="text-4xl text-primary">るk</h1>
          <h2 class="text-base text-primary">@ruuk999</h2>
        </div>
        <p class="text-on-background">Musician, artist. Creating is purpose</p>
      </div>

      <Socials/>
    </div>
  </div>
</template>
