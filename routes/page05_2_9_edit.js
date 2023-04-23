const express = require('express');
const router = express.Router();

const ps = require('@prisma/client');
const { getPrismaClient } = require('@prisma/client/runtime');
const session = require('express-session');
const prisma = new ps.PrismaClient()

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
    res.render('page05_2_9_edit', data);
})

router.post('/', async function(req, res, next){
    if(req.session.userinfo == undefined){
        const data = {
            title:'PokerChron',
        }
        res.render('timeout',data)
        return; 
    }
    if(req.body.methodpass == "load"){
        if(req.session.editid == undefined){
            const result = {
                msg:"none",
            }
            res.send(result);
        }else{
            let handid = Number(req.session.editid.id);
            const handhistory = await prisma.handhistory.findFirst({where:{id:handid}});
            const board = await prisma.historyboard.findFirst({where:{handid:handid}});
            const setting = await prisma.historysetting.findFirst({where:{handid:handid}});
            const players = await prisma.historyplayer.findMany({where:{handid:handid}});
            const preflop = await prisma.historypreflop.findMany({where:{handid:handid}});
            const flop = await prisma.historyflop.findMany({where:{handid:handid}});
            const turn = await prisma.historyturn.findMany({where:{handid:handid}});
            const river = await prisma.historyriver.findMany({where:{handid:handid}});

            const result = {
                msg:"",
                handhistory:handhistory,
                board:board,
                setting:setting,
                players:players,
                preflop:preflop,
                flop:flop,
                turn:turn,
                river:river,
            }
            res.send(result);
        }
        return;
    }
    let name;
    if(req.body.historyname == ""){
        let date = new Date();
        name = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2)
    }else{
        name = req.body.historyname;
    }

    const preflop_array = [{w:"",a:"",h:""},
        {w:req.body.pfw01,a:req.body.pfa01,h:req.body.pfh01},{w:req.body.pfw02,a:req.body.pfa02,h:req.body.pfh02},{w:req.body.pfw03,a:req.body.pfa03,h:req.body.pfh03},
        {w:req.body.pfw04,a:req.body.pfa04,h:req.body.pfh04},{w:req.body.pfw05,a:req.body.pfa05,h:req.body.pfh05},{w:req.body.pfw06,a:req.body.pfa06,h:req.body.pfh06},
        {w:req.body.pfw07,a:req.body.pfa07,h:req.body.pfh07},{w:req.body.pfw08,a:req.body.pfa08,h:req.body.pfh08},{w:req.body.pfw09,a:req.body.pfa09,h:req.body.pfh09},
        {w:req.body.pfw10,a:req.body.pfa10,h:req.body.pfh10},{w:req.body.pfw11,a:req.body.pfa11,h:req.body.pfh11},{w:req.body.pfw12,a:req.body.pfa12,h:req.body.pfh12},
        {w:req.body.pfw13,a:req.body.pfa13,h:req.body.pfh13},{w:req.body.pfw14,a:req.body.pfa14,h:req.body.pfh14},{w:req.body.pfw15,a:req.body.pfa15,h:req.body.pfh15},
        {w:req.body.pfw16,a:req.body.pfa16,h:req.body.pfh16},{w:req.body.pfw17,a:req.body.pfa17,h:req.body.pfh17},{w:req.body.pfw18,a:req.body.pfa18,h:req.body.pfh18},
        {w:req.body.pfw19,a:req.body.pfa19,h:req.body.pfh19},{w:req.body.pfw20,a:req.body.pfa20,h:req.body.pfh20},{w:req.body.pfw21,a:req.body.pfa21,h:req.body.pfh21},
        {w:req.body.pfw22,a:req.body.pfa22,h:req.body.pfh22},{w:req.body.pfw23,a:req.body.pfa23,h:req.body.pfh23},{w:req.body.pfw24,a:req.body.pfa24,h:req.body.pfh24},
        {w:req.body.pfw25,a:req.body.pfa25,h:req.body.pfh25},{w:req.body.pfw26,a:req.body.pfa26,h:req.body.pfh26},{w:req.body.pfw27,a:req.body.pfa27,h:req.body.pfh27},
        {w:req.body.pfw28,a:req.body.pfa28,h:req.body.pfh28},{w:req.body.pfw29,a:req.body.pfa29,h:req.body.pfh29}
    ]

    const flop_array = [{w:"",a:"",h:""},
        {w:req.body.fw01,a:req.body.fa01,h:req.body.fh01},{w:req.body.fw02,a:req.body.fa02,h:req.body.fh02},{w:req.body.fw03,a:req.body.fa03,h:req.body.fh03},
        {w:req.body.fw04,a:req.body.fa04,h:req.body.fh04},{w:req.body.fw05,a:req.body.fa05,h:req.body.fh05},{w:req.body.fw06,a:req.body.fa06,h:req.body.fh06},
        {w:req.body.fw07,a:req.body.fa07,h:req.body.fh07},{w:req.body.fw08,a:req.body.fa08,h:req.body.fh08},{w:req.body.fw09,a:req.body.fa09,h:req.body.fh09},
        {w:req.body.fw10,a:req.body.fa10,h:req.body.fh10},{w:req.body.fw11,a:req.body.fa11,h:req.body.fh11},{w:req.body.fw12,a:req.body.fa12,h:req.body.fh12},
        {w:req.body.fw13,a:req.body.fa13,h:req.body.fh13},{w:req.body.fw14,a:req.body.fa14,h:req.body.fh14},{w:req.body.fw15,a:req.body.fa15,h:req.body.fh15},
        {w:req.body.fw16,a:req.body.fa16,h:req.body.fh16},{w:req.body.fw17,a:req.body.fa17,h:req.body.fh17},{w:req.body.fw18,a:req.body.fa18,h:req.body.fh18},
        {w:req.body.fw19,a:req.body.fa19,h:req.body.fh19},{w:req.body.fw20,a:req.body.fa20,h:req.body.fh20},{w:req.body.fw21,a:req.body.fa21,h:req.body.fh21},
        {w:req.body.fw22,a:req.body.fa22,h:req.body.fh22},{w:req.body.fw23,a:req.body.fa23,h:req.body.fh23},{w:req.body.fw24,a:req.body.fa24,h:req.body.fh24},
        {w:req.body.fw25,a:req.body.fa25,h:req.body.fh25},{w:req.body.fw26,a:req.body.fa26,h:req.body.fh26},{w:req.body.fw27,a:req.body.fa27,h:req.body.fh27},
        {w:req.body.fw28,a:req.body.fa28,h:req.body.fh28},{w:req.body.fw29,a:req.body.fa29,h:req.body.fh29}
    ]

    const turn_array = [{w:"",a:"",h:""},
        {w:req.body.tw01,a:req.body.ta01,h:req.body.th01},{w:req.body.tw02,a:req.body.ta02,h:req.body.th02},{w:req.body.tw03,a:req.body.ta03,h:req.body.th03},
        {w:req.body.tw04,a:req.body.ta04,h:req.body.th04},{w:req.body.tw05,a:req.body.ta05,h:req.body.th05},{w:req.body.tw06,a:req.body.ta06,h:req.body.th06},
        {w:req.body.tw07,a:req.body.ta07,h:req.body.th07},{w:req.body.tw08,a:req.body.ta08,h:req.body.th08},{w:req.body.tw09,a:req.body.ta09,h:req.body.th09},
        {w:req.body.tw10,a:req.body.ta10,h:req.body.th10},{w:req.body.tw11,a:req.body.ta11,h:req.body.th11},{w:req.body.tw12,a:req.body.ta12,h:req.body.th12},
        {w:req.body.tw13,a:req.body.ta13,h:req.body.th13},{w:req.body.tw14,a:req.body.ta14,h:req.body.th14},{w:req.body.tw15,a:req.body.ta15,h:req.body.th15},
        {w:req.body.tw16,a:req.body.ta16,h:req.body.th16},{w:req.body.tw17,a:req.body.ta17,h:req.body.th17},{w:req.body.tw18,a:req.body.ta18,h:req.body.th18},
        {w:req.body.tw19,a:req.body.ta19,h:req.body.th19},{w:req.body.tw20,a:req.body.ta20,h:req.body.th20},{w:req.body.tw21,a:req.body.ta21,h:req.body.th21},
        {w:req.body.tw22,a:req.body.ta22,h:req.body.th22},{w:req.body.tw23,a:req.body.ta23,h:req.body.th23},{w:req.body.tw24,a:req.body.ta24,h:req.body.th24},
        {w:req.body.tw25,a:req.body.ta25,h:req.body.th25},{w:req.body.tw26,a:req.body.ta26,h:req.body.th26},{w:req.body.tw27,a:req.body.ta27,h:req.body.th27},
        {w:req.body.tw28,a:req.body.ta28,h:req.body.th28},{w:req.body.tw29,a:req.body.ta29,h:req.body.th29}
    ]

    const river_array = [{w:"",a:"",h:""},
        {w:req.body.rw01,a:req.body.ra01,h:req.body.rh01},{w:req.body.rw02,a:req.body.ra02,h:req.body.rh02},{w:req.body.rw03,a:req.body.ra03,h:req.body.rh03},
        {w:req.body.rw04,a:req.body.ra04,h:req.body.rh04},{w:req.body.rw05,a:req.body.ra05,h:req.body.rh05},{w:req.body.rw06,a:req.body.ra06,h:req.body.rh06},
        {w:req.body.rw07,a:req.body.ra07,h:req.body.rh07},{w:req.body.rw08,a:req.body.ra08,h:req.body.rh08},{w:req.body.rw09,a:req.body.ra09,h:req.body.rh09},
        {w:req.body.rw10,a:req.body.ra10,h:req.body.rh10},{w:req.body.rw11,a:req.body.ra11,h:req.body.rh11},{w:req.body.rw12,a:req.body.ra12,h:req.body.rh12},
        {w:req.body.rw13,a:req.body.ra13,h:req.body.rh13},{w:req.body.rw14,a:req.body.ra14,h:req.body.rh14},{w:req.body.rw15,a:req.body.ra15,h:req.body.rh15},
        {w:req.body.rw16,a:req.body.ra16,h:req.body.rh16},{w:req.body.rw17,a:req.body.ra17,h:req.body.rh17},{w:req.body.rw18,a:req.body.ra18,h:req.body.rh18},
        {w:req.body.rw19,a:req.body.ra19,h:req.body.rh19},{w:req.body.rw20,a:req.body.ra20,h:req.body.rh20},{w:req.body.rw21,a:req.body.ra21,h:req.body.rh21},
        {w:req.body.rw22,a:req.body.ra22,h:req.body.rh22},{w:req.body.rw23,a:req.body.ra23,h:req.body.rh23},{w:req.body.rw24,a:req.body.ra24,h:req.body.rh24},
        {w:req.body.rw25,a:req.body.ra25,h:req.body.rh25},{w:req.body.rw26,a:req.body.ra26,h:req.body.rh26},{w:req.body.rw27,a:req.body.ra27,h:req.body.rh27},
        {w:req.body.rw28,a:req.body.ra28,h:req.body.rh28},{w:req.body.rw29,a:req.body.ra29,h:req.body.rh29}
    ]
    let handid = Number(req.session.editid.id);

    await prisma.handhistory.update({
        where:{id:handid},
        data:{
            name:name,
            comment:req.body.comment,
            tag1:req.body.tag1,
            tag2:req.body.tag2,
            tag3:req.body.tag3,
        }
    })
    let setting = await prisma.historysetting.findFirst({where:{handid:handid}});
    let setting_id = setting.id;
    await prisma.historysetting.update({
        where:{id:setting_id},
        data:{
            players:req.body.count,
            game:req.body.game,
            effectivestack:req.body.stack,
            anteplayer:req.body.whoante,
            anteamount:req.body.howante,
            uni:req.body.uni,
            sblind:req.body.sblind,
            bblind:req.body.bblind,
            stradler:req.body.stradler,
        }
    })
    let players = await prisma.historyplayer.findFirst({where:{AND:[{handid:handid}, {position:"UTG"}]}});
    let players_id = players.id;
    await prisma.historyplayer.update({
        where:{id:players_id},
        data:{
            name:req.body.utg_name,
            card1:req.body.utg_card01,
            card2:req.body.utg_card02,
            stack:req.body.utg_stack,
        }
    })
    players = await prisma.historyplayer.findFirst({where:{AND:[{handid:handid}, {position:"EP1"}]}});
    players_id = players.id;
    await prisma.historyplayer.update({
        where:{id:players_id},
        data:{
            name:req.body.ep1_name,
            card1:req.body.ep1_card01,
            card2:req.body.ep1_card02,
            stack:req.body.ep1_stack,
        }
    })
    players = await prisma.historyplayer.findFirst({where:{AND:[{handid:handid}, {position:"EP2"}]}});
    players_id = players.id;
    await prisma.historyplayer.update({
        where:{id:players_id},
        data:{
            name:req.body.ep2_name,
            card1:req.body.ep2_card01,
            card2:req.body.ep2_card02,
            stack:req.body.ep2_stack,
        }
    })
    players = await prisma.historyplayer.findFirst({where:{AND:[{handid:handid}, {position:"LJ"}]}});
    players_id = players.id;
    await prisma.historyplayer.update({
        where:{id:players_id},
        data:{
            name:req.body.lj_name,
            card1:req.body.lj_card01,
            card2:req.body.lj_card02,
            stack:req.body.lj_stack,
        }
    })
    players = await prisma.historyplayer.findFirst({where:{AND:[{handid:handid}, {position:"HJ"}]}});
    players_id = players.id;
    await prisma.historyplayer.update({
        where:{id:players_id},
        data:{
            name:req.body.hj_name,
            card1:req.body.hj_card01,
            card2:req.body.hj_card02,
            stack:req.body.hj_stack,
        }
    })
    players = await prisma.historyplayer.findFirst({where:{AND:[{handid:handid}, {position:"CO"}]}});
    players_id = players.id;
    await prisma.historyplayer.update({
        where:{id:players_id},
        data:{
            name:req.body.co_name,
            card1:req.body.co_card01,
            card2:req.body.co_card02,
            stack:req.body.co_stack,
        }
    })
    players = await prisma.historyplayer.findFirst({where:{AND:[{handid:handid}, {position:"BTN"}]}});
    players_id = players.id;
    await prisma.historyplayer.update({
        where:{id:players_id},
        data:{
            name:req.body.btn_name,
            card1:req.body.btn_card01,
            card2:req.body.btn_card02,
            stack:req.body.btn_stack,
        }
    })
    players = await prisma.historyplayer.findFirst({where:{AND:[{handid:handid}, {position:"SB"}]}});
    players_id = players.id;
    await prisma.historyplayer.update({
        where:{id:players_id},
        data:{
            name:req.body.sb_name,
            card1:req.body.sb_card01,
            card2:req.body.sb_card02,
            stack:req.body.sb_stack,
        }
    })
    players = await prisma.historyplayer.findFirst({where:{AND:[{handid:handid}, {position:"BB"}]}});
    players_id = players.id;
    await prisma.historyplayer.update({
        where:{id:players_id},
        data:{
            name:req.body.bb_name,
            card1:req.body.bb_card01,
            card2:req.body.bb_card02,
            stack:req.body.bb_stack,
        }
    })
    let board = await prisma.historyboard.findFirst({where:{handid:handid}});
    let board_id = board.id;
    await prisma.historyboard.update({
        where:{id:board_id},
        data:{
            card1:req.body.bcard01,
            card2:req.body.bcard02,
            card3:req.body.bcard03,
            card4:req.body.bcard04,
            card5:req.body.bcard05,
        }
    })

    for(let i=1; i < 30; i++){
        let preflop = await prisma.historypreflop.findFirst({where:{handid:handid,num:i}});
        let preflop_id = preflop.id;
        await prisma.historypreflop.update({
            where:{id:preflop_id},
            data:{
                position:preflop_array[i].w,
                action:preflop_array[i].a,
                chip:preflop_array[i].h,
            }
        })
    }

    for(let i=1; i < 30; i++){
        let flop = await prisma.historyflop.findFirst({where:{handid:handid,num:i}});
        let flop_id = flop.id;
        await prisma.historyflop.update({
            where:{id:flop_id},
            data:{
                position:flop_array[i].w,
                action:flop_array[i].a,
                chip:flop_array[i].h,
            }
        })
    }

    for(let i=1; i < 30; i++){
        let turn = await prisma.historyturn.findFirst({where:{handid:handid,num:i}});
        let turn_id = turn.id;
        await prisma.historyturn.update({
            where:{id:turn_id},
            data:{
                position:turn_array[i].w,
                action:turn_array[i].a,
                chip:turn_array[i].h,
            }
        })
    }

    for(let i=1; i < 30; i++){
        let river = await prisma.historyriver.findFirst({where:{handid:handid,num:i}});
        let river_id = river.id;
        await prisma.historyriver.update({
            where:{id:river_id},
            data:{
                position:river_array[i].w,
                action:river_array[i].a,
                chip:river_array[i].h,
            }
        })
    }
    const data = {
        title:'PokerChron|05-3',
    }
    res.render('page05_3', data);
})

