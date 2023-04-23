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
        title:'PokerChron|06',
    }
    res.render('page06_1', data);
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
        //プレイヤーが選択したハンドヒストリーのデータを動画で再現する
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
    }else if(req.body.methodpass == "5"){
        //ユーザが選択したデータをテキストに編集する。
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
    }else if(req.body.methodpass == "6"){
        //ユーザが編集したいハンドヒストリーのデータを編集できるように新しく編集ページを開く
        handid = Number(req.body.id);
        //ハンドヒストリーのデータをセッションに保存しておく
        req.session.editid = {
            id:handid,
        }
        const setting = await prisma.historysetting.findFirst({where:{handid:handid}});
        if(setting.players == "2"){
            const data = {
                title:'PokerChron|05_2_2',
            }
            res.render('page05_2_2_edit', data);
        }else if(setting.players == "6"){
            const data = {
                title:'PokerChron|05_2_6',
            }
            res.render('page05_2_6_edit', data);
        }else if(setting.players == "9"){
            const data = {
                title:'PokerChron|05_2_9',
            }
            res.render('page05_2_9_edit', data);
        }
        
    }else if(req.body.methodpass == "7"){
        //ユーザが消したいデータを受け取り、そのデータを削除する。
        handid = Number(req.body.id);
        await prisma.handhistory.delete({where:{id:handid}});
        res.redirect('page06_1');
    }
})

module.exports = router;