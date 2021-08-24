const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    members: {
        type: Array,
        minLength: 2,
        required: [true, 'Please fill members field']
    },
    room: [
        {
            authorID: String,
            message: String,
            readStatus: Boolean,
            sentDate: String,
            readDate: String
        }
    ]
});

const Chat = mongoose.model('chat', chatSchema);

module.exports = Chat;