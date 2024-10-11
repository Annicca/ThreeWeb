<script setup lang="ts">
import { RouterLink } from 'vue-router'
import styles from './Account.module.scss'
</script>

<template>
  <div :class="styles.wrapper">
    <RouterLink to="/login" :class="styles.btn"> Войти </RouterLink>
    <RouterLink to="/signin" :class="styles.btn"> Регистрация </RouterLink>
  </div>
</template>
