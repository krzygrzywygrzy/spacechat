const { Router } = require('express');
const authController = require('../controllers/authController');
const searchController = require('../controllers/searchController');
const friendsController = require('../controllers/friendsController');
const chatController = require('../controllers/chatController');

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

// chatController
router.post('/api/firstChat', chatController.first_chat);
router.post('/api/allChats', chatController.all_chats_get);
router.post('/api/specificChat', chatController.specific_chat_get);
router.post('/api/regularMessage', chatController.insert_message);

module.exports = router;