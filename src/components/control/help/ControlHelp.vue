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
        <v-tabs v-model="tab" fixed-tabs stacked>
          <v-tab value="timeline"><v-icon icon="mdi-timeline-clock"></v-icon> Timeline</v-tab>
          <v-tab value="rules"><v-icon icon="mdi-whistle"></v-icon> Règles</v-tab>
          <v-tab value="anthem"><v-icon icon="mdi-music-note"></v-icon> Hymne</v-tab>
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
            <v-container class="rules">
              <h3 class="pb-6">Synchronisation des événements</h3>
              <ul>
                <li>L'ajout de point se fait à l'annonce par l'arbitre.</li>
                <li>L'ajout de faute se fait à l'annonce par le maître de cérémonie.</li>
                <li>La conversion des fautes se fait à l'annonce par le maître de cérémonie.</li>
                <li>
                  Un joueur exclu part avec son point de faute, la faute n'est <strong>pas</strong> comptabilisée.
                </li>
                <li>
                  Le timer doit être mis en pause pendant un comptage :
                  <ul>
                    <li><strong>pause</strong> lorsque l'arbitre annonce "On compte";</li>
                    <li><strong>play</strong> lorsque le point est attribué.</li>
                  </ul>
                </li>
                <li>
                  Le timer doit être mis en pause pendant des explications, uniquement pendant les
                  <strong>15 dernières minutes de la 2eme période</strong> :
                  <ul>
                    <li><strong>pause</strong> lorsque la discussion commence;</li>
                    <li><strong>play</strong> lorsque le point est attribué.</li>
                  </ul>
                </li>
              </ul>
              <v-divider thickness="1" class="mb-6 mt-6"></v-divider>
              <h3 class="pb-6">Chronomètre <small>Extrait article 4</small></h3>
              A l'intérieur des périodes de 45 minutes, il n'y a aucun arrêt du chronomètre.<br />
              Exceptions (pendant lesquelles le chronomètre est arrêté) :
              <ul>
                <li>
                  Lors des explications entre l’arbitre et les capitaines/assistant-capitaine
                  <b>pendant les 15 dernières minutes de la deuxième période</b><br />
                </li>
                <li>Lors des comptages des votes pour déterminer le gagnant de l’improvisation.<br /></li>
                <li>Lors de toute demande de recours</li>
              </ul>
              <v-divider thickness="1" class="mb-6 mt-6"></v-divider>
              <h3 class="pb-6">Règlement <small>Coupe du monde 2024</small></h3>
              <dl>
                <dt>Article 1</dt>
                <dd class="pb-6">
                  <p>
                    Le jeu consiste dans l'affrontement de deux équipes composées de 5 jouteur·euses (2 hommes, 2 femmes
                    et une 5<sup>ème</sup> personne).
                  </p>
                  <p>Chaque équipe désigne en son sein un capitaine et un assistant-capitaine.</p>
                  <p>Un arbitre et ses deux assistants veillent à ce que le jeu se déroule selon le règlement.</p>
                  <p>Un Maître de Cérémonie assure la présentation du spectacle.</p>
                  <p>Un Maître de Musique assure l’aspect musical tout au long du Match.</p>
                  <p>
                    <br />
                    Pendant toute la durée de l'improvisation, les jouteur·euses ne peuvent perdre le contact avec
                    l'aire de jeu (la patinoire).
                  </p>
                </dd>
                <dt>Article 2</dt>
                <dd class="pb-6">
                  <p>
                    Le capitaine veille à ce que tous les jouteur·euses de son équipe aient participé à au moins une
                    improvisation avant la fin de la première période.
                  </p>
                  <p>
                    SeuI le capitaine de chaque équipe a le droit de venir demander des explications sur les pénalités à
                    l'arbitre. Pour ce faire, il monte dans la patinoire pendant l'annonce des fautes par le Maître de
                    Cérémonie. Toute discussion avec l’arbitre doit se dérouler au centre de l'aire de jeu.&nbsp;
                  </p>
                  <p>
                    L'arbitre peut inviter le capitaine au centre de l'aire de jeu pour lui donner des explications.
                  </p>
                  <p>Advenant l'exclusion du capitaine, celui-ci est remplacé par l'assistant-capitaine.</p>
                  <p>
                    Dans les 15 dernières minutes de la deuxième période ou des périodes supplémentaires, le chronomètre
                    sera mis en pause le temps des explications.
                  </p>
                </dd>
                <dt>Article 3</dt>
                <dd class="pb-6">
                  <p>
                    Chaque Match dure 90 minutes, c'est-à-dire deux périodes de 45 minutes. Une mi-temps est prévue
                    entre ces périodes.
                  </p>
                </dd>
                <dt>Article 4</dt>
                <dd class="pb-6">
                  <p>A l'intérieur des périodes de 45 minutes, il n'y a aucun arrêt du chronomètre.</p>
                  <p><u>Exceptions</u> (pendant lesquelles le chronomètre est arrêté)&nbsp;:</p>
                  <ul>
                    <li>
                      Lors des explications entre l’arbitre et les capitaines/assistant-capitaine pendant les 15
                      dernières minutes de la deuxième période
                    </li>
                    <li>Lors des comptages des votes pour déterminer le gagnant de l’improvisation.</li>
                    <li>Lors de toute demande de recours</li>
                  </ul>
                </dd>
                <dt>Article 5</dt>
                <dd class="pb-6">
                  <p>Les improvisations sont de deux types:</p>
                  <ul>
                    <li>
                      <strong>Improvisation mixte</strong>: un ou des jouteur·euses des deux équipes doivent improviser
                      ensemble sur le même thème.&nbsp;
                    </li>
                    <li>
                      <strong>Improvisation comparée</strong>: L’arbitre lance le puck après le caucus.&nbsp;L'équipe
                      désignée au hasard par la couleur du puck commence à jouer.
                    </li>
                  </ul>
                </dd>
                <dt>Article 6</dt>
                <dd class="pb-6">
                  <p>
                    Déroulement de chaque improvisation : l'arbitre tire au hasard dans un barillet un carton de thème
                    qu&#39;il lit à haute voix et qui contient: la nature de l’'improvisation (comparée ou mixte), le
                    titre de l’improvisation, le nombre de jouteur·euses, la catégorie et la durée.
                  </p>
                  <p>
                    Les équipes ont 20 secondes de caucus pour se concerter et prendre place sur la patinoire. L'arbitre
                    signale le début et la fin de l’improvisation par un coup de sifflet.
                  </p>
                  <p>
                    L'improvisation terminée, chaque spectateur·ice est appelé.e à choisir l'équipe gagnante de
                    l'improvisation en montrant, au signal de l'arbitre, la couleur de son panneau de vote correspondant
                    à l'équipe de son choix.
                  </p>
                  <p>
                    L'arbitre, en concertation avec ses assistants, accorde le point à l'équipe pour laquelle il y a le
                    plus de votes.
                  </p>
                  <p>
                    Au cas où la majorité ne semble pas évidente, l’arbitre demande un comptage des panneaux. Pendant ce
                    comptage, le chronomètre est mis en pause.
                  </p>
                  <p>En cas d’égalité dans le compte des votes, chaque équipe marque un point.</p>
                </dd>
                <dt>Article 7</dt>
                <dd class="pb-6">
                  <p>Une sirène annonce la fin effective et la fin protocolaire de chaque période.</p>
                  <p>
                    A la fin de la première période, si l'improvisation n'est pas terminée, elle se poursuit jusqu’à
                    concurrence de maximum 5 minutes.
                  </p>
                  <p>Le carton blanc est maintenu en l'air tout le temps excédentaire de la période.</p>
                  <p>La sirène de fin de période effective retentit après le coup de sifflet de l'arbitre.</p>
                  <p>
                    À la fin de la deuxième période, la sirène de fin de période effective retenti quel que soit le
                    temps qu'il reste à jouer dans l’improvisation en cours si c'est une improvisation mixte. S'il
                    s'agit d'une improvisation comparée, celle-ci se déroulera jusqu'à écoulement de son temps (carton
                    blanc et sirène après le coup de sifflet de fin d'impro).
                  </p>
                </dd>
                <dt>Article 8</dt>
                <dd class="pb-6">
                  <p>
                    Au cours des 15 dernières minutes de la deuxième période, les cartons de thèmes sont tirés au hasard
                    dans un récipient spécial (le petit barillet) ne contenant que des improvisations mixtes n'excédant
                    pas 6 minutes.&nbsp;
                  </p>
                  <p>
                    Le temps de la période sera arrêté si un des capitaines/assistants-capitaines vient demander des
                    explications auprès de l’arbitre.
                  </p>
                </dd>
                <dt>Article 9</dt>
                <dd class="pb-6">
                  <p>
                    Advenant une égalité à la fin du temps réglementaire de 90 minutes, une période supplémentaire sera
                    jouée jusqu'à ce qu'un point soit marqué.
                  </p>
                  <p>
                    Lors des Matchs de poule, s&#39;il y a égalité dans le compte des votes ou bascule de points de
                    fautes des deux côtés en même temps, le Match sera décrété nul et donnera au classement un point à
                    chacune des équipes + 1 point pour l'équipe qui gagne la prolongation.&nbsp;
                  </p>
                  <p>
                    Lors des Matchs de demi-finales et finale de Coupe du Monde, advenant une égalité dans le compte des
                    votes ou bascule de points de faute des deux côtés en même temps, l'arbitre déclare gagnante
                    l'équipe qui a gagné le plus d'improvisations dans cette partie. Si les équipes ont gagné le même
                    nombre d'improvisations au cours de la partie, l'arbitre déclare gagnante l'équipe ayant fait le
                    moins de points de faute au cours de la partie. Si les équipes, à ce stade, sont toujours à égalité,
                    l'arbitre déclare gagnante l'équipe déterminée par le lancer du puck.
                  </p>
                </dd>
                <dt>Article 10 : CLASSEMENT</dt>
                <dd class="pb-6">
                  <p>Le classement des Matchs de poule de la Coupe du Monde se fait comme suit :&nbsp;</p>
                  <ul>
                    <li>Victoire après 90 minutes réglementaires : 3 points&nbsp;</li>
                    <li>Défaite après 90 minutes réglementaires : 0 point&nbsp;</li>
                    <li>
                      Égalité après 90 minutes réglementaires : 1 point pour chaque équipe + 2 points pour l'équipe qui
                      gagne la prolongation. En cas d’égalité à la fin de la période supplémentaire, aucune équipe ne
                      gagne de point supplémentaire.
                    </li>
                  </ul>
                  <p>
                    Lors des Matchs de demi-finales et finale de Coupe du Monde, il n'y a pas de prolongation. Advenant
                    une égalité à la fin des 90 minutes de jeu, c'est l'équipe la mieux classée qui gagne la partie et
                    va en finale. Mais en finale, on peut avoir une période supplémentaire.
                  </p>
                </dd>
                <dt>Article 11 : LES PENALITES</dt>
                <dd class="pb-6">
                  <p>
                    L'arbitre est le maître absolu du jeu. En tout temps, il peut imposer une pénalité à un jouteur•euse
                    ou à une équipe pour toute infraction ne respectant pas le règlement ou nuisant à la qualité du jeu
                    ou au déroulement de la partie.
                  </p>
                  <p>Au cours d'une improvisation, l'arbitre signale les pénalités au moyen d'un gazou.</p>
                  <p>
                    Les pénalités sont annoncées par le Maître de Cérémonie avant le vote sur l&#39;improvisation.
                    Seules les pénalités annoncées sont comptabilisées au dossier des fautes.
                  </p>
                  <p>
                    Le ou la jouteur·euses ou l&#39;équipe pénalisée se voit attribuer un ou deux points de faute selon
                    la nature de l&#39;offense (pénalité mineure, 1 point - pénalité majeure, 2 points). Une pénalité
                    majeure est une infraction qui détruit sciemment le jeu, tandis qu'une infraction mineure peut être
                    un oubli, une maladresse, un retard, etc.
                  </p>
                  <p>
                    L'accumulation chronologique de trois points de pénalité donne automatiquement un point à l'équipe
                    adverse.
                  </p>
                  <p>
                    Tout•e jouteur•euse ayant subi deux pénalités personnelles est exclu•e du jeu jusqu&#39;à la fin de
                    la partie ; il doit se retirer dans le vestiaire et le premier point de sa deuxième faute n&#39;est
                    pas comptabilisé au dossier de l&#39;équipe. Si le joueur a accumulé plus de deux fautes
                    personnelles avant son exclusion, les points de faute subséquents au premier point de sa deuxième
                    faute seront eux, par contre, comptabilisés au dossier des fautes de son équipe.
                  </p>
                  <p>
                    Si, à cause de l&#39;absence d&#39;un•e des jouteur·euses, une équipe ne peut plus remplir les
                    exigences du carton de thème, L&#39;autre équipe gagne l&#39;improvisation par défaut.
                  </p>
                  <p>
                    En période supplémentaire, lorsqu'une équipe accumule trois points de faute, elle cède un point à
                    l'équipe adverse et la partie prend fin&nbsp;à ce moment précis.
                  </p>
                </dd>
                <dt>Article 12: COMMUNICATIONS</dt>
                <dd class="pb-6">
                  <p>Les jouteur·euses en réserve au cours d'une improvisation n'ont pas le droit de communiquer.</p>
                  <p>
                    Les jouteur·euses sur le banc ne peuvent pas communiquer avec les jouteur·euses qui se trouvent dans
                    la patinoire.&nbsp;
                  </p>
                  <p>
                    Lors d’une improvisation comparée, l&#39;équipe qui n&#39;a pas encore joué n&#39;a droit à aucune
                    communication (verbale et non-verbale) ; l&#39;équipe qui a déjà joué peut communiquer du moment
                    qu&#39;elle ne dérange pas le jeu de l&#39;autre équipe.
                  </p>
                  <p>
                    Lors d’une improvisation comparée poursuite, la deuxième équipe a le droit de communiquer brièvement
                    pendant le jeu de la première.
                  </p>
                  <p>
                    Ces pénalités signalées par les assistants-arbitres le seront a l'aide d'un ruban jeté dans la
                    patinoire.&nbsp;
                  </p>
                </dd>
                <dt>Article 13 : RECOURS</dt>
                <dd class="pb-6">
                  <p>
                    Si une équipe décide de déposer un recours, elle doit le faire juste après l'incident et/ou avant la
                    fin protocolaire de la période concernée.&nbsp;
                  </p>
                  <p>
                    Un recours est une réclamation introduite par une équipe et concernant une erreur dans le compte des
                    points de faute, une erreur dans le compte des votes, une imprécision de timing ou tout manquement
                    au règlement.
                  </p>
                  <p>
                    Seul le capitaine/assistant-capitaine de chaque équipe a le droit de solliciter un recours. Pour ce
                    faire, il monte dans la patinoire pendant l'annonce des fautes ou le résultat du vote par le Maître
                    de Cérémonie. Toute discussion avec l’arbitre doit se dérouler au centre de l'aire de jeu.
                  </p>
                  <p>&nbsp;Pendant ce recours, le chronomètre est mis en pause.</p>
                  <p>
                    Il n'existe aucun recours en match concernant les décisions arbitrales (pénalités), hormis les
                    points précités.&nbsp;
                  </p>
                  <p>
                    Suite au recours, l'arbitre prend une décision finale après une brève consultation avec ses
                    assistants.
                  </p>
                </dd>
                <dt>Article 14 : ACCESSOIRES</dt>
                <dd class="pb-6">
                  <p>
                    Les jouteur•euses ont uniquement le droit de jouer avec leur chandail, leur jogging, leurs
                    chaussettes et leurs chaussures et doivent rester en contact permanent avec. Dans le cadre d’une
                    improvisation avec accessoire, celui-ci peut être manipulé par les&nbsp; jouteur•euses.
                  </p>
                </dd>
                <dt>Article 15 : CATEGORIES</dt>
                <dd class="pb-6">
                  <p>
                    Les joueurs connaissent le règlement spécifique des catégories (qui sont transmises à toutes les
                    équipes).
                  </p>
                </dd>
                <dt>Article 16 : FAUTES</dt>
                <dd class="pb-6">
                  <p>
                    Les joueurs connaissent les signes et la définition des fautes (qui sont transmises à toutes les
                    équipes).
                  </p>
                </dd>
              </dl>
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
          <v-tabs-window-item value="anthem">
            <v-container class="anthem text-center">
              <p class="font-italic ma-3">
                Dans cette nuit, j'ai envie de me perdre.<br />
                Le son de la ville me rend amoureux.<br />
                Pas besoin de sous pour acheter une amourette,<br />
                ma jolie compagne me prête ses yeux.<br />
              </p>

              <p class="font-italic ma-3">
                Sous la lueur de la lune blanche,<br />
                le monde devient notre lit d'amour.<br />
                Allons au bistrot, faut qu'la joie prenne sa revanche.<br />
                Vivons cette nuit, oublions le jour.<br />
              </p>

              <p class="font-italic ma-3">
                Ik wil deze nacht in de straten verdwalen,<br />
                de klank van de stad maakt mijn ziel amoureus.<br />
                Al heb ik geen geld om plezier te betalen,<br />
                ik vind wel een vrouwke heel net en genereus.<br />
              </p>
            </v-container>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style>
.rules {
  ul {
    list-style: initial;
    margin: initial;
    padding: 0 0 0 40px;
  }

  li {
    display: list-item;
  }

  dl {
    dt {
      font-weight: bold;
    }
  }
}
</style>
