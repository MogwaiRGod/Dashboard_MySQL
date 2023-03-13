/**
 * INITIALISATION
 */
// pour gérer la BDD mySQL
const mysql = require('mysql2');


/**
 * CONSTANTES
 */
const app = require('./app.js');
/* paramétrage de serveur */
const PORT = 8080;
const HOST = '0.0.0.0';


/**
 * SERVEUR
 */
app.listen(PORT, HOST, () => {
    console.log(`Le serveur tourne sur : ${PORT}:${HOST}`);
});
