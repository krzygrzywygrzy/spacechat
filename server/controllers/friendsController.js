const User = require('../models/User');
const { idFromCookie } = require('../middleware/components');

const friend_add = async (req, res) => {
    // idFromCookie();
    const { friendID } = req.body;
    const userID = '60fe7b0155e92148caa3d06c';

    try {
        const friend = await User.findById(friendID).select('_id login').lean();

        const friendTemplate = {
            _id: friend._id,
            pseudo: friend.login,
            addDate: new Date().toDateString()
        }
        const user = await User.findOneAndUpdate({ _id: userID}, { $addToSet: { friends: friendTemplate }}, { useFindAndModify: false },
            function(err, result) {
                if (err) {
                    console.log(err);
                    res.status(400).json({ operationStatus: 'Failed', userID: userID, friendID: friendID, notifType: notifType });
                } else {
                    res.status(201).json({ operationStatus: 'Completed', userID: userID, friendID: friendID });
                }});
        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'User not found!'});
    }
};

const friend_delete = async (req, res) => {
    // idFromCookie();
    const { friendID } = req.body;
    const userID = '60fe7b0155e92148caa3d06c';

    try {
        const user = await User.findOneAndUpdate({ _id: userID }, { $pull: { friends: { _id: friendID }}}, { useFindAndModify: false }, function(err, result) {
            if (err) {
                console.log(err);
                res.status(400).json({ operationStatus: 'Failed', userID: userID, friendID: friendID });
            } else {
                res.status(201).json({ operationStatus: 'Completed', userID: result._id, deletedFriendID: friendID });
            }
        });

        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Friend not found!'});
    }
};

const friendlist_get = async (req, res) => {
    // idFromCookie();
    const userID = '60fe7b0155e92148caa3d06c';

    try {
        const user = await User.findById(userID).select('friends').lean();

        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'User not found!'});
    }
};

module.exports = {
    friend_add,
    friend_delete,
    friendlist_get
}