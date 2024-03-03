<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import { storeToRefs } from 'pinia'
import ControlTeam from '@/components/control/team/ControlTeam.vue'
import ControlTimer from '@/components/control/timer/ControlTimer.vue'
import ControlReset from '@/components/control/reset/ControlReset.vue'
import ControlSettings from '@/components/control/settings/ControlSettings.vue'
import ControlHelp from '@/components/control/help/ControlHelp.vue'
import ControlMessage from '@/components/control/message/ControlMessage.vue'

const scoreStore = useScoreStore()

const { teams } = storeToRefs(scoreStore)
</script>

<template>
  <v-layout>
    <v-app-bar>
      <template v-slot:prepend>
        <ControlSettings></ControlSettings>
        <ControlReset></ControlReset>
        <ControlHelp></ControlHelp>
      </template>
      <v-app-bar-title>La Ligue d'Impro</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-btn-toggle v-model="scoreStore.display" mandatory variant="tonal" elevation="2" color="green">
          <v-btn value="black"> Black </v-btn>
          <v-btn value="title"> Title </v-btn>
          <v-btn value="score"> Score </v-btn>
        </v-btn-toggle>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <v-row justify="center" align="center" class="flex-shrink-1">
          <v-col class="d-flex justify-center align-center">
            <ControlTimer></ControlTimer>
          </v-col>
        </v-row>
        <v-row justify="center" align="center" class="flex-grow-1">
          <v-col v-for="(team, key) in teams" :key="key" cols="12" sm="12" md="6" lg="6" xl="6" xxl="6">
            <ControlTeam :teamKey="key"></ControlTeam>
          </v-col>
        </v-row>
        <v-row justify="center" align="center" class="flex-shrink-1">
          <v-col class="d-flex justify-center align-center">
            <ControlMessage></ControlMessage>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-app-bar location="bottom">
      <v-spacer></v-spacer>
      <RouterLink to="screen" title="Open main display" target="_blank">
        <v-btn variant="tonal" elevation="2" color="green">
          Open public display
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </RouterLink>
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-layout>
</template>
