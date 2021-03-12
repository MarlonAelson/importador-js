const leitorDeExcel = require('read-excel-file/node');
const diretorioArquivosImportacao  = require('./diretorios').diretorioArquivosImportacao;
const montadorDeScript = [];
const sqlMontado = [];
const sqlTratado = [];

module.exports = ConverteExcelEmScript;

async function ConverteExcelEmScript(planilha){

	return new Promise((resolve) => {
   		leitorDeExcel(`${diretorioArquivosImportacao}${planilha}.xlsx`).then((rows) => {
    	colunas = `insert into ${planilha} (${rows[0]}) values (`;
    	fechamento_linha = ');'
		
			for(let i = 1; i < rows.length; i++){
				sqlMontado[i] = montadorDeScript.concat(colunas, rows[i], fechamento_linha);
				sqlTratado[i] = sqlMontado[i].join('\',\'').replace('(\',', '(').replace(',\')', ')');
			}
			resolve(sqlTratado);
		});
    });
}