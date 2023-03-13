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
        'button': "Se connecter",
        'subtitle2': "Accueil",
        'subtitle3': "S'inscrire"
    });
}); // fin GET /login

// page d'inscription
router.get('/sign_in', (req, res) => {
    res.render('sign_in', {
        'title': "Inscription"
    });
}); // fin GET /sign_in

// route d'accueil de l'utilisateur quand il envoie le formulaire d'inscription
router.post('/welcome', (req, res) => {
    // on vérifie que l'utilisateur existe
    let queryUser = "SELECT username FROM user WHERE 'username = ?' AND 'password = ?';"

    // connexion à la BDD
    con.connect((err) => {
        if (err) throw err;

        // envoi de la requête mySQL
        con.query(queryUser, [req.bodyuserLogin, req.body.userPw], (err, results) => {
            if (err) throw err;

            console.log(results)
        }); // fin con.query
    }); // fin con.connect
}); // fin GET /

/**
 * EXPORTATION
 */
module.exports = router;