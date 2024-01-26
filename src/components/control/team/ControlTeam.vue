<script setup lang="ts">
import ControlTeamScore from '@/components/control/team/score/ControlTeamScore.vue'
import { useScoreBoardStore } from '@/stores/scoreBoard'
import { storeToRefs } from 'pinia'
import ControlTeamFaults from '@/components/control/team/faults/ControlTeamFaults.vue'
import type { teamKey as teamKeyType } from '@/ts/types/global'

const props = defineProps<{
  teamKey: teamKeyType
}>()

const store = useScoreBoardStore()

const { getTeamByKey } = storeToRefs(store)
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
