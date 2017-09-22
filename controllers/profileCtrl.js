const { profiles } = require('../data/profiles');
const { users } = require('../data/users');

const getFriendsProfiles = (req, res, next) => {
    let friendsArr = [];
    for (var i = 0; i < req.session.currentUser.friends.length; i++) {
        for (var x = 0; x < profiles.length ; x++) {
            if (req.session.currentUser.friends[i] === profiles[x].name) {
                friendsArr.push(profiles[x]);
            }
        }
    }
    res.json({ currentUser: req.session.currentUser, friends: friendsArr });
};

module.exports = {
    getFriendsProfiles
};