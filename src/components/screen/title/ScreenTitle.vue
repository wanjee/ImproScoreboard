<script setup lang="ts">
import { useTitleScreenStore } from '@/stores/titleScreen'

const titleScreenStore = useTitleScreenStore()
</script>

<template>
  <v-container fluid fill-height>
    <v-row class="d-flex justify-start align-center pa-6">
      <v-col class="d-flex flex-column justify-center align-center">
        <h1>{{ titleScreenStore.primaryTitle }}</h1>
        <h2 v-if="titleScreenStore.secondaryTitle">{{ titleScreenStore.secondaryTitle }}</h2>
      </v-col>
    </v-row>
    <v-row v-if="titleScreenStore.showLogo" class="d-flex justify-start align-center pa-6">
      <v-col class="d-flex flex-column justify-center align-center">
        Logo here
      </v-col>
    </v-row>
    <v-row v-if="titleScreenStore.message" class="d-flex justify-start align-center pa-6">
      <v-col class="d-flex flex-column justify-center align-center">
        {{ titleScreenStore.message }}
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
