const express = require('express');
const router = express.Router();

const ps = require('@prisma/client')
const prisma = new ps.PrismaClient()

router.get('/', function(req, res, next){
    const data = {
        title:'PokerChron|02',
        msg:'',
    }
    res.render('page02', data);
})

router.post('/', async function(req, res, next){
    const name = req.body.id;
    const password = req.body.pw;
    const user = await prisma.user.findMany({ where:{name:name}});
    if(user == []){
        const data = {
            title:'PokerChron|02',
            msg:'※ユーザID、またはパスワードが違います。',
        }
        res.render('page02', data);
    }else{
        let research = false;
        let userdata;
        user.forEach(function(value){
            if(value.password == password){
                research = true;
                userdata = value;
            } 
        })
        if(research == false){
            const data = {
                title:'PokerChron|02',
                msg:'※ユーザID、またはパスワードが違います。',
            }
            res.render('page02', data);
        }else{
            req.session.userinfo = {
                id:userdata.id,
                name:userdata.nickname,
            }
            const data = {
                title:'PokerChron|04',
                username:req.session.userinfo.name,
            }
            res.render('page04', data);
        }
    }
})

//IDとパスワードをsha256の文字列に変換する関数
var crypto = require('crypto');
async function digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message);                           // (utf-8 の) Uint8Array にエンコードする
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // メッセージをハッシュする
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // バッファーをバイト列に変換する
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // バイト列を16進文字列に変換する
    return hashHex;
}
module.exports = router;