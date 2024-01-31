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

function submitSettingsForm() {
  // Commit form changes: get all input values and store them in state
    /*
  console.log(submitEvent.target.elements)
  boardScreenPrimaryTitle.value = submitEvent.target.elements.boardScreenPrimaryTitle.value ?? ''
  boardScreenSecondaryTitle.value = submitEvent.target.elements.boardScreenSecondaryTitle.value ?? ''
  titleScreenPrimaryTitle.value = submitEvent.target.elements.titleScreenPrimaryTitle.value ?? ''
  titleScreenSecondaryTitle.value = submitEvent.target.elements.titleScreenSecondaryTitle.value ?? ''
  titleScreenShowLogo.value = submitEvent.target.elements.titleScreenShowLogo.value ?? ''
  titleScreenMessage.value = submitEvent.target.elements.titleScreenMessage.value ?? ''
*/
  // Then we close dialog
  showSettingsDialog.value = false
}
</script>

<template>
  <v-dialog v-model="showSettingsDialog" width="auto">
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
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn variant="text" color="success" type="submit"> Save </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <!-- Score settings -->
        <v-list lines="two" subheader class="overflow-visible">
          <v-list-subheader>Score screen</v-list-subheader>
          <v-list-item title="Primary title" subtitle="Prominent title displayed on score view."
            ><v-text-field
              :value="boardScreenPrimaryTitle"
              name="boardScreenPrimaryTitle"
              density="compact"
              size="60"
              clearable
              label="Primary title"
            ></v-text-field
          ></v-list-item>
          <v-list-item
            title="Secondary title"
            subtitle="Title of the match or other valuable info, displayed after the primary title."
            ><v-text-field
              :value="boardScreenSecondaryTitle"
              name="boardScreenSecondaryTitle"
              density="compact"
              size="60"
              clearable
              label="Secondary title"
            ></v-text-field
          ></v-list-item>
          <v-list-item
            title="Left team color"
            subtitle="Set the content filtering level to restrict apps that can be downloaded"
            ><v-select
              label="Left team color"
              density="compact"
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            ></v-select
          ></v-list-item>
          <v-list-item
            title="Right team color"
            subtitle="Require password for purchase or use password to restrict purchase"
            ><v-select
              label="Right team color"
              density="compact"
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            ></v-select
          ></v-list-item>
        </v-list>
        <v-divider></v-divider>
        <!-- Title screen settings -->
        <v-list lines="two" subheader class="overflow-visible">
          <v-list-subheader>Title screen</v-list-subheader>
          <v-list-item title="Primary title" subtitle="Prominent title displayed on score view."
            ><v-text-field
              :value="titleScreenPrimaryTitle"
              name="titleScreenPrimaryTitle"
              density="compact"
              size="60"
              clearable
              label="Primary title"
            ></v-text-field
          ></v-list-item>
          <v-list-item
            title="Secondary title"
            subtitle="Title of the match or other valuable info, displayed after the primary title."
            ><v-text-field
              :value="titleScreenSecondaryTitle"
              name="titleScreenSecondaryTitle"
              density="compact"
              size="60"
              clearable
              label="Secondary title"
            ></v-text-field
          ></v-list-item>
          <v-list-item title="Display logo" subtitle="Fernand Gazou is IN DA PLACE !"
            ><v-switch
              :value="titleScreenShowLogo"
              name="titleScreenShowLogo"
              density="compact"
              color="success"
            ></v-switch
          ></v-list-item>
          <v-list-item
            title="Informative message"
            subtitle="Additional message to display on the title. e.g. 'Please shut your phone down'"
            ><v-text-field
              :value="titleScreenMessage"
              name="titleScreenMessage"
              density="compact"
              size="60"
              clearable
              label="Message"
            ></v-text-field
          ></v-list-item>
        </v-list>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<style></style>
