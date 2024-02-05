// require('dotenv').config();
const Pool = require('pg').Pool;

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
const pool = new Pool();

// // const pool = new Pool({
// //     user: 'postgres',
// //     host: 'localhost',
// //     database: 'student',
// //     password: '1234',
// //     port: 5432
// // });

// const connectionString = process.env.CONNECTION;

// const pool = new Pool({
//   connectionString,
// });

module.exports = pool;