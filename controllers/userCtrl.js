const { users } = require('../data/users');

const login = (req, res, next) => {
    for (var key in users) {
        if (users[key].name === req.body.name) {
            if (users[key].password === req.body.password) {
                req.session.currentUser = users[key];
                res.send({ userFound: true });
            }
            else { res.send({ userFound: false }); }
        }
    }
};

module.exports = {
    login
  };