const User = require('../models/User');

const user_search = async (req, res) => {
    const { phrase } = req.body;
    // const phrase = req.query.phrase;
    const reg = new RegExp(phrase, 'i');
    try {
        const user = await User.find({ login: { $regex: reg }}).limit(5).lean();
        console.log(user);
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'User not found'});
    }
};

module.exports = {
    user_search
}