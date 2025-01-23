<script setup>
import { propic } from '@/lib/propicStore'
</script>

<template>
  <div v-if="propic.path">
    <img :src="propic.path" id="propic" class="rounded-2xl w-60 md:w-auto md:h-48" crossorigin="anonymous"/>
  </div>
</template>