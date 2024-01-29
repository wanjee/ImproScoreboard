<script setup lang="ts">
import { useScoreStore } from '@/stores/score'
import { useTheme } from 'vuetify'
import ControlTeam from '@/components/control/team/ControlTeam.vue'
import { storeToRefs } from 'pinia'

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
        <v-btn icon="mdi-theme-light-dark" elevation="2" @click="toggleTheme"></v-btn>
      </template>
      <v-app-bar-title>Control</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-btn-toggle v-model="scoreStore.display" mandatory variant="outlined" rounded="xl" elevation="2" color="success">
          <v-btn value="black"> Black </v-btn>
          <v-btn value="title"> Title </v-btn>
          <v-btn value="score"> Score </v-btn>
        </v-btn-toggle>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid fill-height>
        <v-row>
          <v-col cols="4" offset="4" class="d-flex justify-center align-center">
            <v-btn size="default" icon="mdi-play" color="success"></v-btn>
            <v-btn size="default" icon="mdi-pause" color="warning"></v-btn>
            <v-btn size="default" icon="mdi-stop" color="error"></v-btn>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col v-for="(team, key) in teams" :key="key" cols="6">
            <ControlTeam :teamKey="key"></ControlTeam>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-app-bar location="bottom">
      <v-spacer></v-spacer>
      <RouterLink to="screen" title="Open main display" target="_blank">
        <v-btn variant="outlined" elevation="2" color="success" rounded="xl">
          Open score display
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </RouterLink>
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-layout>
</template>

<style></style>
