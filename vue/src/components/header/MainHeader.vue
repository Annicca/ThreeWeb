<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import IconLogo from '@/components/icons/IconLogo.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import LinkItem from '@/components/link/LinkItem.vue'
import UIButton from '@/uikit/button/UIButton.vue'
import constants from '@/utils/ts/constants.ts'
import styles from './Header.module.scss'

const router = useRouter()
</script>

<template>
  <header v-if="!constants.IS_MOBILE" :class="['container ', styles.header]">
    <RouterLink to="/"><IconLogo /></RouterLink>
    <ul :class="styles.header__list">
      <LinkItem
        v-for="item in constants.header"
        :item="item"
        :key="item.title"
        :className="styles.header__link"
      />
    </ul>
  </header>
  <header v-else :class="['container', styles.header_mobile]">
    <div>
      <UIButton :isClear="true" @click="router.go(-1)" :className="styles.header__back">
        <template #default>
          <IconArrowLeft :width="30" :height="30" />
        </template>
      </UIButton>
    </div>
  </header>
</template>
