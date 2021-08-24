const User = require('../models/User');
const Chat = require('../models/Chat');
const { idFromCookie } = require('../middleware/components');

const first_chat = async (friendID, message) => {
    // idFromCookie();
    const userID = '222';
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
            }]
        });

        const chatID = chat._id.toString();

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
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Something goes wrong, please try again!'});
    }

};

module.exports = {
    first_chat
}