const expressJwt = require('express-jwt'); //using the express-jwt package
const config = require('../config.json'); //utilizing config.json
const userService = require('../users/user.service'); //userService contains user authentication and information export

module.exports = jwt; //export js file as function jwt

function jwt() {
    const secret = config.secret; //secret comes from config - can be set to anything you want
    return expressJwt({secret, isRevoked }).unless({ //outlines the pages which does NOT require authentication
        path: [ //the listed exceptions
            '/users/authenticate', //authenticate(akin to login) is an obvious exception
            '/users/register' //register does not need authentication
        ]
    });
}

async function isRevoked(req, payload, done) { //this functions activates when there is no authorization token
    const user = await userService.getById(payload.sub); //checks the payload sub signature

    // revoke token if user no longer exists
    if (!user) { //if the user authorization doesnt exist or is not correct,
        return done(null, true); //automatically blocks pages.
    }

    done();
}