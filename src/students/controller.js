const pool = require('../../db');
const query = require('../../src/students/queries');

const getStudents = (req, res) => {
    pool.query(query.getStudents, (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    }
    );
}

module.exports = {
    getStudents,
}
