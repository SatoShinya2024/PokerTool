const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    if(req.session.userinfo == undefined){
        const data = {
            title:'PokerChron',
        }
        res.render('timeout',data)    
    }else{
        const data = {
            title:'PokerChron|05-1',
            msg:"msg",
        }
        res.render('page05_1', data);
    }
})

router.post('/', function(req, res, next){
    if(req.session.userinfo == undefined){
        const data = {
            title:'PokerChron',
        }
        res.render('timeout',data)
        return; 
    }

    const number_of_players = Number(req.body. number_of_players);
    if(number_of_players == 9){
        const data = {
            title:'PokerChron|05-2-9',
        }
        res.render('page05_2_9', data);
    }else if(number_of_players == 6){
        const data = {
            title:'PokerChron|05-2-6',
        }
        res.render('page05_2_6', data);
    }else if(number_of_players == 2){
        const data = {
            title:'PokerChron|05-2-2',
        }
        
        res.render('page05_2_2', data);
    }
})

module.exports = router;