import mysql from "mysql2/promise"

//o pool chama todos os parametros 
export const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    use: "root",
    password: "p@$$w0rd!",
    database: "api_tasks",
    waitForConnections: true,
    connectionLimit: 10
})


