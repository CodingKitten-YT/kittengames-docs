# Customizing The Site

In this guide, we'll walk through the process of customizing a game website. The most basic customizations include changing the favicon and page title. The things you need to change to make it yours are highlighted.

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KittenGames</title> // [!code highlight]
  <link rel="icon" href="icon.svg" type="image/svg+xml"> // [!code highlight]
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Arial', sans-serif;
    }

    header h1 {
      font-family: 'Bakbak One', sans-serif;
    }
  </style>
</head>
<body>
  <header>
    <div class="header-left">
      <h1>KittenGames</h1> // [!code highlight]
    </div>
    <div class="header-right">
      <button id="links-btn">Links</button>
      <button id="youtube-btn" onclick="goToWatchPage()">Youtube</button>
    </div>
  </header>

  <div id="links-modal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <h2>Links</h2>
      <ul id="links-container">
        <li><a href="https://games.kittendev.xyz/">Main link</a></li>
        <li><a href="https://linktr.ee/kittengames">View All Links</a></li>
        <li><p>☝ View all links.☝</p></li>
      </ul>
    </div>
  </div>

  <div id="search-container">
    <input type="text" id="search-input" placeholder="Search games...">
  </div>

  <div id="games-container" class="container">
  </div>

  <script src="load.js"></script>
  <script>
    var modal = document.getElementById('links-modal');

    var linksBtn = document.getElementById("links-btn");

    var span = document.getElementsByClassName("close")[0];

    linksBtn.onclick = function() {
      modal.style.display = "block";
    }

    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    document.getElementById("search-input").addEventListener("input", function() {
      var searchValue = this.value.toLowerCase();
      var games = document.getElementsByClassName("game-card");
      for (var i = 0; i < games.length; i++) {
        var gameName = games[i].getElementsByTagName("h2")[0].textContent.toLowerCase();
        if (gameName.indexOf(searchValue) > -1) {
          games[i].style.display = "";
        } else {
          games[i].style.display = "none";
        }
      }
    });

    function goToWatchPage() {
      window.location.href = 'https://meowtube.kittendev.xyz/';
    }
  </script>
</body>
</html>
```

## play.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Play Game</title> // [!code highlight]
  <link rel="icon" type="image/svg+xml" href="icon.svg"> // [!code highlight]
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Bakbak One', sans-serif;
    }
  </style>
</head>
<body>
  <header>
    <div class="header-left">
      <h1>KittenGames</h1> // [!code highlight]
    </div>
    <div class="header-right">
      <button onclick="openInBlank()">Open in About:Blank</button>
      <button id="home-btn" onclick="goToHome()">Home</button>
    </div>
  </header>
  <iframe id="game-iframe" src="" frameborder="0"></iframe>

  <script>
    function goToHome() {
      window.location.href = 'index.html';
    }

    function openInBlank() {
      var url = document.getElementById('game-iframe').src;
      var win = window.open('about:blank');
      win.document.body.style.margin = '0';
      win.document.body.style.height = '100vh';
      var iframe = win.document.createElement('iframe');
      iframe.style.border = 'none';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.margin = '0';
      iframe.src = url;
      win.document.body.appendChild(iframe);
    }

    function getUrlParameter(name) {
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(window.location.href);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var gameUrl = getUrlParameter('game');
    var decodedUrl = atob(gameUrl);

    document.getElementById('game-iframe').src = decodedUrl;
  </script>
</body>
</html>
```
