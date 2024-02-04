<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import { useTheme } from 'vuetify'
import ControlTeam from '@/components/control/team/ControlTeam.vue'
import { storeToRefs } from 'pinia'
import ControlReset from '@/components/control/reset/ControlReset.vue'
import ControlSettings from '@/components/control/settings/ControlSettings.vue'
import ControlTimer from '@/components/control/timer/ControlTimer.vue'

const theme = useTheme()
const scoreStore = useScoreStore()

const { teams } = storeToRefs(scoreStore)

// Globally switch the admin from light to dark theme
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-layout>
    <v-app-bar>
      <template v-slot:prepend>
        <ControlSettings></ControlSettings>
        <ControlReset></ControlReset>
        <v-btn icon="mdi-theme-light-dark" elevation="2" @click="toggleTheme" title="Switch theme (dark/light)"></v-btn>
      </template>
      <v-app-bar-title>La Ligue d'Impro - Control</v-app-bar-title>
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
        <v-row justify-center align-center class="flex-shrink-1">
          <v-spacer></v-spacer>
          <v-col cols="6" class="d-flex justify-center align-center">
            <ControlTimer></ControlTimer>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row justify-center align-center class="flex-grow-1">
          <v-col v-for="(team, key) in teams" :key="key" cols="6">
            <ControlTeam :teamKey="key"></ControlTeam>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-app-bar location="bottom">
      <v-spacer></v-spacer>
      <RouterLink to="screen" title="Open main display" target="_blank">
        <v-btn variant="tonal" elevation="2" color="green">
          Open score display
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </RouterLink>
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-layout>
</template>

<style></style>
