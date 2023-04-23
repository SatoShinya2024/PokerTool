let list_id_array = [];
let list_inner_array = [];
let list_contentes_array = [];
async function handhistory_list_open(){
    //サーバーに送るデータをまとめる。数値型だと上手くいかなかったので、文字列に直す
    const senddata01 = {
        methodpass:"1",
    }
    //サーバーから返ってきたデータを受け取る変数。
    //データをjson形式に変換して、ポスト送信
    const resp01 = await fetch('/page07_1', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata01),
    })
    //受け取ったデータをjson形式に直す
    const result01 = await resp01.json();
    //データを元に、コンテンツを作る
    let list_contentes = " ";
    let historylist = result01.historylist;
    for(let i = 0; i < historylist.length; i++){
      list_contentes += '<h2 class="accordion-header" id="heading' + i + '"><button class="accordion-button fs-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapse' + i + '" aria-expanded="true" aria-controls="collapse' + i + '">' + historylist[i].name + ' ' + historylist[i].date + '</button></h2><div id="collapse' + i + '" class="accordion-collapse collapse" aria-labelledby="heading' + i + '" data-bs-parent="#history_list_wrapper"><div class="accordion-body" id="' + 'accordion-body' + i + '"></div></div></div>';
        list_id_array.push(historylist[i].id);
      }
    document.getElementById('history_list_wrapper').innerHTML = list_contentes;
    const senddata02 = {
        methodpass:"2",
        list:historylist,
    }
    const resp02 = await fetch('/page07_1', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata02),
    })
    const result02 = await resp02.json();
    const list_inner = result02.resultlist;
    list_contentes_array = result02.listcontentes;
    for(let i = 0; i < list_inner.length; i++){
        let handhistories = list_inner[i];
        let accordion_body = " ";
        let accordion_body_id = "accordion-body" + i;
        let inner_array = [];
        if(handhistories.length == 0){
            accordion_body += '<p class="row justify-content-around"><button class="col-5 btn btn-outline-primary fs-2">リストを編集する</button><button class="col-5 btn btn-outline-danger fs-2" onclick="delete_list(' + i + ')">リストを削除する</button></p>';
            accordion_body += "<div class='fs-1'>※リストにハンドヒストリーが定義されていません。</div>";
        }else{
            accordion_body += '<p class="row justify-content-around"><button class="col-5 btn btn-outline-primary fs-2">リストを編集する</button><button class="col-5 btn btn-outline-danger fs-2" onclick="delete_list(' + i + ')">リストを削除する</button></p>';
            for(let j = 0; j < handhistories.length; j++){
              let handhistory = handhistories[j];
              accordion_body += '<dl class="d-flex"><dt class="col-5 me-5 fs-2 text-truncate">' + handhistory.name + '</dt><dd class="col-12 d-flex text-start"><button class="col-3 btn btn-info fs-3" onclick="text_open(' + i + ',' +  j + ')">テキスト</button><button class="col-3 btn btn-info fs-3" onclick="video_start(' + i + ',' + j + ')">動画再生</button><button class="col-4 btn btn-danger fs-3" onclick="delete_list_inner(' + i + ',' + j + ')">リストから削除</button></dd></dl>';
              inner_array.push(handhistories[j].id);
            }
        }
        list_inner_array.push(inner_array);
        document.getElementById(accordion_body_id).innerHTML = accordion_body;
    }
}

function delete_list_inner(num1, num2){
    if(confirm('このハンドヒストリーをリストから削除してもよろしいですか？')){
        // console.log(list_contentes_array[num1][num2].id)
        let list_contentes_id = String(list_contentes_array[num1][num2].id);
        let id = document.createElement('input');
        id.name = 'id';
        id.value = list_contentes_id;
        let form = document.createElement('form');
        form.method = 'POST';
        form.action = 'page07_1/delete_listcontentes';
        form.style.display = 'none';
        document.body.appendChild(form);
        form.appendChild(id);
        form.submit();
    }
}

