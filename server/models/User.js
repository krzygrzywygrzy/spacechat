const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// schema
const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    allChats: Array
});

userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async (login, password) => {
    const user = await this.findOne({ login: login });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect login');
};

const User = mongoose.model('user', userSchema);

module.exports = User;