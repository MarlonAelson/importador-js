const PreparaConexaoDB = require('./database/PreparaConexaoDB');
const ConectarDB = require('./database/ConectarDB');
const ConverteExcelEmScript = require('./uteis/ConverteExcelEmScript');
const { diretorioArquivosImportacao } = require('./uteis/diretorios');
const GerarScriptEmTxt = require('./uteis/GerarScriptEmTxt');

function importar(param){

    const planilha = param; //nome da planilha e consequentemente da tabela
    const operacao = document.querySelector('input[name="operacao"]:checked').value;
    const comando = document.querySelector('input[name="comando"]:checked').value;
    const tipo_banco = document.querySelector('input[name="tipo_banco"]:checked').value;
    const drive_node = document.querySelector('input[name="drive_node"]:checked').value;
    const nome_coluna = document.querySelector('#nome_coluna').value; //nome da coluna para o update or insert
    const servidor = document.querySelector('#servidor').value;
    const porta = document.querySelector('#porta').value;
    const banco = document.querySelector('#banco').value;
    const usuario = document.querySelector('#usuario').value;
    const senha = document.querySelector('#senha').value;

    const diretorioArquivosExcelImportacao = document.querySelector('#diretorio_arquivos');
    const diretorioSaidaScript = document.querySelector('#diretorio_saida');  

    //conexao do banco de dados onde será inserido os dados 
    config = {
        "tipo_banco": tipo_banco, 
        "drive_node": drive_node,
        "servidor": servidor,
        "porta": porta,
        "banco": banco,
        "usuario": usuario,
        "senha": senha
    };

    script = ConverteExcelEmScript(planilha, comando, diretorioArquivosImportacao, nome_coluna);
    
    if(operacao == 'inserir'){
        script.then((r) => {
            configuracao = PreparaConexaoDB(config);
            for(let i = 1; i < r.length; i++){
                ConectarDB(configuracao, r[i]);
            }
        });
    }else if(operacao == 'script'){
        script.then((r) => {
            GerarScriptEmTxt(planilha, r);
        });
    }else{
        script.then((r) => {
            configuracao = PreparaConexaoDB(config);
            for(let i = 1; i < r.length; i++){
                ConectarDB(configuracao, r[i]);
            }
    
            if(tipoOperacao()){
                GerarScriptEmTxt(planilha, r);
            }
        });
    }    
}




