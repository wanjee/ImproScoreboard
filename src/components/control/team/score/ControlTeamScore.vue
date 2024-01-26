<script setup lang="ts">
import { useScoreBoardStore } from '@/stores/scoreBoard'
import { storeToRefs } from 'pinia'

const props = defineProps<{
  teamId: number
}>()

const store = useScoreBoardStore()

const { getTeamById } = storeToRefs(store)
// FIXME not reactive, not updated after initial load
const team = getTeamById.value(props.teamId)
</script>

<template>
  <v-container v-if="team">
    <v-row dense justify-center align-center>
      <v-col class="d-flex justify-end align-center pa-6">
        <v-btn color="red" icon="mdi-minus" @click="store.decrementTeamScore(team.id)"></v-btn>
      </v-col>
      <v-col class="d-flex justify-center align-center pa-6 score-display">
        {{ team.score }}
      </v-col>
      <v-col class="d-flex justify-start align-center pa-6">
        <v-btn color="green" icon="mdi-plus" @click="store.incrementTeamScore(team.id)"></v-btn>
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
