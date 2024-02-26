<script setup lang="ts">
import { useTitleScreenStore } from '@/stores/titleScreen'
import { logos } from '@/ts/constants/logos'

const titleScreenStore = useTitleScreenStore()
</script>

<template>
  <v-container fluid class="screen flex-grow-1 d-flex flex-column flex-nowrap">
    <v-row justify-center align-center class="flex-shrink-1">
      <v-col class="d-flex flex-column justify-center align-center">
        <h1>{{ titleScreenStore.primaryTitle }}</h1>
        <h2 v-if="titleScreenStore.secondaryTitle">{{ titleScreenStore.secondaryTitle }}</h2>
      </v-col>
    </v-row>
    <v-row justify-center align-center class="flex-grow-1">
      <v-col v-if="titleScreenStore.logoKey" class="d-flex flex-column justify-center align-center">
        <img class="logo" :src="'./img/' + logos[titleScreenStore.logoKey].filename" alt="" />
      </v-col>
    </v-row>
    <v-row justify-center align-center class="flex-shrink-1">
      <v-col v-if="titleScreenStore.message" class="message d-flex flex-column justify-center align-center">
        {{ titleScreenStore.message }}
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.logo {
  max-height: 50vh;
  width: auto;
}
</style>
