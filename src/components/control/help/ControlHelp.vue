<script setup lang="ts">
import { ref } from 'vue'

// Indicates dialog is open or not
const showHelpDialog = ref(false)
// Indicates active tab
const tab = ref('timeline')
</script>

<template>
  <v-dialog v-model="showHelpDialog" fullscreen transition="dialog-bottom-transition">
    <template v-slot:activator="{ props }">
      <v-btn icon="mdi-help" elevation="2" @click="showHelpDialog = true" v-bind="props" title="Help"></v-btn>
    </template>
    <v-card>
      <v-toolbar>
        <v-btn icon="mdi-close" @click="showHelpDialog = false"></v-btn>
        <v-toolbar-title>Help</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn variant="text" @click="showHelpDialog = false"> Close </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-container>
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab value="timeline">Timeline</v-tab>
          <v-tab value="rules">Règles</v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab" class="mt-10">
          <v-tabs-window-item value="timeline">
            <v-container>
              <v-timeline align="start" side="end">
                <v-timeline-item dot-color="green-darken-2" icon="mdi-panorama" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Entrée du public</span>
                  </template>
                  <div>
                    <span>Slideshow</span>
                  </div>
                </v-timeline-item>

                <v-timeline-item dot-color="green-darken-2" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Entrée du maître de musique</span>
                  </template>
                  <div>
                    <span>Title</span>
                  </div>
                </v-timeline-item>

                <v-timeline-item dot-color="green-darken-2" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Entrée du maître de cérémonie</span>
                  </template>
                  <div>
                    <span>Title</span>
                  </div>
                </v-timeline-item>

                <v-timeline-item class="mb-6" hide-dot>
                  <template v-slot:opposite>
                    <strong>Période 1</strong>
                  </template>
                </v-timeline-item>

                <v-timeline-item dot-color="black" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Entrée des arbitres</span>
                  </template>
                  <div>
                    <span>Black</span>
                  </div>
                </v-timeline-item>

                <v-timeline-item dot-color="green-darken-2" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Entrée des jouteurs</span>
                  </template>
                  <div>
                    <span>Title</span>
                  </div>
                </v-timeline-item>

                <v-timeline-item dot-color="green-darken-2" icon="mdi-bugle" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Sirène</span>
                  </template>
                  <div>
                    <span>Score</span>
                  </div>
                </v-timeline-item>

                <v-timeline-item dot-color="green-darken-2" icon="mdi-whistle" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Fin du 1er coup de sifflet</span>
                  </template>
                  <div>
                    <span>Start timer</span>
                  </div>
                </v-timeline-item>

                <v-timeline-item class="mb-6" hide-dot>
                  <template v-slot:opposite>
                    <strong>Break</strong>
                  </template>
                </v-timeline-item>

                <v-timeline-item dot-color="green-darken-2" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Début inter-période</span>
                  </template>
                  <div>
                    <span>Score</span>
                    <div class="text-caption">
                      <em>Optionnel</em><br />
                      Reset timer pour l'inter-période<br />
                      Démarrer à l'annonce du maître de cérémonie
                    </div>
                  </div>
                </v-timeline-item>

                <v-timeline-item class="mb-6" hide-dot>
                  <template v-slot:opposite>
                    <strong>Période 2</strong>
                  </template>
                </v-timeline-item>

                <v-timeline-item dot-color="black" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Retour des arbitres</span>
                  </template>
                  <div>
                    <span>Black</span>
                    <div class="text-caption">Reset timer pour la période</div>
                  </div>
                </v-timeline-item>

                <v-timeline-item dot-color="green-darken-2" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Retour des jouteurs</span>
                  </template>
                  <div>
                    <span>Score</span>
                  </div>
                </v-timeline-item>

                <v-timeline-item dot-color="green-darken-2" icon="mdi-whistle" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Fin du 1er coup de sifflet</span>
                  </template>
                  <div>
                    <span>Start timer</span>
                  </div>
                </v-timeline-item>

                <v-timeline-item class="mb-6" hide-dot>
                  <template v-slot:opposite>
                    <strong>Fin du match</strong>
                  </template>
                </v-timeline-item>

                <v-timeline-item dot-color="green-darken-2" icon="mdi-star-face" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Présentation de l'étoileur</span>
                  </template>
                  <div>
                    <span>Title</span>
                  </div>
                </v-timeline-item>

                <v-timeline-item dot-color="green-darken-2" fill-dot>
                  <template v-slot:opposite>
                    <span class="me-4">Sortie du public</span>
                  </template>
                  <div>
                    <span>Title</span>
                    <div class="text-caption">
                      <em>Optionnel</em><br />
                      Ajouter message d'au revoir
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-container>
          </v-tabs-window-item>
          <v-tabs-window-item value="rules">
            <v-container>
              <h3 class="pb-6">Synchronisation des événements</h3>
              <ul>
                <li>L'ajout de point se fait à l'annonce par l'arbitre.</li>
                <li>L'ajout de faute se fait à l'annonce par le maître de cérémonie.</li>
                <li>La conversion des fautes se fait à l'annonce par le maître de cérémonie.</li>
                <li>
                  Un joueur exclu part avec son point de faute, la faute n'est <strong>pas</strong> comptabilisée.
                </li>
              </ul>
              <v-divider thickness="1" class="mb-6 mt-6"></v-divider>

              <h3 class="pb-6">Les fautes</h3>
              <dl>
                <dt>Majeure</dt>
                <dd class="pb-6">
                  Augmente d'un point la gravité d'une faute précédemment sifflée. Si ce n'est pas la dernière qui a été
                  sifflée, l'arbitre refait le signe de la faute à laquelle elle se réfère avant de signaler la
                  majoration.
                </dd>
                <dt>Retard de jeu</dt>
                <dd class="pb-6">
                  L'histoire n'avance pas. Soit il n'y a pas de propositions du tout, soit il y en a mais elles ne sont
                  pas prises au bond. Des appels sont faits mais aucun jouteur n'y répond ou tellement tard que la
                  situation ne le justifie plus. Au coup de sifflet du début de l'impro, il n'y a pas encore de jouteur
                  dans la patinoire ou les jouteurs qui ne jouent pas ne sont pas encore retournés sur leur banc. Le
                  capitaine monte en retard pour demander les explications des fautes.
                </dd>
                <dt>Nombre illégal de jouteurs</dt>
                <dd class="pb-6">
                  Une équipe n'est pas au complet en début de match, une équipe ne respecte pas le nombre de jouteurs
                  indiqué sur le carton de thèmes.
                </dd>
                <dt>Accessoire non respecté</dt>
                <dd class="pb-6">
                  Non respect du matériel (accessoires, aire de jeu, lorsqu'un jouteur joue avec d'autres choses que les
                  accessoires permis...). Pour les impros avec accessoire lorsque celui-ci n'est pas ou peu tenu en
                  compte dans l'histoire ou qu'il est endommagé.
                </dd>
                <dt>Procédure illégale</dt>
                <dd class="pb-6">
                  Communications pendant une comparée, communications en réserve ou du banc à la patinoire, lorsqu'un
                  jouteur quitte l'aire de jeu, lorsqu'un jouteur joue avec d'autres choses que les accessoires
                  permis...
                </dd>
                <dt>Cabotinage</dt>
                <dd class="pb-6">
                  Pénalité des jouteurs qui placent des mots ou des actes pour s'attirer les faveurs du public mais qui
                  n'ont rien à voir avec la situation ou qui ne font pas avancer le jeu. Pénalité des équipes qui
                  envoient toujours les mêmes jouteurs ou qui développent systématiquement la même stratégie.
                </dd>
                <dt>Sortie de thème</dt>
                <dd class="pb-6">Non respect du titre ou de la catégorie de l'impro.</dd>
                <dt>Cliché</dt>
                <dd class="pb-6">Répétition d'une situation, d'un personnage ou de phrases de grande renommée.</dd>
                <dt>Décrochage</dt>
                <dd class="pb-6">
                  Perte d'accent ou de personnage, fou rire, non respect d'une situation ou d'une catégorie en cours
                  d'impro. Non respect des personnages et de la situation en cas d'improvisation comparée poursuite ou
                  tryptique.
                </dd>
                <dt>Confusion</dt>
                <dd class="pb-6">
                  Accumulation de plusieurs fautes de manque d'écoute. Non respect des décors installés ou manque de
                  décor. Utilisation de références imprécises.
                </dd>
                <dt>Rudesse excessive</dt>
                <dd class="pb-6">Imposition d'un personnage ou d'une situation, rudesse physique, ...</dd>
                <dt>Refus de personnage</dt>
                <dd class="pb-6">
                  Quand on monte dans la patinoire, il faut au moins faire un bruitage, un objet qui serve à la
                  construction de l'histoire. Quelqu'un qui ne s'est pas défini assez rapidement et qui refuse la
                  définition qu'on fait de lui. Un jouteur qui ne veut pas revenir en jeu alors qu'on appelle le
                  personnage qu'il interprétait...
                </dd>
                <dt>Mauvaise conduite (majeure)</dt>
                <dd class="pb-6">
                  Pénalités des jouteurs ou des équipes qui ne respectent pas le protocole, le règlement ou qui nuisent
                  sciemment au jeu ou au spectacle.
                </dd>
                <dt>Punition de match (majeure)</dt>
                <dd class="pb-6">Quand l'avertissement de la mauvaise conduite n'a pas été suffisant.</dd>
                <dt>Manque d'écoute</dt>
                <dd class="pb-6">Non respect de tout ce qui a été dit ou installé.</dd>
                <dt>Déjà vu</dt>
                <dd class="pb-6">
                  Répétition trop systématique d'une situation, d'un personnage, d'une action, d'un accent, d'une phrase
                  au cours d'un même match et quelquefois au cours d'une même saison.
                </dd>
                <dt>Obstruction (majeure)</dt>
                <dd class="pb-6">Refus systématique des propositions de l'autre jouteur.</dd>
              </dl>
            </v-container>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style>
ul {
  list-style-type: none;
}

dl {
  dt {
    font-weight: bold;
  }
}
</style>
