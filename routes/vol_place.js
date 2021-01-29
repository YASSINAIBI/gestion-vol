var express = require("express");
var router = express.Router();
var dbConn = require("../lib/db");

/* GET home page. */
router.get("/:id", function (req, res, next) {

  dbConn.query(
    "SELECT * FROM list_of_vol_travel WHERE id =" + req.params.id,
    function (err, rows) {
      dbConn.query(
        "SELECT * FROM list_of_vol WHERE id =" + req.session.selectedDirection,
        function (err, rows2) {
          dbConn.query(
            "SELECT * FROM list_of_vol_place WHERE fromVol =" + req.params.id,
            function (err, rows3) {
              // for(i=0; i < rows3.length; i++) {
              //   console.log(rows3[i])
              // }
              res.render("vol_place", { data: rows, target: rows2, vol_place: rows3 });
        });
      });
    });
});

router.post("/:id", function (req, res, next) {
//   var sql = 'UPDATE `list_of_vol_place` SET `valable`= 0 WHERE place_id=? AND fromVol=?'
//   var place = req.body.all_vol_place
//   var direction = req.session.selectedDirection

//   dbConn.query(sql, [place, direction], function(err,rows)     {
//     res.redirect('/place/' + direction)
// });
  req.session.all_vol_place = req.body.all_vol_place

  res.redirect('/form')

});

module.exports = router;
