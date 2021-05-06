function chronoNesta() {
    const now = new Date().getTime();
    const countDown = new Date('April 6, 2022').getTime();
    
    const text = document.getElementById('counterNesta');

    const stopCounter = countDown - now;

    const days = Math.floor(stopCounter / (1000 * 60 * 60 * 24))
    const hours = Math.floor((stopCounter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((stopCounter % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((stopCounter % (1000 * 60)) / 1000)

    text.innerText = `${days}j, ${hours}h, ${minutes}m, ${seconds}s`;
}

function chronoLouis() {
    const now = new Date().getTime();
    const countDown = new Date('January 4, 2022').getTime();
    
    const text = document.getElementById('counterLouis');

    const stopCounter = countDown - now;

    const days = Math.floor(stopCounter / (1000 * 60 * 60 * 24))
    const hours = Math.floor((stopCounter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((stopCounter % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((stopCounter % (1000 * 60)) / 1000)

    text.innerText = `${days}j, ${hours}h, ${minutes}m, ${seconds}s`;
}

const RefreshInterval = setInterval(() => {
    chronoNesta();
    chronoLouis();
}, 1000)