const express = require('express');
require('dotenv').config();
const app = express();
const port = 3000;

const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'courses',
  password: '1234',
  port: 5432,
});


app.get('/', (req, res) => {
  res.send('Hello from Express Backend!');
});

app.get('/courses', async (req, res) => {
    const { plate } = req.query;
    let queryText = 'SELECT * FROM courses';

    
    try {
        const result = await client.query(queryText);
        const camelCaseData = result.rows.map(toCamelCase);
        res.json(camelCaseData);
    } catch (err) {
        console.error('❌ SQL Query Error car data:', err.message);
        res.status(500).send('Server Error: Could not data from PostgreSQL.');
    }
});

app.post('/courses', (req, res) => {
  res.send('Hello from Express Backend!');
});


// app.post('/timetable?room=', (req, res) => {
//   res.send('Hello from Express Backend!');
// });


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
