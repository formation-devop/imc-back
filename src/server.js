'use strict';

const mysql = require('mysql2/promise');
const express = require('express');
const bodyParser = require('body-parser');

// Constants
const PORT = 8383;
const HOST = '0.0.0.0';
/*
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3308,
  user: 'root',
  password: 'example',
  database: 'imc',
});
*/
const config = {
  host: 'imc-database',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'imc',
};
// App
const app = express();
app.get('/imc', async(req, res) => {
  var sql = `SELECT * FROM data`;   
  const connection = await mysql.createConnection(config);
  const [results, ] = await connection.execute(sql);
  res.send(results);
});

app.post('/imc', bodyParser.json(), async (req, res) => {
  const sql = `INSERT INTO data (taille, poids) VALUES (${req.body.taille}, ${req.body.poids})`;   
  const connection = await mysql.createConnection(config);
  const [results, ] = await connection.execute(sql);
  res.send(results);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
