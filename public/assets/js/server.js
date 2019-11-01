exports.server = () => {

    server = () => {

        const PORT = process.env.port0 || 8000;

        require("mysql").createConnection({
            host: process.env.host,
            port: PORT,
            user: process.env.user,
            password: process.env.password,
            database: process.env.database
        });
        
        console.log('SERVER on', PORT);

    }
}