// router.post('/', function(req, res, next){
//     const data = {
//         title:'PokerChron|05-3',
//         name:req.body.historyname,
//         comment:req.body.comment,
//         count:req.body.count,
//         game:req.body.game,
//         stack:req.body.stack,
//         uni:req.body.uni,
//         sblind:req.body.sblind,
//         bblind:req.body.bblind,
//         whoante:req.body.whoante,
//         howante:req.body.howante,
//         utg_name:req.body.utg_name,
//         utg_card01:req.body.utg_card01,
//         utg_card02:req.body.utg_card02,
//         utg_stack:req.body.utg_stack,
//         ep1_name:req.body.ep1_name,
//         ep1_card01:req.body.ep1_card01,
//         ep1_card02:req.body.ep1_card02,
//         ep1_stack:req.body.ep1_stack,
//         ep2_name:req.body.ep2_name,
//         ep2_card01:req.body.ep2_card01,
//         ep2_card02:req.body.ep2_card02,
//         ep2_stack:req.body.ep2_stack,
//         lj_name:req.body.lj_name,
//         lj_card01:req.body.lj_card01,
//         lj_card02:req.body.lj_card02,
//         lj_stack:req.body.lj_stack,
//         hj_name:req.body.hj_name,
//         hj_card01:req.body.hj_card01,
//         hj_card02:req.body.hj_card02,
//         hj_stack:req.body.hj_stack,
//         lj_name:req.body.lj_name,
//         lj_card01:req.body.lj_card01,
//         lj_card02:req.body.lj_card02,
//         lj_stack:req.body.lj_stack,
//         co_name:req.body.co_name,
//         co_card01:req.body.co_card01,
//         co_card02:req.body.co_card02,
//         co_stack:req.body.co_stack,
//         btn_name:req.body.btn_name,
//         btn_card01:req.body.btn_card01,
//         btn_card02:req.body.btn_card02,
//         btn_stack:req.body.btn_stack,
//         sb_name:req.body.sb_name,
//         sb_card01:req.body.sb_card01,
//         sb_card02:req.body.sb_card02,
//         sb_stack:req.body.sb_stack,
//         bb_name:req.body.bb_name,
//         bb_card01:req.body.bb_card01,
//         bb_card02:req.body.bb_card02,
//         bb_stack:req.body.bb_stack,
//         bcard01:req.body.bcard01,
//         bcard02:req.body.bcard02,
//         bcard03:req.body.bcard03,
//         bcard04:req.body.bcard04,
//         bcard05:req.body.bcard05,
//         pfw01:req.body.pfw01,
//         pfa01:req.body.pfa01,
//         pfh01:req.body.pfh01,
//         pfw02:req.body.pfw02,
//         pfa02:req.body.pfa02,
//         pfh02:req.body.pfh02,
//         pfw03:req.body.pfw03,
//         pfa03:req.body.pfa03,
//         pfh03:req.body.pfh03,
//         pfw04:req.body.pfw04,
//         pfa04:req.body.pfa04,
//         pfh04:req.body.pfh04,
//         pfw05:req.body.pfw05,
//         pfa05:req.body.pfa05,
//         pfh05:req.body.pfh05,
//         pfw06:req.body.pfw06,
//         pfa06:req.body.pfa06,
//         pfh06:req.body.pfh06,
//         pfw07:req.body.pfw07,
//         pfa07:req.body.pfa07,
//         pfh07:req.body.pfh07,
//         pfw08:req.body.pfw08,
//         pfa08:req.body.pfa08,
//         pfh08:req.body.pfh08,
//         pfw09:req.body.pfw09,
//         pfa09:req.body.pfa09,
//         pfh09:req.body.pfh09,
//         pfw10:req.body.pfw10,
//         pfa10:req.body.pfa10,
//         pfh10:req.body.pfh10,
//         pfw11:req.body.pfw11,
//         pfa11:req.body.pfa11,
//         pfh11:req.body.pfh11,
//         pfw12:req.body.pfw12,
//         pfa12:req.body.pfa12,
//         pfh12:req.body.pfh12,
//         pfw13:req.body.pfw13,
//         pfa13:req.body.pfa13,
//         pfh13:req.body.pfh13,
//         pfw14:req.body.pfw14,
//         pfa14:req.body.pfa14,
//         pfh14:req.body.pfh14,
//         pfw15:req.body.pfw15,
//         pfa15:req.body.pfa15,
//         pfh15:req.body.pfh15,
//         pfw16:req.body.pfw16,
//         pfa16:req.body.pfa16,
//         pfh16:req.body.pfh16,
//         pfw17:req.body.pfw17,
//         pfa17:req.body.pfa17,
//         pfh17:req.body.pfh17,
//         pfw18:req.body.pfw18,
//         pfa18:req.body.pfa18,
//         pfh18:req.body.pfh18,
//         pfw19:req.body.pfw19,
//         pfa19:req.body.pfa19,
//         pfh19:req.body.pfh19,
//         pfw20:req.body.pfw20,
//         pfa20:req.body.pfa20,
//         pfh20:req.body.pfh20,
//         pfw21:req.body.pfw21,
//         pfa21:req.body.pfa21,
//         pfh21:req.body.pfh21,
//         pfw22:req.body.pfw22,
//         pfa22:req.body.pfa22,
//         pfh22:req.body.pfh22,
//         pfw23:req.body.pfw23,
//         pfa23:req.body.pfa23,
//         pfh23:req.body.pfh23,
//         pfw24:req.body.pfw24,
//         pfa24:req.body.pfa24,
//         pfh24:req.body.pfh24,
//         pfw25:req.body.pfw25,
//         pfa25:req.body.pfa25,
//         pfh25:req.body.pfh25,
//         pfw26:req.body.pfw26,
//         pfa26:req.body.pfa26,
//         pfh26:req.body.pfh26,
//         pfw27:req.body.pfw27,
//         pfa27:req.body.pfa27,
//         pfh27:req.body.pfh27,
//         pfw28:req.body.pfw28,
//         pfa28:req.body.pfa28,
//         pfh28:req.body.pfh28,
//         pfw29:req.body.pfw29,
//         pfa29:req.body.pfa29,
//         pfh29:req.body.pfh29,
//         fw01:req.body.fw01,
//         fa01:req.body.fa01,
//         fh01:req.body.fh01,
//         fw02:req.body.fw02,
//         fa02:req.body.fa02,
//         fh02:req.body.fh02,
//         fw03:req.body.fw03,
//         fa03:req.body.fa03,
//         fh03:req.body.fh03,
//         fw04:req.body.fw04,
//         fa04:req.body.fa04,
//         fh04:req.body.fh04,
//         fw05:req.body.fw05,
//         fa05:req.body.fa05,
//         fh05:req.body.fh05,
//         fw06:req.body.fw06,
//         fa06:req.body.fa06,
//         fh06:req.body.fh06,
//         fw07:req.body.fw07,
//         fa07:req.body.fa07,
//         fh07:req.body.fh07,
//         fw08:req.body.fw08,
//         fa08:req.body.fa08,
//         fh08:req.body.fh08,
//         fw09:req.body.fw09,
//         fa09:req.body.fa09,
//         fh09:req.body.fh09,
//         fw10:req.body.fw10,
//         fa10:req.body.fa10,
//         fh10:req.body.fh10,
//         fw11:req.body.fw11,
//         fa11:req.body.fa11,
//         fh11:req.body.fh11,
//         fw12:req.body.fw12,
//         fa12:req.body.fa12,
//         fh12:req.body.fh12,
//         fw13:req.body.fw13,
//         fa13:req.body.fa13,
//         fh13:req.body.fh13,
//         fw14:req.body.fw14,
//         fa14:req.body.fa14,
//         fh14:req.body.fh14,
//         fw15:req.body.fw15,
//         fa15:req.body.fa15,
//         fh15:req.body.fh15,
//         fw16:req.body.fw16,
//         fa16:req.body.fa16,
//         fh16:req.body.fh16,
//         fw17:req.body.fw17,
//         fa17:req.body.fa17,
//         fh17:req.body.fh17,
//         fw18:req.body.fw18,
//         fa18:req.body.fa18,
//         fh18:req.body.fh18,
//         fw19:req.body.fw19,
//         fa19:req.body.fa19,
//         fh19:req.body.fh19,
//         fw20:req.body.fw20,
//         fa20:req.body.fa20,
//         fh20:req.body.fh20,
//         fw21:req.body.fw21,
//         fa21:req.body.fa21,
//         fh21:req.body.fh21,
//         fw22:req.body.fw22,
//         fa22:req.body.fa22,
//         fh22:req.body.fh22,
//         fw23:req.body.fw23,
//         fa23:req.body.fa23,
//         fh23:req.body.fh23,
//         fw24:req.body.fw24,
//         fa24:req.body.fa24,
//         fh24:req.body.fh24,
//         fw25:req.body.fw25,
//         fa25:req.body.fa25,
//         fh25:req.body.fh25,
//         fw26:req.body.fw26,
//         fa26:req.body.fa26,
//         fh26:req.body.fh26,
//         fw27:req.body.fw27,
//         fa27:req.body.fa27,
//         fh27:req.body.fh27,
//         fw28:req.body.fw28,
//         fa28:req.body.fa28,
//         fh28:req.body.fh28,
//         fw29:req.body.fw29,
//         fa29:req.body.fa29,
//         fh29:req.body.fh29,
//         tw01:req.body.tw01,
//         ta01:req.body.ta01,
//         th01:req.body.th01,
//         tw02:req.body.tw02,
//         ta02:req.body.ta02,
//         th02:req.body.th02,
//         tw03:req.body.tw03,
//         ta03:req.body.ta03,
//         th03:req.body.th03,
//         tw04:req.body.tw04,
//         ta04:req.body.ta04,
//         th04:req.body.th04,
//         tw05:req.body.tw05,
//         ta05:req.body.ta05,
//         th05:req.body.th05,
//         tw06:req.body.tw06,
//         ta06:req.body.ta06,
//         th06:req.body.th06,
//         tw07:req.body.tw07,
//         ta07:req.body.ta07,
//         th07:req.body.th07,
//         tw08:req.body.tw08,
//         ta08:req.body.ta08,
//         th08:req.body.th08,
//         tw09:req.body.tw09,
//         ta09:req.body.ta09,
//         th09:req.body.th09,
//         tw10:req.body.tw10,
//         ta10:req.body.ta10,
//         th10:req.body.th10,
//         tw11:req.body.tw11,
//         ta11:req.body.ta11,
//         th11:req.body.th11,
//         tw12:req.body.tw12,
//         ta12:req.body.ta12,
//         th12:req.body.th12,
//         tw13:req.body.tw13,
//         ta13:req.body.ta13,
//         th13:req.body.th13,
//         tw14:req.body.tw14,
//         ta14:req.body.ta14,
//         th14:req.body.th14,
//         tw15:req.body.tw15,
//         ta15:req.body.ta15,
//         th15:req.body.th15,
//         tw16:req.body.tw16,
//         ta16:req.body.ta16,
//         th16:req.body.th16,
//         tw17:req.body.tw17,
//         ta17:req.body.ta17,
//         th17:req.body.th17,
//         tw18:req.body.tw18,
//         ta18:req.body.ta18,
//         th18:req.body.th18,
//         tw19:req.body.tw19,
//         ta19:req.body.ta19,
//         th19:req.body.th19,
//         tw20:req.body.tw20,
//         ta20:req.body.ta20,
//         th20:req.body.th20,
//         tw21:req.body.tw21,
//         ta21:req.body.ta21,
//         th21:req.body.th21,
//         tw22:req.body.tw22,
//         ta22:req.body.ta22,
//         th22:req.body.th22,
//         tw23:req.body.tw23,
//         ta23:req.body.ta23,
//         th23:req.body.th23,
//         tw24:req.body.tw24,
//         ta24:req.body.ta24,
//         th24:req.body.th24,
//         tw25:req.body.tw25,
//         ta25:req.body.ta25,
//         th25:req.body.th25,
//         tw26:req.body.tw26,
//         ta26:req.body.ta26,
//         th26:req.body.th26,
//         tw27:req.body.tw27,
//         ta27:req.body.ta27,
//         th27:req.body.th27,
//         tw28:req.body.tw28,
//         ta28:req.body.ta28,
//         th28:req.body.th28,
//         tw29:req.body.tw29,
//         ta29:req.body.ta29,
//         th29:req.body.th29,
//         rw01:req.body.rw01,
//         ra01:req.body.ra01,
//         rh01:req.body.rh01,
//         rw02:req.body.rw02,
//         ra02:req.body.ra02,
//         rh02:req.body.rh02,
//         rw03:req.body.rw03,
//         ra03:req.body.ra03,
//         rh03:req.body.rh03,
//         rw04:req.body.rw04,
//         ra04:req.body.ra04,
//         rh04:req.body.rh04,
//         rw05:req.body.rw05,
//         ra05:req.body.ra05,
//         rh05:req.body.rh05,
//         rw06:req.body.rw06,
//         ra06:req.body.ra06,
//         rh06:req.body.rh06,
//         rw07:req.body.rw07,
//         ra07:req.body.ra07,
//         rh07:req.body.rh07,
//         rw08:req.body.rw08,
//         ra08:req.body.ra08,
//         rh08:req.body.rh08,
//         rw09:req.body.rw09,
//         ra09:req.body.ra09,
//         rh09:req.body.rh09,
//         rw10:req.body.rw10,
//         ra10:req.body.ra10,
//         rh10:req.body.rh10,
//         rw11:req.body.rw11,
//         ra11:req.body.ra11,
//         rh11:req.body.rh11,
//         rw12:req.body.rw12,
//         ra12:req.body.ra12,
//         rh12:req.body.rh12,
//         rw13:req.body.rw13,
//         ra13:req.body.ra13,
//         rh13:req.body.rh13,
//         rw14:req.body.rw14,
//         ra14:req.body.ra14,
//         rh14:req.body.rh14,
//         rw15:req.body.rw15,
//         ra15:req.body.ra15,
//         rh15:req.body.rh15,
//         rw16:req.body.rw16,
//         ra16:req.body.ra16,
//         rh16:req.body.rh16,
//         rw17:req.body.rw17,
//         ra17:req.body.ra17,
//         rh17:req.body.rh17,
//         rw18:req.body.rw18,
//         ra18:req.body.ra18,
//         rh18:req.body.rh18,
//         rw19:req.body.rw19,
//         ra19:req.body.ra19,
//         rh19:req.body.rh19,
//         rw20:req.body.rw20,
//         ra20:req.body.ra20,
//         rh20:req.body.rh20,
//         rw21:req.body.rw21,
//         ra21:req.body.ra21,
//         rh21:req.body.rh21,
//         rw22:req.body.rw22,
//         ra22:req.body.ra22,
//         rh22:req.body.rh22,
//         rw23:req.body.rw23,
//         ra23:req.body.ra23,
//         rh23:req.body.rh23,
//         rw24:req.body.rw24,
//         ra24:req.body.ra24,
//         rh24:req.body.rh24,
//         rw25:req.body.rw25,
//         ra25:req.body.ra25,
//         rh25:req.body.rh25,
//         rw26:req.body.rw26,
//         ra26:req.body.ra26,
//         rh26:req.body.rh26,
//         rw27:req.body.rw27,
//         ra27:req.body.ra27,
//         rh27:req.body.rh27,
//         rw28:req.body.rw28,
//         ra28:req.body.ra28,
//         rh28:req.body.rh28,
//         rw29:req.body.rw29,
//         ra29:req.body.ra29,
//         rh29:req.body.rh29,
//     }
//     res.render('page05_3_9test', data);
// })
module.exports = router;