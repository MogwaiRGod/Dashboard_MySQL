/**
 * INITIALISATION
 */
const express = require('express');
// pour gérer les requêtes HTTP
const bodyParser = require('body-parser');
const ejs = require('ejs');
const routes = require('./routes/router.js');
const cors = require('cors');


/**
 * INSTANCIATION
 */
const app = express();
/* paramétrage de l'app */
// url.encoded fait en sorte que la réponse de la requête HTTP (= l'envoi
// du formulaire) soit sous forme d'une chaîne de caractères dans le corps de la requête
app.use(bodyParser.urlencoded({ extended : true }));
// on demande à ce que la réponse de la requête soit un objet JSON
app.use(bodyParser.json());
/* paramétrage du moteur de vues */
app.set("view engine", "ejs");
// et du répertoire de vues
app.set("views", "./view");
/* import du router */
app.use(routes);


/**
 * EXPORTATION
 */

module.exports = app;