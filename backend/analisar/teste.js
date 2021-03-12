
/*const funcao = require('./database/ConectarDB2');

var sobre

(async function () {
  sobre = JSON.parse(JSON.stringify(await funcao.getSobre))
  for(var i = 0; i < sobre.length; i++){
  	console.log(sobre[i].id);
  }
  
})()*/


const PreparaConexaoDB 	= require('./database/PreparaConexaoDB');
const ConectarDB 		= require('./database/ConectarDB');
const query = 'select * from cst_icms;';

config1 = {
			"tipo_banco": "firebird", 
			"drive_node": "node-firebird",
			"servidor": "localhost",
            "porta": "3050",
            "banco": "C:/AR/BANCO/PLUS/BANCO.FDB",
            "usuario": "sysdba",
            "senha": "masterkey"
		 };

config2 = {
			"tipo_banco": "mysql", 
			"drive_node": "mysql",
			"servidor": "localhost",
            "porta": "3306",
            "banco": "sispem",
            "usuario": "root",
            "senha": "769SUPORTESEGURO"
		 };

configuracao = PreparaConexaoDB(config2);

conexao = ConectarDB(configuracao, query);

console.log(conexao);



