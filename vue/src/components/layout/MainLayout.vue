<script setup lang="ts">
import MainHeader from '@/components/header/MainHeader.vue'
import MainFooter from '@/components/footer/MainFooter.vue'
import NavMenu from '@/components/nav/NavMenu.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <MainHeader />
      <NavMenu />
      <main>
        <RouterView />
      </main>
    </div>
    <MainFooter />
  </div>
</template>
