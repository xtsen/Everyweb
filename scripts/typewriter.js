const textAnim = document.getElementById("typewriter")

new Typewriter(textAnim, {
  autoStart: true,
  loop: true
})
.changeDelay(65)
.changeDeleteSpeed(10)
.typeString('Retrouvez tous nos sites pour notre projet de NSI')
.pauseFor(1000)
.deleteAll()
.pauseFor(300)
.typeString('Plus de <strong>100h</strong> de travail')
.pauseFor(1000)
.deleteAll()
.start()
