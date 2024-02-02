<script setup lang="ts">
import { ref } from 'vue'
import { useScoreStore } from '@/stores/score'
import { useBoardScreenStore } from '@/stores/boardScreen'
import { useTitleScreenStore } from '@/stores/titleScreen'
import { colors } from '@/ts/constants/colors'
import type { colorKey } from '@/ts/constants/colors'

// Indicates dialog is open or not
const showSettingsDialog = ref(false)

const scoreStore = useScoreStore()
const boardScreenStore = useBoardScreenStore()
const titleScreenStore = useTitleScreenStore()

const colorSchemeItems = Object.values(colors)

/**
 * Helper to retrieve an input object via its name from a given form.  It also ensures TS happiness...
 *
 * @param form
 * @param inputName
 */
function getNamedInput(form: HTMLFormElement, inputName: string): HTMLInputElement {
  return form.elements.namedItem(inputName) as HTMLInputElement
}

/**
 * Form submission handler to copy submitted values to the shared store(s)
 * @param submitEvent
 */
function submitSettingsForm(submitEvent: Event) {
  // Ensure TS is happy with what it receives
  const form = submitEvent.target as HTMLFormElement

  // Commit form changes: get all input values and store them in state
  // We also need to ensure TS is happy by explicitly asserting the type of nameItem return value
  boardScreenStore.primaryTitle = getNamedInput(form, 'boardScreenPrimaryTitle')?.value ?? ''
  boardScreenStore.secondaryTitle = getNamedInput(form, 'boardScreenSecondaryTitle')?.value ?? ''

  titleScreenStore.primaryTitle = getNamedInput(form, 'titleScreenPrimaryTitle')?.value ?? ''
  titleScreenStore.secondaryTitle = getNamedInput(form, 'titleScreenSecondaryTitle')?.value ?? ''
  titleScreenStore.showLogo = getNamedInput(form, 'titleScreenShowLogo')?.checked ?? false
  titleScreenStore.message = getNamedInput(form, 'titleScreenMessage')?.value ?? ''

  scoreStore.teams.teamA.colorKey = (getNamedInput(form, 'scoreTeamAColor')?.value as colorKey) ?? ''
  scoreStore.teams.teamB.colorKey = (getNamedInput(form, 'scoreTeamBColor')?.value as colorKey) ?? ''

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
            <v-col class="d-flex align-center" cols="6">
              <v-select
                :model-value="colors[scoreStore.teams.teamA.colorKey]"
                name="scoreTeamAColor"
                label="Left team color"
                variant="outlined"
                density="compact"
                :items="colorSchemeItems"
                item-title="label"
                item-value="key"
              ></v-select>
            </v-col>
            <v-col class="d-flex align-center" cols="6">
              <v-select
                :model-value="colors[scoreStore.teams.teamB.colorKey]"
                name="scoreTeamBColor"
                label="Right team color"
                variant="outlined"
                density="compact"
                :items="colorSchemeItems"
                item-title="label"
                item-value="key"
              ></v-select>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row dense justify-center align-center>
            <v-col class="d-flex align-center">
              <h4>Score screen</h4>
            </v-col>
          </v-row>

          <v-row dense justify-center align-center>
            <v-col class="d-flex align-center">
              <v-text-field
                :model-value="boardScreenStore.primaryTitle"
                name="boardScreenPrimaryTitle"
                variant="outlined"
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
                :model-value="boardScreenStore.secondaryTitle"
                name="boardScreenSecondaryTitle"
                variant="outlined"
                density="compact"
                size="60"
                clearable
                label="Secondary title"
                autocomplete="off"
                hint="Title of the match or other valuable info, displayed after the primary title"
              ></v-text-field>
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
                :model-value="titleScreenStore.primaryTitle"
                name="titleScreenPrimaryTitle"
                variant="outlined"
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
                :model-value="titleScreenStore.secondaryTitle"
                name="titleScreenSecondaryTitle"
                variant="outlined"
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
              <v-checkbox
                :model-value="titleScreenStore.showLogo"
                name="titleScreenShowLogo"
                label="Display Fernand Gazou logo"
                density="compact"
                color="success"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row dense justify-center align-center>
            <v-col class="d-flex align-center">
              <v-text-field
                :model-value="titleScreenStore.message"
                name="titleScreenMessage"
                variant="outlined"
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
