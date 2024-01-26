<script setup lang="ts">
import { useScoreBoardStore } from '@/stores/scoreBoard'
import { storeToRefs } from 'pinia'
import type { teamKey as teamKeyType } from '@/ts/types/global'

const props = defineProps<{
  teamKey: teamKeyType
}>()

const store = useScoreBoardStore()

const { getTeamByKey } = storeToRefs(store)
const team = getTeamByKey.value(props.teamKey)
</script>

<template>
  <v-container v-if="team">
    <v-row dense justify-center align-center>
      <v-col class="d-flex justify-end align-center pa-6">
        <v-btn color="red" size="small" icon="mdi-minus" @click="store.decrementTeamFaults(teamKey)"></v-btn>
      </v-col>
      <v-col class="d-flex justify-center align-center pa-6 fault-value">
        {{ team.faults }} / {{ team.faults % 3 }}
      </v-col>
      <v-col class="d-flex justify-start align-center pa-6">
        <v-btn color="green" size="small" icon="mdi-plus" @click="store.incrementTeamFaults(teamKey)"></v-btn>
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
