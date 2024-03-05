<script setup lang="ts">
import { ref } from 'vue'

// Indicates dialog is open or not
const showHelpDialog = ref(false)
// Indicates active tab
const tab = ref('timeline')
</script>

<template>
  <v-dialog v-model="showHelpDialog" fullscreen>
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-help" elevation="2" @click="showHelpDialog = true" v-bind="props" title="Help"></v-btn>
    </template>
    <v-card>
      <v-toolbar>
        <v-btn icon="mdi-close" @click="showHelpDialog = false"></v-btn>
        <v-toolbar-title>Help</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab value="timeline">Timeline</v-tab>
          <v-tab value="remarks">Remarks</v-tab>
        </v-tabs>
        <v-window v-model="tab" class="mt-10">
          <v-window-item value="timeline">
            <v-timeline align="start" side="end">
              <v-timeline-item class="mb-6" hide-dot>
                <template v-slot:opposite>
                  <span>Start</span>
                </template>
              </v-timeline-item>

              <v-timeline-item dot-color="#C13B1B" icon="mdi-panorama" fill-dot>
                <div>
                  <span class="me-4">Entrée du public</span>
                  <div class="text-caption">Start slideshow</div>
                </div>
              </v-timeline-item>

              <v-timeline-item dot-color="green-darken-2">
                <div>
                  <span class="me-4">Entrée du maître de musique</span>
                  <div class="text-caption">TITLE</div>
                </div>
              </v-timeline-item>

              <v-timeline-item dot-color="green-darken-2">
                <div>
                  <span class="me-4">Entrée du maître de cérémonie</span>
                  <div class="text-caption">TITLE</div>
                </div>
              </v-timeline-item>

              <v-timeline-item class="mb-6" hide-dot>
                <template v-slot:opposite>
                  <span>Période 1</span>
                </template>
              </v-timeline-item>

              <v-timeline-item dot-color="black">
                <div>
                  <span class="me-4">Entrée des arbitres</span>
                  <div class="text-caption">BLACK</div>
                </div>
              </v-timeline-item>

              <v-timeline-item dot-color="green-darken-2">
                <div>
                  <span class="me-4">Entrée des jouteurs</span>
                  <div class="text-caption">TITLE</div>
                </div>
              </v-timeline-item>

              <v-timeline-item dot-color="green-darken-2" icon="mdi-bugle" fill-dot>
                <div>
                  <span class="me-4">Sirène</span>
                  <div class="text-caption">SCORE</div>
                </div>
              </v-timeline-item>

              <v-timeline-item dot-color="green-darken-2" icon="mdi-whistle" fill-dot>
                <div>
                  <span class="me-4">1er Coup de sifflet</span>
                  <div class="text-caption">Start timer</div>
                </div>
              </v-timeline-item>

              <v-timeline-item class="mb-6" hide-dot>
                <template v-slot:opposite>
                  <span>Break</span>
                </template>
              </v-timeline-item>

              <v-timeline-item dot-color="green-darken-2">
                <div>
                  <span class="me-4">Début inter-période</span>
                  <div class="text-caption">
                    SCORE<br />
                    Reset timer pour l'inter-période<br />
                    Start timer (à l'annonce du maître de cérémonie)
                  </div>
                </div>
              </v-timeline-item>

              <v-timeline-item class="mb-6" hide-dot>
                <template v-slot:opposite>
                  <span>Période 2</span>
                </template>
              </v-timeline-item>

              <v-timeline-item dot-color="black">
                <div>
                  <span class="me-4">Retour des arbitres</span>
                  <div class="text-caption">
                    BLACK<br />
                    Reset timer pour la période
                  </div>
                </div>
              </v-timeline-item>

              <v-timeline-item dot-color="green-darken-2">
                <div>
                  <span class="me-4">Retour des jouteurs</span>
                  <div class="text-caption">SCORE</div>
                </div>
              </v-timeline-item>

              <v-timeline-item dot-color="green-darken-2" icon="mdi-whistle" fill-dot>
                <div>
                  <span class="me-4">1er Coup de sifflet</span>
                  <div class="text-caption">Start timer</div>
                </div>
              </v-timeline-item>

              <v-timeline-item dot-color="green-darken-2" icon="mdi-star-face" fill-dot>
                <div>
                  <span class="me-4">Etoileur</span>
                  <div class="text-caption">TITLE</div>
                </div>
              </v-timeline-item>

              <v-timeline-item class="mb-6" hide-dot>
                <template v-slot:opposite>
                  <span>End</span>
                </template>
              </v-timeline-item>
            </v-timeline>
          </v-window-item>
          <v-window-item value="remarks">
            <v-container>
              <ul>
                <li>L'ajout de point se fait à l'annonce par l'arbitre</li>
                <li>L'ajout de faute se fait à l'annonce par le maître de cérémonie</li>
                <li>La conversion des fautes se fait à l'annonce par le maître de cérémonie</li>
                <li>Un joueur exclu part avec son point de faute, la faute n'est <strong>pas</strong> comptabilisée</li>
              </ul>
            </v-container>
          </v-window-item>
        </v-window>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" @click="showHelpDialog = false"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
