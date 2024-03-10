<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QuietSoul</title>
  <link rel="stylesheet" type="text/css" href="/css/jass.css">
  <link rel="stylesheet" type="text/css" href="/css/style.css">
</head>

<body>
    <header>
        <h1></h1>
    </header>
    <nav>
        <a href="/">Home</a>
        {{#if loggedIn}}
        <button id="logout" class="btn-no-syle">Logout</button>
        {{else}}
        <a href="/logout">Login</a>
        {{if}}
    </nav>
    <main>
    <aside>
      <h2>Enjoy the galleries!</h2>
    </aside>
    {{!-- <div class="gallery"> --}}
      {{{body}}}
    </div>
  </main>
  {{#if loggedIn}}
  <script src="/js/logout.js"></script>
  {{/if}}
</body>

</html>