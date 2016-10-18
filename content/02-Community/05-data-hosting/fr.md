---
title: Héberger les données
description: Ce guide rapide vous aidera à prendre de bonnes décisions sur la façon d'accueillir les données de votre projet BID. 
category: Communauté
subCategory: Data hosting
image: /images/library.jpg
imageTitle: Library. By Paweł Sobociński via freeimages.com. Freeimages content license.
imageLink: http://www.freeimages.com/photo/library-1530267
---
# Héberger les données des projets BID : un guide rapide

<!-- toc -->
<!-- tocstop -->

-----------------------
## Introduction

Un élément essentiel de tout projet BID est de s’assurer que les données que vous générez soient librement accessibles sur GBIF.org et, potentiellement, sur d’autres plateformes. Nous savons que ce procédé est un défi de taille pour bien des institutions, en particulier pour les nouvelles venues au GBIF qui ne disposent pas d’installations pour héberger des données sur un serveur qui est toujours en ligne.

Il est important de faire la différence entre la publication de données et l’hébergement de données. Bien que les deux activités soient reliées, elles peuvent être gérées par des institutions différentes.

La publication de données est l’action d’organiser et de partager des données afin de les diffuser dans tout le réseau GBIF. Une institution devient éditrice de données auprès du GBIF en remplissant un formulaire d’inscription en ligne et en recevant la validation d’un point nodal participant ou du comité des responsables de points nodaux.

L’hébergement de données est l’action de mettre les données sur une plateforme stable et accessible. Il n’y a pas de procédé formel pour héberger des données et les servir au GBIF. La publication et l’hébergement de données n’ont pas à être effectués par la même institution (bien qu’ils le sont généralement). L’hébergement de données est un engagement considérable qui requiert des capacités et des ressources à long terme afin de maintenir la plateforme d’édition de données en opération continue.

N’oubliez pas que peu importe où les ressources sont hébergées, elles seront toujours clairement associées à votre institution et à votre pays, une fois que vous êtes enregistré comme éditeur de données auprès du GBIF. Voici un guide rapide pour vous aider à prendre la bonne décision au sujet de l’hébergement de vos données.

-----------

## Les étapes de l’hébergement

Une fois vos données organisées dans un format pouvant les prendre en charge, procédez comme suit :
  
