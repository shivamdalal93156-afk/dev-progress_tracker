const express = require('express');
const router = express.Router();
const protect = require('../middleware/authmiddleware');
const { postUpdate, getFeed, getUserUpdates, getStats } = require('../controllers/updatecontroller');

router.post('/update', protect, postUpdate);
router.get('/feed', getFeed);
router.get('/user/:id', getUserUpdates);
router.get('/stats/:id', getStats);

module.exports = router;