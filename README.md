# Projet de fin d'année NSI : Skate in peace
Nous avons choisi de faire un site avec Louis regroupant nos deux hobby : les videos et clip de sakte et bien sur la bonne musique

### Le lien pour aller sur le site : https://xtsen.github.io/Skate-in-peace/
### Nous respectons le choix du navigateur de l'utilisateur c'est pourquoi notre site est disponible sur Tor : http://uctw27z3lh4wnmi3q4xsswjo5v7ch3wkbki7usuad27rchz7rdmzhdqd.onion
A cause de la politique de protection des données de Tor certaine fonctionnalitées sont indisponible

## Installation

Pour telecharger notre projet vous devez simplement cliquer sur le bouton vert 'code' 
et cliquez sur 'Telecharger en format ZIP'

Apres ca un dossier zip vas se telecharger et vous n'aurez plus qu'a cliquer sur le ficher 'index.html' 

## Pourquoi ?

Avec Louis nous avons longuement cherché quel sujet choisir pour remplir le contenu de notre site. Puis nous avon mis en commun nos loisirs/hobbys et nous nous sommes tous les deux rendu compte que nous avions une passion pour la musique mais nous aimions aussi tous les deux les vidéos de skate bien tourné.

### Quel interet pour l'utilisateur ?
Nous avions remarquer auparavant que aucun site de skate n'était bien bien organisé et vraiment agréable a regarder. 
En plus de cela, très souvent, le site est un peut trop surchargé d'article en tout genre et donc fatiguant pour les yeux.

C'est pourquoi nous avons voulous rassembler ces éléments sur un site avec une bonne ergonomie utilisant des technologies modernes et dynamique afin de proposer du contenu sans que cela ne soit ennuyant pour l'utilisateur.

## Connaissance

Durant la création de ce projet, nous avons du apprendre et prendre en mains de nouvelles technologies tel que le Vue.js ou encore React.js qui sont des frameworks en pleine expension dans le monde du developpement mais pour les utiliser il faut importer des librairies et il faut donc que le rapport poid/utilité soit bon.

### Aniamtion javascript
Voici un script réaliser en javascript afin de montrer un élément au scroll de l'utilisateur et donc créer un effet dynamique.
```javascript
window.onscroll = function() {SideSlideImage()};

function SideSlideImage(id) {
    if (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 2400) {
        document.getElementById("sideSlide").className = "sideSkateDescription";
    }else if (document.body.scrollTop < 700 || document.documentElement.scrollTop < 700) {
        document.getElementById("sideSlide").className = "hiddenSideSlide";
    }else if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
        document.getElementById("sideSlide").className = "hiddenSideSlide";
    }
}
```
### Animations css

Nous avons aussi decouvert des effet en CSS qui nous ont été très utile comme celui ci dessous qui permet de garder la video ouverte meme au scroll et au dessus de tous les autres éléments

```css
.clip {
    display: none;
    position: fixed;
    z-index: 10000000;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}
```
Nous avons également compris l'importance de commenter sonn code afin que l'autre puisse comprendre quel élément correspond à quel animation ou script js.

Une animation que nous n'avons rajouter qu'après c'est la ligne qui apparait en dessous de la rubrique dans la barre de navigation
```css
a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;

    position: relative;
}
a:after {    
    background: none repeat scroll 0 0 transparent;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}
```

### Les frameworks

Nous avons aussi pris en mains certains frameworks utiles mais nous n'avons gardé seulement le framework qui nous était le plus utile (par un soucis de poid) (ajax).
Le framework ajax nous a permis de créer une animation "smooth scroll" vers le haut lorsqu'on appui sur le logo.
voici la fonction pour cette animation.
```javascript
$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 600; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
});
```

## Contribution
Tout au long de ce projet nous avons su nous repartir les taches. Louis s'occuper du contenu des pages et de l'agencement ainsi qu'une petite partie du code et Nesta c'est occupé de faire la grosse partie du code.

Ce projet représente plus de 30h de travail a nous deux

## Languages utilisés pour ce site

### HTML 5
### CSS 3
### Javascript

## Fonctionnalitées

### Si vous placez votre souris au dessus d'un des trois mots en haut de la page une ligne apparait en dessous du mot en commencant par le milieu
### Si vous cliquez sur la rubrique "Gallerie" cela vous emmène vers la page gallery.html
### Cliquer sur "A propos" vous emmène vers la page about.html
### Si vous avez cliqué sur le lien "A propos" une la page apparaitra petit a petit pendant 3 secondes
### Toutes les 4 secondes l'image du header change
### Si vous scrollez jusqu'a 720pixels, un paragraphe parlant de notre rubrique skate va arriver du bas et apparaitre petit à petit
### Cliquer sur un des icones "playlist" en bas de la page vous redirige avec un lien deezer vers la playlist qui correspond
### Si vous cliquez sur le lien vers le github en bas de la page vous serez redirigé vers cette page
### Si vous cliquez sur le logo en bas à droite vous serez emmené en haut de la page
### Si vous cliquez sur les yeux barrés les "caches" s'enleveront et révéleront des mots en dessous
### Si vous positionnez votre souris sur un des deux prénoms un fond bleu apparaitra sur le prénom
### Si vous cliquez sur le logo github vous serez redirigé vers mon github 
### Si vous cliquez sur le logo de deezer vous serez redirigé vers mon profil deezer
### Si vous cliquez sur l'icone planète www vous serez redirigé vers mon linktree avec tous les sites que j'ai déjà réalisé
### Si vous cliquez sur "voir la vidéo" une video chargera a partir d'un url youtube
### Si vous remplissez les champs de filtre en haut de la page et que vous cliquez sur le bouton "rechercher", la recherche se filtrera 
### Si vous double cliquez sur le bouton "rechercher", la recherche se reinitialize
