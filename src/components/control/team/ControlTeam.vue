<script setup lang="ts">
import ControlTeamScore from "@/components/control/team/score/ControlTeamScore.vue";
import {useScoreBoardStore} from "@/stores/scoreBoard";
import {storeToRefs} from "pinia";
import ControlTeamFaults from "@/components/control/team/faults/ControlTeamFaults.vue";

const props = defineProps<{
    teamId: number
}>();

const store = useScoreBoardStore();

const { getTeamById } = storeToRefs(store);
const team = getTeamById.value(props.teamId);

</script>

<template>
    <v-card v-if="team">
        <v-card-title>{{ team.name }}</v-card-title>
        <ControlTeamScore :teamId="team.id"></ControlTeamScore>
        <ControlTeamFaults :teamId="team.id"></ControlTeamFaults>
    </v-card>
</template>

<style>
</style>