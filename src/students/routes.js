const { Router } = require('express');

const router = Router();
const controller = require('../../src/students/controller')

router.get('/', controller.getStudents);
router.get('/:id', controller.getStudentById);
router.post('/', controller.createStudent);

module.exports = router;