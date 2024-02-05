const pool = require('../../db');
const queries = require('./queries');

const getStudents =  async (req, res) => {
    const { rows } = await pool.query(queries.getStudents);

    pool.query(queries.getStudents, (error, results) => {
        res.send(results.rows);
    });
}

module.exports = {
    getStudents,
}