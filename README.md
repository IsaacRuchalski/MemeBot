# MemeBot, a memeful Discord Bot

- Hélary Théo
- Le Louarn Guillaume (Rapport LaTex : https://www.overleaf.com/read/fwmnphhrspft)
- Ruchalski Isaac (Rapport LaTex : https://www.overleaf.com/read/sjwwftsbnxyf)

Migré depuis Gitlab, projet originel : https://gitlab.com/HelaryT/api-discord (D'où l'absence d'activité sur le repo GitHub)

MemeBot est un bot Discord (Discord.js) utilisant [ImgFlip API](https://imgflip.com/api) et node.js pour générer des memes depuis Discord.

## Comment le démarrer

**Notre bot est hébergé sur Heroku, une solution cloud. Ce qui veut dire que celui-ci est toujours fonctionnel. Il n'y a donc pas besoin d'installer le repository git. Vous pouvez donc passer directement à la section "Avant de l'utiliser"**, à part si vous voulez vraiment devoir héberger notre bot depuis votre machine au lieu du cloud, ou si le cloud est indisponible, auquel cas vous pouvez procéder aux instructions ci-dessous :

Tout d'abord, cloner le projet GitHub.

    git clone https://github.com/IsaacRuchalski/MemeBot.git

Ensuite, se placer dans le répertoire du repository :

    cd api-discord

puis installer npm :

    npm install

Ce qui va installer les nodes_modules.

Une fois fait, le bot est runnable avec cette commande :

    node index.js

Cependant, puisque discord ne sait pas encore que vous utilisez le bot, le run n'a pas d'intérêt pour l'instant !

## Avant de l'utiliser

Avant de pouvoir l'utiliser, il faut avant tout l'ajouter sur un serveur discord (Où vous êtes autorisé à inviter un Bot !).
Lors de la création du bot sur le portail des développeurs Discord, nous avons mis la visibilité du bot en publique. Ce qui veut dire que tout le monde peut ajouter notre bot ! l'adresse est la suivante :

https://discord.com/api/oauth2/authorize?client_id=833709177540313129&permissions=0&scope=bot

Ajoutez notre bot sur le serveur discord de votre choix.

Si vous le souhaitez, un serveur discord est à votre disposition pour tester le bot : https://discord.gg/RBVSv2YxKb Rejoignez-le et vous pouvez ensuite ajouter le bot avec l'adresse au-dessus !

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
