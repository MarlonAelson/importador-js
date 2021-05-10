//const PreparaConexaoDB = require('./database/PreparaConexaoDB');
//const ConectarDB = require('./database/ConectarDB');
//const ConverteExcelEmScript = require('./uteis/ConverteExcelEmScript');
//const GerarScriptEmTxt = require('./uteis/GerarScriptEmTxt');
const planilha = 'produtos'; //nome da planilha e consequentemente da tabela
const nome_coluna = 'codigo_produto';
const gerarScriptEmTxt = true; //se vai querer gerar o script em txt
const comando = 'insert';

function tipoBanco(param){
    const tipoBanco = param;
    return tipoBanco;
}

function tipoComando(param){
    const tipoComando = param;
    return tipoComando;
}

function tipoOperacao(param){
    const tipoOperacao = param;
    if(tipoOperacao == 'inserir'){
        return false;
    }else{
        return true;
    }
}

function servidor(){
    const servidor = document.querySelector('#servidor').value;
    return servidor;
}

function porta(){
    const porta = document.querySelector('#porta').value;
    return porta;
}

function banco(){
    const banco = document.querySelector('#banco').value;
    return banco;
}

function usuario(){
    const usuario = document.querySelector('#usuario').value;
    return usuario;
}

function senha(){
    const senha = document.querySelector('#senha').value;
    return senha;
}

function diretorioArquivosExcelImportacao(){
    const diretorioArquivosExcelImportacao = document.querySelector('#diretorio_arquivos');
    return diretorioArquivosExcelImportacao;
}

function diretorioSaidaScript(){
    const diretorioSaidaScript = document.querySelector('#diretorio_saida');
    return diretorioSaidaScript;
}

function driveNode(){
    const driveNode;
    if(tipoBanco() == "firebird"){
        driveNode = "node-firebird";
    }
    return driveNode;
}

//conexao do banco de dados onde será inserido os dados
config = {
    "tipo_banco": tipoBanco(), 
    "drive_node": driveNode(),
    "servidor": servidor(),
    "porta": porta(),
    "banco": banco(),
    "usuario": usuario(),
    "senha": senha()
 };
 
script = ConverteExcelEmScript(planilha, comando, nome_coluna);

script.then((r) => {
    configuracao = PreparaConexaoDB(config);
    for(let i = 1; i < r.length; i++){
        ConectarDB(configuracao, r[i]);
    }

    if(tipoOperacao()){
        GerarScriptEmTxt(planilha, r);
    }
});




