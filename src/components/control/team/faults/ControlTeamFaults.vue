<script setup lang="ts">
import {useScoreBoardStore} from "@/stores/scoreBoard";
import {storeToRefs} from "pinia";

const props = defineProps<{
    teamId: number
}>();

const store = useScoreBoardStore();

const { getTeamById } = storeToRefs(store)
const team = getTeamById.value(props.teamId);

</script>

<template>
    <v-container v-if="team">
        <v-row dense justify-center align-center>
            <v-col class="d-flex justify-end align-center pa-6">
                <v-btn color="red" size="small" icon="mdi-minus" @click="store.decrementTeamFaults(team.id)"></v-btn>
            </v-col>
            <v-col class="d-flex justify-center align-center pa-6 fault-value">
                {{ team.faults }}
            </v-col>
            <v-col class="d-flex justify-start align-center pa-6">
                <v-btn color="green" size="small" icon="mdi-plus" @click="store.incrementTeamFaults(team.id)"></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.fault-value {
    font-size: xx-large;
    font-weight: bold;
}
</style>