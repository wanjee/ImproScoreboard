<script setup lang="ts">
import ControlTeamScore from '@/components/control/team/score/ControlTeamScore.vue'
import { useScoreStore } from '@/stores/score'
import { storeToRefs } from 'pinia'
import ControlTeamFaults from '@/components/control/team/faults/ControlTeamFaults.vue'
import type { teamKey as teamKeyType } from '@/ts/types/global'

const props = defineProps<{
  teamKey: teamKeyType
}>()

const scoreStore = useScoreStore()

const { getTeamByKey } = storeToRefs(scoreStore)
const team = getTeamByKey.value(props.teamKey)
</script>

<template>
  <v-card>
    <v-card-title>{{ team.name }}</v-card-title>
    <ControlTeamScore :teamKey="teamKey"></ControlTeamScore>
    <ControlTeamFaults :teamKey="teamKey"></ControlTeamFaults>
  </v-card>
</template>

<style></style>
