const express = require('express');
const router = express.Router();
const ps = require('@prisma/client');
const { getPrismaClient } = require('@prisma/client/runtime');
const session = require('express-session');
const prisma = new ps.PrismaClient()

router.get('/', function(req, res, next){
    let name = "Guest";
    if(req.session.userinfo != undefined){
        name = req.session.userinfo.name;
    }else{
        const data = {
            title:'PokerChron',
        }
        res.render('timeout',data)
    }
    const data = {
        title:'PokerChron|04',
        username:name,
    }
    res.render('page04', data);
})

router.post('/', async function(req, res, next){
    if(req.session.userinfo == undefined){
        const data = {
            title:'PokerChron',
        }
        res.render('timeout',data)
        return;
    }
    let name = req.body.newname;
    let id = req.session.userinfo.id;
    await prisma.user.update({
        where:{id:id},
        data:{
            nickname:name,
        }
    })
    req.session.userinfo.name = name;
    name = req.session.userinfo.name;
    const data = {
        title:'PokerChron|04',
        username:name,
    }
    res.render('page04', data);
})

router.post("/logout", async function(req, res, next){
    req.session.destroy();
    res.redirect('/');
})

module.exports = router;