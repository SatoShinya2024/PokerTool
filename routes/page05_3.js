const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    if(req.session.userinfo == undefined){
        const data = {
            title:'PokerChron',
        }
        res.render('timeout',data)
        return; 
    }
    const data = {
        title:'PokerChron|05',
    }
    res.render('page05_3', data);
})

module.exports = router;