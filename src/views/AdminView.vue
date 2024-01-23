<script lang="ts">
import { useScoreBoardStore } from '@/stores/scoreBoard'
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        const store = useScoreBoardStore();

        return { store };
    },
});

</script>

<template>
    <div class="about">
        <nav>
            <RouterLink to="screen" target="_blank">Screen</RouterLink>
        </nav>
        <h1>This is admin panel</h1>
        <button v-on:click="store.display = 'black'">Black</button>
        <button v-on:click="store.display = 'score'">Score</button>
        <button v-on:click="store.display = 'title'">Title</button>
        <button v-on:click="store.$reset()">Reset</button>
    </div>
</template>

<style>
</style>
