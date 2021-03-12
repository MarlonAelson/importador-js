let tipoDB;
let driveNodeDB;
let configuracao;

function preparaConexaoDB(param){
    tipoDB = param.tipo_db;

    if(param.tipo_db == 'mysql')
    {   
        driveNodeDB = (param.drive_node_db !== undefined) ? param.drive_node_db : 'mysql';
        configuracaoDB = 
        {
            "host": param.db_hostname,
            "port": param.db_port,
            "database": param.db_database,
            "user": param.db_username,
            "password": param.db_password,
        };
    }
    else if(param.tipo_db == 'firebird')
    {
        driveNodeDB = (param.drive_node_db !== undefined) ? param.drive_node_db : 'node-firebird';
        configuracaoDB = 
        {
            "host": param.db_hostname,
            "port": param.db_port,
            "database": param.db_database,
            "user": param.db_username,
            "password": param.db_password,
            "lowercase_keys": false,
            "role": null,
            "pageSize": 4096
        };
    }
    else if(param.tipo_db == 'postgres')
    {
        driveNodeDB = (param.drive_node_db !== undefined) ? param.drive_node_db : 'pg';
        configuracaoDB = 
        {
            "host": param.db_hostname,
            "port": param.db_port,
            "database": param.db_database,
            "user": param.db_username,
            "password": param.db_password,
        };
    }
    else if(param.tipo_db == 'sqlserver')
    {
        driveNodeDB = (param.drive_node_db !== undefined) ? param.drive_node_db : 'mssql';
        configuracaoDB = 
        {
            "host": param.db_hostname,
            "port": param.db_port,
            "database": param.db_database,
            "user": param.db_username,
            "password": param.db_password,
        };
    }
    else if(param.tipo_db == 'sqlite')
    {
        driveNodeDB = (param.drive_node_db !== undefined) ? param.drive_node_db : 'sqlite3';
        configuracaoDB = 
        {
            "host": param.db_hostname,
            "port": param.db_port,
            "database": param.db_database,
            "user": param.db_username,
            "password": param.db_password,
        };
    }
} 

module.exports.banco = tipoDB;
module.exports.drive = driveNodeDB;
module.exports.configuracao = configuracaoDB;