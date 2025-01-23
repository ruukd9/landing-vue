<script>
  export default {
    data(){
      return {
        open: false,
        cdnurl: "https://ruuk999.sirv.com" // 'images'
      }
    },
    props: {
      thumb: {
        type: String,
        required: true,
      },
    }
  }
</script>

<template>
  <img :src="`${cdnurl}/${thumb}`" @click="open=true" class="w-100 h-100 rounded-xl aspect-square object-cover object-center cursor-pointer dark:brightness-[.8] dark:contrast-[1.2]"/>

  <div v-if="open" class="flex flex-col gap-2 items-center justify-center fixed top-0 left-0 h-screen w-screen bg-black/70 z-10 backdrop-blur-sm" @click="open=false">
    <img :src="`${cdnurl}/${thumb}`" class="max-w-[80%] rounded-3xl sm:max-h-[80%] dark:brightness-[.8] dark:contrast-[1.2]" />
    <p class="text-background dark:text-on-background">Click anywhere to dismiss</p>
  </div>
</template>