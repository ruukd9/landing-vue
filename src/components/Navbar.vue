<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="py-3 px-4">
    <div class="flex justify-center items-center gap-2">
      <RouterLink to="/"
        class="py-2 px-4 rounded-xl flex items-center justify-center text-on-background hover:bg-primary/5"
        activeClass="font-medium text-primary bg-primary/15"
      >/</RouterLink>
      <RouterLink to="/art"
        class="py-2 px-4 rounded-xl flex items-center justify-center text-on-background hover:bg-primary/5"
        activeClass="font-medium text-primary bg-primary/15"
      >art</RouterLink>
    </div>
  </div>
</template>