function delete_list(num){
    if(confirm('このリストを削除してよろしいですか？')){
        let list_id = document.createElement('input');
        list_id.name = 'list_id';
        list_id.value = list_id_array[num];
        let form = document.createElement('form');
        form.style.display = 'none';
        form.action = 'page07_1/delete';
        form.method = 'POST';
        document.body.appendChild(form);
        form.appendChild(list_id);
        form.submit();
    }
}

async function text_open(list_num, handhistory_num){
    let handid = String(list_inner_array[list_num][handhistory_num]);
    const senddata = {
        methodpass:'3',
        handid:handid,
    }
    const resp = await fetch('page07_1', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata),
    })
    const result = await resp.json();
    let setting = result.setting;
    let board = result.board;
    let players = result.players;
    let preflop = result.preflop;
    let flop = result.flop;
    let turn = result.turn;
    let river = result.river;

    make_text(setting, board, players, preflop, flop, turn, river);
}

async function video_start(list_num, handhistory_num){
    let handid = String(list_inner_array[list_num][handhistory_num]);
    const senddata = {
        methodpass:'4',
        handid:handid,
    }
    const resp = await fetch('page07_1', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata),
    })
    const result = await resp.json();

    var myModal = new bootstrap.Modal(document.getElementById('demo_Modal'), {
            keyboard: false
        })

    myModal.show();

    demo_set(result.setting, result.players, result.board, result.preflop, result.flop, result.turn, result.river);
}

let handid_array = [];
let selectid_array = [];
//ハンドヒストリーのデータにカーソルを乗せたとき、自動的にプレビューが表示されるメソッド
async function preview_open(num){
//サーバーに送るデータをまとめる。数値型だと上手くいかなかったので、文字列に直す
    let id = handid_array[num];
    const senddata = {
        methodpass:"1",
        id:String(id),
    }
    //サーバーから返ってきたデータを受け取る変数。
    //データをjson形式に変換して、ポスト送信
    const resp = await fetch('/page07_2', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata),
    })
//受け取ったデータをjson形式に直す
    const result = await resp.json();
