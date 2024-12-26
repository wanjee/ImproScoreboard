<script setup lang="ts">
import { ref } from 'vue'
import { useSettingsStore } from '@/stores/settings'

// Indicates dialog is open or not
const showAdvancedSettingsDialog = ref(false)
const tab = ref('font')
const settingsStore = useSettingsStore()

/**
 * Form submission handler to reset advanced settings to their defaults
 */
function resetAdvancedSettingsForm() {
  settingsStore.reset()
}
</script>

<template>
  <v-dialog v-model="showAdvancedSettingsDialog" fullscreen transition="dialog-bottom-transition">
    <template v-slot:activator="{ props }">
      <v-btn
        icon="mdi-tune-vertical-variant"
        elevation="2"
        @click="showAdvancedSettingsDialog = true"
        v-bind="props"
        title="Advanced configuration"
      ></v-btn>
    </template>
    <v-card>
      <v-form @submit.prevent="resetAdvancedSettingsForm">
        <!-- Navigation -->
        <v-toolbar>
          <v-btn icon="mdi-close" @click="showAdvancedSettingsDialog = false"></v-btn>
          <v-toolbar-title>Advanced settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn variant="text" color="error" type="submit">Reset</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-tabs v-model="tab" fixed-tabs>
            <v-tab prepend-icon="mdi-format-size" value="fonts">Fonts</v-tab>
            <v-tab prepend-icon="mdi-fit-to-screen-outline" value="margins">Margins</v-tab>
            <v-tab prepend-icon="mdi-lightbulb-on" value="dimmer">Dimmer</v-tab>
          </v-tabs>
          <v-tabs-window v-model="tab" class="mt-10">
            <v-tabs-window-item value="fonts">
              <v-container>
                <v-row justify-center align-center>
                  <v-col class="d-flex align-center">
                    <h4>Font size for message on score screen (change applies immediately)</h4>
                  </v-col>
                </v-row>
                <v-row justify-center align-center>
                  <v-col class="d-flex align-center">
                    <v-slider
                      v-model="settingsStore.messageFontSize"
                      :min="2.5"
                      :max="5.5"
                      :step="0.5"
                      show-ticks="always"
                      tick-size="4"
                      thumb-label="always"
                      prepend-icon="mdi-format-font-size-decrease"
                      append-icon="mdi-format-font-size-increase"
                      color="green-darken-2"
                    ></v-slider>
                  </v-col>
                </v-row>
              </v-container>
            </v-tabs-window-item>
            <v-tabs-window-item value="margins">
              <v-container>
                <v-row justify-center align-center>
                  <v-col class="d-flex align-center">
                    <h4>Change the display alignment if the projector is not properly centered on the screen.</h4>
                  </v-col>
                </v-row>
                <v-row justify-center align-center>
                  <v-col cols="4" offset="4" class="d-flex align-center">
                    <v-slider
                      v-model="settingsStore.margins.top"
                      :min="0"
                      :max="15"
                      :step="1"
                      thumb-label="always"
                    ></v-slider>
                  </v-col>
                </v-row>
                <v-row justify-center align-center>
                  <v-col class="d-flex align-center">
                    <v-slider
                      v-model="settingsStore.margins.left"
                      :min="0"
                      :max="15"
                      :step="1"
                      thumb-label="always"
                    ></v-slider>
                  </v-col>
                  <v-col class="d-flex align-center" style="min-height: 25vh; background-color: #333"> </v-col>
                  <v-col class="d-flex align-center">
                    <v-slider
                      v-model="settingsStore.margins.right"
                      :min="0"
                      :max="15"
                      :step="1"
                      thumb-label="always"
                    ></v-slider>
                  </v-col>
                </v-row>
                <v-row justify-center align-center>
                  <v-col cols="4" offset="4" class="d-flex align-center">
                    <v-slider
                      v-model="settingsStore.margins.bottom"
                      :min="0"
                      :max="15"
                      :step="1"
                      thumb-label="always"
                    ></v-slider>
                  </v-col>
                </v-row>
              </v-container>
            </v-tabs-window-item>
            <v-tabs-window-item value="dimmer">
              <v-container>
                <v-row justify-center align-center>
                  <v-col class="d-flex align-center">
                    <h4>Dim the brightness of the public display when the projector is overly bright.</h4>
                  </v-col>
                </v-row>
                <v-row justify-center align-center>
                  <v-col class="d-flex align-center">
                    <!-- Min max are inverted because we use CSS opacity: 0 would be lightest, 1 would be full dark -->
                    <v-slider
                      v-model="settingsStore.dimmerOpacity"
                      :min="1"
                      :max="0"
                      prepend-icon="mdi-lightbulb-off"
                      append-icon="mdi-lightbulb-on"
                      color="green-darken-2"
                    ></v-slider>
                  </v-col>
                </v-row>
              </v-container>
            </v-tabs-window-item>
          </v-tabs-window>
        </v-container>
      </v-form>
    </v-card>
  </v-dialog>
</template>
