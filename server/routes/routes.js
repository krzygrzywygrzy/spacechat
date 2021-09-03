const { Router } = require('express');
const authController = require('../controllers/authController');
const searchController = require('../controllers/searchController');
const friendsController = require('../controllers/friendsController');

const router = Router();


// authController
router.post('/api/signup', authController.signup_post);
router.post('/api/login', authController.login_post);

// searchController
router.post('/api/search', searchController.user_search);

// friendsController
router.post('/api/friendAdd', friendsController.friend_add);
router.post('/api/friendDelete', friendsController.friend_delete);
router.post('/api/friendlistGet', friendsController.friendlist_get);

module.exports = router;