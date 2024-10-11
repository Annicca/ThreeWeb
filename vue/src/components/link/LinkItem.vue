<template>
  <RouterLink :to="item.link" :class="className">{{ item.title }}</RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { TypeLink } from '@/types/TypeLink'
import { defineProps } from 'vue'

interface LinkItemProps {
  item: TypeLink
  className?: string
}

const props = defineProps<LinkItemProps>()
</script>
