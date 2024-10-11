<script setup lang="ts">
import { defineProps } from 'vue'
import type { TCompetition } from '@/types/TCompetition'
import DefImage from '@/components/image/DefImage.vue'
import UIContact from '@/uikit/contact/UIContact.vue'
import constants from '@/utils/ts/constants'
import { chooseStatusCompetition } from '@/utils/ts/choose'
import { transformDate } from '@/utils/ts/transformDate'
import IconPlace from '@/components/icons/IconPlace.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import styles from './Competition.module.scss'

interface CompetitionProps {
  competition: TCompetition
}

const props = defineProps<CompetitionProps>()
</script>

<template>
  <div :class="styles.competition">
    <div :class="styles.competition__imgcontainer">
      <DefImage
        :src="competition.img"
        :alt="`Фото конкурса ${competition.nameCompetition}`"
        :class="styles.competition__img"
      />
      <p v-if="!constants.IS_MOBILE" class="text-orange">
        {{ 'Статус: ' + chooseStatusCompetition(competition.statusCompetition) }}
      </p>
    </div>
    <div :class="styles.competition__info">
      <div :class="styles.competition__topcontainer">
        <p :class="styles.competition__name">
          {{ competition.nameCompetition }}
        </p>
        <UIContact
          :contact="competition.cityCompetition.city"
          :className="styles.competition__place"
        >
          <template #icon><IconPlace fill="#FF6B00" :width="20" :height="20" /></template>
        </UIContact>
      </div>
      <UIContact
        :contact="
          transformDate(competition.dateStart) + ' - ' + transformDate(competition.dateFinish)
        "
        :className="styles.competition__date"
      >
        <template #icon>
          <IconCalendar height="25" />
        </template>
      </UIContact>
      <p v-if="constants.IS_MOBILE" class="text-orange">
        {{ 'Статус: ' + chooseStatusCompetition(competition.statusCompetition) }}
      </p>
    </div>
  </div>
</template>
