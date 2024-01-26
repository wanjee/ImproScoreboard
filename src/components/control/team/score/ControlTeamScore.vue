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
  <v-container>
    <v-row dense justify-center align-center>
      <v-col class="d-flex justify-end align-center pa-6">
        <v-btn color="red" icon="mdi-minus" @click="store.decrementTeamScore(teamKey)"></v-btn>
      </v-col>
      <v-col class="d-flex justify-center align-center pa-6 score-display">
        {{ team.score }}
      </v-col>
      <v-col class="d-flex justify-start align-center pa-6">
        <v-btn color="green" icon="mdi-plus" @click="store.incrementTeamScore(teamKey)"></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.score-display {
  font-size: xxx-large;
  font-weight: bold;
}
</style>
