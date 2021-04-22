# Bot Discord

Hélary Théo, Le Louarn Guillaume, Ruchalski Isaac

## Comment le démarrer

Tout d'abord, cloner le projet GitLab.

    git clone https://gitlab.com/HelaryT/api-discord.git

Ensuite, se placer dans le répertoire du repository :

    cd api-discord

puis installer npm :

    npm install

Ce qui va installer les nodes_modules.

Une fois fait, le bot est runnable avec cette commande :

    node index.js

Cependant, puisque discord ne sait pas encore que vous utilisez le bot, le run n'a pas d'intérêt pour l'instant !

## Avant de l'utiliser

Avant de pouvoir l'utiliser, il faut avant tout l'ajouter sur un serveur discord.
Lors de la création du bot sur le portail des développeurs Discord, nous avons mis la visibilité du bot en publique. Ce qui veut dire que tout le monde peut ajouter notre bot ! l'adresse est la suivante :

https://discord.com/api/oauth2/authorize?client_id=833709177540313129&permissions=0&scope=bot

Ajoutez notre bot sur le serveur discord de votre choix.

## Comment l'utiliser

Une fois le bot sur le serveur, vous le verrez apparaître dans votre serveur en tant que BOT, sous le nom "MemeBot".
Une fois que cela est fait, vous pouvez accéder aux commandes du bot.

### !getMemes

la commande !getMemes va retourner les memes les plus populaires sur imgflip.com, leur nom, leur url (pour pouvoir les voir), et leur id de template. Ce qui veut dire que cette liste de memes peut être amenée à changer en fonction de la popularité de certains memes !

    !getMemes

### !makeMeme

Cette commande permet de fabriquer des memes. Elle accepte un nombre infini d'arguments, mais elle se présente comme ceci :

    !makeMeme &templateId &text1 &text2 ... &textn

Le templateId d'un meme est obtenable en appelant !getMemes. Il s'agit d'un nombre entier, si le templateId contient des caractères, le bot vous le dira !

Par exemple :

    !makeMeme &181913649 &regarder des memes &faire des memes avec MemeBot

va créer cette image :

![alt text](drake.jpg "Drake meme")

Certains memes utilisent 3,4, voire 5 zones de textes, par exemple :

    !makeMeme &93895088 &regarder des memes &faire des memes &développer un bot discord qui va faire des memes &être un meme

L'ordre des zones de texte se fait de haut en bas et de gauche à droite

### !help

Cette commande permet d'afficher le panel d'aide

    !help
