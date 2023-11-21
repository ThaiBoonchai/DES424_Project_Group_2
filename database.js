const { createPool } = require('mysql');

const pool = createPool({
    host: 'database-3.cxbc6y3tgeei.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '12345678',
    database: 'Pipe',
    connectionLimit: 10
});

pool.query('SELECT * FROM Pipe.users', (err, results, fields) => {
    if (err) {
        return console.error(err);
    }
    console.log(results);
});
