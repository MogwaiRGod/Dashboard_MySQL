/**
 * INITIALISATION
 */
const express = require('express');


/**
 * INSTANCIATION
 */
const router = express.Router();


/**
 * ROUTER
 */
// accueil
router.get('/', (req, res) => {
    res.render('welcome', {
        'title': "Bienvenue",
        'subtitle1': "Se connecter",
        'subtitle2': "S'inscrire"
    });
}); // fin GET /

// page de connexion
router.get('/login', (req, res) => {
    res.render('login', {
        'title': "Login",
        'subtitle1': "Se connecter",
        'subtitle2': "Accueil"
    });
}); // fin GET /login

// page d'inscription
router.get('/sign_in', (req, res) => {
    res.render('sign_in', {
        'title': "Inscription"
    });
}); // fin GET /sign_in


/**
 * EXPORTATION
 */
module.exports = router;