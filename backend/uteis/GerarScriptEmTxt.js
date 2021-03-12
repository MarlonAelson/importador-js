const fs = require('fs');

module.exports = GerarScriptEmTxt;

function GerarScriptEmTxt(parametro){

    fs.writeFileSync(`${planilha}.txt`, parametro.join('\n'), (err) => {

        if (err) throw err;
        console.log('O arquivo TXT criado com sucesso!');
    });    
}