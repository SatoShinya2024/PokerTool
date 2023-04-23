//ハンドのidをキャッチする
//ページがロードされた瞬間、各項目の初期値を自動で入力する。
window.addEventListener('load', fillout);
let handhistory;
let setting;
async function fillout(){
    //ロードすると同時にサーバーと通信して編集したいデータを持ってくる
    const senddata = {
        methodpass:"load",
    }
    const resp = await fetch('/page05_2_9_edit', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata),
    })
    //受け取ったデータをjson形式に直す
    const result = await resp.json();
    if(result.msg == "none"){
        window.location.href = '/page05_2_9';
    }
    handhistory = result.handhistory;
    setting = result.setting;
    let board = result.board;
    let players = result.players;
    let preflop = result.preflop;
    let flop = result.flop;
    let turn = result.turn;
    let river = result.river;
    //基本設定から
    document.getElementById("game_type").querySelector("option[value=" + setting.game + "]").selected = true;
    document.getElementById("effective_stack").value = Number(setting.effectivestack);
    if(setting.uni == "$"){
        document.getElementById("unit").options[2].selected = true;
    }else{
        document.getElementById("unit").querySelector("option[value=" + setting.uni + "]").selected = true;
    }
    document.getElementById("small_blind").value = Number(setting.sblind);
    document.getElementById("big_blind").value = Number(setting.bblind);
    document.getElementById("ante_who").querySelector("option[value=" + setting.anteplayer + "]").selected = true;
    document.getElementById("ante_amount").value = Number(setting.anteamount);
    if(setting.stradler != null){
        if(setting.players == 6){
            switch(setting.stradler){
                case "1":
                    document.getElementById("stradle").options[1].selected = true;
                    break;
                case "2":
                    document.getElementById("stradle").options[2].selected = true;
                    break;
                case "3":
                    document.getElementById("stradle").options[3].selected = true;
                    break;
                default:
                    document.getElementById("stradle").options[0].selected = true;
            }
        }else if(setting.players == 9){
            switch(setting.stradler){
                case "1":
                    document.getElementById("stradle").options[1].selected = true;
                    break;
                case "2":
                    document.getElementById("stradle").options[2].selected = true;
                    break;
                case "3":
                    document.getElementById("stradle").options[3].selected = true;
                    break;
                case "4":
                    document.getElementById("stradle").options[4].selected = true;
                    break;
                case "5":
                    document.getElementById("stradle").options[5].selected = true;
                    break;
                case "6":
                    document.getElementById("stradle").options[6].selected = true;
                    break;
                default:
                    document.getElementById("stradle").options[0].selected = true;
            }
        }
        pfL01_player_array();
    }

    //プレイヤー情報
    let edit_players_card = [{c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, 
                                {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}, {c_name:"dummy", c:"dummy"}];
    players.forEach(value => {
        if(value.position == "UTG"){
            document.getElementById("UTG_person").value = value.name;
            document.getElementById("UTG_stack").value = Number(value.stack);
            if(players.length == 6){
                edit_players_card[0].c_name = 'UTG_card1';
                edit_players_card[0].c = value.card1;
                edit_players_card[1].c_name = 'UTG_card2';
                edit_players_card[1].c = value.card2;
            }else if(players.length == 9){
                edit_players_card[0].c_name = 'UTG_card1';
                edit_players_card[0].c = value.card1;
                edit_players_card[1].c_name = 'UTG_card2';
                edit_players_card[1].c = value.card2;          
            }
        }
        if(value.position == "EP1"){
            document.getElementById("EP1_person").value = value.name;
            document.getElementById("EP1_stack").value = Number(value.stack);
            if(players.length == 9){
                edit_players_card[2].c_name = 'EP1_card1';
                edit_players_card[2].c = value.card1;
                edit_players_card[3].c_name = 'EP1_card2';
                edit_players_card[3].c = value.card2;            
            }
        }
        if(value.position == "EP2"){
            document.getElementById("EP2_person").value = value.name;
            document.getElementById("EP2_stack").value = Number(value.stack);
            if(players.length == 9){
                edit_players_card[4].c_name = 'EP2_card1';
                edit_players_card[4].c = value.card1;
                edit_players_card[5].c_name = 'EP2_card2';
                edit_players_card[5].c = value.card2;            
            }
        }
        if(value.position == "LJ"){
            document.getElementById("LJ_person").value = value.name;
            document.getElementById("LJ_stack").value = Number(value.stack);
            if(players.length == 9){
                edit_players_card[6].c_name = 'LJ_card1';
                edit_players_card[6].c = value.card1;
                edit_players_card[7].c_name = 'LJ_card2';
                edit_players_card[7].c = value.card2;            
            }
        }
        if(value.position == "HJ"){
            document.getElementById("HJ_person").value = value.name;
            document.getElementById("HJ_stack").value = Number(value.stack);
            if(players.length == 6){
                edit_players_card[2].c_name = 'HJ_card1';
                edit_players_card[2].c = value.card1;
                edit_players_card[3].c_name = 'HJ_card2';
                edit_players_card[3].c = value.card2;
            }else if(players.length == 9){
                edit_players_card[8].c_name = 'HJ_card1'
                edit_players_card[8].c = value.card1;
                edit_players_card[9].c_name = 'HJ_card2';
                edit_players_card[9].c = value.card2;            
            }
        }
        if(value.position == "CO"){
            document.getElementById("CO_person").value = value.name;
            document.getElementById("CO_stack").value = Number(value.stack);
            if(players.length == 6){
                edit_players_card[4].c_name = 'CO_card1';
                edit_players_card[4].c = value.card1;
                edit_players_card[5].c_name = 'CO_card2';
                edit_players_card[5].c = value.card2;
            }else if(players.length == 9){
                edit_players_card[10].c_name = 'CO_card1';
                edit_players_card[10].c = value.card1;
                edit_players_card[11].c_name = 'CO_card2';
                edit_players_card[11].c = value.card2;            
            }
        }
        if(value.position == "BTN"){
            document.getElementById("BTN_person").value = value.name;
            document.getElementById("BTN_stack").value = Number(value.stack);
            if(players.length == 6){
                edit_players_card[6].c_name = 'BTN_card1';
                edit_players_card[6].c = value.card1;
                edit_players_card[7].c_name = 'BTN_card2';
                edit_players_card[7].c = value.card2;
            }else if(players.length == 9){
                edit_players_card[12].c_name = 'BTN_card1';
                edit_players_card[12].c = value.card1;
                edit_players_card[13].c_name = 'BTN_card2'; 
                edit_players_card[13].c = value.card2;            
            }
        }
        if(value.position == "SB"){
            document.getElementById("SB_person").value = value.name;
            document.getElementById("SB_stack").value = Number(value.stack);
            if(players.length == 2){
                edit_players_card[0].c_name = 'SB_card1';
                edit_players_card[0].c = value.card1;
                edit_players_card[1].c_name = 'SB_card2';
                edit_players_card[1].c = value.card2;
            }else if(players.length == 6){
                edit_players_card[8].c_name = 'SB_card1';
                edit_players_card[8].c = value.card1;
                edit_players_card[9].c_name = 'SB_card2';
                edit_players_card[9].c = value.card2;
            }else if(players.length == 9){
                edit_players_card[14].c_name = 'SB_card1'; 
                edit_players_card[14].c = value.card1;
                edit_players_card[15].c_name = 'SB_card2'; 
                edit_players_card[15].c = value.card2;            
            }
        }
        if(value.position == "BB"){
            document.getElementById("BB_person").value = value.name;
            document.getElementById("BB_stack").value = Number(value.stack);
            if(players.length == 2){
                edit_players_card[2].c_name = 'BB_card1';
                edit_players_card[2].c = value.card1;
                edit_players_card[3].c_name = 'BB_card2';
                edit_players_card[3].c = value.card2;
            }else if(players.length == 6){
                edit_players_card[10].c_name = 'BB_card1';
                edit_players_card[10].c = value.card1;
                edit_players_card[11].c_name = 'BB_card2';
                edit_players_card[11].c = value.card2;
            }else if(players.length == 9){
                edit_players_card[16].c_name = 'BB_card1';
                edit_players_card[16].c = value.card1;
                edit_players_card[17].c_name = 'BB_card2';
                edit_players_card[17].c = value.card2;            
            }
        }
    })
    //プレイヤーのカードの登録
    for(let i = 0; i < edit_players_card.length; i++){
        if(edit_players_card[i].c != 'dummy' && edit_players_card[i].c_name != 'dummy'){
            array_number = i;
            boardOrhand = "hand";
            card_elem = document.getElementById(edit_players_card[i].c_name);
            let num;
            card_List.forEach(value => {
                if(value.name == edit_players_card[i].c){
                    num = card_List.indexOf(value);
                }
            })
            card_register(edit_players_card[i].c, num);
        }
    }
    //ボードのカードの登録
    if(board.card1 != "dummy"){
        array_number = 0;
        boardOrhand = "board";
        card_elem = document.getElementById('board_card1');
        let num;
        card_List.forEach(value => {
            if(value.name == board.card1){
                num = card_List.indexOf(value);
            }
        })
        card_register(board.card1, num);
    }
    if(board.card2 != "dummy"){
        array_number = 1;
        boardOrhand = "board";
        card_elem = document.getElementById('board_card2');
        let num;
        card_List.forEach(value => {
            if(value.name == board.card2){
                num = card_List.indexOf(value);
            }
        })
        card_register(board.card2, num);
    }
    if(board.card3 != "dummy"){
        array_number = 2;
        boardOrhand = "board";
        card_elem = document.getElementById('board_card3');
        let num;
        card_List.forEach(value => {
            if(value.name == board.card3){
                num = card_List.indexOf(value);
            }
        })
        card_register(board.card3, num);
    }
    if(board.card4 != "dummy"){
        array_number = 3;
        boardOrhand = "board";
        card_elem = document.getElementById('board_card4');
        let num;
        card_List.forEach(value => {
            if(value.name == board.card4){
                num = card_List.indexOf(value);
            }
        })
        card_register(board.card4, num);
    }
    if(board.card5 != "dummy"){
        array_number = 4;
        boardOrhand = "board";
        card_elem = document.getElementById('board_card5');
        let num;
        card_List.forEach(value => {
            if(value.name == board.card5){
                num = card_List.indexOf(value);
            }
        })
        card_register(board.card5, num);
    }
    //ここからアクションを入力
    //プリフロップ
    let count = 0;
    while(preflop[count].position != "" && count != 29){
        action_register(present_line, next_line, preflop[count].position, preflop[count].action, Number(preflop[count].chip));
        count++;
    }
    if(flop[0].position == ""){
        hand_data();
        return;
    }else{
        go_to_next("flop");
    }
    count = 0;
    while(flop[count].position != "" && count != 29){
        action_register(present_line, next_line, flop[count].position, flop[count].action, Number(flop[count].chip));
        count++;
    }
    if(turn[0].position == ""){
        hand_data();
        return;
    }else{
        go_to_next("turn");
    }
    count = 0;
    while(turn[count].position != "" && count != 29){
        action_register(present_line, next_line, turn[count].position, turn[count].action, Number(turn[count].chip));
        count++;
    }
    if(river[0].position == ""){
        hand_data();
        return;
    }else{
        go_to_next("river");
    }
    count = 0;
    while(river[count].position != "" && count != 29){
        action_register(present_line, next_line, river[count].position, river[count].action, Number(river[count].chip));
        count++;
    }
    hand_data();
    if(board.card1 != "dummy" && board.card2 != "dummy" && board.card3 != "dummy" && board.card4 != "dummy" && board.card5 != "dummy"){
        show_result();
    }
}
//すでに入力されているハンドのデータを登録する。
function hand_data(){
    document.getElementById("history_name").value = handhistory.name;
    document.getElementById("hand_comment").value = handhistory.comment;
    document.getElementById("Tag1").value = handhistory.tag1;
    document.getElementById("Tag2").value = handhistory.tag2;
    document.getElementById("Tag3").value = handhistory.tag3;
}
//プレイヤーの人数に応じて、フォームを作って送信
function submit_edit_form(){
    if(setting.players == "2"){
        document.getElementById('historyname').value = document.getElementById('history_name').value;
        document.getElementById('comment').value = document.getElementById('hand_comment').value;
        document.getElementById('count').value = "2";
        document.getElementById('tag1').value = document.getElementById('Tag1').value;
        document.getElementById('tag2').value = document.getElementById('Tag2').value;
        document.getElementById('tag3').value = document.getElementById('Tag3').value;
    
    
        //基本情報から
        document.getElementById('game').value = document.getElementById('game_type').value;
        document.getElementById('stack').value = document.getElementById('effective_stack').value;
        document.getElementById('uni').value = document.getElementById('unit').value;
        document.getElementById('sblind').value = document.getElementById('small_blind').value;
        document.getElementById('bblind').value = document.getElementById('big_blind').value;
        document.getElementById('whoante').value = document.getElementById('ante_who').value;
        document.getElementById('howante').value = document.getElementById('ante_amount').value;
    
        //プレイヤー情報から
        //SB
        document.getElementById('sb_name').value = document.getElementById('SB_person').value;
        document.getElementById('sb_card01').value = players_card[0].name;
        document.getElementById('sb_card02').value = players_card[1].name;
        document.getElementById('sb_stack').value = document.getElementById('SB_stack').value;
        //BB
        document.getElementById('bb_name').value = document.getElementById('BB_person').value;
        document.getElementById('bb_card01').value = players_card[2].name;
        document.getElementById('bb_card02').value = players_card[3].name;
        document.getElementById('bb_stack').value = document.getElementById('BB_stack').value;
    
        //ボード情報から
        document.getElementById('bcard01').value = board_array[0].name;
        document.getElementById('bcard02').value = board_array[1].name;
        document.getElementById('bcard03').value = board_array[2].name;
        document.getElementById('bcard04').value = board_array[3].name;
        document.getElementById('bcard05').value = board_array[4].name;
    
        //アクション情報から
        //プリフロップ
        document.getElementById('pfw01').value = preflop_L01.whoSelect;
        document.getElementById('pfa01').value = preflop_L01.actionSelect;
        document.getElementById('pfh01').value = preflop_L01.howMuch;
        document.getElementById('pfw02').value = preflop_L02.whoSelect;
        document.getElementById('pfa02').value = preflop_L02.actionSelect;
        document.getElementById('pfh02').value = preflop_L02.howMuch;
        document.getElementById('pfw03').value = preflop_L03.whoSelect;
        document.getElementById('pfa03').value = preflop_L03.actionSelect;
        document.getElementById('pfh03').value = preflop_L03.howMuch;
        document.getElementById('pfw04').value = preflop_L04.whoSelect;
        document.getElementById('pfa04').value = preflop_L04.actionSelect;
        document.getElementById('pfh04').value = preflop_L04.howMuch;
        document.getElementById('pfw05').value = preflop_L05.whoSelect;
        document.getElementById('pfa05').value = preflop_L05.actionSelect;
        document.getElementById('pfh05').value = preflop_L05.howMuch;
        document.getElementById('pfw06').value = preflop_L06.whoSelect;
        document.getElementById('pfa06').value = preflop_L06.actionSelect;
        document.getElementById('pfh06').value = preflop_L06.howMuch;
        document.getElementById('pfw07').value = preflop_L07.whoSelect;
        document.getElementById('pfa07').value = preflop_L07.actionSelect;
        document.getElementById('pfh07').value = preflop_L07.howMuch;
        document.getElementById('pfw08').value = preflop_L08.whoSelect;
        document.getElementById('pfa08').value = preflop_L08.actionSelect;
        document.getElementById('pfh08').value = preflop_L08.howMuch;
        document.getElementById('pfw09').value = preflop_L09.whoSelect;
        document.getElementById('pfa09').value = preflop_L09.actionSelect;
        document.getElementById('pfh09').value = preflop_L09.howMuch;
        document.getElementById('pfw10').value = preflop_L10.whoSelect;
        document.getElementById('pfa10').value = preflop_L10.actionSelect;
        document.getElementById('pfh10').value = preflop_L10.howMuch;
        document.getElementById('pfw11').value = preflop_L11.whoSelect;
        document.getElementById('pfa11').value = preflop_L11.actionSelect;
        document.getElementById('pfh11').value = preflop_L11.howMuch;
        document.getElementById('pfw12').value = preflop_L12.whoSelect;
        document.getElementById('pfa12').value = preflop_L12.actionSelect;
        document.getElementById('pfh12').value = preflop_L12.howMuch;
        document.getElementById('pfw13').value = preflop_L13.whoSelect;
        document.getElementById('pfa13').value = preflop_L13.actionSelect;
        document.getElementById('pfh13').value = preflop_L13.howMuch;
        document.getElementById('pfw14').value = preflop_L14.whoSelect;
        document.getElementById('pfa14').value = preflop_L14.actionSelect;
        document.getElementById('pfh14').value = preflop_L14.howMuch;
        document.getElementById('pfw15').value = preflop_L15.whoSelect;
        document.getElementById('pfa15').value = preflop_L15.actionSelect;
        document.getElementById('pfh15').value = preflop_L15.howMuch;
        document.getElementById('pfw16').value = preflop_L16.whoSelect;
        document.getElementById('pfa16').value = preflop_L16.actionSelect;
        document.getElementById('pfh16').value = preflop_L16.howMuch;
        document.getElementById('pfw17').value = preflop_L17.whoSelect;
        document.getElementById('pfa17').value = preflop_L17.actionSelect;
        document.getElementById('pfh17').value = preflop_L17.howMuch;
        document.getElementById('pfw18').value = preflop_L18.whoSelect;
        document.getElementById('pfa18').value = preflop_L18.actionSelect;
        document.getElementById('pfh18').value = preflop_L18.howMuch;
        document.getElementById('pfw19').value = preflop_L19.whoSelect;
        document.getElementById('pfa19').value = preflop_L19.actionSelect;
        document.getElementById('pfh19').value = preflop_L19.howMuch;
        document.getElementById('pfw20').value = preflop_L20.whoSelect;
        document.getElementById('pfa20').value = preflop_L20.actionSelect;
        document.getElementById('pfh20').value = preflop_L20.howMuch;
        document.getElementById('pfw21').value = preflop_L21.whoSelect;
        document.getElementById('pfa21').value = preflop_L21.actionSelect;
        document.getElementById('pfh21').value = preflop_L21.howMuch;
        document.getElementById('pfw22').value = preflop_L22.whoSelect;
        document.getElementById('pfa22').value = preflop_L22.actionSelect;
        document.getElementById('pfh22').value = preflop_L22.howMuch;
        document.getElementById('pfw23').value = preflop_L23.whoSelect;
        document.getElementById('pfa23').value = preflop_L23.actionSelect;
        document.getElementById('pfh23').value = preflop_L23.howMuch;
        document.getElementById('pfw24').value = preflop_L24.whoSelect;
        document.getElementById('pfa24').value = preflop_L24.actionSelect;
        document.getElementById('pfh24').value = preflop_L24.howMuch;
        document.getElementById('pfw25').value = preflop_L25.whoSelect;
        document.getElementById('pfa25').value = preflop_L25.actionSelect;
        document.getElementById('pfh25').value = preflop_L25.howMuch;
        document.getElementById('pfw26').value = preflop_L26.whoSelect;
        document.getElementById('pfa26').value = preflop_L26.actionSelect;
        document.getElementById('pfh26').value = preflop_L26.howMuch;
        document.getElementById('pfw27').value = preflop_L27.whoSelect;
        document.getElementById('pfa27').value = preflop_L27.actionSelect;
        document.getElementById('pfh27').value = preflop_L27.howMuch;
        document.getElementById('pfw28').value = preflop_L28.whoSelect;
        document.getElementById('pfa28').value = preflop_L28.actionSelect;
        document.getElementById('pfh28').value = preflop_L28.howMuch;
        document.getElementById('pfw29').value = preflop_L29.whoSelect;
        document.getElementById('pfa29').value = preflop_L29.actionSelect;
        document.getElementById('pfh29').value = preflop_L29.howMuch;
    
        //フロップ
        document.getElementById('fw01').value = flop_L01.whoSelect;
        document.getElementById('fa01').value = flop_L01.actionSelect;
        document.getElementById('fh01').value = flop_L01.howMuch;
        document.getElementById('fw02').value = flop_L02.whoSelect;
        document.getElementById('fa02').value = flop_L02.actionSelect;
        document.getElementById('fh02').value = flop_L02.howMuch;
        document.getElementById('fw03').value = flop_L03.whoSelect;
        document.getElementById('fa03').value = flop_L03.actionSelect;
        document.getElementById('fh03').value = flop_L03.howMuch;
        document.getElementById('fw04').value = flop_L04.whoSelect;
        document.getElementById('fa04').value = flop_L04.actionSelect;
        document.getElementById('fh04').value = flop_L04.howMuch;
        document.getElementById('fw05').value = flop_L05.whoSelect;
        document.getElementById('fa05').value = flop_L05.actionSelect;
        document.getElementById('fh05').value = flop_L05.howMuch;
        document.getElementById('fw06').value = flop_L06.whoSelect;
        document.getElementById('fa06').value = flop_L06.actionSelect;
        document.getElementById('fh06').value = flop_L06.howMuch;
        document.getElementById('fw07').value = flop_L07.whoSelect;
        document.getElementById('fa07').value = flop_L07.actionSelect;
        document.getElementById('fh07').value = flop_L07.howMuch;
        document.getElementById('fw08').value = flop_L08.whoSelect;
        document.getElementById('fa08').value = flop_L08.actionSelect;
        document.getElementById('fh08').value = flop_L08.howMuch;
        document.getElementById('fw09').value = flop_L09.whoSelect;
        document.getElementById('fa09').value = flop_L09.actionSelect;
        document.getElementById('fh09').value = flop_L09.howMuch;
        document.getElementById('fw10').value = flop_L10.whoSelect;
        document.getElementById('fa10').value = flop_L10.actionSelect;
        document.getElementById('fh10').value = flop_L10.howMuch;
        document.getElementById('fw11').value = flop_L11.whoSelect;
        document.getElementById('fa11').value = flop_L11.actionSelect;
        document.getElementById('fh11').value = flop_L11.howMuch;
        document.getElementById('fw12').value = flop_L12.whoSelect;
        document.getElementById('fa12').value = flop_L12.actionSelect;
        document.getElementById('fh12').value = flop_L12.howMuch;
        document.getElementById('fw13').value = flop_L13.whoSelect;
        document.getElementById('fa13').value = flop_L13.actionSelect;
        document.getElementById('fh13').value = flop_L13.howMuch;
        document.getElementById('fw14').value = flop_L14.whoSelect;
        document.getElementById('fa14').value = flop_L14.actionSelect;
        document.getElementById('fh14').value = flop_L14.howMuch;
        document.getElementById('fw15').value = flop_L15.whoSelect;
        document.getElementById('fa15').value = flop_L15.actionSelect;
        document.getElementById('fh15').value = flop_L15.howMuch;
        document.getElementById('fw16').value = flop_L16.whoSelect;
        document.getElementById('fa16').value = flop_L16.actionSelect;
        document.getElementById('fh16').value = flop_L16.howMuch;
        document.getElementById('fw17').value = flop_L17.whoSelect;
        document.getElementById('fa17').value = flop_L17.actionSelect;
        document.getElementById('fh17').value = flop_L17.howMuch;
        document.getElementById('fw18').value = flop_L18.whoSelect;
        document.getElementById('fa18').value = flop_L18.actionSelect;
        document.getElementById('fh18').value = flop_L18.howMuch;
        document.getElementById('fw19').value = flop_L19.whoSelect;
        document.getElementById('fa19').value = flop_L19.actionSelect;
        document.getElementById('fh19').value = flop_L19.howMuch;
        document.getElementById('fw20').value = flop_L20.whoSelect;
        document.getElementById('fa20').value = flop_L20.actionSelect;
        document.getElementById('fh20').value = flop_L20.howMuch;
        document.getElementById('fw21').value = flop_L21.whoSelect;
        document.getElementById('fa21').value = flop_L21.actionSelect;
        document.getElementById('fh21').value = flop_L21.howMuch;
        document.getElementById('fw22').value = flop_L22.whoSelect;
        document.getElementById('fa22').value = flop_L22.actionSelect;
        document.getElementById('fh22').value = flop_L22.howMuch;
        document.getElementById('fw23').value = flop_L23.whoSelect;
        document.getElementById('fa23').value = flop_L23.actionSelect;
        document.getElementById('fh23').value = flop_L23.howMuch;
        document.getElementById('fw24').value = flop_L24.whoSelect;
        document.getElementById('fa24').value = flop_L24.actionSelect;
        document.getElementById('fh24').value = flop_L24.howMuch;
        document.getElementById('fw25').value = flop_L25.whoSelect;
        document.getElementById('fa25').value = flop_L25.actionSelect;
        document.getElementById('fh25').value = flop_L25.howMuch;
        document.getElementById('fw26').value = flop_L26.whoSelect;
        document.getElementById('fa26').value = flop_L26.actionSelect;
        document.getElementById('fh26').value = flop_L26.howMuch;
        document.getElementById('fw27').value = flop_L27.whoSelect;
        document.getElementById('fa27').value = flop_L27.actionSelect;
        document.getElementById('fh27').value = flop_L27.howMuch;
        document.getElementById('fw28').value = flop_L28.whoSelect;
        document.getElementById('fa28').value = flop_L28.actionSelect;
        document.getElementById('fh28').value = flop_L28.howMuch;
        document.getElementById('fw29').value = flop_L29.whoSelect;
        document.getElementById('fa29').value = flop_L29.actionSelect;
        document.getElementById('fh29').value = flop_L29.howMuch;
    
        //ターン
        document.getElementById('tw01').value = turn_L01.whoSelect;
        document.getElementById('ta01').value = turn_L01.actionSelect;
        document.getElementById('th01').value = turn_L01.howMuch;
        document.getElementById('tw02').value = turn_L02.whoSelect;
        document.getElementById('ta02').value = turn_L02.actionSelect;
        document.getElementById('th02').value = turn_L02.howMuch;
        document.getElementById('tw03').value = turn_L03.whoSelect;
        document.getElementById('ta03').value = turn_L03.actionSelect;
        document.getElementById('th03').value = turn_L03.howMuch;
        document.getElementById('tw04').value = turn_L04.whoSelect;
        document.getElementById('ta04').value = turn_L04.actionSelect;
        document.getElementById('th04').value = turn_L04.howMuch;
        document.getElementById('tw05').value = turn_L05.whoSelect;
        document.getElementById('ta05').value = turn_L05.actionSelect;
        document.getElementById('th05').value = turn_L05.howMuch;
        document.getElementById('tw06').value = turn_L06.whoSelect;
        document.getElementById('ta06').value = turn_L06.actionSelect;
        document.getElementById('th06').value = turn_L06.howMuch;
        document.getElementById('tw07').value = turn_L07.whoSelect;
        document.getElementById('ta07').value = turn_L07.actionSelect;
        document.getElementById('th07').value = turn_L07.howMuch;
        document.getElementById('tw08').value = turn_L08.whoSelect;
        document.getElementById('ta08').value = turn_L08.actionSelect;
        document.getElementById('th08').value = turn_L08.howMuch;
        document.getElementById('tw09').value = turn_L09.whoSelect;
        document.getElementById('ta09').value = turn_L09.actionSelect;
        document.getElementById('th09').value = turn_L09.howMuch;
        document.getElementById('tw10').value = turn_L10.whoSelect;
        document.getElementById('ta10').value = turn_L10.actionSelect;
        document.getElementById('th10').value = turn_L10.howMuch;
        document.getElementById('tw11').value = turn_L11.whoSelect;
        document.getElementById('ta11').value = turn_L11.actionSelect;
        document.getElementById('th11').value = turn_L11.howMuch;
        document.getElementById('tw12').value = turn_L12.whoSelect;
        document.getElementById('ta12').value = turn_L12.actionSelect;
        document.getElementById('th12').value = turn_L12.howMuch;
        document.getElementById('tw13').value = turn_L13.whoSelect;
        document.getElementById('ta13').value = turn_L13.actionSelect;
        document.getElementById('th13').value = turn_L13.howMuch;
        document.getElementById('tw14').value = turn_L14.whoSelect;
        document.getElementById('ta14').value = turn_L14.actionSelect;
        document.getElementById('th14').value = turn_L14.howMuch;
        document.getElementById('tw15').value = turn_L15.whoSelect;
        document.getElementById('ta15').value = turn_L15.actionSelect;
        document.getElementById('th15').value = turn_L15.howMuch;
        document.getElementById('tw16').value = turn_L16.whoSelect;
        document.getElementById('ta16').value = turn_L16.actionSelect;
        document.getElementById('th16').value = turn_L16.howMuch;
        document.getElementById('tw17').value = turn_L17.whoSelect;
        document.getElementById('ta17').value = turn_L17.actionSelect;
        document.getElementById('th17').value = turn_L17.howMuch;
        document.getElementById('tw18').value = turn_L18.whoSelect;
        document.getElementById('ta18').value = turn_L18.actionSelect;
        document.getElementById('th18').value = turn_L18.howMuch;
        document.getElementById('tw19').value = turn_L19.whoSelect;
        document.getElementById('ta19').value = turn_L19.actionSelect;
        document.getElementById('th19').value = turn_L19.howMuch;
        document.getElementById('tw20').value = turn_L20.whoSelect;
        document.getElementById('ta20').value = turn_L20.actionSelect;
        document.getElementById('th20').value = turn_L20.howMuch;
        document.getElementById('tw21').value = turn_L21.whoSelect;
        document.getElementById('ta21').value = turn_L21.actionSelect;
        document.getElementById('th21').value = turn_L21.howMuch;
        document.getElementById('tw22').value = turn_L22.whoSelect;
        document.getElementById('ta22').value = turn_L22.actionSelect;
        document.getElementById('th22').value = turn_L22.howMuch;
        document.getElementById('tw23').value = turn_L23.whoSelect;
        document.getElementById('ta23').value = turn_L23.actionSelect;
        document.getElementById('th23').value = turn_L23.howMuch;
        document.getElementById('tw24').value = turn_L24.whoSelect;
        document.getElementById('ta24').value = turn_L24.actionSelect;
        document.getElementById('th24').value = turn_L24.howMuch;
        document.getElementById('tw25').value = turn_L25.whoSelect;
        document.getElementById('ta25').value = turn_L25.actionSelect;
        document.getElementById('th25').value = turn_L25.howMuch;
        document.getElementById('tw26').value = turn_L26.whoSelect;
        document.getElementById('ta26').value = turn_L26.actionSelect;
        document.getElementById('th26').value = turn_L26.howMuch;
        document.getElementById('tw27').value = turn_L27.whoSelect;
        document.getElementById('ta27').value = turn_L27.actionSelect;
        document.getElementById('th27').value = turn_L27.howMuch;
        document.getElementById('tw28').value = turn_L28.whoSelect;
        document.getElementById('ta28').value = turn_L28.actionSelect;
        document.getElementById('th28').value = turn_L28.howMuch;
        document.getElementById('tw29').value = turn_L29.whoSelect;
        document.getElementById('ta29').value = turn_L29.actionSelect;
        document.getElementById('th29').value = turn_L29.howMuch;
    
        //リバー
        document.getElementById('rw01').value = river_L01.whoSelect;
        document.getElementById('ra01').value = river_L01.actionSelect;
        document.getElementById('rh01').value = river_L01.howMuch;
        document.getElementById('rw02').value = river_L02.whoSelect;
        document.getElementById('ra02').value = river_L02.actionSelect;
        document.getElementById('rh02').value = river_L02.howMuch;
        document.getElementById('rw03').value = river_L03.whoSelect;
        document.getElementById('ra03').value = river_L03.actionSelect;
        document.getElementById('rh03').value = river_L03.howMuch;
        document.getElementById('rw04').value = river_L04.whoSelect;
        document.getElementById('ra04').value = river_L04.actionSelect;
        document.getElementById('rh04').value = river_L04.howMuch;
        document.getElementById('rw05').value = river_L05.whoSelect;
        document.getElementById('ra05').value = river_L05.actionSelect;
        document.getElementById('rh05').value = river_L05.howMuch;
        document.getElementById('rw06').value = river_L06.whoSelect;
        document.getElementById('ra06').value = river_L06.actionSelect;
        document.getElementById('rh06').value = river_L06.howMuch;
        document.getElementById('rw07').value = river_L07.whoSelect;
        document.getElementById('ra07').value = river_L07.actionSelect;
        document.getElementById('rh07').value = river_L07.howMuch;
        document.getElementById('rw08').value = river_L08.whoSelect;
        document.getElementById('ra08').value = river_L08.actionSelect;
        document.getElementById('rh08').value = river_L08.howMuch;
        document.getElementById('rw09').value = river_L09.whoSelect;
        document.getElementById('ra09').value = river_L09.actionSelect;
        document.getElementById('rh09').value = river_L09.howMuch;
        document.getElementById('rw10').value = river_L10.whoSelect;
        document.getElementById('ra10').value = river_L10.actionSelect;
        document.getElementById('rh10').value = river_L10.howMuch;
        document.getElementById('rw11').value = river_L11.whoSelect;
        document.getElementById('ra11').value = river_L11.actionSelect;
        document.getElementById('rh11').value = river_L11.howMuch;
        document.getElementById('rw12').value = river_L12.whoSelect;
        document.getElementById('ra12').value = river_L12.actionSelect;
        document.getElementById('rh12').value = river_L12.howMuch;
        document.getElementById('rw13').value = river_L13.whoSelect;
        document.getElementById('ra13').value = river_L13.actionSelect;
        document.getElementById('rh13').value = river_L13.howMuch;
        document.getElementById('rw14').value = river_L14.whoSelect;
        document.getElementById('ra14').value = river_L14.actionSelect;
        document.getElementById('rh14').value = river_L14.howMuch;
        document.getElementById('rw15').value = river_L15.whoSelect;
        document.getElementById('ra15').value = river_L15.actionSelect;
        document.getElementById('rh15').value = river_L15.howMuch;
        document.getElementById('rw16').value = river_L16.whoSelect;
        document.getElementById('ra16').value = river_L16.actionSelect;
        document.getElementById('rh16').value = river_L16.howMuch;
        document.getElementById('rw17').value = river_L17.whoSelect;
        document.getElementById('ra17').value = river_L17.actionSelect;
        document.getElementById('rh17').value = river_L17.howMuch;
        document.getElementById('rw18').value = river_L18.whoSelect;
        document.getElementById('ra18').value = river_L18.actionSelect;
        document.getElementById('rh18').value = river_L18.howMuch;
        document.getElementById('rw19').value = river_L19.whoSelect;
        document.getElementById('ra19').value = river_L19.actionSelect;
        document.getElementById('rh19').value = river_L19.howMuch;
        document.getElementById('rw20').value = river_L20.whoSelect;
        document.getElementById('ra20').value = river_L20.actionSelect;
        document.getElementById('rh20').value = river_L20.howMuch;
        document.getElementById('rw21').value = river_L21.whoSelect;
        document.getElementById('ra21').value = river_L21.actionSelect;
        document.getElementById('rh21').value = river_L21.howMuch;
        document.getElementById('rw22').value = river_L22.whoSelect;
        document.getElementById('ra22').value = river_L22.actionSelect;
        document.getElementById('rh22').value = river_L22.howMuch;
        document.getElementById('rw23').value = river_L23.whoSelect;
        document.getElementById('ra23').value = river_L23.actionSelect;
        document.getElementById('rh23').value = river_L23.howMuch;
        document.getElementById('rw24').value = river_L24.whoSelect;
        document.getElementById('ra24').value = river_L24.actionSelect;
        document.getElementById('rh24').value = river_L24.howMuch;
        document.getElementById('rw25').value = river_L25.whoSelect;
        document.getElementById('ra25').value = river_L25.actionSelect;
        document.getElementById('rh25').value = river_L25.howMuch;
        document.getElementById('rw26').value = river_L26.whoSelect;
        document.getElementById('ra26').value = river_L26.actionSelect;
        document.getElementById('rh26').value = river_L26.howMuch;
        document.getElementById('rw27').value = river_L27.whoSelect;
        document.getElementById('ra27').value = river_L27.actionSelect;
        document.getElementById('rh27').value = river_L27.howMuch;
        document.getElementById('rw28').value = river_L28.whoSelect;
        document.getElementById('ra28').value = river_L28.actionSelect;
        document.getElementById('rh28').value = river_L28.howMuch;
        document.getElementById('rw29').value = river_L29.whoSelect;
        document.getElementById('ra29').value = river_L29.actionSelect;
        document.getElementById('rh29').value = river_L29.howMuch;
    
        //フォームをsubmit
        document.myform.action = "./page05_2_2_edit";
        document.myform.submit();
    }else if(setting.players == "6"){
        document.getElementById('historyname').value = document.getElementById('history_name').value;
        document.getElementById('comment').value = document.getElementById('hand_comment').value;
        document.getElementById('count').value = "6";
        document.getElementById('tag1').value = document.getElementById('Tag1').value;
        document.getElementById('tag2').value = document.getElementById('Tag2').value;
        document.getElementById('tag3').value = document.getElementById('Tag3').value;
        //基本情報から
        document.getElementById('game').value = document.getElementById('game_type').value;
        document.getElementById('stack').value = document.getElementById('effective_stack').value;
        document.getElementById('stradler').value = document.getElementById('stradle').value;
        document.getElementById('uni').value = document.getElementById('unit').value;
        document.getElementById('sblind').value = document.getElementById('small_blind').value;
        document.getElementById('bblind').value = document.getElementById('big_blind').value;
        document.getElementById('whoante').value = document.getElementById('ante_who').value;
        document.getElementById('howante').value = document.getElementById('ante_amount').value;
    
        //プレイヤー情報から
        //UTG
        document.getElementById('utg_name').value = document.getElementById('UTG_person').value;
        document.getElementById('utg_card01').value = players_card[0].name;
        document.getElementById('utg_card02').value = players_card[1].name;
        document.getElementById('utg_stack').value = document.getElementById('UTG_stack').value;
        //HJ
        document.getElementById('hj_name').value = document.getElementById('HJ_person').value;
        document.getElementById('hj_card01').value = players_card[2].name;
        document.getElementById('hj_card02').value = players_card[3].name;
        document.getElementById('hj_stack').value = document.getElementById('HJ_stack').value;
        //CO
        document.getElementById('co_name').value = document.getElementById('CO_person').value;
        document.getElementById('co_card01').value = players_card[4].name;
        document.getElementById('co_card02').value = players_card[5].name;
        document.getElementById('co_stack').value = document.getElementById('CO_stack').value;
        //BTN
        document.getElementById('btn_name').value = document.getElementById('BTN_person').value;
        document.getElementById('btn_card01').value = players_card[6].name;
        document.getElementById('btn_card02').value = players_card[7].name;
        document.getElementById('btn_stack').value = document.getElementById('BTN_stack').value;
        //SB
        document.getElementById('sb_name').value = document.getElementById('SB_person').value;
        document.getElementById('sb_card01').value = players_card[8].name;
        document.getElementById('sb_card02').value = players_card[9].name;
        document.getElementById('sb_stack').value = document.getElementById('SB_stack').value;
        //BB
        document.getElementById('bb_name').value = document.getElementById('BB_person').value;
        document.getElementById('bb_card01').value = players_card[10].name;
        document.getElementById('bb_card02').value = players_card[11].name;
        document.getElementById('bb_stack').value = document.getElementById('BB_stack').value;
    
        //ボード情報から
        document.getElementById('bcard01').value = board_array[0].name;
        document.getElementById('bcard02').value = board_array[1].name;
        document.getElementById('bcard03').value = board_array[2].name;
        document.getElementById('bcard04').value = board_array[3].name;
        document.getElementById('bcard05').value = board_array[4].name;
    
        //アクション情報から
        //プリフロップ
        document.getElementById('pfw01').value = preflop_L01.whoSelect;
        document.getElementById('pfa01').value = preflop_L01.actionSelect;
        document.getElementById('pfh01').value = preflop_L01.howMuch;
        document.getElementById('pfw02').value = preflop_L02.whoSelect;
        document.getElementById('pfa02').value = preflop_L02.actionSelect;
        document.getElementById('pfh02').value = preflop_L02.howMuch;
        document.getElementById('pfw03').value = preflop_L03.whoSelect;
        document.getElementById('pfa03').value = preflop_L03.actionSelect;
        document.getElementById('pfh03').value = preflop_L03.howMuch;
        document.getElementById('pfw04').value = preflop_L04.whoSelect;
        document.getElementById('pfa04').value = preflop_L04.actionSelect;
        document.getElementById('pfh04').value = preflop_L04.howMuch;
        document.getElementById('pfw05').value = preflop_L05.whoSelect;
        document.getElementById('pfa05').value = preflop_L05.actionSelect;
        document.getElementById('pfh05').value = preflop_L05.howMuch;
        document.getElementById('pfw06').value = preflop_L06.whoSelect;
        document.getElementById('pfa06').value = preflop_L06.actionSelect;
        document.getElementById('pfh06').value = preflop_L06.howMuch;
        document.getElementById('pfw07').value = preflop_L07.whoSelect;
        document.getElementById('pfa07').value = preflop_L07.actionSelect;
        document.getElementById('pfh07').value = preflop_L07.howMuch;
        document.getElementById('pfw08').value = preflop_L08.whoSelect;
        document.getElementById('pfa08').value = preflop_L08.actionSelect;
        document.getElementById('pfh08').value = preflop_L08.howMuch;
        document.getElementById('pfw09').value = preflop_L09.whoSelect;
        document.getElementById('pfa09').value = preflop_L09.actionSelect;
        document.getElementById('pfh09').value = preflop_L09.howMuch;
        document.getElementById('pfw10').value = preflop_L10.whoSelect;
        document.getElementById('pfa10').value = preflop_L10.actionSelect;
        document.getElementById('pfh10').value = preflop_L10.howMuch;
        document.getElementById('pfw11').value = preflop_L11.whoSelect;
        document.getElementById('pfa11').value = preflop_L11.actionSelect;
        document.getElementById('pfh11').value = preflop_L11.howMuch;
        document.getElementById('pfw12').value = preflop_L12.whoSelect;
        document.getElementById('pfa12').value = preflop_L12.actionSelect;
        document.getElementById('pfh12').value = preflop_L12.howMuch;
        document.getElementById('pfw13').value = preflop_L13.whoSelect;
        document.getElementById('pfa13').value = preflop_L13.actionSelect;
        document.getElementById('pfh13').value = preflop_L13.howMuch;
        document.getElementById('pfw14').value = preflop_L14.whoSelect;
        document.getElementById('pfa14').value = preflop_L14.actionSelect;
        document.getElementById('pfh14').value = preflop_L14.howMuch;
        document.getElementById('pfw15').value = preflop_L15.whoSelect;
        document.getElementById('pfa15').value = preflop_L15.actionSelect;
        document.getElementById('pfh15').value = preflop_L15.howMuch;
        document.getElementById('pfw16').value = preflop_L16.whoSelect;
        document.getElementById('pfa16').value = preflop_L16.actionSelect;
        document.getElementById('pfh16').value = preflop_L16.howMuch;
        document.getElementById('pfw17').value = preflop_L17.whoSelect;
        document.getElementById('pfa17').value = preflop_L17.actionSelect;
        document.getElementById('pfh17').value = preflop_L17.howMuch;
        document.getElementById('pfw18').value = preflop_L18.whoSelect;
        document.getElementById('pfa18').value = preflop_L18.actionSelect;
        document.getElementById('pfh18').value = preflop_L18.howMuch;
        document.getElementById('pfw19').value = preflop_L19.whoSelect;
        document.getElementById('pfa19').value = preflop_L19.actionSelect;
        document.getElementById('pfh19').value = preflop_L19.howMuch;
        document.getElementById('pfw20').value = preflop_L20.whoSelect;
        document.getElementById('pfa20').value = preflop_L20.actionSelect;
        document.getElementById('pfh20').value = preflop_L20.howMuch;
        document.getElementById('pfw21').value = preflop_L21.whoSelect;
        document.getElementById('pfa21').value = preflop_L21.actionSelect;
        document.getElementById('pfh21').value = preflop_L21.howMuch;
        document.getElementById('pfw22').value = preflop_L22.whoSelect;
        document.getElementById('pfa22').value = preflop_L22.actionSelect;
        document.getElementById('pfh22').value = preflop_L22.howMuch;
        document.getElementById('pfw23').value = preflop_L23.whoSelect;
        document.getElementById('pfa23').value = preflop_L23.actionSelect;
        document.getElementById('pfh23').value = preflop_L23.howMuch;
        document.getElementById('pfw24').value = preflop_L24.whoSelect;
        document.getElementById('pfa24').value = preflop_L24.actionSelect;
        document.getElementById('pfh24').value = preflop_L24.howMuch;
        document.getElementById('pfw25').value = preflop_L25.whoSelect;
        document.getElementById('pfa25').value = preflop_L25.actionSelect;
        document.getElementById('pfh25').value = preflop_L25.howMuch;
        document.getElementById('pfw26').value = preflop_L26.whoSelect;
        document.getElementById('pfa26').value = preflop_L26.actionSelect;
        document.getElementById('pfh26').value = preflop_L26.howMuch;
        document.getElementById('pfw27').value = preflop_L27.whoSelect;
        document.getElementById('pfa27').value = preflop_L27.actionSelect;
        document.getElementById('pfh27').value = preflop_L27.howMuch;
        document.getElementById('pfw28').value = preflop_L28.whoSelect;
        document.getElementById('pfa28').value = preflop_L28.actionSelect;
        document.getElementById('pfh28').value = preflop_L28.howMuch;
        document.getElementById('pfw29').value = preflop_L29.whoSelect;
        document.getElementById('pfa29').value = preflop_L29.actionSelect;
        document.getElementById('pfh29').value = preflop_L29.howMuch;
    
        //フロップ
        document.getElementById('fw01').value = flop_L01.whoSelect;
        document.getElementById('fa01').value = flop_L01.actionSelect;
        document.getElementById('fh01').value = flop_L01.howMuch;
        document.getElementById('fw02').value = flop_L02.whoSelect;
        document.getElementById('fa02').value = flop_L02.actionSelect;
        document.getElementById('fh02').value = flop_L02.howMuch;
        document.getElementById('fw03').value = flop_L03.whoSelect;
        document.getElementById('fa03').value = flop_L03.actionSelect;
        document.getElementById('fh03').value = flop_L03.howMuch;
        document.getElementById('fw04').value = flop_L04.whoSelect;
        document.getElementById('fa04').value = flop_L04.actionSelect;
        document.getElementById('fh04').value = flop_L04.howMuch;
        document.getElementById('fw05').value = flop_L05.whoSelect;
        document.getElementById('fa05').value = flop_L05.actionSelect;
        document.getElementById('fh05').value = flop_L05.howMuch;
        document.getElementById('fw06').value = flop_L06.whoSelect;
        document.getElementById('fa06').value = flop_L06.actionSelect;
        document.getElementById('fh06').value = flop_L06.howMuch;
        document.getElementById('fw07').value = flop_L07.whoSelect;
        document.getElementById('fa07').value = flop_L07.actionSelect;
        document.getElementById('fh07').value = flop_L07.howMuch;
        document.getElementById('fw08').value = flop_L08.whoSelect;
        document.getElementById('fa08').value = flop_L08.actionSelect;
        document.getElementById('fh08').value = flop_L08.howMuch;
        document.getElementById('fw09').value = flop_L09.whoSelect;
        document.getElementById('fa09').value = flop_L09.actionSelect;
        document.getElementById('fh09').value = flop_L09.howMuch;
        document.getElementById('fw10').value = flop_L10.whoSelect;
        document.getElementById('fa10').value = flop_L10.actionSelect;
        document.getElementById('fh10').value = flop_L10.howMuch;
        document.getElementById('fw11').value = flop_L11.whoSelect;
        document.getElementById('fa11').value = flop_L11.actionSelect;
        document.getElementById('fh11').value = flop_L11.howMuch;
        document.getElementById('fw12').value = flop_L12.whoSelect;
        document.getElementById('fa12').value = flop_L12.actionSelect;
        document.getElementById('fh12').value = flop_L12.howMuch;
        document.getElementById('fw13').value = flop_L13.whoSelect;
        document.getElementById('fa13').value = flop_L13.actionSelect;
        document.getElementById('fh13').value = flop_L13.howMuch;
        document.getElementById('fw14').value = flop_L14.whoSelect;
        document.getElementById('fa14').value = flop_L14.actionSelect;
        document.getElementById('fh14').value = flop_L14.howMuch;
        document.getElementById('fw15').value = flop_L15.whoSelect;
        document.getElementById('fa15').value = flop_L15.actionSelect;
        document.getElementById('fh15').value = flop_L15.howMuch;
        document.getElementById('fw16').value = flop_L16.whoSelect;
        document.getElementById('fa16').value = flop_L16.actionSelect;
        document.getElementById('fh16').value = flop_L16.howMuch;
        document.getElementById('fw17').value = flop_L17.whoSelect;
        document.getElementById('fa17').value = flop_L17.actionSelect;
        document.getElementById('fh17').value = flop_L17.howMuch;
        document.getElementById('fw18').value = flop_L18.whoSelect;
        document.getElementById('fa18').value = flop_L18.actionSelect;
        document.getElementById('fh18').value = flop_L18.howMuch;
        document.getElementById('fw19').value = flop_L19.whoSelect;
        document.getElementById('fa19').value = flop_L19.actionSelect;
        document.getElementById('fh19').value = flop_L19.howMuch;
        document.getElementById('fw20').value = flop_L20.whoSelect;
        document.getElementById('fa20').value = flop_L20.actionSelect;
        document.getElementById('fh20').value = flop_L20.howMuch;
        document.getElementById('fw21').value = flop_L21.whoSelect;
        document.getElementById('fa21').value = flop_L21.actionSelect;
        document.getElementById('fh21').value = flop_L21.howMuch;
        document.getElementById('fw22').value = flop_L22.whoSelect;
        document.getElementById('fa22').value = flop_L22.actionSelect;
        document.getElementById('fh22').value = flop_L22.howMuch;
        document.getElementById('fw23').value = flop_L23.whoSelect;
        document.getElementById('fa23').value = flop_L23.actionSelect;
        document.getElementById('fh23').value = flop_L23.howMuch;
        document.getElementById('fw24').value = flop_L24.whoSelect;
        document.getElementById('fa24').value = flop_L24.actionSelect;
        document.getElementById('fh24').value = flop_L24.howMuch;
        document.getElementById('fw25').value = flop_L25.whoSelect;
        document.getElementById('fa25').value = flop_L25.actionSelect;
        document.getElementById('fh25').value = flop_L25.howMuch;
        document.getElementById('fw26').value = flop_L26.whoSelect;
        document.getElementById('fa26').value = flop_L26.actionSelect;
        document.getElementById('fh26').value = flop_L26.howMuch;
        document.getElementById('fw27').value = flop_L27.whoSelect;
        document.getElementById('fa27').value = flop_L27.actionSelect;
        document.getElementById('fh27').value = flop_L27.howMuch;
        document.getElementById('fw28').value = flop_L28.whoSelect;
        document.getElementById('fa28').value = flop_L28.actionSelect;
        document.getElementById('fh28').value = flop_L28.howMuch;
        document.getElementById('fw29').value = flop_L29.whoSelect;
        document.getElementById('fa29').value = flop_L29.actionSelect;
        document.getElementById('fh29').value = flop_L29.howMuch;
    
        //ターン
        document.getElementById('tw01').value = turn_L01.whoSelect;
        document.getElementById('ta01').value = turn_L01.actionSelect;
        document.getElementById('th01').value = turn_L01.howMuch;
        document.getElementById('tw02').value = turn_L02.whoSelect;
        document.getElementById('ta02').value = turn_L02.actionSelect;
        document.getElementById('th02').value = turn_L02.howMuch;
        document.getElementById('tw03').value = turn_L03.whoSelect;
        document.getElementById('ta03').value = turn_L03.actionSelect;
        document.getElementById('th03').value = turn_L03.howMuch;
        document.getElementById('tw04').value = turn_L04.whoSelect;
        document.getElementById('ta04').value = turn_L04.actionSelect;
        document.getElementById('th04').value = turn_L04.howMuch;
        document.getElementById('tw05').value = turn_L05.whoSelect;
        document.getElementById('ta05').value = turn_L05.actionSelect;
        document.getElementById('th05').value = turn_L05.howMuch;
        document.getElementById('tw06').value = turn_L06.whoSelect;
        document.getElementById('ta06').value = turn_L06.actionSelect;
        document.getElementById('th06').value = turn_L06.howMuch;
        document.getElementById('tw07').value = turn_L07.whoSelect;
        document.getElementById('ta07').value = turn_L07.actionSelect;
        document.getElementById('th07').value = turn_L07.howMuch;
        document.getElementById('tw08').value = turn_L08.whoSelect;
        document.getElementById('ta08').value = turn_L08.actionSelect;
        document.getElementById('th08').value = turn_L08.howMuch;
        document.getElementById('tw09').value = turn_L09.whoSelect;
        document.getElementById('ta09').value = turn_L09.actionSelect;
        document.getElementById('th09').value = turn_L09.howMuch;
        document.getElementById('tw10').value = turn_L10.whoSelect;
        document.getElementById('ta10').value = turn_L10.actionSelect;
        document.getElementById('th10').value = turn_L10.howMuch;
        document.getElementById('tw11').value = turn_L11.whoSelect;
        document.getElementById('ta11').value = turn_L11.actionSelect;
        document.getElementById('th11').value = turn_L11.howMuch;
        document.getElementById('tw12').value = turn_L12.whoSelect;
        document.getElementById('ta12').value = turn_L12.actionSelect;
        document.getElementById('th12').value = turn_L12.howMuch;
        document.getElementById('tw13').value = turn_L13.whoSelect;
        document.getElementById('ta13').value = turn_L13.actionSelect;
        document.getElementById('th13').value = turn_L13.howMuch;
        document.getElementById('tw14').value = turn_L14.whoSelect;
        document.getElementById('ta14').value = turn_L14.actionSelect;
        document.getElementById('th14').value = turn_L14.howMuch;
        document.getElementById('tw15').value = turn_L15.whoSelect;
        document.getElementById('ta15').value = turn_L15.actionSelect;
        document.getElementById('th15').value = turn_L15.howMuch;
        document.getElementById('tw16').value = turn_L16.whoSelect;
        document.getElementById('ta16').value = turn_L16.actionSelect;
        document.getElementById('th16').value = turn_L16.howMuch;
        document.getElementById('tw17').value = turn_L17.whoSelect;
        document.getElementById('ta17').value = turn_L17.actionSelect;
        document.getElementById('th17').value = turn_L17.howMuch;
        document.getElementById('tw18').value = turn_L18.whoSelect;
        document.getElementById('ta18').value = turn_L18.actionSelect;
        document.getElementById('th18').value = turn_L18.howMuch;
        document.getElementById('tw19').value = turn_L19.whoSelect;
        document.getElementById('ta19').value = turn_L19.actionSelect;
        document.getElementById('th19').value = turn_L19.howMuch;
        document.getElementById('tw20').value = turn_L20.whoSelect;
        document.getElementById('ta20').value = turn_L20.actionSelect;
        document.getElementById('th20').value = turn_L20.howMuch;
        document.getElementById('tw21').value = turn_L21.whoSelect;
        document.getElementById('ta21').value = turn_L21.actionSelect;
        document.getElementById('th21').value = turn_L21.howMuch;
        document.getElementById('tw22').value = turn_L22.whoSelect;
        document.getElementById('ta22').value = turn_L22.actionSelect;
        document.getElementById('th22').value = turn_L22.howMuch;
        document.getElementById('tw23').value = turn_L23.whoSelect;
        document.getElementById('ta23').value = turn_L23.actionSelect;
        document.getElementById('th23').value = turn_L23.howMuch;
        document.getElementById('tw24').value = turn_L24.whoSelect;
        document.getElementById('ta24').value = turn_L24.actionSelect;
        document.getElementById('th24').value = turn_L24.howMuch;
        document.getElementById('tw25').value = turn_L25.whoSelect;
        document.getElementById('ta25').value = turn_L25.actionSelect;
        document.getElementById('th25').value = turn_L25.howMuch;
        document.getElementById('tw26').value = turn_L26.whoSelect;
        document.getElementById('ta26').value = turn_L26.actionSelect;
        document.getElementById('th26').value = turn_L26.howMuch;
        document.getElementById('tw27').value = turn_L27.whoSelect;
        document.getElementById('ta27').value = turn_L27.actionSelect;
        document.getElementById('th27').value = turn_L27.howMuch;
        document.getElementById('tw28').value = turn_L28.whoSelect;
        document.getElementById('ta28').value = turn_L28.actionSelect;
        document.getElementById('th28').value = turn_L28.howMuch;
        document.getElementById('tw29').value = turn_L29.whoSelect;
        document.getElementById('ta29').value = turn_L29.actionSelect;
        document.getElementById('th29').value = turn_L29.howMuch;
    
        //リバー
        document.getElementById('rw01').value = river_L01.whoSelect;
        document.getElementById('ra01').value = river_L01.actionSelect;
        document.getElementById('rh01').value = river_L01.howMuch;
        document.getElementById('rw02').value = river_L02.whoSelect;
        document.getElementById('ra02').value = river_L02.actionSelect;
        document.getElementById('rh02').value = river_L02.howMuch;
        document.getElementById('rw03').value = river_L03.whoSelect;
        document.getElementById('ra03').value = river_L03.actionSelect;
        document.getElementById('rh03').value = river_L03.howMuch;
        document.getElementById('rw04').value = river_L04.whoSelect;
        document.getElementById('ra04').value = river_L04.actionSelect;
        document.getElementById('rh04').value = river_L04.howMuch;
        document.getElementById('rw05').value = river_L05.whoSelect;
        document.getElementById('ra05').value = river_L05.actionSelect;
        document.getElementById('rh05').value = river_L05.howMuch;
        document.getElementById('rw06').value = river_L06.whoSelect;
        document.getElementById('ra06').value = river_L06.actionSelect;
        document.getElementById('rh06').value = river_L06.howMuch;
        document.getElementById('rw07').value = river_L07.whoSelect;
        document.getElementById('ra07').value = river_L07.actionSelect;
        document.getElementById('rh07').value = river_L07.howMuch;
        document.getElementById('rw08').value = river_L08.whoSelect;
        document.getElementById('ra08').value = river_L08.actionSelect;
        document.getElementById('rh08').value = river_L08.howMuch;
        document.getElementById('rw09').value = river_L09.whoSelect;
        document.getElementById('ra09').value = river_L09.actionSelect;
        document.getElementById('rh09').value = river_L09.howMuch;
        document.getElementById('rw10').value = river_L10.whoSelect;
        document.getElementById('ra10').value = river_L10.actionSelect;
        document.getElementById('rh10').value = river_L10.howMuch;
        document.getElementById('rw11').value = river_L11.whoSelect;
        document.getElementById('ra11').value = river_L11.actionSelect;
        document.getElementById('rh11').value = river_L11.howMuch;
        document.getElementById('rw12').value = river_L12.whoSelect;
        document.getElementById('ra12').value = river_L12.actionSelect;
        document.getElementById('rh12').value = river_L12.howMuch;
        document.getElementById('rw13').value = river_L13.whoSelect;
        document.getElementById('ra13').value = river_L13.actionSelect;
        document.getElementById('rh13').value = river_L13.howMuch;
        document.getElementById('rw14').value = river_L14.whoSelect;
        document.getElementById('ra14').value = river_L14.actionSelect;
        document.getElementById('rh14').value = river_L14.howMuch;
        document.getElementById('rw15').value = river_L15.whoSelect;
        document.getElementById('ra15').value = river_L15.actionSelect;
        document.getElementById('rh15').value = river_L15.howMuch;
        document.getElementById('rw16').value = river_L16.whoSelect;
        document.getElementById('ra16').value = river_L16.actionSelect;
        document.getElementById('rh16').value = river_L16.howMuch;
        document.getElementById('rw17').value = river_L17.whoSelect;
        document.getElementById('ra17').value = river_L17.actionSelect;
        document.getElementById('rh17').value = river_L17.howMuch;
        document.getElementById('rw18').value = river_L18.whoSelect;
        document.getElementById('ra18').value = river_L18.actionSelect;
        document.getElementById('rh18').value = river_L18.howMuch;
        document.getElementById('rw19').value = river_L19.whoSelect;
        document.getElementById('ra19').value = river_L19.actionSelect;
        document.getElementById('rh19').value = river_L19.howMuch;
        document.getElementById('rw20').value = river_L20.whoSelect;
        document.getElementById('ra20').value = river_L20.actionSelect;
        document.getElementById('rh20').value = river_L20.howMuch;
        document.getElementById('rw21').value = river_L21.whoSelect;
        document.getElementById('ra21').value = river_L21.actionSelect;
        document.getElementById('rh21').value = river_L21.howMuch;
        document.getElementById('rw22').value = river_L22.whoSelect;
        document.getElementById('ra22').value = river_L22.actionSelect;
        document.getElementById('rh22').value = river_L22.howMuch;
        document.getElementById('rw23').value = river_L23.whoSelect;
        document.getElementById('ra23').value = river_L23.actionSelect;
        document.getElementById('rh23').value = river_L23.howMuch;
        document.getElementById('rw24').value = river_L24.whoSelect;
        document.getElementById('ra24').value = river_L24.actionSelect;
        document.getElementById('rh24').value = river_L24.howMuch;
        document.getElementById('rw25').value = river_L25.whoSelect;
        document.getElementById('ra25').value = river_L25.actionSelect;
        document.getElementById('rh25').value = river_L25.howMuch;
        document.getElementById('rw26').value = river_L26.whoSelect;
        document.getElementById('ra26').value = river_L26.actionSelect;
        document.getElementById('rh26').value = river_L26.howMuch;
        document.getElementById('rw27').value = river_L27.whoSelect;
        document.getElementById('ra27').value = river_L27.actionSelect;
        document.getElementById('rh27').value = river_L27.howMuch;
        document.getElementById('rw28').value = river_L28.whoSelect;
        document.getElementById('ra28').value = river_L28.actionSelect;
        document.getElementById('rh28').value = river_L28.howMuch;
        document.getElementById('rw29').value = river_L29.whoSelect;
        document.getElementById('ra29').value = river_L29.actionSelect;
        document.getElementById('rh29').value = river_L29.howMuch;
    
        //フォームをsubmit
        document.myform.action = "./page05_2_6_edit";
        document.myform.submit();
    }else if(setting.players == "9"){
        document.getElementById('historyname').value = document.getElementById('history_name').value;
        document.getElementById('comment').value = document.getElementById('hand_comment').value;
        document.getElementById('count').value = "9";
        document.getElementById('tag1').value = document.getElementById('Tag1').value;
        document.getElementById('tag2').value = document.getElementById('Tag2').value;
        document.getElementById('tag3').value = document.getElementById('Tag3').value;
    
        //基本情報から
        document.getElementById('game').value = document.getElementById('game_type').value;
        document.getElementById('stack').value = document.getElementById('effective_stack').value;
        document.getElementById('uni').value = document.getElementById('unit').value;
        document.getElementById('stradler').value = document.getElementById('stradle').value;
        document.getElementById('sblind').value = document.getElementById('small_blind').value;
        document.getElementById('bblind').value = document.getElementById('big_blind').value;
        document.getElementById('whoante').value = document.getElementById('ante_who').value;
        document.getElementById('howante').value = document.getElementById('ante_amount').value;
    
        //プレイヤー情報から
        //UTG
        document.getElementById('utg_name').value = document.getElementById('UTG_person').value;
        document.getElementById('utg_card01').value = players_card[0].name;
        document.getElementById('utg_card02').value = players_card[1].name;
        document.getElementById('utg_stack').value = document.getElementById('UTG_stack').value;
        //EP1
        document.getElementById('ep1_name').value = document.getElementById('EP1_person').value;
        document.getElementById('ep1_card01').value = players_card[2].name;
        document.getElementById('ep1_card02').value = players_card[3].name;
        document.getElementById('ep1_stack').value = document.getElementById('EP1_stack').value;
        //EP2
        document.getElementById('ep2_name').value = document.getElementById('EP2_person').value;
        document.getElementById('ep2_card01').value = players_card[4].name;
        document.getElementById('ep2_card02').value = players_card[5].name;
        document.getElementById('ep2_stack').value = document.getElementById('EP2_stack').value;
        //LJ
        document.getElementById('lj_name').value = document.getElementById('LJ_person').value;
        document.getElementById('lj_card01').value = players_card[6].name;
        document.getElementById('lj_card02').value = players_card[7].name;
        document.getElementById('lj_stack').value = document.getElementById('LJ_stack').value;
        //HJ
        document.getElementById('hj_name').value = document.getElementById('HJ_person').value;
        document.getElementById('hj_card01').value = players_card[8].name;
        document.getElementById('hj_card02').value = players_card[9].name;
        document.getElementById('hj_stack').value = document.getElementById('HJ_stack').value;
        //CO
        document.getElementById('co_name').value = document.getElementById('CO_person').value;
        document.getElementById('co_card01').value = players_card[10].name;
        document.getElementById('co_card02').value = players_card[11].name;
        document.getElementById('co_stack').value = document.getElementById('CO_stack').value;
        //BTN
        document.getElementById('btn_name').value = document.getElementById('BTN_person').value;
        document.getElementById('btn_card01').value = players_card[12].name;
        document.getElementById('btn_card02').value = players_card[13].name;
        document.getElementById('btn_stack').value = document.getElementById('BTN_stack').value;
        //SB
        document.getElementById('sb_name').value = document.getElementById('SB_person').value;
        document.getElementById('sb_card01').value = players_card[14].name;
        document.getElementById('sb_card02').value = players_card[15].name;
        document.getElementById('sb_stack').value = document.getElementById('SB_stack').value;
        //BB
        document.getElementById('bb_name').value = document.getElementById('BB_person').value;
        document.getElementById('bb_card01').value = players_card[16].name;
        document.getElementById('bb_card02').value = players_card[17].name;
        document.getElementById('bb_stack').value = document.getElementById('BB_stack').value;
    
        //ボード情報から
        document.getElementById('bcard01').value = board_array[0].name;
        document.getElementById('bcard02').value = board_array[1].name;
        document.getElementById('bcard03').value = board_array[2].name;
        document.getElementById('bcard04').value = board_array[3].name;
        document.getElementById('bcard05').value = board_array[4].name;
    
        //アクション情報から
        //プリフロップ
        document.getElementById('pfw01').value = preflop_L01.whoSelect;
        document.getElementById('pfa01').value = preflop_L01.actionSelect;
        document.getElementById('pfh01').value = preflop_L01.howMuch;
        document.getElementById('pfw02').value = preflop_L02.whoSelect;
        document.getElementById('pfa02').value = preflop_L02.actionSelect;
        document.getElementById('pfh02').value = preflop_L02.howMuch;
        document.getElementById('pfw03').value = preflop_L03.whoSelect;
        document.getElementById('pfa03').value = preflop_L03.actionSelect;
        document.getElementById('pfh03').value = preflop_L03.howMuch;
        document.getElementById('pfw04').value = preflop_L04.whoSelect;
        document.getElementById('pfa04').value = preflop_L04.actionSelect;
        document.getElementById('pfh04').value = preflop_L04.howMuch;
        document.getElementById('pfw05').value = preflop_L05.whoSelect;
        document.getElementById('pfa05').value = preflop_L05.actionSelect;
        document.getElementById('pfh05').value = preflop_L05.howMuch;
        document.getElementById('pfw06').value = preflop_L06.whoSelect;
        document.getElementById('pfa06').value = preflop_L06.actionSelect;
        document.getElementById('pfh06').value = preflop_L06.howMuch;
        document.getElementById('pfw07').value = preflop_L07.whoSelect;
        document.getElementById('pfa07').value = preflop_L07.actionSelect;
        document.getElementById('pfh07').value = preflop_L07.howMuch;
        document.getElementById('pfw08').value = preflop_L08.whoSelect;
        document.getElementById('pfa08').value = preflop_L08.actionSelect;
        document.getElementById('pfh08').value = preflop_L08.howMuch;
        document.getElementById('pfw09').value = preflop_L09.whoSelect;
        document.getElementById('pfa09').value = preflop_L09.actionSelect;
        document.getElementById('pfh09').value = preflop_L09.howMuch;
        document.getElementById('pfw10').value = preflop_L10.whoSelect;
        document.getElementById('pfa10').value = preflop_L10.actionSelect;
        document.getElementById('pfh10').value = preflop_L10.howMuch;
        document.getElementById('pfw11').value = preflop_L11.whoSelect;
        document.getElementById('pfa11').value = preflop_L11.actionSelect;
        document.getElementById('pfh11').value = preflop_L11.howMuch;
        document.getElementById('pfw12').value = preflop_L12.whoSelect;
        document.getElementById('pfa12').value = preflop_L12.actionSelect;
        document.getElementById('pfh12').value = preflop_L12.howMuch;
        document.getElementById('pfw13').value = preflop_L13.whoSelect;
        document.getElementById('pfa13').value = preflop_L13.actionSelect;
        document.getElementById('pfh13').value = preflop_L13.howMuch;
        document.getElementById('pfw14').value = preflop_L14.whoSelect;
        document.getElementById('pfa14').value = preflop_L14.actionSelect;
        document.getElementById('pfh14').value = preflop_L14.howMuch;
        document.getElementById('pfw15').value = preflop_L15.whoSelect;
        document.getElementById('pfa15').value = preflop_L15.actionSelect;
        document.getElementById('pfh15').value = preflop_L15.howMuch;
        document.getElementById('pfw16').value = preflop_L16.whoSelect;
        document.getElementById('pfa16').value = preflop_L16.actionSelect;
        document.getElementById('pfh16').value = preflop_L16.howMuch;
        document.getElementById('pfw17').value = preflop_L17.whoSelect;
        document.getElementById('pfa17').value = preflop_L17.actionSelect;
        document.getElementById('pfh17').value = preflop_L17.howMuch;
        document.getElementById('pfw18').value = preflop_L18.whoSelect;
        document.getElementById('pfa18').value = preflop_L18.actionSelect;
        document.getElementById('pfh18').value = preflop_L18.howMuch;
        document.getElementById('pfw19').value = preflop_L19.whoSelect;
        document.getElementById('pfa19').value = preflop_L19.actionSelect;
        document.getElementById('pfh19').value = preflop_L19.howMuch;
        document.getElementById('pfw20').value = preflop_L20.whoSelect;
        document.getElementById('pfa20').value = preflop_L20.actionSelect;
        document.getElementById('pfh20').value = preflop_L20.howMuch;
        document.getElementById('pfw21').value = preflop_L21.whoSelect;
        document.getElementById('pfa21').value = preflop_L21.actionSelect;
        document.getElementById('pfh21').value = preflop_L21.howMuch;
        document.getElementById('pfw22').value = preflop_L22.whoSelect;
        document.getElementById('pfa22').value = preflop_L22.actionSelect;
        document.getElementById('pfh22').value = preflop_L22.howMuch;
        document.getElementById('pfw23').value = preflop_L23.whoSelect;
        document.getElementById('pfa23').value = preflop_L23.actionSelect;
        document.getElementById('pfh23').value = preflop_L23.howMuch;
        document.getElementById('pfw24').value = preflop_L24.whoSelect;
        document.getElementById('pfa24').value = preflop_L24.actionSelect;
        document.getElementById('pfh24').value = preflop_L24.howMuch;
        document.getElementById('pfw25').value = preflop_L25.whoSelect;
        document.getElementById('pfa25').value = preflop_L25.actionSelect;
        document.getElementById('pfh25').value = preflop_L25.howMuch;
        document.getElementById('pfw26').value = preflop_L26.whoSelect;
        document.getElementById('pfa26').value = preflop_L26.actionSelect;
        document.getElementById('pfh26').value = preflop_L26.howMuch;
        document.getElementById('pfw27').value = preflop_L27.whoSelect;
        document.getElementById('pfa27').value = preflop_L27.actionSelect;
        document.getElementById('pfh27').value = preflop_L27.howMuch;
        document.getElementById('pfw28').value = preflop_L28.whoSelect;
        document.getElementById('pfa28').value = preflop_L28.actionSelect;
        document.getElementById('pfh28').value = preflop_L28.howMuch;
        document.getElementById('pfw29').value = preflop_L29.whoSelect;
        document.getElementById('pfa29').value = preflop_L29.actionSelect;
        document.getElementById('pfh29').value = preflop_L29.howMuch;
    
        //フロップ
        document.getElementById('fw01').value = flop_L01.whoSelect;
        document.getElementById('fa01').value = flop_L01.actionSelect;
        document.getElementById('fh01').value = flop_L01.howMuch;
        document.getElementById('fw02').value = flop_L02.whoSelect;
        document.getElementById('fa02').value = flop_L02.actionSelect;
        document.getElementById('fh02').value = flop_L02.howMuch;
        document.getElementById('fw03').value = flop_L03.whoSelect;
        document.getElementById('fa03').value = flop_L03.actionSelect;
        document.getElementById('fh03').value = flop_L03.howMuch;
        document.getElementById('fw04').value = flop_L04.whoSelect;
        document.getElementById('fa04').value = flop_L04.actionSelect;
        document.getElementById('fh04').value = flop_L04.howMuch;
        document.getElementById('fw05').value = flop_L05.whoSelect;
        document.getElementById('fa05').value = flop_L05.actionSelect;
        document.getElementById('fh05').value = flop_L05.howMuch;
        document.getElementById('fw06').value = flop_L06.whoSelect;
        document.getElementById('fa06').value = flop_L06.actionSelect;
        document.getElementById('fh06').value = flop_L06.howMuch;
        document.getElementById('fw07').value = flop_L07.whoSelect;
        document.getElementById('fa07').value = flop_L07.actionSelect;
        document.getElementById('fh07').value = flop_L07.howMuch;
        document.getElementById('fw08').value = flop_L08.whoSelect;
        document.getElementById('fa08').value = flop_L08.actionSelect;
        document.getElementById('fh08').value = flop_L08.howMuch;
        document.getElementById('fw09').value = flop_L09.whoSelect;
        document.getElementById('fa09').value = flop_L09.actionSelect;
        document.getElementById('fh09').value = flop_L09.howMuch;
        document.getElementById('fw10').value = flop_L10.whoSelect;
        document.getElementById('fa10').value = flop_L10.actionSelect;
        document.getElementById('fh10').value = flop_L10.howMuch;
        document.getElementById('fw11').value = flop_L11.whoSelect;
        document.getElementById('fa11').value = flop_L11.actionSelect;
        document.getElementById('fh11').value = flop_L11.howMuch;
        document.getElementById('fw12').value = flop_L12.whoSelect;
        document.getElementById('fa12').value = flop_L12.actionSelect;
        document.getElementById('fh12').value = flop_L12.howMuch;
        document.getElementById('fw13').value = flop_L13.whoSelect;
        document.getElementById('fa13').value = flop_L13.actionSelect;
        document.getElementById('fh13').value = flop_L13.howMuch;
        document.getElementById('fw14').value = flop_L14.whoSelect;
        document.getElementById('fa14').value = flop_L14.actionSelect;
        document.getElementById('fh14').value = flop_L14.howMuch;
        document.getElementById('fw15').value = flop_L15.whoSelect;
        document.getElementById('fa15').value = flop_L15.actionSelect;
        document.getElementById('fh15').value = flop_L15.howMuch;
        document.getElementById('fw16').value = flop_L16.whoSelect;
        document.getElementById('fa16').value = flop_L16.actionSelect;
        document.getElementById('fh16').value = flop_L16.howMuch;
        document.getElementById('fw17').value = flop_L17.whoSelect;
        document.getElementById('fa17').value = flop_L17.actionSelect;
        document.getElementById('fh17').value = flop_L17.howMuch;
        document.getElementById('fw18').value = flop_L18.whoSelect;
        document.getElementById('fa18').value = flop_L18.actionSelect;
        document.getElementById('fh18').value = flop_L18.howMuch;
        document.getElementById('fw19').value = flop_L19.whoSelect;
        document.getElementById('fa19').value = flop_L19.actionSelect;
        document.getElementById('fh19').value = flop_L19.howMuch;
        document.getElementById('fw20').value = flop_L20.whoSelect;
        document.getElementById('fa20').value = flop_L20.actionSelect;
        document.getElementById('fh20').value = flop_L20.howMuch;
        document.getElementById('fw21').value = flop_L21.whoSelect;
        document.getElementById('fa21').value = flop_L21.actionSelect;
        document.getElementById('fh21').value = flop_L21.howMuch;
        document.getElementById('fw22').value = flop_L22.whoSelect;
        document.getElementById('fa22').value = flop_L22.actionSelect;
        document.getElementById('fh22').value = flop_L22.howMuch;
        document.getElementById('fw23').value = flop_L23.whoSelect;
        document.getElementById('fa23').value = flop_L23.actionSelect;
        document.getElementById('fh23').value = flop_L23.howMuch;
        document.getElementById('fw24').value = flop_L24.whoSelect;
        document.getElementById('fa24').value = flop_L24.actionSelect;
        document.getElementById('fh24').value = flop_L24.howMuch;
        document.getElementById('fw25').value = flop_L25.whoSelect;
        document.getElementById('fa25').value = flop_L25.actionSelect;
        document.getElementById('fh25').value = flop_L25.howMuch;
        document.getElementById('fw26').value = flop_L26.whoSelect;
        document.getElementById('fa26').value = flop_L26.actionSelect;
        document.getElementById('fh26').value = flop_L26.howMuch;
        document.getElementById('fw27').value = flop_L27.whoSelect;
        document.getElementById('fa27').value = flop_L27.actionSelect;
        document.getElementById('fh27').value = flop_L27.howMuch;
        document.getElementById('fw28').value = flop_L28.whoSelect;
        document.getElementById('fa28').value = flop_L28.actionSelect;
        document.getElementById('fh28').value = flop_L28.howMuch;
        document.getElementById('fw29').value = flop_L29.whoSelect;
        document.getElementById('fa29').value = flop_L29.actionSelect;
        document.getElementById('fh29').value = flop_L29.howMuch;
    
        //ターン
        document.getElementById('tw01').value = turn_L01.whoSelect;
        document.getElementById('ta01').value = turn_L01.actionSelect;
        document.getElementById('th01').value = turn_L01.howMuch;
        document.getElementById('tw02').value = turn_L02.whoSelect;
        document.getElementById('ta02').value = turn_L02.actionSelect;
        document.getElementById('th02').value = turn_L02.howMuch;
        document.getElementById('tw03').value = turn_L03.whoSelect;
        document.getElementById('ta03').value = turn_L03.actionSelect;
        document.getElementById('th03').value = turn_L03.howMuch;
        document.getElementById('tw04').value = turn_L04.whoSelect;
        document.getElementById('ta04').value = turn_L04.actionSelect;
        document.getElementById('th04').value = turn_L04.howMuch;
        document.getElementById('tw05').value = turn_L05.whoSelect;
        document.getElementById('ta05').value = turn_L05.actionSelect;
        document.getElementById('th05').value = turn_L05.howMuch;
        document.getElementById('tw06').value = turn_L06.whoSelect;
        document.getElementById('ta06').value = turn_L06.actionSelect;
        document.getElementById('th06').value = turn_L06.howMuch;
        document.getElementById('tw07').value = turn_L07.whoSelect;
        document.getElementById('ta07').value = turn_L07.actionSelect;
        document.getElementById('th07').value = turn_L07.howMuch;
        document.getElementById('tw08').value = turn_L08.whoSelect;
        document.getElementById('ta08').value = turn_L08.actionSelect;
        document.getElementById('th08').value = turn_L08.howMuch;
        document.getElementById('tw09').value = turn_L09.whoSelect;
        document.getElementById('ta09').value = turn_L09.actionSelect;
        document.getElementById('th09').value = turn_L09.howMuch;
        document.getElementById('tw10').value = turn_L10.whoSelect;
        document.getElementById('ta10').value = turn_L10.actionSelect;
        document.getElementById('th10').value = turn_L10.howMuch;
        document.getElementById('tw11').value = turn_L11.whoSelect;
        document.getElementById('ta11').value = turn_L11.actionSelect;
        document.getElementById('th11').value = turn_L11.howMuch;
        document.getElementById('tw12').value = turn_L12.whoSelect;
        document.getElementById('ta12').value = turn_L12.actionSelect;
        document.getElementById('th12').value = turn_L12.howMuch;
        document.getElementById('tw13').value = turn_L13.whoSelect;
        document.getElementById('ta13').value = turn_L13.actionSelect;
        document.getElementById('th13').value = turn_L13.howMuch;
        document.getElementById('tw14').value = turn_L14.whoSelect;
        document.getElementById('ta14').value = turn_L14.actionSelect;
        document.getElementById('th14').value = turn_L14.howMuch;
        document.getElementById('tw15').value = turn_L15.whoSelect;
        document.getElementById('ta15').value = turn_L15.actionSelect;
        document.getElementById('th15').value = turn_L15.howMuch;
        document.getElementById('tw16').value = turn_L16.whoSelect;
        document.getElementById('ta16').value = turn_L16.actionSelect;
        document.getElementById('th16').value = turn_L16.howMuch;
        document.getElementById('tw17').value = turn_L17.whoSelect;
        document.getElementById('ta17').value = turn_L17.actionSelect;
        document.getElementById('th17').value = turn_L17.howMuch;
        document.getElementById('tw18').value = turn_L18.whoSelect;
        document.getElementById('ta18').value = turn_L18.actionSelect;
        document.getElementById('th18').value = turn_L18.howMuch;
        document.getElementById('tw19').value = turn_L19.whoSelect;
        document.getElementById('ta19').value = turn_L19.actionSelect;
        document.getElementById('th19').value = turn_L19.howMuch;
        document.getElementById('tw20').value = turn_L20.whoSelect;
        document.getElementById('ta20').value = turn_L20.actionSelect;
        document.getElementById('th20').value = turn_L20.howMuch;
        document.getElementById('tw21').value = turn_L21.whoSelect;
        document.getElementById('ta21').value = turn_L21.actionSelect;
        document.getElementById('th21').value = turn_L21.howMuch;
        document.getElementById('tw22').value = turn_L22.whoSelect;
        document.getElementById('ta22').value = turn_L22.actionSelect;
        document.getElementById('th22').value = turn_L22.howMuch;
        document.getElementById('tw23').value = turn_L23.whoSelect;
        document.getElementById('ta23').value = turn_L23.actionSelect;
        document.getElementById('th23').value = turn_L23.howMuch;
        document.getElementById('tw24').value = turn_L24.whoSelect;
        document.getElementById('ta24').value = turn_L24.actionSelect;
        document.getElementById('th24').value = turn_L24.howMuch;
        document.getElementById('tw25').value = turn_L25.whoSelect;
        document.getElementById('ta25').value = turn_L25.actionSelect;
        document.getElementById('th25').value = turn_L25.howMuch;
        document.getElementById('tw26').value = turn_L26.whoSelect;
        document.getElementById('ta26').value = turn_L26.actionSelect;
        document.getElementById('th26').value = turn_L26.howMuch;
        document.getElementById('tw27').value = turn_L27.whoSelect;
        document.getElementById('ta27').value = turn_L27.actionSelect;
        document.getElementById('th27').value = turn_L27.howMuch;
        document.getElementById('tw28').value = turn_L28.whoSelect;
        document.getElementById('ta28').value = turn_L28.actionSelect;
        document.getElementById('th28').value = turn_L28.howMuch;
        document.getElementById('tw29').value = turn_L29.whoSelect;
        document.getElementById('ta29').value = turn_L29.actionSelect;
        document.getElementById('th29').value = turn_L29.howMuch;
    
        //リバー
        document.getElementById('rw01').value = river_L01.whoSelect;
        document.getElementById('ra01').value = river_L01.actionSelect;
        document.getElementById('rh01').value = river_L01.howMuch;
        document.getElementById('rw02').value = river_L02.whoSelect;
        document.getElementById('ra02').value = river_L02.actionSelect;
        document.getElementById('rh02').value = river_L02.howMuch;
        document.getElementById('rw03').value = river_L03.whoSelect;
        document.getElementById('ra03').value = river_L03.actionSelect;
        document.getElementById('rh03').value = river_L03.howMuch;
        document.getElementById('rw04').value = river_L04.whoSelect;
        document.getElementById('ra04').value = river_L04.actionSelect;
        document.getElementById('rh04').value = river_L04.howMuch;
        document.getElementById('rw05').value = river_L05.whoSelect;
        document.getElementById('ra05').value = river_L05.actionSelect;
        document.getElementById('rh05').value = river_L05.howMuch;
        document.getElementById('rw06').value = river_L06.whoSelect;
        document.getElementById('ra06').value = river_L06.actionSelect;
        document.getElementById('rh06').value = river_L06.howMuch;
        document.getElementById('rw07').value = river_L07.whoSelect;
        document.getElementById('ra07').value = river_L07.actionSelect;
        document.getElementById('rh07').value = river_L07.howMuch;
        document.getElementById('rw08').value = river_L08.whoSelect;
        document.getElementById('ra08').value = river_L08.actionSelect;
        document.getElementById('rh08').value = river_L08.howMuch;
        document.getElementById('rw09').value = river_L09.whoSelect;
        document.getElementById('ra09').value = river_L09.actionSelect;
        document.getElementById('rh09').value = river_L09.howMuch;
        document.getElementById('rw10').value = river_L10.whoSelect;
        document.getElementById('ra10').value = river_L10.actionSelect;
        document.getElementById('rh10').value = river_L10.howMuch;
        document.getElementById('rw11').value = river_L11.whoSelect;
        document.getElementById('ra11').value = river_L11.actionSelect;
        document.getElementById('rh11').value = river_L11.howMuch;
        document.getElementById('rw12').value = river_L12.whoSelect;
        document.getElementById('ra12').value = river_L12.actionSelect;
        document.getElementById('rh12').value = river_L12.howMuch;
        document.getElementById('rw13').value = river_L13.whoSelect;
        document.getElementById('ra13').value = river_L13.actionSelect;
        document.getElementById('rh13').value = river_L13.howMuch;
        document.getElementById('rw14').value = river_L14.whoSelect;
        document.getElementById('ra14').value = river_L14.actionSelect;
        document.getElementById('rh14').value = river_L14.howMuch;
        document.getElementById('rw15').value = river_L15.whoSelect;
        document.getElementById('ra15').value = river_L15.actionSelect;
        document.getElementById('rh15').value = river_L15.howMuch;
        document.getElementById('rw16').value = river_L16.whoSelect;
        document.getElementById('ra16').value = river_L16.actionSelect;
        document.getElementById('rh16').value = river_L16.howMuch;
        document.getElementById('rw17').value = river_L17.whoSelect;
        document.getElementById('ra17').value = river_L17.actionSelect;
        document.getElementById('rh17').value = river_L17.howMuch;
        document.getElementById('rw18').value = river_L18.whoSelect;
        document.getElementById('ra18').value = river_L18.actionSelect;
        document.getElementById('rh18').value = river_L18.howMuch;
        document.getElementById('rw19').value = river_L19.whoSelect;
        document.getElementById('ra19').value = river_L19.actionSelect;
        document.getElementById('rh19').value = river_L19.howMuch;
        document.getElementById('rw20').value = river_L20.whoSelect;
        document.getElementById('ra20').value = river_L20.actionSelect;
        document.getElementById('rh20').value = river_L20.howMuch;
        document.getElementById('rw21').value = river_L21.whoSelect;
        document.getElementById('ra21').value = river_L21.actionSelect;
        document.getElementById('rh21').value = river_L21.howMuch;
        document.getElementById('rw22').value = river_L22.whoSelect;
        document.getElementById('ra22').value = river_L22.actionSelect;
        document.getElementById('rh22').value = river_L22.howMuch;
        document.getElementById('rw23').value = river_L23.whoSelect;
        document.getElementById('ra23').value = river_L23.actionSelect;
        document.getElementById('rh23').value = river_L23.howMuch;
        document.getElementById('rw24').value = river_L24.whoSelect;
        document.getElementById('ra24').value = river_L24.actionSelect;
        document.getElementById('rh24').value = river_L24.howMuch;
        document.getElementById('rw25').value = river_L25.whoSelect;
        document.getElementById('ra25').value = river_L25.actionSelect;
        document.getElementById('rh25').value = river_L25.howMuch;
        document.getElementById('rw26').value = river_L26.whoSelect;
        document.getElementById('ra26').value = river_L26.actionSelect;
        document.getElementById('rh26').value = river_L26.howMuch;
        document.getElementById('rw27').value = river_L27.whoSelect;
        document.getElementById('ra27').value = river_L27.actionSelect;
        document.getElementById('rh27').value = river_L27.howMuch;
        document.getElementById('rw28').value = river_L28.whoSelect;
        document.getElementById('ra28').value = river_L28.actionSelect;
        document.getElementById('rh28').value = river_L28.howMuch;
        document.getElementById('rw29').value = river_L29.whoSelect;
        document.getElementById('ra29').value = river_L29.actionSelect;
        document.getElementById('rh29').value = river_L29.howMuch;
    
        //フォームをsubmit
        document.myform.action = "./page05_2_9_edit";
        document.myform.submit();
    }
}