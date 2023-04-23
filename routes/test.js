const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    const data = {
        title:'test',
        msg:'msg',
    }
    res.render('test', data);
})

router.post('/', function(req, res, next){
    const data = {
        title:req.body.test03,
        msg:req.body.test04,
    }
    res.render('test', data);
})

module.exports = router;