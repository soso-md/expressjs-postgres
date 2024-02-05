import bodyParser from "body-parser";
import express from "express";

const pool = require('../db');
const studentRoutes = require('../src/students/routes.js');

const app = express();
const port = process.env.PORT || 3333;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));


app.get("/", async (req, res) => {
  const { rows } = await pool.query("SELECT name FROM student");
  res.send(`Hello, World! The time from the DB is ${rows[0].name}`);
});

app.use('/api/v1/students', studentRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = pool;