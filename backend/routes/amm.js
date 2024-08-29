// /backend/routes/amm.js
const express = require('express');
const { getPools, contribute, withdraw } = require('../controllers/ammController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/pools', getPools);
router.post('/contribute', auth, contribute);
router.post('/withdraw', auth, withdraw);

module.exports = router;