//最初にボードの処理。
    const board_array = [dummy, dummy, dummy, dummy, dummy];
    //サーバーから受け取ったデータとカードリストを比較することで、boardarrayの正しい位置にカードを格納する
    await card_List.forEach((value) => {
        if(value.name == result.board.card1){
            board_array[0] = value;
        }else if(value.name == result.board.card2){
            board_array[1] = value;
        }else if(value.name == result.board.card3){
            board_array[2] = value;
        }else if(value.name == result.board.card4){
            board_array[3] = value;
        }else if(value.name == result.board.card5){
            board_array[4] = value;
        }
    })
    //ボード情報の表示。
    let board_contentes = '<span class="fs-1">ボード </span><img src=' + board_array[0].path + ' hspace="2px" vspace="2px" class="cards"><img src=' + board_array[1].path + ' hspace="2px" vspace="2px" class="cards"><img src=' + board_array[2].path + ' hspace="2px" vspace="2px" class="cards"><img src=' + board_array[3].path + ' hspace="2px" vspace="2px" class="cards"><img src=' + board_array[4].path + ' hspace="2px" vspace="2px" class="cards">';
    document.getElementById("preview_board_wrapper").innerHTML = board_contentes;

    let players_inner = " ";
    for(item of result.players){
        if(item.name != ""){
            players_inner += '<div class="border h-100 col-4 text-truncate"><div>' + item.position + '(' + item.name + ')' + '</div>';
        }else{
            players_inner += '<div class="border h-100 col-4"><div>' + item.position + '</div>';
        }
        players_inner += '<div>' + item.stack + result.setting.uni + '</div>';
        let card1 = dummy;
        let card2 = dummy;
        card_List.forEach(value => {
            if(item.card1 == value.name){
                card1 = value;
            }
            if(item.card2 == value.name){
                card2 = value;
            }
        })
        players_inner += '<div>' + '<img src=' + card1.path + ' class="cards" hspace="2px" vspace="2px">' + '<img src=' + card2.path + ' class="cards" hspace="2px" vspace="2px">' + '</div></div>'
        document.getElementById('preview_player_wrapper').innerHTML = players_inner;
    }
    //プレイヤー情報の処理。すでに情報を格納するカラムは作ってあるので、そこに受け取ったデータを格納していく。
    // if(result.setting.players == "2"){
    //     document.getElementById("player1").style.opacity = 1;
    //     document.getElementById("player2").style.opacity = 1;
    //     document.getElementById("player3").style.opacity = 0;
    //     document.getElementById("player4").style.opacity = 0;
    //     document.getElementById("player5").style.opacity = 0;
    //     document.getElementById("player6").style.opacity = 0;
    //     document.getElementById("player7").style.opacity = 0;
    //     document.getElementById("player8").style.opacity = 0;
    //     document.getElementById("player9").style.opacity = 0;
    //     let player_hand = {card1:dummy, card2:dummy};
    //     //SB
    //     document.getElementById("player_1_position").innerHTML = "SB";
    //     document.getElementById("player_1_name").innerHTML = " " + result.players[0].name + " ";
    //     document.getElementById("player_1_stack").innerHTML = result.players[0].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[0].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[0].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_1_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //BB
    //     document.getElementById("player_2_position").innerHTML = "BB";
    //     document.getElementById("player_2_name").innerHTML = " " + result.players[1].name + " ";
    //     document.getElementById("player_2_stack").innerHTML = result.players[1].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[1].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[1].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_2_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};
    // }else if(result.setting.players == "6"){
    //     document.getElementById("player1").style.opacity = 1;
    //     document.getElementById("player2").style.opacity = 1;
    //     document.getElementById("player3").style.opacity = 1;
    //     document.getElementById("player4").style.opacity = 1;
    //     document.getElementById("player5").style.opacity = 1;
    //     document.getElementById("player6").style.opacity = 1;
    //     document.getElementById("player7").style.opacity = 0;
    //     document.getElementById("player8").style.opacity = 0;
    //     document.getElementById("player9").style.opacity = 0;
    //     let player_hand = {card1:dummy, card2:dummy};

    //     //UTG
    //     document.getElementById("player_1_position").innerHTML = "UTG";
    //     document.getElementById("player_1_name").innerHTML = " " + result.players[0].name + " ";
    //     document.getElementById("player_1_stack").innerHTML = result.players[0].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[0].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[0].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_1_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //HJ
    //     document.getElementById("player_2_position").innerHTML = "HJ";
    //     document.getElementById("player_2_name").innerHTML = " " + result.players[1].name + " ";
    //     document.getElementById("player_2_stack").innerHTML = result.players[1].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[1].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[1].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_2_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //CO
    //     document.getElementById("player_3_position").innerHTML = "CO";
    //     document.getElementById("player_3_name").innerHTML = " " + result.players[2].name + " ";
    //     document.getElementById("player_3_stack").innerHTML = result.players[2].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[2].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[2].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_3_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //BTN
    //     document.getElementById("player_4_position").innerHTML = "BTN";
    //     document.getElementById("player_4_name").innerHTML = " " + result.players[3].name + " ";
    //     document.getElementById("player_4_stack").innerHTML = result.players[3].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[3].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[3].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_4_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //SB
    //     document.getElementById("player_5_position").innerHTML = "SB";
    //     document.getElementById("player_5_name").innerHTML = " " + result.players[4].name + " ";
    //     document.getElementById("player_5_stack").innerHTML = result.players[4].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[4].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[4].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_5_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //BB
    //     document.getElementById("player_6_position").innerHTML = "BB";
    //     document.getElementById("player_6_name").innerHTML = " " + result.players[5].name + " ";
    //     document.getElementById("player_6_stack").innerHTML = result.players[5].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[5].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[5].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_6_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};
    // }else if(result.setting.players == "9"){
    //     document.getElementById("player1").style.opacity = 1;
    //     document.getElementById("player2").style.opacity = 1;
    //     document.getElementById("player3").style.opacity = 1;
    //     document.getElementById("player4").style.opacity = 1;
    //     document.getElementById("player5").style.opacity = 1;
    //     document.getElementById("player6").style.opacity = 1;
    //     document.getElementById("player7").style.opacity = 1;
    //     document.getElementById("player8").style.opacity = 1;
    //     document.getElementById("player9").style.opacity = 1;
    //     let player_hand = {card1:dummy, card2:dummy};

    //     //UTG
    //     document.getElementById("player_1_position").innerHTML = "UTG";
    //     document.getElementById("player_1_name").innerHTML = " " + result.players[0].name + " ";
    //     document.getElementById("player_1_stack").innerHTML = result.players[0].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[0].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[0].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_1_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //EP1
    //     document.getElementById("player_2_position").innerHTML = "EP1";
    //     document.getElementById("player_2_name").innerHTML = " " + result.players[1].name + " ";
    //     document.getElementById("player_2_stack").innerHTML = result.players[1].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[1].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[1].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_2_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //EP2
    //     document.getElementById("player_3_position").innerHTML = "EP2";
    //     document.getElementById("player_3_name").innerHTML = " " + result.players[2].name + " ";
    //     document.getElementById("player_3_stack").innerHTML = result.players[2].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[2].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[2].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_3_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //LJ
    //     document.getElementById("player_4_position").innerHTML = "LJ";
    //     document.getElementById("player_4_name").innerHTML = " " + result.players[3].name + " ";
    //     document.getElementById("player_4_stack").innerHTML = result.players[3].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[3].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[3].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_4_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //HJ
    //     document.getElementById("player_5_position").innerHTML = "HJ";
    //     document.getElementById("player_5_name").innerHTML = " " + result.players[4].name + " ";
    //     document.getElementById("player_5_stack").innerHTML = result.players[4].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[4].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[4].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_5_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //CO
    //     document.getElementById("player_6_position").innerHTML = "CO";
    //     document.getElementById("player_6_name").innerHTML = " " + result.players[5].name + " ";
    //     document.getElementById("player_6_stack").innerHTML = result.players[5].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[5].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[5].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_6_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //BTN
    //     document.getElementById("player_7_position").innerHTML = "BTN";
    //     document.getElementById("player_7_name").innerHTML = " " + result.players[6].name + " ";
    //     document.getElementById("player_7_stack").innerHTML = result.players[6].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[6].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[6].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_7_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //      //SB
    //      document.getElementById("player_8_position").innerHTML = "SB";
    //     document.getElementById("player_8_name").innerHTML = " " + result.players[7].name + " ";
    //     document.getElementById("player_8_stack").innerHTML = result.players[7].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[7].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[7].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_8_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};

    //     //BB
    //     document.getElementById("player_9_position").innerHTML = "BB";
    //     document.getElementById("player_9_name").innerHTML = " " + result.players[8].name + " ";
    //     document.getElementById("player_9_stack").innerHTML = result.players[8].stack;
    //     await card_List.forEach((value) => {
    //         if(value.name == result.players[8].card1){
    //             player_hand.card1 = value;
    //         }
    //         if(value.name == result.players[8].card2){
    //             player_hand.card2 = value;
    //         }
    //     })
    //     document.getElementById("player_9_hand").innerHTML = '<img src=' + player_hand.card1.path + ' hspace="2px" vspace="2px" class="cards"><img src=' + player_hand.card2.path + ' hspace="2px" vspace="2px" class="cards">';
    //     player_hand = {card1:dummy, card2:dummy};
    // }
    //ゲーム内容の表示
    let preflop_text = " ";
    let flop_text = " ";
    let turn_text = " ";
    let river_text = " ";
    let count = 0;


    while(count != 29 && result.preflop[count].position != ""){
        preflop_text += '<p>' + result.preflop[count].position + " " + result.preflop[count].action + " " + result.preflop[count].chip + '</p>';
        count++;
    }
    count = 0;
    while(count != 29 && result.flop[count].position != ""){
        flop_text += '<p>' + result.flop[count].position + " " + result.flop[count].action + " " + result.flop[count].chip + '</p>';
        count++;
    }
    count = 0;
    while(count != 29 && result.turn[count].position != ""){
        turn_text += '<p>' + result.turn[count].position + " " + result.turn[count].action + " " + result.turn[count].chip + '</p>';
        count++;
    }
    count = 0;
    while(count != 29 && result.river[count].position != ""){
        river_text += '<p>' + result.river[count].position + " " + result.river[count].action + " " + result.river[count].chip + '</p>';
        count++;
    }

    document.getElementById("preflop").innerHTML = preflop_text;
    document.getElementById("flop").innerHTML = flop_text;
    document.getElementById("turn").innerHTML = turn_text;
    document.getElementById("river").innerHTML = river_text;
}

