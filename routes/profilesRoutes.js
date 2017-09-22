const express = require('express');
const router = express.Router();

const profileCtrl = require('../controllers/profileCtrl');

router.get('/friends', profileCtrl.getFriendsProfiles);

module.exports = router;