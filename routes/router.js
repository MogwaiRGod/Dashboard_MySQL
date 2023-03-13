/**
 * INITIALISATION
 */
const express = require('express');
const controller = require('../controller/controller.js');


/**
 * INSTANCIATION
 */
const router = express.Router();


/**
 * ROUTER
 */
// route vers accueil
router.get('/', controller.getWelcome);

// route vers page de connexion
router.get('/login', controller.getLogin);

// route vers page d'inscription
router.get('/sign_in', controller.getSignIn);

// route vers page d'accueil de l'utilisateur quand il envoie le formulaire de connexion
router.post('/welcome', controller.postWelcome); // fin GET /welcome


/**
 * EXPORTATION
 */
module.exports = router;