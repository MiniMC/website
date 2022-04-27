<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>MiniMC</title>
        <meta name="theme-color" content="#1d5763">
        <meta name="description" content="Play your favorite old minigames." />
        <meta name="keywords" content="MiniMC, minecraft, minigames, minigame, walls, thewalls" />
        <meta property="og:title" content="MiniMC">
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://minimc.nl/">
        <meta property="og:image" content="https://cdn.minimc.nl/logo.png">
        <meta property="og:image:type" content="image/png">
        <meta property="og:image:width" content="300">
        <meta property="og:image:height" content="300">
        <meta property="og:image:alt" content="MiniMC Logo">
        <meta property="og:description" content="Play your favorite old minigames.">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app" class="scrollbar-hide"></div>
    </body>
    <script type="text/javascript" src="{{mix('js/app.js')}}"></script>
</html>

