function redirect(numberWebsite) {
    websites = ['Skate-in-peace/home.html', 
                'Skate%20Escape/skateEscape.html', 
                'Just%20Listen/justListen.html', 
                'Skate-in-peace/cache/2021.html',
                'SkatableWeather/skatableWeather.html',
                'beSkateful/beSkateful.html',
            ]
    window.location.replace(websites[numberWebsite]);
}

// Liste de card ne correspondant pas au critère
var games = ['website1', 'website3', 'website4', 'website5']
var music = ['website1', 'website2', 'website4', 'website5', 'website6']
var skate = [ 'website3', 'website4']

// Liste de critères 
var critères = ['game', 'music', 'skate']

function setView(nameInput) {
    var checkbox = document.getElementById(nameInput).checked

    if (checkbox) {
        removeCards(nameInput);
    }
    else if (checkbox != true){
        viewAll();
    }
}

function removeCards(nameInput) {
    if (nameInput == 'game') {
        games.forEach(card => document.getElementById(card).style.display="none")
    }
    else if (nameInput == 'music') {
        music.forEach(card => document.getElementById(card).style.display="none")
    }
    else if (nameInput == 'skate') {
        skate.forEach(card => document.getElementById(card).style.display="none")
    }
    
}
function viewAll() {
    // Ajouter à chaque fois les nouvelles listes
    games.forEach(card => document.getElementById(card).style.display="block")
    music.forEach(card => document.getElementById(card).style.display="block")
    skate.forEach(card => document.getElementById(card).style.display="block")

    // Decocher tous les critères
    critères.forEach(critère => document.getElementById(critère).checked = false)
}

// Change background on hover

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', curs => {
    cursor.style.top = `${curs.pageY - 30}px`
    cursor.style.left = `${curs.pageX - 30}px`
})

const allLinks = document.querySelectorAll('li');

allLinks.forEach(link => {

    const site = link.getAttribute('data-site');

    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
        cursor.style.backgroundImage = `url(res/${site}.png)`;
    })

    link.addEventListener('mouseout', () => {
        cursor.classList.remove('hovered');
        cursor.style.backgroundImage = `none`;
    })

})