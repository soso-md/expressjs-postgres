const getStudents = "SELECT * FROM student";
const getStudentById = "SELECT * FROM student WHERE id = $1";
const checkEmailExists = "SELECT s FROM student s WHERE s.email = $1";
const addStudent = "INSERT INTO student (name, email, age, dob) VALUES ($1, $2, $3, $4)"

module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
}