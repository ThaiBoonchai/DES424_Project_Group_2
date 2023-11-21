const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5500;
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'DES424_Project_Group_2-Front-End')));


const pool = mysql.createPool({
    host: 'database-3.cxbc6y3tgeei.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '12345678',
    database: 'Pipe',
    connectionLimit: 10,
});


app.post('/create-account', (req, res) => {
    const { username, email, password, cardNumber, expiryDate, cvv } = req.body;

    const sql = 'INSERT INTO users (username, email, pass, card_number, expiry_date, cvv) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [username, email, password, cardNumber, expiryDate, cvv];

    pool.query(sql, values, (error, results) => {
        if (error) {
            console.error('Error inserting into the database:', error);
            return res.status(500).send('Internal Server Error');
        }

        console.log('Data inserted into the database:', results);
         
         res.redirect('/enroll/index.html');
    });
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    
    pool.query('SELECT * FROM users WHERE username = ? AND pass = ?', [username, password], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (results.length > 0) {
            
            return res.json({ message: 'Login successful' });
            
        } else {
            
            return res.status(401).json({ error: 'Invalid username or password' });
        }
    });
});

app.post('/test', (req, res) => {
    console.log('Received a POST request at /test');
    res.send('POST request received at /test');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
