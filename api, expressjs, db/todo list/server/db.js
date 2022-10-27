// connecting to database
const Pool = require("pg").Pool;

const pool = new Pool ({
    user: "postgres",
    password: "monkey",
    host: "localhost",
    port: 5432,
    database: "perntodo"
})

// we export that stuff above so we can use it later 
// using this pool ,we can run queries with postgres
module.exports = pool;