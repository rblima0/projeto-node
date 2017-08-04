var mysql  = require('mysql');

function createDBConnection(){
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'bd_projeto_node22'
        });
    }

    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'bd_projeto_node_test'
        });
    }
}

module.exports = function() {
    return createDBConnection;
}

//set NODE_ENV=production
//set NODE_ENV=test
//nodemon app