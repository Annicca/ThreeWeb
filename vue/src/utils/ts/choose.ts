import { EStatusCompetition } from '@/types/EStatusCompetition'

export const chooseStatusCompetition = (status: EStatusCompetition): string => {
  switch (status) {
    case EStatusCompetition.CREATED:
      return 'Набор участников'
    case EStatusCompetition.STARTED:
      return 'Проводится'
    case EStatusCompetition.CANCELLED:
      return 'Отменен'
    case EStatusCompetition.FINISHED:
      return 'Окончен'
    default:
      return '-'
  }
}
