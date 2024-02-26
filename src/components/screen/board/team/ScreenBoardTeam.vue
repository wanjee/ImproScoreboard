<script setup lang="ts">
import { colors } from '@/ts/constants/colors'
import type { TeamKey as TeamKeyType } from '@/ts/types/global'
import { useScoreStore } from '@/stores/score'

defineProps<{
  teamKey: TeamKeyType
}>()

const scoreStore = useScoreStore()
</script>

<template>
  <v-card
    v-if="scoreStore.teams[teamKey]"
    class="team d-flex flex-column"
    :class="{
      team__left: teamKey == 'left',
      team__right: teamKey == 'right',
      'team__conversion-running': scoreStore.teams[teamKey].isConversionRunning,
    }"
    height="100%"
    :style="{ 'background-color': colors[scoreStore.teams[teamKey].colorKey].color }"
  >
    <v-spacer></v-spacer>
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center align-center">
          <div class="score-value">
            <Transition name="score-update" mode="out-in">
              <div :key="scoreStore.teams[teamKey].score">
                {{ scoreStore.teams[teamKey].score }}
              </div>
            </Transition>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-spacer></v-spacer>
    <v-card-actions class="faults-actions">
      <v-spacer v-if="teamKey == 'right'"></v-spacer>
      <div class="faults-wrapper">
        <span class="faults-value faults-value__total">{{ scoreStore.teams[teamKey].faults }}</span>
        <span class="faults-value faults-value__partial">
          <v-icon icon="mdi-circle-medium" :class="{ active: scoreStore.teams[teamKey].faultsPartial >= 1 }"></v-icon>
          <v-icon icon="mdi-circle-medium" :class="{ active: scoreStore.teams[teamKey].faultsPartial >= 2 }"></v-icon>
          <v-icon icon="mdi-circle-medium" :class="{ active: scoreStore.teams[teamKey].faultsPartial >= 3 }"></v-icon>
        </span>
      </div>
      <v-spacer v-if="teamKey == 'left'"></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<style>
.team {
  font-family: 'E1234', sans-serif;
  position: relative;

  .score-value {
    font-size: 20vh;
    text-shadow:
      0 3px 10px black,
      0 0 40px white,
      0 0 60px black;
    font-weight: bold;

    .score-update-enter-active {
      transition: all 0.3s ease;
    }

    .score-update-leave-active {
      transition: all 0.3s ease;
    }

    .score-update-enter-from,
    .score-update-leave-to {
      transform: scale(1.1);
      opacity: 0;
    }
  }

  .faults-actions {
    position: absolute;
    bottom: 0;
    margin: 0;
    padding: 0;
    align-items: end;

    .faults-wrapper {
      display: flex;
      flex-direction: row;
      background-color: rgba(51, 51, 51, 0.7);

      .faults-value {
        margin: 0 4px;
        font-size: 3vh;
        font-weight: bolder;

        &.faults-value__total {
          color: red;
        }

        &.faults-value__partial {
          display: flex;
          align-items: center;

          .v-icon {
            color: rgba(51, 51, 51, 0.7);
            /* Transition should have similar duration as the delay added
               in convertFaultsFromTeam function in ControlTeamFaults component */
            transition: all 0.4s cubic-bezier(0.63, 0.05, 0.43, 4);

            &.active {
              color: darkorange;
              text-shadow: 0 0 10px white;
            }
          }
        }
      }
    }
  }

  &.team__left {
    .faults-actions {
      left: 0;
      .faults-wrapper {
        border-radius: 0 4px 0 0;
        flex-direction: row;
        .faults-value__partial {
          flex-direction: row;
        }
      }
    }
    &.team__conversion-running {
      .faults-value__partial {
        flex-direction: row-reverse !important;
      }
    }
  }

  &.team__right {
    .faults-actions {
      right: 0;
      .faults-wrapper {
        border-radius: 4px 0 0 0;
        flex-direction: row-reverse;
        .faults-value__partial {
          flex-direction: row-reverse;
        }
      }
    }
    &.team__conversion-running {
      .faults-value__partial {
        flex-direction: row !important;
      }
    }
  }
}
</style>
