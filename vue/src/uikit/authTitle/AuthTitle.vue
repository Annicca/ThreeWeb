<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import styles from './AuthTitle.module.scss'

interface AuthTitleProps {
  title: string
  path: string
  linkText: string
}

const props = defineProps<AuthTitleProps>()
</script>

<template>
  <div :class="styles.wrapper">
    <h2>{{ title }}</h2>
    <p>
      <RouterLink :to="path" :class="styles.link">{{ linkText }}</RouterLink>
    </p>
  </div>
</template>
