<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import { storeToRefs } from 'pinia'
import { useBoardScreenStore } from '@/stores/boardScreen'
import { colors } from '@/ts/constants/colors'
import TheTimer from '@/components/theTimer.vue'

const scoreStore = useScoreStore()
const boardScreenStore = useBoardScreenStore()

const { teams } = storeToRefs(scoreStore)
</script>

<template>
  <v-row justify-center align-center class="flex-shrink-1">
    <v-col class="d-flex flex-column justify-center align-center">
      <h1>{{ boardScreenStore.primaryTitle }}</h1>
      <h2 v-if="boardScreenStore.secondaryTitle">{{ boardScreenStore.secondaryTitle }}</h2>
    </v-col>
  </v-row>
  <v-row justify-center align-center class="flex-grow-1">
    <v-col v-for="(team, key) in teams" :key="key" cols="6" class="pa-10">
      <v-card
        class="team d-flex flex-column"
        :class="{ team__a: key == 'teamA', team__b: key == 'teamB' }"
        height="100%"
        :style="{ 'background-color': colors[team.colorKey].color }"
      >
        <v-container height="100%">
          <v-row dense justify-center align-center>
            <v-col class="d-flex justify-center align-center">
              <div class="score-value">
                {{ team.score }}
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-spacer></v-spacer>
        <v-card-actions class="faults-actions">
          <v-spacer v-if="key == 'teamB'"></v-spacer>
          <div class="faults-wrapper">
            <v-chip class="faults-value faults-value__total" variant="tonal" size="large">{{ team.faults }}</v-chip>
            <v-chip class="faults-value faults-value__partial" variant="tonal" size="large">{{
              team.faults % 3
            }}</v-chip>
          </div>
          <v-spacer v-if="key == 'teamA'"></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify-center align-center class="flex-shrink-1">
    <v-col class="d-flex flex-column align-center">
      <TheTimer></TheTimer>
    </v-col>
  </v-row>
</template>

<style scoped>
.team {
  font-family: 'Lato', sans-serif;
  /* box-shadow: inset 0 0 10px black, inset 0 0 20px white; */

  .score-value {
    font-size: 10rem;
    text-shadow:
      3px 3px 10px black,
      0 0 40px white,
      0 0 60px black;
    font-weight: bold;
  }

  .faults-actions {
    margin: 0;
    padding: 0;
    align-items: end;

    .faults-wrapper {
      padding: 3px;
      border-radius: 4px 0 0 0;
      background-color: rgba(94, 94, 94, 0.5);
      display: flex;
      flex-direction: row;

      .faults-value {
        margin: 0 4px;
        font-size: 1.75rem;
        font-weight: bolder;
        background-color: #333333;

        &.faults-value__total {
          color: red;
        }

        &.faults-value__partial {
          color: orange;
        }
      }
    }
  }

  &.team__a {
    .faults-wrapper {
      border-radius: 0 4px 0 0;
      flex-direction: row-reverse;
    }
  }
}
</style>
