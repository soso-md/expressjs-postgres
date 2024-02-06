const { Router } = require('express');

const router = Router();
const controller = require('../students/controller')

router.get('/', controller.getStudents);

module.exports = router;