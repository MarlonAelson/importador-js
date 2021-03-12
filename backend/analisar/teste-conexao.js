const fs = require('fs');
const leitorDeExcel = require('read-excel-file/node');
let planilha = 'linhas';
let scriptEmTxt = false;

let montadorDeScript = [];
let sqlMontado = [];
let sqlTratado = [];

leitorDeExcel(`c:/projeto/backend/arquivos_importacao/${planilha}.xlsx`).then((rows) => {
    colunas = `insert into ${planilha} (${rows[0]}) values (`;
    fechamento_linha = ');'

    for(let i = 1; i < rows.length; i++){
         sqlMontado[i] = montadorDeScript.concat(colunas, rows[i], fechamento_linha);
         sqlTratado[i] = sqlMontado[i].join('\',\'').replace('(\',', '(').replace(',\')', ')');
    } 
	
	configuracao = {
		"host": "localhost",
		"port": "3050",
		"database": "C:/AR/BANCO/PLUS/BANCO.FDB",
		"user": "sysdba",
		"password": "masterkey"
	};
	
    const Firebird = require('node-firebird');
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


