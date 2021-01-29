var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

/* GET choisir page. */
    router.get('/', function(req, res) {
        // req.session.selectedDirection
        // req.session.all_vol_place
      
        // req.session.nom
        // req.session.prenom
        // req.session.email
        // req.session.phone
        dbConn.query('SELECT * FROM list_of_vol_travel WHERE id  =' + req.session.vol_number ,function(err,rows)     {
            dbConn.query('SELECT * FROM list_of_vol WHERE id =' + req.session.selectedDirection ,function(err,rows2)     {
                for(i= 0; i< rows.length; i++) {
                    // console.log(rows[i].dipartTime)
                    // console.log(rows[i].prix)
                    req.session.dipartTime = rows[i].dipartTime
                    req.session.prix = rows[i].prix
                }

                for(i= 0; i< rows2.length; i++) {
                    // console.log(rows2[i].frome)
                    // console.log(rows2[i].to)
                    req.session.frome = rows2[i].frome
                    req.session.to = rows2[i].to
                }
              res.render('payement', {nom: req.session.nom, prenom: req.session.prenom, email: req.session.email, phone: req.session.phone, rowOneInfo: rows, rowTwoInfo: rows2 });
        });
      });
    });

    router.post('/', function(req, res) {
            var sql = 'UPDATE `list_of_vol_place` SET `valable`= 0 WHERE place_id=? AND fromVol=?'
            var sql2 = 'SELECT place_number FROM `list_of_vol_travel` WHERE id=?'
            var sql3 = 'UPDATE `list_of_vol_travel` SET `place_number`= ? WHERE id=?'
            
            var place = req.session.all_vol_place
            var direction = req.session.vol_number

            console.log(place)
            console.log(direction)

            dbConn.query(sql, [place, direction], function(err)     {
                dbConn.query(sql2, direction, function(err, selected_vol)     {
                    for(i=0; i < selected_vol.length; i++) {
                        var rest_place = selected_vol[i].place_number - 1
                    }
                    console.log(rest_place)
                    dbConn.query(sql3, [rest_place ,direction], function(err)     {

                    res.redirect('/sucess')
                });
            });
        });
    });

module.exports = router;
