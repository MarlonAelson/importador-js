const fs = require('fs');
const leitorDeExcel = require('read-excel-file/node');

const banco = require('./database/config-banco-local').banco;
const drive = require('./database/config-banco-local').drive;
const configuracao = require('./database/config-banco-local').configuracao;

let planilha = 'linhas';
let scriptEmTxt = true;

let montadorDeScript = [];
let sqlMontado = [];
let sqlTratado = [];

leitorDeExcel(`./${planilha}.xlsx`).then((rows) => {
    colunas = `insert into ${planilha} (${rows[0]}) values (`;
    fechamento_linha = ');'

    for(let i = 1; i < rows.length; i++){
         sqlMontado[i] = montadorDeScript.concat(colunas, rows[i], fechamento_linha);
         sqlTratado[i] = sqlMontado[i].join('\',\'').replace('(\',', '(').replace(',\')', ')');
    } 

    const Firebird = require(drive);
    Firebird.attach(configuracao, function(err, db){

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
    
    if(scriptEmTxt){
        gerarScriptEmTxt(sqlTratado);
    }

    return 'Script concluído com sucesso'; 
});

function gerarScriptEmTxt(parametro){
    fs.writeFileSync(`${planilha}.txt`, parametro.join('\n'), (err) => {

        if (err) throw err;
        return 'O arquivo TXT criado com sucesso!';
    });    
}

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

        for(let i = 1; i < sqlTratado.length; i++)
        {
            db.query(sqlTratado[i], function(err, result){
                console.log(sqlTratado[i]);
            });
        }

        db.detach();

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

/*function getBanco(){
    return banco;
}

function getDrive(){
    return drive;
}

function getConfiguracao(){
    return configuracao;s
}*/




