var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

/* GET home page. */
router.get('/:id', function(req, res, next) {
    dbConn.query('SELECT * FROM list_of_vol_travel WHERE travel_vol_id  =' + req.params.id,function(err,rows)     {
            dbConn.query('SELECT * FROM list_of_vol WHERE id =' + req.params.id,function(err,rows3)     {
              // render to views/books/index.ejs
              req.session.selectedDirection = req.params.id
              res.render('choix',{data:rows, target: rows3});
        });
      });
    });

    router.post('/:id', function(req, res, next) {
        console.log(req.body.vol_place);
        req.session.vol_number = req.body.vol_place
        res.redirect('/place/'+ req.body.vol_place)
    });

module.exports = router;

