<script setup lang="ts">
import { defineProps } from 'vue'
import { ETypeMessage } from '@/types/ETypeMessage'
import styles from './Message.module.scss'

interface MessageProps {
  type?: ETypeMessage
  text: String
}

const props = defineProps<MessageProps>()
</script>

<template>
  <div :class="[{ [styles.message_error]: type === ETypeMessage.ERROR }, styles.message]">
    {{ text }}
  </div>
</template>
