<script setup lang="ts">
import {useScoreBoardStore} from "@/stores/scoreBoard";
import {storeToRefs} from "pinia";

const store = useScoreBoardStore();

const { teams } = storeToRefs(store);

</script>

<template>
    <v-container fluid fill-height>
        <v-row justify-center align-center>
            <v-col class="d-flex justify-center align-center">
                <h1>La Ligue d'Impro</h1>
            </v-col>
        </v-row>
        <v-row justify-center align-center>
            <v-col v-for="team in teams" :key="team.id" cols="6">
                <v-container :color="team.color">
                    <v-row dense justify-center align-center>
                        <v-col class="d-flex justify-center align-center pa-6 score-value">
                            {{ team.score }}
                        </v-col>
                    </v-row>
                    <v-row dense justify-center align-center>
                        <v-col class="d-flex justify-center align-center pa-6 fault-values">
                            <span class="fault-total">{{ team.faults }}</span> / <span class="fault-partial">{{ team.faults % 3 }}</span>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.score-value {
    font-size: xxx-large;
    font-weight: bold;
}
.fault-values {
    font-size: xx-large;
    font-weight: bold;

    .fault-total {
        color: red;
    }

    .fault-partial {
        color: orange;
    }
}
</style>
