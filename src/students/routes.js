const { Router } = require('express');

const router = Router();
const controller = require('../../src/students/controller')

router.get('/', controller.getStudents);

module.exports = router;