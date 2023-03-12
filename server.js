/**
 * INITIALISATION
 */
// pour gérer la BDD mySQL
const mysql = require('mysql2');


/**
 * CONSTANTES
 */
const app = require('./app.js');
const BDD = "TestBase";
/* paramétrage de serveur */
const PORT = 8080;
const HOST = '0.0.0.0';


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
 * SERVEUR
 */
app.listen(PORT, HOST, () => {
    console.log(`Le serveur tourne sur : ${PORT}:${HOST}`);
});
