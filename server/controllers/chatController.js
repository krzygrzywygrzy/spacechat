const User = require('../models/User');
const Chat = require('../models/Chat');
const { idFromCookie } = require('../middleware/components');

const first_chat = async (req, res) => {
    // idFromCookie();
    const { friendID, message } = req.body;
    const userID = '60fe7b0155e92148caa3d06c';
    const sentDate = new Date().toUTCString();
    try {
        const chat = await Chat.create({
            members: [ userID, friendID],
            room: [{
                authorID: userID,
                message: message,
                readStatus: false,
                sentDate: sentDate,
                readDate: ''
            }],
            unreadMessages: [
                {
                    receiver: friendID
                },
                {
                    receiver: userID
                }
            ]
        });

        const chatID = chat._id.toString();

        const messageID = chat.room[chat.room.length - 1]._id;

        const unreadMess = await Chat.findOneAndUpdate({ members: userID && friendID, unreadMessages: { receiver: friendID }}, { $addToSet: { unreadMessages: { messages: messageID }}}, { useFindAndModify: false }, function (err, result) {
            if (err) {
                console.log('Failed insertion to unreadMessages section');
                console.log(err);
            } else {
                console.log('Completed insertion to unreadMessages section');
            }
        });

        const user = await User.findOneAndUpdate({ _id: userID}, { $addToSet: { allChats: { chatID: chatID, friendID: friendID }}}, { useFindAndModify: false }, function(err, result) {
            if (err) {
                console.log(chatID);
                console.log('Failed adding to allChats section');
                console.log(err);
            } else {
                console.log(chatID);
                console.log('Completed adding to allChats section');
            }
        });

        const friend = await User.findOneAndUpdate({ _id: friendID }, { $addToSet: { allChats: { chatID: chatID, friendID: userID }}}, {useFindAndModify: false}, function(err, result) {
            if (err) {
                console.log(chatID);
                console.log('Failed adding to allChats section');
                console.log(err);
            } else {
                console.log(chatID);
                console.log('Completed adding to allChats section');
            }
        });

        res.status(200).json(chat);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Something goes wrong, please try again!'});
    }
};

const all_chats_get = async (req, res) => {
    // idFromCookie();
    const userID = '60fe7b0155e92148caa3d06c';

    try {
        const user = await Chat.find({ members: userID }).lean();

        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: err });
    }
};

const specific_chat_get = async (req, res) => {
    // idFromCookie();
    const { friendID } = req.body;
    const userID = '60fe7b0155e92148caa3d06c';

    try {
        const user = await Chat.findOne({ members: userID && friendID }).lean();

        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

const regular_message = async (req, res) => {
    // idFromCookie();
    const userID = '60fe7b0155e92148caa3d06c';
    const { friendID, message } = req.body;
    const sentDate = new Date().toUTCString();

    const chatObj = {
        authorID: userID,
        message: message,
        readStatus: false,
        sentDate: sentDate,
        readDate: ''
    };

    try {
        const chat = await Chat.findOneAndUpdate({ members: userID && friendID }, { $addToSet: { room: chatObj }}, { useFindAndModify: false }, function(err, result) {
            if (err) {
                // console.log(chatID);
                console.log('Failed insertion to room section');
                console.log(err);
            } else {
                // console.log(chat._id);
                console.log('Completed insertion to room section');
            }
        });
        // console.log(chat.room[chat.room.length - 1]._id);

        const messageID = chat.room[chat.room.length - 1]._id;

        const unreadMess = await Chat.findOneAndUpdate({ members: userID && friendID, unreadMessages: { receiver: friendID }}, { $addToSet: { unreadMessages: { messages: messageID }}}, { useFindAndModify: false }, function (err, result) {
            if (err) {
                console.log('Failed insertion to unreadMessages section');
                console.log(err);
            } else {
                console.log('Completed insertion to unreadMessages section');
            }
        });

        res.status(200).json(chat);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Something goes wrong, please try again!'});
    }
};



// const chat_read = async (req, res) => {
//     // idFromCookie();
//     const userID = '60fe7b0155e92148caa3d06c';
// };

module.exports = {
    first_chat,
    all_chats_get,
    specific_chat_get,
    regular_message
}