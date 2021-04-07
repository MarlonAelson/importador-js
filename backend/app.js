const PreparaConexaoDB = require('./database/PreparaConexaoDB');
const ConectarDB = require('./database/ConectarDB');
const ConverteExcelEmScript = require('./uteis/ConverteExcelEmScript');
const GerarScriptEmTxt = require('./uteis/GerarScriptEmTxt');
const planilha = 'linhas'; //nome da planilha e consequentemente da tabela
const gerarScriptEmTxt = true; //se vai querer gerar o script em txt

//conexao do banco de dados onde será inserido os dados
config1 = {
    "tipo_banco": "firebird", 
    "drive_node": "node-firebird",
    "servidor": "localhost",
    "porta": "3050",
    "banco": "C:/AR/BANCO/PLUS/ENLEVA.FDB",
    "usuario": "sysdba",
    "senha": "masterkey"
 };
 /*config2 = {
    "tipo_banco": "mysql", 
    "drive_node": "mysql",
    "servidor": "localhost",
    "porta": "3306",
    "banco": "sispem",
    "usuario": "root",
    "senha": "769SUPORTESEGURO"
 };*/
script = ConverteExcelEmScript(planilha);
script.then((r) => {
    configuracao = PreparaConexaoDB(config1);
    for(let i = 1; i < r.length; i++){
        ConectarDB(configuracao, r[i]);
    }

    if(gerarScriptEmTxt){
        GerarScriptEmTxt(planilha, r);
    }
});




