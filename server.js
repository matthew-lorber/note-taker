/* SERVER */


    require('dotenv').config();
    exports.server = require("mysql").createConnection({
        host: process.env.host,
        port: process.env.port0,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });



