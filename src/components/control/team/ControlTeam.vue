<script setup lang="ts">
import ControlTeamScore from '@/components/control/team/score/ControlTeamScore.vue'
import { useScoreStore } from '@/stores/score'
import ControlTeamFaults from '@/components/control/team/faults/ControlTeamFaults.vue'
import type { TeamKey as TeamKeyType } from '@/ts/types/global'
import { colors } from '@/ts/constants/colors'

defineProps<{
  teamKey: TeamKeyType
}>()

const scoreStore = useScoreStore()
</script>

<template>
  <v-card
    class="control-team"
    :class="{
      team__left: teamKey == 'left',
      team__right: teamKey == 'right',
    }"
    :style="{ 'border-top': '3px solid ' + colors[scoreStore.teams[teamKey].colorKey].color }"
  >
    <v-card-title>{{ scoreStore.teams[teamKey].name }}</v-card-title>
    <ControlTeamScore :teamKey="teamKey"></ControlTeamScore>
    <ControlTeamFaults :teamKey="teamKey"></ControlTeamFaults>
  </v-card>
</template>

<style>
.control-team {
    &.team__left {
        text-align: left;
    }

    &.team__right {
        text-align: right;
    }
}
</style>
