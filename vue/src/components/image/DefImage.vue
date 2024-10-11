<script setup lang="ts">
import { defineProps } from 'vue'
import ImageMock from '@/assets/images/photo.png'

interface ImageProps {
  src: string | null
}

const props = defineProps<ImageProps>()
</script>

<template>
  <img v-if="!!src" />
  <img v-else :src="ImageMock" />
</template>
