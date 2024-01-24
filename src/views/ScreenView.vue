<script setup lang="ts">
import { useScoreBoardStore } from '@/stores/scoreBoard'
import ScreenBlack from "@/components/screen/black/ScreenBlack.vue";
import ScreenScore from "@/components/screen/score/ScreenScore.vue";
import ScreenTitle from "@/components/screen/title/ScreenTitle.vue";

const store = useScoreBoardStore();

</script>

<template>
    <ScreenBlack v-if="store.display === 'black'"></ScreenBlack>
    <ScreenScore v-if="store.display === 'score'"></ScreenScore>
    <ScreenTitle v-if="store.display === 'title'"></ScreenTitle>
</template>

<style>
</style>
