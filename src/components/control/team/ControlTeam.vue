<script setup lang="ts">
import ControlTeamScore from '@/components/control/team/score/ControlTeamScore.vue'
import { useScoreStore } from '@/stores/score'
import { storeToRefs } from 'pinia'
import ControlTeamFaults from '@/components/control/team/faults/ControlTeamFaults.vue'
import type { TeamKey as TeamKeyType } from '@/ts/types/global'
import { colors } from '@/ts/constants/colors'

const props = defineProps<{
  teamKey: TeamKeyType
}>()

const scoreStore = useScoreStore()

const { getTeamByKey } = storeToRefs(scoreStore)
const team = getTeamByKey.value(props.teamKey)
</script>

<template>
  <v-card class="control-team" :style="{ 'border-top': '3px solid ' + colors[team.colorKey].color }">
    <v-card-title>{{ team.name }}</v-card-title>
    <ControlTeamScore :teamKey="teamKey"></ControlTeamScore>
    <ControlTeamFaults :teamKey="teamKey"></ControlTeamFaults>
  </v-card>
</template>

<style></style>
