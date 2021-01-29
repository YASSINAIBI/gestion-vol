var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

/* GET choisir page. */
    router.get('/', function(req, res) {
        res.render('formInfo');
    });

    router.post('/', function(req, res) {
        req.session.nom = req.body.nom
        req.session.prenom = req.body.prenom
        req.session.email = req.body.email
        req.session.phone = req.body.phone

        res.redirect('/payement')
    });

module.exports = router;
