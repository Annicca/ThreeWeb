<script setup lang="ts">
import { defineProps } from 'vue'
import styles from './Button.module.scss'

const props = defineProps({
  isClear: Boolean,
  className: String
})
</script>

<template>
  <button :class="[{ [styles.yellow]: !isClear }, className]">
    <slot></slot>
  </button>
</template>
