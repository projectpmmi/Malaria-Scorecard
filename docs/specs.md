---
layout: default
---
[Accueil](./index.md) | [Apropos](./about.md) | Specifications | [Guides](./userguide.md)


# MEASURE MALARIA SCORECARD APP

## EXIGENCES FONCTIONNELLES ET TECHNIQUES

### 1. Exigences fonctionnelles pour un ensemble de tableaux de bord S&E du paludisme pour appareils mobiles



#### Utilisateurs

MEASURE Evaluation envisage un ensemble diversifié d'utilisateurs potentiels à la périphérie du système de santé, y compris :

Au niveau du district :

- Gestionnaires de programme de lutte contre le paludisme

- Gestionnaires de données (programme de lutte contre le paludisme et HMIS)

- Chaîne d'approvisionnement, tels que les moustiquaires)

- Médecins de district

- Personnel de lutte antivectorielle

- Officiers de surveillance des maladies


Niveau établissements sanitaires:

- Gestionnaire de données

- Point de contact Malaria (Hôpital) 

- Prestataires de services de santé (Centre de santé)

- Gestionnaires de stock


Niveau communautaire :

- Agents de santé communautaires

- Volontaires du village

Contenu : 

Les tableaux de bord mobiles doivent contenir des informations à jour pour l'indicateur de programme

- Comparaisons des scores de performance des indicateurs d'impact entre les districts et entre les établissements de santé

- Comparaisons des scores de performance des indicateurs de processus entre les districts et entre les types d'établissements de santé au fil du temps

- Comparaisons des scores de performance des processus des établissements entre les services (prévention, traitement, produits, résultats sanitaires et mortalité) au fil du temps

- Cartes des comparaisons des scores de performance de la couverture des établissements 


Fonctionnalité: 

- Voir le score de performance dans différentes couleurs dans un tableau ou une carte au cours d'une période donnée

- Voir une performance du tableau de bord pour les indicateurs de résultats de santé (guérison, décès) au fil du temps pour une région, un district ou un établissement

- Sélectionner le contenu à afficher dans le tableau de bord selon les besoins, à partir d'une liste d'indicateurs, d'éléments de données ou de taux. 

- sélectionner le mode d'affichage d'un indicateur -- c'est-à-dire sous forme de tableau de bord 

- afficher des cartes thématiques (si possible)

- Avoir plusieurs "vues" - c'est-à-dire basculer entre différents tableaux de bord configurés (2-3 tableaux chacun), pour différents aspects du suivi du programme (par exemple, traitement, prévention, produits de base, résultats pour la santé, etc.)

- Créer un rapport statique (comme un PDF) d'un tableau de bord donné qui pourrait être facilement partagé (e-mail ou publié sur une plate-forme de réseau social) - fonctionnalité d'exportation PDF

- Possibilité d'ajouter annotations textuelles (par exemple pour les interprétations) de tableaux individuels

- Comparer les résultats avec les scores de performance prédéfinis -- Appliquer une légende de couleur basée sur des cibles prédéfinies pour chaque indicateur ou élément de données.

- Afficher les coordonnées GPS (par exemple, répartition des centres de santé ou des ASC engagés dans des activités de lutte contre le paludisme

Indicateurs clés de performance et intervalles
![Indicateurs clés de performance et intervalles](./assets/img/indtable1.png)
![Indicateurs clés de performance et intervalles](. /assets/img/indtable1-1.png)
Les objectifs de performance de score proposés sont indicatifs. Chaque pays définit ses objectifs de performance de score à surveiller.

Affichage du tableau de score de la région

![Affichage du tableau de bord de la région](./assets/img /indtable2.png)
![Affichage du scorecard Région](./assets/img/indtable3.png)


Affichage du tableau scorecard District
![Affichage du scorecard District](./assets/img/indtable4.png)

 Affichage du tableau de score Établissement
 ![Affichage du tableau de bord District](./assets/img/indtable5.png)
 ![Affichage du tableau de bord District](./assets/img/indtable6.png)

 Affichage d'une Région ou District ou Tableau de bord de l'établissement au fil du temps
![Affichage du tableau de bord du district](./assets/img/indtable7.png)
![Affichage du e District scorecard](./assets/img/indtable8.png)


# 1. Exigences techniques pour l'application MEASURE Malaria scorecard
    ========================= ====================================

1. ### Phase 1 : DHIS2 basé sur le Web et adapté aux mobiles app

La première phase du projet consistera à développer une application conviviale mobile REACT.js DHIS qui permettra l'affichage mobile de la représentation des tableaux de bord d'un ensemble d'indicateurs.

### Interface de configuration :

- Permettra la sélection d'un indicateur DHIS2 et d'un groupe d'éléments de données à utiliser pour la génération du tableau de bord.

- Commande des tableaux de bord

### Interface mobile

- Affichage du tableau de bord adapté aux mobiles s'ajustant automatiquement aux dimensions de l'écran (Mobile ou Desktop)

### Module de rapport

- Possibilité de télécharger les tableaux de bord au format PDF ou image.

1. ### Phase 2 : Application de visualisation de tableau de bord Android 

Au cours de cette phase initiale, une application Android sera développée qui ne fera que télécharger le tableau de bord généré à l'aide de l'application mobile conviviale DHIS2 basée sur le Web au format PDF ou Image et l'afficher sur le téléphone mobile hors ligne.

1. ### Phase 3 : Application de tableau de bord dynamique hors ligne entièrement configurable pour Android

Au cours de cette phase, l'application évoluera pour permettre le téléchargement des métadonnées et d'une certaine quantité de données liées à un ensemble d'indicateurs sélectionnés pendant un certain nombre de périodes jusqu'au appareil mobile et permettre une utilisation dans un ensemble prédéfini de tableaux de scorecard conçus pour être utilisés sur une application de téléphonie mobile.

1. ### Langage de programmation :

cours des phases 1, l'application mobile DHIS2 sera développée à l'aide du langage de programmation JavaScript et des bibliothèques suivantes :

- REACT.js pour le développement de l'application

- Bootstrap pour le moteur de modèle

- Bibliothèque Highchart pour la génération de tableaux de bord

A la phase 2 et 3 l'application Android sera développée en utilisant le langage de programmation JavaScript.



* * *

 [Accueil](./index.md) | [Apropos](./about.md) | Specifications | [Guides](./userguide.md)
