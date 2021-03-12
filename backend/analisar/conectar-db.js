const banco = require('./config-conexao-db').banco;
const drive = require('./config-conexao-db').drive;
const configuracao = require('./config-conexao-db').configuracao;

function conexaoDB(this.banco, this.drive, this.configuracao){
	if(this.banco == 'mysql')
	{
	    const mysql = require(this.drive);
	    const connection = mysql.createConnection(this.configuracao);

	    connection.connect();
	    
	    connection.query('SELECT * FROM BANCO', function(error, results, fields){
	        if(error) throw error;
	        console.log('The Solution is: ', results);
	    });

	    connection.end();
	}
	else if(this.banco == 'firebird')
	{
	    const Firebird = require(this.drive);
	    Firebird.attach(this.configuracao, function(err, db){

	        if(err)
	            throw err;

	        for(let i = 1; i < sqlTratado.length; i++)
	        {
	            db.query(sqlTratado[i], function(err, result){
	                console.log(sqlTratado[i]);
	            });
	        }

	        db.detach();

	    });
	}
	else if(this.banco == 'postgres')
	{
	    const { Client } = require('pg')
	    const client = new Client()
	    client.connect()

	    client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
	        console.log(err ? err.stack : res.rows[0].message) // Hello World!
	        client.end()    
	    })
	}
}

