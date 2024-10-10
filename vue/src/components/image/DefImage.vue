<script>
import ImageMock from '@/assets/images/photo.png'
</script>

<template>
  <img v-if="src" />
  <img v-else :src="ImageMock" />
</template>
