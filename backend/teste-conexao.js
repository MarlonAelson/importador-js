const banco = require('./database/config-banco-local').banco;
const drive = require('./database/config-banco-local').drive;
const configuracao = require('./database/config-banco-local').configuracao;

if(banco == 'mysql')
{
    const mysql = require(drive);
    const connection = mysql.createConnection(configuracao);

    connection.connect();
    
    connection.query('SELECT * FROM BANCO', function(error, results, fields){
        if(error) throw error;
        console.log('The Solution is: ', results);
    });

    connection.end();
}
else if(banco == 'firebird')
{
    const Firebird = require(drive);
    Firebird.attach(configuracao, function(err, db){

        if(err)
            throw err;

        db.query('SELECT * FROM LINHAS', function(err, result){
            console.log(result)
            db.detach();
        });

    });
}
else if(banco == 'postgres')
{
    const { Client } = require('pg')
    const client = new Client()
    client.connect()
    client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
        console.log(err ? err.stack : res.rows[0].message) // Hello World!
        client.end()    
    })
}





