/**
 * INITIALISATION
 */
const mysql = require('mysql2');


/**
 * CONSTANTES
 */
const BDD = "TestBase";


/**
 * CONNEXIONS
 */
// connexion à la BDD
const con = mysql.createConnection({
    host: "172.17.0.02",
    user: "pedrolove",
    password: "ThePassword",
    database: BDD,
    multipleStatements: true
});

/* Connexion test */
con.connect((err) => {
    if (err) throw err;
    console.log(`Connecté à la BDD ${BDD}`);
});


/**
 * CONTROLLER
 */
// fonction qui affiche la page d'accueil
exports.getWelcome = (req, res) => {
    res.render('welcome', {
        'title': "Bienvenue",
        'subtitle1': "Se connecter",
        'subtitle2': "S'inscrire"
    });
} // fin getWelcome

// fonction qui affiche la page de login
exports.getLogin = (req, res) => {
    res.render('login', {
        'title': "Login",
        'button': "Se connecter",
        'subtitle2': "Accueil",
        'subtitle3': "S'inscrire"
    });
} // fin getLogin

// fonction qui affiche la page d'inscription
exports.getSignIn = (req, res) => {
    res.render('sign_in', {
        'title': "Inscription"
    });
} // fin getSignIn

/**
 * fonction qui vérifie qu'un utilisateur existe selon ses données entrées
 * qui le log le cas échéant
 * et qui le renvoie vers la page d'accueil 
 */
exports.postWelcome = (req, res) => {
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
} // fin postWelcome