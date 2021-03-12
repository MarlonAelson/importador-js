const PreparaConexaoDB = require('./database/PreparaConexaoDB');
const ConectarDB = require('./database/ConectarDB');
const ConverteExcelEmScript = require('./uteis/ConverteExcelEmScript');
let teste;

script = ConverteExcelEmScript('produtos');
script.then((r) => console.log(r));

//console.log(script);

/*config1 = {
    "tipo_banco": "firebird", 
    "drive_node": "node-firebird",
    "servidor": "localhost",
    "porta": "3050",
    "banco": "C:/AR/BANCO/PLUS/ENLEVA.FDB",
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

script2 = 'SELECT * FROM csosn;';

script1 = 'SELECT * FROM linhas;';

configuracao = PreparaConexaoDB(config2);
resultado = ConectarDB(configuracao, script2);
console.log(resultado);
resultado.then((r) => console.log(r));*/



