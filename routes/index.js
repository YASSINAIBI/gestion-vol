var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

/* GET home page. */
router.get('/', function(req, res, next) {
        dbConn.query('SELECT * FROM list_of_vol',function(err,ListOfVols)     {
          // render to views/books/index.ejs
          req.session.selectedDirection = req.params.id
          res.render('index',{ListOfVols:ListOfVols});
    });
});

router.post('/', (req, res) => {
  // console.log(req.body.selectedFromDirection);
  // console.log(req.body.selectedToDirection);
  var selected = req.body.selectedFromDirection;
  res.redirect('/choix/' + selected);
})

module.exports = router;

