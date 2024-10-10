<script setup lang="ts">
import { defineProps } from 'vue'
import styles from './Contact.module.scss'

const props = defineProps({
  contact: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div :class="styles.contact">
    <slot name="icon"></slot>
    <span>{{ contact }}</span>
  </div>
</template>
