module.exports = PreparaConexaoDB;

function PreparaConexaoDB(param){

    if(param.tipo_banco == 'mysql')
    {   
        data = {
            drive_node      : (param.drive_node !== undefined) ? param.drive_node : 'mysql',  
            banco           : param.tipo_banco || 'mysql',
            host            : param.servidor || 'localhost',
            port            : param.porta || '3306',
            database        : param.banco,
            user            : param.usuario || 'root',
            password        : param.senha || ''
        }

        return data;
    }
    else if(param.tipo_banco == 'firebird')
    {
        data = {
            drive_node      : (param.drive_node !== undefined) ? param.drive_node : 'node-firebird', 
            banco           : param.tipo_banco || 'firebird', 
            host            : param.servidor || 'localhost',
            port            : param.porta || '3050',
            database        : param.banco,
            user            : param.usuario || 'sysdba',
            password        : param.senha || 'masterkey'
        }

        return data;
    }
    else if(param.tipo_banco == 'postgres')
    {
        data = {
            drive_node      : (param.drive_node !== undefined) ? param.drive_node : 'pg', 
            banco           : param.tipo_banco || 'postgres', 
            host            : param.servidor || 'localhost',
            port            : param.porta || '5436',
            database        : param.banco,
            user            : param.usuario || 'postgres',
            password        : param.senha
        }

        return data;
    }
    else if(param.tipo_banco == 'sqlserver')
    {
        data = {
            drive_node      : (param.drive_node !== undefined) ? param.drive_node : 'mssql',  
            banco           : param.tipo_banco,
            host            : param.servidor,
            port            : param.porta,
            database        : param.banco,
            user            : param.usuario,
            password        : param.senha
        }

        return data;
    }
    else if(param.tipo_banco == 'sqlite')
    {
        data = {
            drive_node      : (param.drive_node !== undefined) ? param.drive_node : 'sqlite3', 
            banco           : param.tipo_banco, 
            host            : param.servidor,
            port            : param.porta,
            database        : param.banco,
            user            : param.usuario,
            password        : param.senha
        }

        return data;
    }
} 
