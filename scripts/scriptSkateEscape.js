setTimeout(function(){
  var person = document.getElementById("person");
  var gamebox = document.getElementById("game-box")

  var score = 0
  var m = 0
  var t = 0
  var kills = 0
  var items = ['🛹']
  var sitems = items.sort()

  // Taille de l'ecran
  var wid = window.innerWidth
  var hei = window.innerHeight
  gamebox.style.width = wid + 'px'
  gamebox.style.height = hei + 'px'

  var pane = $('#game-box'),
      box = $('#person'),
      w = pane.width() - box.width(),
      h = pane.height() - box.height(),
      d = {},
      x = 15;

    // Copier d'un site
  function newv(v,a,b) {
      var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
      return n < 0 ? 0 : n > w ? w : n;
  }
  function newh(v,a,b) {
      var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
      return n < 0 ? 0 : n > h ? h : n;
  }

  function path(){
    var position = person.getBoundingClientRect()
    var createPerson = document.createElement('div')
    createPerson.className = "blob"
    createPerson.style.left = position.left-2.5+'px'
    createPerson.style.top = position.top+15+'px'
    gamebox.appendChild(b)
  }

  $(window).keydown(function(e) { d[e.which] = true; });
  $(window).keyup(function(e) { d[e.which] = false; });

  function mmm() {  
    box.css({
          left: function(i,v) { return newv(v, 37, 39); },
          top: function(i,v) { return newh(v, 38, 40); }
      });
    if(d[37] == true || d[38] == true || d[39] == true || d[40] == true) {
    path() 
    }  
  }

  var ani = ['horz','vert','cir']
  function addPerson() {
    var p = document.createElement('div')
    p.className = 'person '+ani[Math.floor(Math.random()*ani.length)]
    p.style.left = Math.random()*window.innerWidth+'px'
    p.style.top = Math.random()*(window.innerHeight - 200)+100+'px'
    gamebox.appendChild(p)
  }

  function addPeople() {
    addPerson()
    if(document.querySelectorAll('.person').length > 19) {
      clearInterval(newGame)
      reShuffle()
    }
  }

  function bang(){
    function donate2() {
    var url ='https://donate.pih.org/page/contribute/donate'
    window.open(url,'_blank');
    // window.location.href = url;
  }
    
    var s_rect = person.getBoundingClientRect()
    var rocks = document.querySelectorAll('.person')
    var end = document.querySelector('#end').getBoundingClientRect()
    var win = !(s_rect.right + 30 < end.left || 
                  s_rect.left - 30 > end.right || 
                  s_rect.bottom + 60 < end.top || 
                  s_rect.top > end.bottom)
        if(win) {
          reShuffle()
        }
    
    rocks.forEach(function(elm) {
          var b = elm.getBoundingClientRect()         
          var ouch = !(s_rect.right + 30 < b.left || 
                  s_rect.left - 30 > b.right || 
                  s_rect.bottom + 30 < b.top || 
                  s_rect.top - 30 > b.bottom)
          if(ouch) {
            elm.className = 'person'
            elm.classList.add('angel')
            elm.style.left = b.left+'px'
            elm.style.top = b.top+'px'
            setTimeout(function(){
              elm.remove()
              document.querySelector('#NBPeople').innerHTML = document.querySelectorAll('.person').length
              kills++
              console.log('personnes tués: '+kills)
            },1500)         
            death()
          }   
    })
  }

  var highscore = 0
  function reShuffle() {
    var b = document.querySelectorAll('.blob')
    b.forEach(function(elm){
      elm.remove()
    })
    score++
    addPerson()
    addPerson()
    addPerson()
    addPerson()
    addPerson()
    document.querySelector('#NBPeople').innerHTML = document.querySelectorAll('.person').length
    
    var root = document.documentElement
    root.style.setProperty('--item',"'"+ sitems[Math.floor(Math.random()*sitems.length)]+"'")
    if(highscore < document.querySelectorAll('.person').length) {
    root.style.setProperty('--high', "'RECORD : "+document.querySelectorAll('.person').length+"'")
      highscore = document.querySelectorAll('.person').length
    }  
  
    var p = document.querySelectorAll('.person')
    
    p.forEach(function(elm){
      elm.style.left = Math.random()*window.innerWidth+'px'
      elm.style.top = Math.random()*(window.innerHeight - 200)+100+'px'
      person.style.left = '50px'
      person.style.top = '50px'
    })
  }

  function death() {  
    person.classList.add('dead')  
    person.style.left = '50px'
    person.style.top = '50px'
    setTimeout(function(){    
      person.classList.remove('dead')  
    },100)
  }

  var newGame = setInterval(addPeople)

  function idleLogout() {
      var t;
      window.onload = resetTimer;
      window.onmousemove = resetTimer;
      window.onmousedown = resetTimer;        
      window.ontouchstart = resetTimer;  
      window.onclick = resetTimer;      
      window.onkeydown = resetTimer;   

      function Inactivity() {
        var s_rect = document.querySelector('#person').getBoundingClientRect()
        var end = document.querySelector('#start').getBoundingClientRect()
    
        var win = !(s_rect.right + 30 < end.left || 
                  s_rect.left - 30 > end.right || 
                  s_rect.bottom + 60 < end.top || 
                  s_rect.top > end.bottom)
        if(win) {
          
          document.querySelector('#winner').innerHTML = '<h1>Félicitation !</h1><i><b>Gagné </b></i>Durant cette periode difficile, il est important de pouvoir aller skater même virtuellement<br><br>Merci. 🙂<h3 onclick="hideWinner()">Continuer de jouer</h3>'
          document.querySelector('#winner').style.opacity = '1'
          function hideWinner() {
            document.querySelector('#winner').style.opacity = '0'
            if(!move){
              var move = setInterval(function() {
                bang()
                mmm()
              }, 1000/30);  
            }  
          }
        } else {
          resetTimer()
        }       
      }
      function resetTimer() {
          clearTimeout(t);
          t = setTimeout(Inactivity, 1.5*60*1000);
      }
  }
  idleLogout();

  document.querySelector('#winner h3').addEventListener('click', function(){  
    document.querySelector('#winner').style.opacity = '0'
    
      var move = setInterval(function() {
        bang()
        mmm()
      }, 1000/30);  
  })
},1000)