async function handhistory_list_show(){
    //サーバーに送るデータをまとめる。数値型だと上手くいかなかったので、文字列に直す
    const senddata = {
        methodpass:"2",
    }
    //サーバーから返ってきたデータを受け取る変数。
    //データをjson形式に変換して、ポスト送信
    const resp = await fetch('/page07_2', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata),
    })
//受け取ったデータをjson形式に直す
    const result = await resp.json();
    make_handhistoryList(result.handhistory);
}

function select_handhistory(num){
    let handid = handid_array[num];
    if(selectid_array.includes(handid)){
        let checkbox_id = "checkbox" + num;
        document.getElementById(checkbox_id).checked = false;
        selectid_array = selectid_array.filter(item => item != handid)
    }else{
        let checkbox_id = "checkbox" + num;
        document.getElementById(checkbox_id).checked = true;
        selectid_array.push(handid);
    }
    let str = "";
    for(item of selectid_array){
        str += item + " ";
    }
}

 async function handhistory_search(){
    const word = document.getElementById("search_word").value;
    const senddata = {
        methodpass:"3",
        word:word,
    }
    const resp = await fetch('/page07_2', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata),
    })
    const result = await resp.json();
    make_handhistoryList(result.handhistory);
}

async function show_selected(){
    const senddata = {
        methodpass:"4",
        search_list:selectid_array,
    }
    const resp = await fetch('/page07_2', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata),
    })
    const result = await resp.json();
    make_handhistoryList(result.handhistory);
}

