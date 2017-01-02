/**
 * Created by dannyyassine on 2016-11-27.
 */
var jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();

router.route('/')
    .all(function (request, response, next) {

        var apiKey = request.get('apiKey');
        if (apiKey != "swift") {
            response.status(401).json({error: "Invalid api key"});
            return;
        }

        if (request.path == '/') {
            next();
        }

        var token = request.get('token');

        jwt.verify(token, 'secret', function (error, decoded) {
            console.log(error, decoded);
            if (error != null) {
                response.status(403).json({error: error})
            }
            next();
        })


    });

module.exports = router;