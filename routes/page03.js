const express = require('express');
const router = express.Router();

const ps = require('@prisma/client')
const prisma = new ps.PrismaClient()

router.get('/', function(req, res, next){
    const data = {
        title:'PokerChron|03',
    }
    res.render('page03', data);
})

router.post('/', async function(req, res, next){
    const pw = req.body.pw;
    const name = req.body.id;
    const user = await prisma.user.findMany({where:{name:name}});
    if(user.length > 0){
        const data = {
            title:'PokerChron|03',
            msg:'すでにこのユーザIDは登録されています。申し訳ありませんが、他のユーザ名を設定してください。',
            path:'./page03',
            btnmsg:'ユーザ登録画面へ戻る'
        }
        res.render('page03_result', data);
    }else{
        let nickname = "Guest";
        const random = String(Math.floor(Math.random() * 100000));
        nickname += random;
        await prisma.user.create({
            data:{ name: name, nickname: nickname, password: pw}
        })
        const data = {
            title:'PokerChron|03',
            msg:'ユーザ登録が完了しました。',
            path:'./page01',
            btnmsg:'トップページへ戻る'
        }
        res.render('page03_result', data);
    }
})



module.exports = router;