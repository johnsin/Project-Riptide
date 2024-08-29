const express = require('express');
const { getProfile, updateProfile, getAllUsers } = require('../controllers/userController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router();

router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);
router.get('/all', [auth, admin], getAllUsers);

module.exports = router;