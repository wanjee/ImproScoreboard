<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import { storeToRefs } from 'pinia'
import { useBoardScreenStore } from '@/stores/boardScreen'
import { colors } from '@/ts/constants/colors'
import BaseTimer from '@/components/BaseTimer.vue'

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
    <v-col v-for="(team, key) in teams" :key="key" cols="6" class="pa-10 pt-0">
      <v-card
        class="team d-flex flex-column"
        :class="{ team__a: key == 'teamA', team__b: key == 'teamB' }"
        height="100%"
        :style="{ 'background-color': colors[team.colorKey].color }"
      >
        <v-spacer></v-spacer>
        <v-container>
          <v-row>
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
            <v-avatar class="faults-value faults-value__total">{{ team.faults }}</v-avatar>
            <v-avatar class="faults-value faults-value__partial">{{ team.faults % 3 }}</v-avatar>
          </div>
          <v-spacer v-if="key == 'teamA'"></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
  <v-row justify-center align-center class="flex-shrink-1">
    <v-col class="d-flex flex-column align-center">
      <BaseTimer></BaseTimer>
    </v-col>
  </v-row>
</template>

<style scoped>
.team {
  font-family: 'E1234', sans-serif;
  position: relative;

  .score-value {
    font-size: 20vh;
    text-shadow:
      0px 3px 10px black,
      0 0 40px white,
      0 0 60px black;
    font-weight: bold;
  }

  .faults-actions {
    position: absolute;
    bottom: 0;
    margin: 0;
    padding: 0;
    align-items: end;

    .faults-wrapper {
      padding: 3px;
      display: flex;
      flex-direction: row;

      .faults-value {
        background-color: rgba(51, 51, 51, 0.7);
        margin: 0 4px 4px;
        font-size: 3vh;
        font-weight: bolder;

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
    .faults-actions {
      left: 0;
      .faults-wrapper {
        border-radius: 0 4px 0 0;
        flex-direction: row-reverse;
      }
    }
  }

  &.team__b {
    .faults-actions {
      right: 0;
      .faults-wrapper {
        border-radius: 4px 0 0 0;
        flex-direction: row;
      }
    }
  }
}
</style>
