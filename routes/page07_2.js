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
    res.render('page07_2', data);
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
        //ハンドのレビューを表示するために必要な情報を送る
        handid = Number(req.body.id);
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
    }else if(req.body.methodpass == "2"){
        //プレイヤーが保存しているハンドヒストリーのリストをつくる為に必要なデータを送る
        userid = 0;
        if(req.session.userinfo != undefined){
            userid = req.session.userinfo.id;
        }
        const handhistory = await prisma.handhistory.findMany({where:{userid:userid}});
        const result = {
            handhistory:handhistory
        }
        res.send(result);
    }else if(req.body.methodpass == "3"){
        //プレイヤーの検索したいワードに応じて表示するハンドヒストリーのリストを変更する
        userid = 0;
        if(req.session.userinfo != undefined){
            userid = req.session.userinfo.id;
        }
        const word = req.body.word;
        const handhistory = await prisma.handhistory.findMany({where:{
            OR:[
                {name:{contains:word}}, {comment:{contains:word}}, {tag1:{contains:word}}, {tag2:{contains:word}}, {tag3:{contains:word}},
            ],
            AND:[{userid:userid}]
        }})
        const result = {
            handhistory:handhistory
        }
        res.send(result);
    }else if(req.body.methodpass == "4"){
        //プレイヤーが選択したハンドヒストリーのリストを表示する
        userid = 0;
        if(req.session.userinfo != undefined){
            userid = req.session.userinfo.id;
        }
        const search_list = req.body.search_list;
        let result_list = [];
        for(let i = 0; i < search_list.length; i++){
            let handhistory = await prisma.handhistory.findFirst({where:{id:search_list[i]}});
            result_list.push(handhistory);
        }
        const result = {
            handhistory:result_list,
        }
        res.send(result);
    }else if(req.body.methodpass == "5"){
        //プレイヤーが選択したハンドヒストリーをもとに、リストを生成する。
        const selected = req.body.selected;
        const date = new Date;
        const makedate = date.getFullYear() + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + ("0" + date.getDate()).slice(-2);
        const historylist = await prisma.historylist.create({
            data:{userid:req.session.userinfo.id, name:req.body.list_name, date:makedate, }
        })
        const listid = historylist.id;
        for(item of selected){
            await prisma.historylistcontente.create({
                data:{listid:listid, handid:item, }
            })
        }
        const result = {};
        res.send(result);
    }
})

module.exports = router;