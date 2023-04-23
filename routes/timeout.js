const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next){
    const data = {
        title:'timeout',
    }
    res.render('timeout', data);
})

router.post('/', function(req, res, next){
    const data = {
        title:'timeout',
    }
    res.render('timeout', data);
})

module.exports = router;