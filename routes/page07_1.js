const express = require('express');
const router = express.Router();

const ps = require('@prisma/client');
const { getPrismaClient } = require('@prisma/client/runtime');
const session = require('express-session');
const { signedCookie } = require('cookie-parser');
const prisma = new ps.PrismaClient()

router.get('/', async function(req, res, next){
    if(req.session.userinfo == undefined){
        const data = {
            title:'PokerChron',
        }
        res.render('timeout',data)
        return; 
    }
    const data = {
        title:'PokerChron|07',
    }
    res.render('page07_1', data);
})

router.post('/', async function(req, res, next){
    if(req.session.userinfo == undefined){
        const data = {
            title:'PokerChron',
        }
        res.render('timeout',data)
        return; 
    }

    if(req.body.methodpass == "1"){
        const historylist = await prisma.historylist.findMany({where:{userid:req.session.userinfo.id}});
        const result = {
            historylist:historylist,
        }
        res.send(result);
    }else if(req.body.methodpass == "2"){
        const list = req.body.list;
        let resultlist = [];
        let listcontents_array = [];
        for(let i = 0; i < list.length; i++){
            let listcontentes = await prisma.historylistcontente.findMany({where:{listid:list[i].id}});
            let handhistories = [];
            for(item of listcontentes){
                let handid = item.handid;
                let handhistory = await prisma.handhistory.findFirst({where:{id:handid}});
                handhistories.push(handhistory);
            }
            resultlist.push(handhistories);
            listcontents_array.push(listcontentes);
        }
        const result = {
            resultlist:resultlist,
            listcontentes:listcontents_array,
        };
        res.send(result);
    }else if(req.body.methodpass == "3"){
        //テキスト表示
        handid = Number(req.body.handid);
        const board = await prisma.historyboard.findFirst({where:{handid:handid}});
        const setting = await prisma.historysetting.findFirst({where:{handid:handid}});
        const players = await prisma.historyplayer.findMany({where:{handid:handid}});
        const preflop = await prisma.historypreflop.findMany({where:{handid:handid}});
        const flop = await prisma.historyflop.findMany({where:{handid:handid}});
        const turn = await prisma.historyturn.findMany({where:{handid:handid}});
        const river = await prisma.historyriver.findMany({where:{handid:handid}});
    
        const result = {
            setting:setting,
            board:board,
            players:players,
            preflop:preflop,
            flop:flop,
            turn:turn,
            river:river,
        }
    
        res.send(result);
    }else if(req.body.methodpass == "4"){
        //動画作成
        handid = Number(req.body.handid);
        const board = await prisma.historyboard.findFirst({where:{handid:handid}});
        const setting = await prisma.historysetting.findFirst({where:{handid:handid}});
        const players = await prisma.historyplayer.findMany({where:{handid:handid}});
        const preflop = await prisma.historypreflop.findMany({where:{handid:handid}});
        const flop = await prisma.historyflop.findMany({where:{handid:handid}});
        const turn = await prisma.historyturn.findMany({where:{handid:handid}});
        const river = await prisma.historyriver.findMany({where:{handid:handid}});

        const result = {
            setting:setting,
            board:board,
            players:players,
            preflop:preflop,
            flop:flop,
            turn:turn,
            river:river,
        }
    
        res.send(result);
    }
})
router.post('/delete', async function(req, res, next){
    id = Number(req.body.list_id);
    await prisma.historylist.delete({where:{id:id}});
    res.redirect('/page07_1');
})

router.post('/delete_listcontentes', async function(req, res, next){
    id = Number(req.body.id);
    await prisma.historylistcontente.delete({where:{id:id}});
    res.redirect('/page07_1');
})
module.exports = router;