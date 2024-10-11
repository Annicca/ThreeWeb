<script setup lang="ts">
import { RouterLink } from 'vue-router'
import IconCompetitions from '@/components/icons/IconCompetitions.vue'
import IconLk from '@/components/icons/IconLk.vue'
import constants from '@/utils/ts/constants'
import styles from './NavMenu.module.scss'
</script>

<template>
  <nav :class="styles.nav">
    <div :class="[{ ['container']: !constants.IS_MOBILE }, styles.nav__container]">
      <div :class="styles.nav__list">
        <RouterLink to="/" :class="[styles.nav__link]">
          <IconCompetitions
            v-if="constants.IS_MOBILE"
            :class="styles.nav__icon"
            :width="30"
            :height="30"
            :fill="'#4F4F4F'"
          />
          <span>Конкурсы</span>
        </RouterLink>

        <RouterLink v-if="constants.IS_MOBILE" to="/account" :class="[styles.nav__link]">
          <IconLk :class="styles.nav__icon" :width="30" :height="30" :fill="'#4F4F4F'" />
          <span>кабинет</span>
        </RouterLink>
      </div>
      <RouterLink v-if="!constants.IS_MOBILE" to="/account" :class="styles.nav__lk">
        <IconLk :width="50" :height="50" />
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  transition: background-color 0.3s linear;
  background-color: #ffffe0;

  @media (max-width: 1024px) {
    background-color: inherit;
    color: #ff6b00;

    svg * {
      color: #ff6b00;
      fill: #ff6b00;
    }
  }
}
</style>
