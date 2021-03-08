module.exports = {
    driver: process.env.DB_DRIVER,
    connection: {
        host: process.env.DB_HOSTNAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        datababse: process.env.DB_DATABASE,
        connectionTimeout: 3000,
        requestTimeout: 3000, 
    }
}