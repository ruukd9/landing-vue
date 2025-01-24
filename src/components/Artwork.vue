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
  <div class="flex flex-col aspect-square pb-[100%]">
    <img v-lazyload :data-url="`${cdnurl}/${thumb}`" @click="open=true" class="w-full h-full opacity-0 transition-all rounded-xl object-cover object-center cursor-pointer dark:brightness-[.8] dark:contrast-[1.2]"/>
  </div>

  <Transition name="slide-fade">
    <div v-if="open" class="flex flex-col gap-2 items-center justify-center fixed top-0 left-0 h-screen w-screen bg-black/70 z-10 backdrop-blur-sm" @click="open=false">
      <img :src="`${cdnurl}/${thumb}`" class="max-w-[80%] rounded-3xl sm:max-h-[80%] dark:brightness-[.8] dark:contrast-[1.2]" />
      <p class="text-background dark:text-on-background">Click anywhere to dismiss</p>
    </div>
  </Transition>
</template>

<style>
/* https://vuejs.org/guide/built-ins/transition.html#named-transitions */
.slide-fade-enter-active {
  transition: all 0.3s;
}

.slide-fade-leave-active {
  transition: all 0.3s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>