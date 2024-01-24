<script setup lang="ts">
import { useScoreBoardStore } from '@/stores/scoreBoard'
import { useTheme } from 'vuetify'

const theme = useTheme()
const store = useScoreBoardStore();

// Globally switch the admin from light to dark theme
function toggleTheme () {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>

<template>
    <v-layout>
        <v-app-bar title="Administration">
            <v-btn @click="toggleTheme">
                <v-icon>mdi-theme-light-dark</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn-toggle
                v-model="store.display"
                mandatory
                density="compact"
                color="primary"
                variant="outlined"
                rounded="xl"
            >
                <v-btn value="black">
                    Black
                </v-btn>
                <v-btn value="title">
                    Title
                </v-btn>
                <v-btn value="score">
                    Score
                </v-btn>
            </v-btn-toggle>
        </v-app-bar>
        <v-main>
            <v-container fluid fill-height>
                <v-row align="center">
                    <v-col cols="4">
                        <v-text-field
                            required
                            hide-details
                            variant="solo"
                            prepend-icon="mdi-minus"
                            append-icon="mdi-plus"
                            @click:prepend="console.log('----')"
                            @click:append="console.log('++++')"
                        ></v-text-field>
                    </v-col>

                    <v-col cols="4" class="d-flex justify-center align-center">
                        <v-btn size="default" icon="mdi-play" color="success"></v-btn>
                        <v-btn size="default" icon="mdi-pause" color="warning"></v-btn>
                        <v-btn size="default" icon="mdi-stop" color="error"></v-btn>
                    </v-col>

                    <v-col cols="4">
                        <v-text-field
                            required
                            hide-details
                            variant="solo"
                            prepend-icon="mdi-minus"
                            append-icon="mdi-plus"
                            @click:prepend="console.log('----')"
                            @click:append="console.log('++++')"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

        <v-app-bar location="bottom">
            <v-spacer></v-spacer>
            <RouterLink to="screen" title="Open main display" target="_blank">
                <v-btn elevation="4" size="large" color="success" rounded="xl">Open main display<v-icon>mdi-play</v-icon></v-btn>
            </RouterLink>
            <v-spacer></v-spacer>
        </v-app-bar>
    </v-layout>
</template>

<style>
</style>
