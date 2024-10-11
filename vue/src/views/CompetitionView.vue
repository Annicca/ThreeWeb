<script setup lang="ts">
import { useFetch } from '@/utils/ts/useFetch'
import CardCompetition from '@/uikit/competition/CardCompetition.vue'
import UIMessage from '@/uikit/message/UIMessage.vue'
import type { TCompetition } from '@/types/TCompetition'

const { data: competitions } = useFetch<TCompetition[]>('src/assets/json/competitions.json')
</script>

<template>
  <div :class="['container', 'main-container']">
    <div v-if="competitions?.length" :class="['list', 'list_competitions']">
      <CardCompetition
        v-for="competition in competitions"
        :competition="competition"
        :key="competition.idCompetition"
      />
    </div>
    <UIMessage v-else :text="'Ничего не найдено'" />
  </div>
</template>
