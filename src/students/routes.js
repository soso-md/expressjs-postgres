const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello from students');
});

module.exports = router;