module.exports = ConectarDB;

async function ConectarDB(param, script){
	
	if(param.banco == 'mysql')
	{
	    const mysql = require(param.drive_node);

		return new Promise((resolve, reject) => {
			const conexao = mysql.createConnection(param);
			conexao.query(script, function (err, rows, fields) {
				if (err) return reject(err);
				resolve(rows);
				conexao.end();
			});
		});
	}
	else if(param.banco == 'firebird')
	{	
		const conexao = require(param.drive_node);
	    		 
		return new Promise((resolve, reject) => {
			conexao.attach(param, function(err, db) {
				db.query(script, function(err, rows) {
					if (err) return reject(err)
					resolve(rows);
					db.detach();
				});
			});		 
		});
	}
}