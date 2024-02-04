<script setup lang="ts">
import { useTitleScreenStore } from '@/stores/titleScreen'

const titleScreenStore = useTitleScreenStore()
</script>

<template>
  <v-row justify-center align-center class="flex-shrink-1">
    <v-col class="d-flex flex-column justify-center align-center">
      <h1>{{ titleScreenStore.primaryTitle }}</h1>
      <h2 v-if="titleScreenStore.secondaryTitle">{{ titleScreenStore.secondaryTitle }}</h2>
    </v-col>
  </v-row>
  <v-row justify-center align-center class="flex-grow-1">
    <v-col v-if="titleScreenStore.showLogo" class="d-flex flex-column justify-center align-center">
      <v-img :width="300" aspect-ratio="1/1" src="./img/fernand.png"></v-img>
    </v-col>
  </v-row>
  <v-row justify-center align-center class="flex-shrink-1">
    <v-col v-if="titleScreenStore.message" class="d-flex flex-column justify-center align-center">
      {{ titleScreenStore.message }}
    </v-col>
  </v-row>
</template>

<style scoped></style>
