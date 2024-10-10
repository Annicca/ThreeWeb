<template>
  <div :class="['container', 'main-container']">
    <div v-if="competition.length" class="['list', 'list_competitions']">
      <CardCompetition
        v-for="competition in competitions"
        :competition="competition"
        :key="competition.idCompetition"
      />
    </div>
    <UIMessage v-else :text="'Ничего не найдено'" />
  </div>
</template>

<script setup lang="ts">
import CardCompetition from '@/uikit/competition/CardCompetition.vue'
import UIMessage from '@/uikit/message/UIMessage.vue'

const competition = []
</script>
