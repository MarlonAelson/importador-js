const leitorDeExcel = require('read-excel-file/node');
const montadorDeScript = [];
const sqlMontado = [];
const sqlTratado = [];

module.exports = ConverteExcelEmScript;

async function ConverteExcelEmScript(planilha, comando, diretorioArquivosImportacao, nome_coluna){
	nome_coluna = (typeof nome_coluna !== 'undefined') ? nome_coluna : true;

	return new Promise((resolve) => {

   		leitorDeExcel(`${diretorioArquivosImportacao}${planilha}.xlsx`).then((rows) => {

	   		if(comando == "insert"){
	   			colunas = `${comando} into ${planilha} (${rows[0]}) values (`;
	    		fechamento_linha = ');'	
	   		}
	   		else if(comando == "update or insert"){
	   			colunas = `${comando} into ${planilha} (${rows[0]}) values (`;
	    		fechamento_linha = `) matching (${nome_coluna});`	
	   		}   	
		
			for(let i = 1; i < rows.length; i++){
				sqlMontado[i] = montadorDeScript.concat(colunas, rows[i], fechamento_linha);
				sqlTratado[i] = sqlMontado[i].join('\',\'').replace('(\',', '(').replace(',\')', ')');
			}
			resolve(sqlTratado);
		
		});
    
    });
}