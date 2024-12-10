<script setup lang="ts">
import { defineProps } from 'vue'
import styles from './InputControl.module.scss'

interface InputControlProps {
  label: string
  placeholder?: string
  error?: string
  modelValue?: string
  type: string
  autocomplete?: string
}

const props = defineProps<InputControlProps>()

const emit = defineEmits(['update:modelValue'])

function change(event: Event) {
  const el = event.target as HTMLInputElement
  emit('update:modelValue', el.value)
}

let id = 'input-' + Math.random()
</script>

<template>
  <div :class="styles.inputContainer">
    <input
      :type="type"
      :id="id"
      :class="styles.input"
      :placeholder="placeholder || ''"
      :autocomplete="autocomplete"
      @input="change"
      :modelValue="modelValue"
    />
    <label :for="id" :class="styles.label">{{ label }}</label>
    <div v-if="!!error" class="error-text">{{ error }}</div>
  </div>
</template>
