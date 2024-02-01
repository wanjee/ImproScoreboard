<script setup lang="ts">
import { ref } from 'vue'
import { useBoardScreenStore } from '@/stores/boardScreen'
import { useTitleScreenStore } from '@/stores/titleScreen'
import { useScoreStore } from '@/stores/score'
import { storeToRefs } from 'pinia'

// Indicates dialog is open or not
const showSettingsDialog = ref(false)

const boardScreenStore = useBoardScreenStore()
const { primaryTitle: boardScreenPrimaryTitle, secondaryTitle: boardScreenSecondaryTitle } =
  storeToRefs(boardScreenStore)

const titleScreenStore = useTitleScreenStore()
const {
  primaryTitle: titleScreenPrimaryTitle,
  secondaryTitle: titleScreenSecondaryTitle,
  showLogo: titleScreenShowLogo,
  message: titleScreenMessage,
} = storeToRefs(titleScreenStore)

const scoreStore = useScoreStore()
const { teams } = storeToRefs(scoreStore)

function submitSettingsForm(submitEvent: Event) {
  // Commit form changes: get all input values and store them in state
  boardScreenPrimaryTitle.value = submitEvent.target?.elements.boardScreenPrimaryTitle.value ?? ''
  boardScreenSecondaryTitle.value = submitEvent.target?.elements.boardScreenSecondaryTitle.value ?? ''
  titleScreenPrimaryTitle.value = submitEvent.target?.elements.titleScreenPrimaryTitle.value ?? ''
  titleScreenSecondaryTitle.value = submitEvent.target?.elements.titleScreenSecondaryTitle.value ?? ''
  titleScreenShowLogo.value = submitEvent.target?.elements.titleScreenShowLogo.value ?? ''
  titleScreenMessage.value = submitEvent.target?.elements.titleScreenMessage.value ?? ''
  // Then we close dialog
  showSettingsDialog.value = false
}
</script>

<template>
  <v-dialog v-model="showSettingsDialog" width="auto" persistent>
    <template v-slot:activator="{ props }">
      <v-btn
        icon="mdi-cog"
        elevation="2"
        @click="showSettingsDialog = true"
        v-bind="props"
        title="Main configuration"
      ></v-btn>
    </template>
    <v-form @submit.prevent="submitSettingsForm">
      <v-card>
        <!-- Navigation -->
        <v-toolbar>
          <v-btn icon="mdi-close" @click="showSettingsDialog = false"></v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
        </v-toolbar>
        <v-container>
          <v-row dense justify-center align-center>
            <v-col class="d-flex align-center">
              <h4>Score screen</h4>
            </v-col>
          </v-row>

          <v-row dense justify-center align-center>
            <v-col class="d-flex align-center">
              <v-text-field
                variant="outlined"
                :model-value="boardScreenPrimaryTitle"
                name="boardScreenPrimaryTitle"
                density="compact"
                size="60"
                clearable
                label="Primary title"
                autocomplete="off"
                hint="Prominent title displayed on score screen"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row dense justify-center align-center>
            <v-col class="d-flex align-center">
              <v-text-field
                variant="outlined"
                :model-value="boardScreenSecondaryTitle"
                name="boardScreenSecondaryTitle"
                density="compact"
                size="60"
                clearable
                label="Secondary title"
                autocomplete="off"
                hint="Title of the match or other valuable info, displayed after the primary title"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row dense justify-center align-center>
            <v-col class="d-flex align-center" cols="6">
              <v-select
                variant="outlined"
                label="Left team color"
                density="compact"
                :items="['Red', 'Green', 'Yellow', 'Blue']"
              ></v-select>
            </v-col>
            <v-col class="d-flex align-center" cols="6">
              <v-select
                variant="outlined"
                label="Right team color"
                density="compact"
                :items="['Red', 'Green', 'Yellow', 'Blue']"
              ></v-select>
            </v-col>
          </v-row>

          <v-divider></v-divider>

          <v-row dense justify-center align-center>
            <v-col class="d-flex align-center">
              <h4>Title screen</h4>
            </v-col>
          </v-row>

          <v-row dense justify-center align-center>
            <v-col class="d-flex align-center">
              <v-text-field
                variant="outlined"
                :model-value="titleScreenPrimaryTitle"
                name="titleScreenPrimaryTitle"
                density="compact"
                size="60"
                clearable
                label="Primary title"
                autocomplete="off"
                hint="Prominent title displayed on title screen."
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row dense justify-center align-center>
            <v-col class="d-flex align-center">
              <v-text-field
                variant="outlined"
                :model-value="titleScreenSecondaryTitle"
                name="titleScreenSecondaryTitle"
                density="compact"
                size="60"
                clearable
                label="Secondary title"
                autocomplete="off"
                hint="Title of the match or other valuable info, displayed after the primary title."
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row dense justify-center align-center>
            <v-col class="d-flex align-center">
              <v-switch
                :model-value="titleScreenShowLogo"
                name="titleScreenShowLogo"
                label="Display Fernand Gazou logo"
                density="compact"
                color="success"
              ></v-switch>
            </v-col>
          </v-row>

          <v-row dense justify-center align-center>
            <v-col class="d-flex align-center">
              <v-text-field
                variant="outlined"
                :model-value="titleScreenMessage"
                name="titleScreenMessage"
                density="compact"
                size="60"
                clearable
                label="Message"
                autocomplete="off"
                hint="Additional message to display on the title. e.g. 'Please shut your phone down'"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn variant="text" @click="showSettingsDialog = false"> Cancel </v-btn>
          <v-spacer />
          <v-btn variant="text" color="success" type="submit"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<style></style>
