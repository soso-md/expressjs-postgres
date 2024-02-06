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

const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(query.getStudentById, [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    }
    );
}

const createStudent = (req, res) => {
    const { name, email, age, dob } = req.body

    // check if student already exists
    pool.query(query.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send(`Email ${email} already exists`)
        }
    })

    // add student to db
    pool.query(query.addStudent, [name, email, age, dob], (error, results) => {
        if (error) throw error;
        res.status(201).send(`Student added with ID: ${results}`);
    })
}

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
}
