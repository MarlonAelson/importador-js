const PreparaConexaoDB = require('./database/PreparaConexaoDB');
const ConectarDB = require('./database/ConectarDB');
const ConverteExcelEmScript = require('./uteis/ConverteExcelEmScript');
const GerarScriptEmTxt = require('./uteis/GerarScriptEmTxt');
const diretorioArquivosImportacao  = require('./uteis/diretorios').diretorioArquivosImportacao;
const planilha = 'clientes'; //nome da planilha e consequentemente da tabela
const comando = 'update or insert'; //insert ou update or insert
const nome_coluna = 'codigo_cliente';
const gerarScriptEmTxt = true; //se vai querer gerar o script em txt

//conexao do banco de dados onde será inserido os dados
config = {
    "tipo_banco":'firebird', 
    "drive_node": 'node-firebird',
    "servidor": 'localhost',
    "porta": '3050',
    "banco": 'C:\\AR_PLUS\\BANCO\\NEOCOUROS.FDB',
    "usuario": 'sysdba',
    "senha": 'masterkey'
 };
 
script = ConverteExcelEmScript(planilha, comando, diretorioArquivosImportacao, nome_coluna);

script.then((r) => {
    /*configuracao = PreparaConexaoDB(config);
    for(let i = 1; i < r.length; i++){
        ConectarDB(configuracao, r[i]);
    }*/

    if(gerarScriptEmTxt){
        GerarScriptEmTxt(planilha, r);
    }
});




