const textAnim = document.getElementById("typewriter")

new Typewriter(textAnim, {
  autoStart: true,
  loop: true
})
.changeDelay(65)
.changeDeleteSpeed(10)
.typeString('Retrouvez tous nos sites pour notre projet de <span style="color: #DE4336">NSI</span>')
.pauseFor(1500)
.deleteAll()
.pauseFor(300)
.typeString('Plus de <span style="color: #0088C9">100h</span> de travail')
.pauseFor(1500)
.deleteAll()
.pauseFor(300)
.typeString('Pour nos amis <span style="color: #DEC536">skater</span>')
.pauseFor(1500)
.deleteChars(6)
.typeString('<span style="color: #DEC536">gamer</span>')
.pauseFor(1500)
.deleteAll()
.pauseFor(300)
.typeString('Pour les passionés de <span style="color: #9736DE">musique</span>')
.pauseFor(1500)
.deleteAll()
.start()
