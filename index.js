const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const prefix = "!"; //préfixe choisi : !

client.on("message", function (message) {
  // Initialisation après réception d'un message
  var erreur = true;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const erreurs = [
    "Mauvaise commande! tapez !help pour afficher l'aide.",
    "Identifiant de template invalide",
  ];
  const commandBody = message.content.slice(prefix.length); //on enlève le préfixe de la commande pour utilisation dans le code
  const args = commandBody;
  const command = args;

  //Si la commande reçue est !help , afficher un embed avec des instructions
  if (command === "help") {
    message.channel.send(
      makeEmbedMemes("Help", [
        {
          name: prefix + "getMemes",
          value: "returns a list of all available meme templates and their id",
        },

        {
          name: prefix + "makeMeme &id &text1,&text2,...",
          value: "makes a meme using the template id",
        },
      ])
    );
    //pas d'erreur, donc erreur = false
    erreur = false;
  }

  //Fonction pour obtenir tous les memes
  if (command === "getMemes") {
    var Client = require("node-rest-client").Client; //Génération d'un client note-rest-client
    var cli = new Client();

    //on get les memes
    cli.get("https://api.imgflip.com/get_memes", function (data, response) {
      var memes;
      var memesEmbed = [];

      for (var index in data) {
        memes = data[index].memes;
      }

      for (var key in memes) {
        var meme = memes[key];

        /*Je push les memes dans un objet JSON , le format utilisable par un Embed discord : 

        "name": un nom,
        "value": une valeur

        */
        memesEmbed.push({
          name: meme.name,
          value: meme.url + "\n" + meme.id,
        });
      }

      //Envoi d'un embed
      message.channel.send(makeEmbedMemes("List of memes", memesEmbed));
    });

    //Pas d'erreur
    erreur = false;
  }

  // commande de création de même
  if (command.startsWith("makeMeme")) {
    console.log("COMMANDE : " + command);

    var arguments = command.slice(10); //On enlève makeMeme
    var arr = arguments.split("&"); // Puisque les arguments doivent être donnés entre des & , on peut les séparer avec ça et les mettre dans un tableau

    var texts = arr.slice(1); //Pour séparer l'ID de template des arguments des textes, il faut enlever l'ID de arr

    /*
    l'API imgflip fonctionne avec des boxes[] pour afficher le texte dans les memes à plus de 2 textes.
    Je dois donc générer un objet boxes qui va contenir un objet JSON : 

    {
        text: l'argument

    }

    */
    var boxes = [];
    for (index in texts) {
      if (texts[index] !== undefined) {
        boxes.push({
          text: texts[index],
        });
      }
    }
    //Test si le premier argument , l'id de template, est un entier
    if (parseInt(arr[0]) == arr[0]) {
      //Pas d'erreur
      erreur = false;

      var Client = require("node-rest-client").Client;
      var cli = new Client();

      //L'API imgflip n'utilise pas d'objet JSON , mais des paramètres HTTP, donc je dois générer un body HTTP avec les paramètres
      var infos = {
        parameters: {
          template_id: arr[0],
          username: "BotDiscordMemes",
          password: "Motdepasse",
          text0: arr[1],
          text1: arr[2],
          font: "impact",
          boxes: boxes,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", //gestion de l'encodage
        },
      };

      //post des données
      cli.post(
        "https://api.imgflip.com/caption_image",
        infos,
        function (data, response) {
          /*
                Avec imgFlip, le le callback de mon post me renvoie l'image générée
            */
          if (data.hasOwnProperty("data")) {
            console.log(data);

            message.channel.send(data.data.url);
          }
        }
      );
    } else {
      erreur = false; //pas d'erreur générale
      message.channel.send(erreurs[1]); //génération de l'erreur 1
    }
  }

  if (erreur) {
    message.channel.send(erreurs[0]);
  }
});

//Création de l'embed
function makeEmbedMemes(title, memesEmbed) {
  return new Discord.MessageEmbed()
    .setColor("#01dfd7")
    .setTitle(title)
    .addFields(memesEmbed);
}
client.login(config.BOT_TOKEN);
