require('dotenv').config();

const tipoDB = process.env.DB_LOCAL;
let driveDB;
let configuracao;

if(tipoDB == 'mysql')
{   driveDB = process.env.DRIVE_NODE;
    configuracao = 
    {
        "host": process.env.DB_HOSTNAME,
        "port": process.env.DB_PORT,
        "database": process.env.DB_DATABASE,
        "user": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
    };
}
else if(tipoDB == 'firebird')
{
    driveDB = process.env.DRIVE_NODE;
    configuracao = 
    {
        "host": process.env.DB_HOSTNAME,
        "port": process.env.DB_PORT,
        "database": process.env.DB_DATABASE,
        "user": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "lowercase_keys": process.env.FIREBIRD_LOWERCASE_KEYS,
        "role": process.env.FIREBIRD_ROLE,
        "pageSize": process.env.FIREBIRD_PAGESIZE
    };
} 

module.exports.banco = tipoDB;
module.exports.drive = driveDB;
module.exports.configuracao = configuracao;