const User = require('../Models/user.model')
const { to, ReE, ReS } = require("../Common/utils")
const bcrypt = require('bcryptjs')

exports.register = (req, res) => {
    var body = req.body
    const userData = {
        email: body.email,
        phone: body.phone,
        password: body.password
    };
    User.findOne({
        email: body.email
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(body.password, 8, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            ReS(res, { email: user.email + " is Registered!" });
                        })
                        .catch(err => {
                            ReE(res, err);
                        });
                })
            } else {
                ReS(res, { message: "User already exists" });
            }
        })
        .catch(err => {
            ReE(res, err);
        });
};

exports.login = (req, res) => {
    var body = req.body;
    User.findOne({
        email: body.email
    }).then((user) => {
        if (user) {
            if (bcrypt.compareSync(body.password, user.password)) {
                ReS(res, user)
            } else {
                // Passwords don't match
                ReS(res, { error: 'Password not match' })
            }
        }
    }).catch((err) => {
        ReE(res, err)
    })
}