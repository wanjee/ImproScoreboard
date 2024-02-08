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
  <v-container>
    <v-row dense justify-center align-center>
      <v-col class="d-flex justify-end align-center">
        <v-btn
          color="red-darken-2"
          icon="mdi-minus"
          :disabled="team.score <= 0"
          @click="scoreStore.decrementTeamScore(teamKey)"
        ></v-btn>
      </v-col>
      <v-col class="d-flex justify-center align-center score-display">
        {{ team.score }}
      </v-col>
      <v-col class="d-flex justify-start align-center">
        <v-btn color="green-darken-2" icon="mdi-plus" @click="scoreStore.incrementTeamScore(teamKey)"></v-btn>
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
