<script setup lang="ts">
import IconTg from '@/components/icons/IconTg.vue'
import IconVk from '@/components/icons/IconVk.vue'
import styles from './Footer.module.scss'
</script>

<template>
  <footer :class="styles.footer">
    <div :class="['container', styles.footer__container]">
      <div :class="styles.footer__title">Мы в соц сетях:</div>
      <div :class="styles.footer__social">
        <a href="https://web.telegram.org/" target="_blank">
          <IconTg :width="40" :height="40" :fill="black" />
        </a>
        <a href="https://vk.com/" target="_blank">
          <IconVk :width="40" :height="40" :fill="black" />
        </a>
      </div>
    </div>
  </footer>
</template>
