# Projet de fin d'année NSI
Nous avons choisi de faire un site avec Louis regroupant nos deux hobby : les videos et clip de sakte et bien sur la bonne musique

### Le lien pour aller sur le site : https://xtsen.github.io/NSI-project/

## Installation

Pour telecharger notre projet vous devez simplement cliquer sur le bouton vert 'code' 

Apres ca un dossier zip vas se telecharger et vous n'aurez plus qu'a cliquer sur le ficher 'index.html' 

## Pourquoi ?

Avec Louis nous avons longuement cherché quel sujet choisir pour remplir le contenu de notre site. Puis nous avon mis en commun nos loisirs/hobbys et nous nous sommes tous les deux rendu compte que nous avions une passion pour la musique mais nous aimions aussi tous les deux les vidéos de skate bien tourné.

### Quel interet pour l'utilisateur ?
Nous avions remarquer auparavant que aucun site de skate n'était bien bien organisé et vraiment agréable a regarder. 
En plus de cela, très souvent, le site est un peut trop surchargé d'article en tout genre et donc fatiguant pour les yeux.

C'est pourquoi nous avons voulous rassembler ces éléments sur un site avec une bonne ergonomie utilisant des technologies modernes et dynamique afin de proposer du contenu sans que cela ne soit ennuyant pour l'utilisateur.

## Connaissance

Durant la création de ce projet, nous avons du apprendre et prendre en mains de nouvelles technologies tel que le Vue.js ou encore React.js qui sont des frameworks en pleine expension dans le monde du developpement.

Voici un script réaliser en Vue js afin de s'adapter au scroll de l'utilisateur.
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

Mais nous avons aussi decouvert des effet en CSS qui nous ont été très utile comme celui ci dessous qui permet de garder la video ouverte meme au scroll et au dessus de tous les autres éléments

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
Nous avons aussi compris l'importance de commenter sonn code afin que l'autre puisse comprendre quel élément correspond à quel animation ou script js.

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

## Contribution
Tout au long de ce projet nous avons su nous repartir les taches. Louis s'occuper du contenu des pages et de l'agencement ainsi qu'une petite partie du code et Nesta c'est occupé de faire la grosse partie du code.

Ce projet représente plus de 30h de travail a nous deux

## Languages utilisés pour ce site

### HTML 5
### CSS 3
### Javascript
### php

