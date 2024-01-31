<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import { storeToRefs } from 'pinia'
import type { teamKey as teamKeyType } from '@/ts/types/global'

const props = defineProps<{
  teamKey: teamKeyType
}>()

const scoreStore = useScoreStore()

const { getTeamByKey } = storeToRefs(scoreStore)
const team = getTeamByKey.value(props.teamKey)
</script>

<template>
  <v-container v-if="team">
    <v-row dense justify-center align-center>
      <v-col class="d-flex justify-end align-center pa-6">
        <v-btn
          color="red-darken-2"
          size="small"
          icon="mdi-minus"
          @click="scoreStore.decrementTeamFaults(teamKey)"
        ></v-btn>
      </v-col>
      <v-col class="d-flex justify-center align-center pa-6 fault-value">
        {{ team.faults }} / {{ team.faults % 3 }}
      </v-col>
      <v-col class="d-flex justify-start align-center pa-6">
        <v-btn
          color="green-darken-2"
          size="small"
          icon="mdi-plus"
          @click="scoreStore.incrementTeamFaults(teamKey)"
        ></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.fault-value {
  font-size: xx-large;
  font-weight: bold;
}
</style>
