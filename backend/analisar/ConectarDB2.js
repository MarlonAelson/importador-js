const mysql = require('mysql');
const PreparaConexaoDB  = require('./PreparaConexaoDB');

var config = {
            host: "localhost",
            port: 3306,
            database: "sispem",
            user: "root",
            password: "769SUPORTESEGURO"
         };

const connection = mysql.createConnection(config);

function query(query) {
    return new Promise((resolve, reject) => {
        connection.query(query, function (err, rows, fields) {
            if (err) return reject(err)
            resolve(rows);
        });
        connection.end();
    });
}

module.exports = {

    getSobre: (async function () {
        const result = await select('SELECT * FROM cst');
        return result;        
    })(),

}