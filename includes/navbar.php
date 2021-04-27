<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;1,300&display=swap" rel="stylesheet">
<style type="text/css">
body {
    background-color: #222222;
}
nav {
    margin-top: 2%;
    height: 10%;
}
ul {
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    padding: 0; 
    list-style: none; 
    display: table;
    text-align: center;
}
li.elementNav {
    list-style-type: none;
    font-family: Roboto;
    font-style: italic;
    font-size: 2em;
}
li { 
    display: table-cell; 
    position: relative; 
    padding: 15px 0;
}
a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    
    display: inline-block;
    padding: 15px 20px;
    position: relative;
}
a:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}
a:hover:after { 
    width: 100%; 
    left: 0; 
}
</style>
<nav>
    <ul>
        <li class="elementNav"><a href="index#SkateMarker" class="linkNavbar">Skate</a></li>
        <li class="elementNav"><a href="index.html#MusicMarker" class="linkNavbar">Playlist</a></li>
        <li class="elementNav"><a href="about.html" class="linkNavbar">A propos</a></li>
    </ul>
    
</nav>