function make_handhistoryList(handhistory){
    let handhistory_list = " ";
    handid_array = [];
    for(let i = 0; i < handhistory.length; i++){
        let item = handhistory[i];
        handhistory_list += '<dl class="row justify-content-start border-top border-5 btn-outline-primary fs-1" role="button" onmouseover="preview_open(' + i + ')" ><dt class="col-4 text-truncate" onclick="select_handhistory(' + i + ')"><input class="form-check-input mt-1 me-3" type="checkbox" value="" aria-label="Checkbox for following text input" id="checkbox' + i +'">' + item.name + '</dt><dd class="col-8 text-start"><p>コメント：' + item.comment + '</p><p>タグ：' + item.tag1 + '　' + '　' + item.tag2 + '　' + item.tag3 + '</p></dd></dl>';
        handid_array.push(item.id);
    }
    document.getElementById("handhistory_box").innerHTML = handhistory_list;
    for(let i = 0; i < selectid_array.length; i++){
        if(handid_array.includes(selectid_array[i])){
            let checkbox_id = "checkbox" + handid_array.indexOf(selectid_array[i]);
            document.getElementById(checkbox_id).checked = true;
        }
    }
}



async function make_favoliteList(){
    let list_name;
    if(document.getElementById("list_name").value == ""){
        const date = new Date();
        list_name = date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
    }else{
        list_name = document.getElementById("list_name").value;
    }
    const senddata = {
        methodpass:"5",
        selected:selectid_array,
        list_name:list_name,
    }
    const data = await fetch('/page07_2', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata),
    })
    location.href = './page07_1';
}