const { Router } = require('express');
const authController = require('../controllers/authController');
const searchController = require('../controllers/searchController');

const router = Router();


// authController
router.post('/api/signup', authController.signup_post);
router.post('/api/login', authController.login_post);


// searchController
router.post('/api/search', searchController.user_search);

module.exports = router;