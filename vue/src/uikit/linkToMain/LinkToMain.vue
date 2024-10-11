<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import styles from './LinkToMain.module.scss'
</script>

<template>
  <RouterLink to="/" :class="styles.toMain">
    <IconArrowLeft width="16" height="16" fill="#FF6B00" />
    Главная
  </RouterLink>
</template>
