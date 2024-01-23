<script lang="ts">
import { useScoreBoardStore } from '@/stores/scoreBoard'
import { defineComponent } from 'vue';
import ScreenBlack from "@/components/screen/black/ScreenBlack.vue";
import ScreenScore from "@/components/screen/score/ScreenScore.vue";
import ScreenTitle from "@/components/screen/title/ScreenTitle.vue";

export default defineComponent({
    components: {
        ScreenBlack,
        ScreenScore,
        ScreenTitle,
    },
    setup() {
        const store = useScoreBoardStore();

        return { store };
    },
});
</script>

<template>
    <ScreenBlack v-if="store.display === 'black'"></ScreenBlack>
    <ScreenScore v-if="store.display === 'score'"></ScreenScore>
    <ScreenTitle v-if="store.display === 'title'"></ScreenTitle>
</template>

<style>
</style>
