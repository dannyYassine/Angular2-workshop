/**
 * Created by dannyyassine on 2016-11-26.
 */
var express = require("express");
var router = express.Router();
var User = require('../models/user');
var jwt = require('jsonwebtoken');

router.route('/users')
    .get(function(request, response) {
        var user = {
            name: 'Danny',
            lastName: 'Yassine',
            age: 26
        }
        response.send(user);
    });

router.route('/users/:name')
    .post(function (request, response) {
        var name = request.params.name;
        var user = {
            name: name
        }
        jwt.sign(user, 'secret', { algorithm: 'HS256' }, function(err, token) {
            response.json({error: err, token: token});
        });
        
    })

module.exports = router;

/**
 * Created by dannyyassine on 2016-11-26.
 */
