<script setup>
import { watch,ref } from 'vue'
import { propic } from '@/lib/propicStore'

const emit = defineEmits(['imgload'])

const propicUrl = ref(propic.path)

watch(
  () => propic.path,
  (url) => {
    propicUrl.value = url
    emit('imgload')
  }
);
</script>

<template>
  <div v-if="propicUrl">
    <img :src="propicUrl" id="propic" class="rounded-2xl w-60 md:w-auto md:h-48" crossorigin="anonymous"/>
  </div>
</template>