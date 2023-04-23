const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    const data = {
        title:'PokerChron|01',
    }
    res.render('page01', data);
})

module.exports = router;