1. Pour devenir un éditeur de données auprès du GBIF, vous devez remplir le [formulaire d’inscription de l’éditeur](http://www.gbif.org/publishing-data/request-endorsement#/intro) (en anglais)
2. Trouvez une plateforme d’édition, un IPT ou autre, en ordre de préférence :
    a. Hébergé dans votre institution
    b. Hébergé par un point nodal national (si votre pays est un [Participant du GBIF](http://www.gbif.org/participation/participant-list))
    c. Hébergé par un autre participant du GBIF ou éditeur de données (e.g. [un centre d’hébergement de données](#centre))
    d. Si rien de ce qui précède ne s’applique à vous, envoyez un message à la [liste de la communauté BID](mailto:bid-community@lists.gbif.org), en expliquant vos besoins. Nous trouverons un IPT pour vous!
3. Comment accéder à l’IPT (et à une formation de base)
4. Commencez à publier vos jeux de données

-----------

## Les options d’hébergement de données

### L’hébergement de données par l’institution qui les publie

Les éditeurs de données possédant la capacité d’héberger leurs propres données peuvent installer leur propre outil de publication intégré (IPT) ou autre plateforme d’édition de données. (<a name="ipt">Voir ci-dessous</a>) 

### L’hébergement de données en dehors de l’institution qui les publie 

Les éditeurs de données qui auraient des capacités techniques limitées ou qui ne désirent pas gérer leur propre plateforme d’édition de données, peuvent choisir de faire héberger leurs ressources à l’externe. Ne pas avoir à mettre en place et à maintenir votre propre instance d’IPT vous fera épargner du temps et de l’argent et vous devriez pouvoir recevoir du soutien technique dans votre langue dépendant du centre d’hébergement. Bien qu’il y ait plusieurs options d’hébergement possibles, les organisations choisissent en général de travailler avec un hébergeur axé sur un même intérêt institutionnel, national, régional ou thématique.

Si votre pays est membre du GBIF, la première option à considérer est de voir si le point nodal national du GBIF offre une solution d’hébergement de données. Le fait d’avoir vos données hébergées par votre point nodal national facilite la collection de données d’intérêt national et devrait vous permettre d’entrer en contact avec un réseau de fournisseurs locaux et d’avoir accès au soutien technique de votre point nodal.

Au cas où l’hébergement de données ne serait pas disponible chez un point nodal national, le GBIF maintient une liste de <a name="centre"></a>[**centres d’hébergement de données de confiance**](https://github.com/gbif/ipt/wiki/dataHostingCentres#data-hosting-centres) qui satisfont à des critères de sélection stricts, notamment le maintien et l’administration de l’IPT en ligne de façon consistante, des antécédents fructueux d’hébergement de données et un service de soutien technique prompt et compétent. Le GBIF recommande fortement d’utiliser un centre d’hébergement de confiance, capable d’établir un compte pour vous sur leur IPT ainsi que de vous permettre de gérer et de publier vos propres jeux de données par l’entremise de GBIF.org.

Une dernière option serait que le GBIF lui-même héberge vos données à l’aide d’une **plateforme d’édition dans le nuage**. Le Secrétariat du GBIF maintient un [IPT de BID dans le nuage](http://cloud.gbif.org/bid/about.do) qui fournit un service d’hébergement de données aux fournisseurs en partageant du matériel, des logiciels et de l’espace de stockage. Les usagers de ce service reçoivent une solution d’hébergement robuste et gratuite qui peut facilement être transférée à une installation personnelle dans le futur. Cependant, les points nodaux nationaux et les centres d’hébergement de données seront probablement plus en mesure de fournir un service pratique ainsi qu’une assistance avec la publication de données et les aspects de contrôle de qualité. De ce fait, les projets BID ne devraient normalement utiliser l’IPT de BID hébergé dans le nuage qu’en dernier recours.

-----------

## Introduction à L’Outil de Publication Intégré (IPT)<a name="ipt"></a>

L’IPT est un logiciel gratuit en accès libre, développé et supporté par le Secrétariat du GBIF, que les organisations du monde entier utilisent pour publier et partager des jeux de données sur la biodiversité par l’entremise du réseau du GBIF. L’IPT peut également fonctionner comme un dépôt pour des données référencées dans un article, tel que dans cet exemple de l’installation d’un [IPT hébergé par le réseau Canadensys](http://data.canadensys.net/ipt).  

[Exigences techniques d’hébergement d’un IPT](https://github.com/gbif/ipt/wiki/IPT2ManualNotes.wiki#requirements)

### Mode d’essai

L’IPT peut être installé en mode d’essai, ce qui signifie que ses ressources ne seront pas répertoriées ou accessibles au public en effectuant des recherches sur GBIF.org. Si vous décidez d’installer votre propre IPT, le GBIF recommande de commencer en mode d’essai afin de comprendre le procédé d’enregistrement. Le mode d’essai sert à l’utilisation de l’IPT durant son évaluation ou pour des séances de formation; les enregistrements effectués en mode d’essai iront dans un registre d’essai et ces ressources ne seront jamais répertoriées.

Une fois que vous êtes confiants que l’IPT fonctionne comme vous vous attendez, réinstallez le logiciel en mode de production afin de rendre les données détectables en effectuant des recherches sur GBIF.org. Le mode de production enregistre les jeux de données et les publie afin de les répertorier et de les rendre accessibles sur le site GBIF.org.

L’instance de l’IPT et l’organisation associée doivent toutes deux être enregistrées auprès du GBIF. Si votre organisation n’est toujours pas enregistrée, on vous demandera de compléter cette étape et de fournir des renseignements de base dans un court formulaire de l’IPT. Pour davantage d’informations, veuillez consulter le [manuel de l’utilisateur de l’IPT](https://github.com/gbif/ipt/wiki/IPT2ManualNotes.wiki#configure-gbif-registration-options).

-----------

## Conditions d’utilisation
L’utilisation d’un service d’hébergement de données par un fournisseur de données devrait être négociée entre les parties concernées, idéalement à l’aide d’un accord sur les niveaux de service qui décrit les modalités et les obligations pour les deux parties. L’utilisation de l’IPT de BID hébergé dans le nuage sera gouverné par [l'accord de l’éditeur de données du GBIF](http://www.gbif.org/terms/data-publisher) (en anglais). 

-----------

```styledYaml
templates:
- path: eufund.html
```
