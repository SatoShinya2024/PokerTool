let handid_array = [];
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
    const resp = await fetch('/page06_1', {
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
    let board_contentes = '<span class="fs-1">ボード </span><img src=' + board_array[0].path + ' width="40px" hspace="2px" vspace="2px" class="cards"><img src=' + board_array[1].path + ' width="40px" hspace="2px" vspace="2px" class="cards"><img src=' + board_array[2].path + ' width="40px" hspace="2px" vspace="2px" class="cards"><img src=' + board_array[3].path + ' width="40px" hspace="2px" vspace="2px" class="cards"><img src=' + board_array[4].path + ' width="40px" hspace="2px" vspace="2px" class="cards">';
    document.getElementById("preview_board_wrapper").innerHTML = board_contentes;

    let players_inner = " ";
    //プレイヤー画面の作成
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

async function handhistory_list_open(){
    //サーバーに送るデータをまとめる。数値型だと上手くいかなかったので、文字列に直す
    const senddata = {
        methodpass:"2",
    }
    //サーバーから返ってきたデータを受け取る変数。
    //データをjson形式に変換して、ポスト送信
    const resp = await fetch('/page06_1', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata),
    })
//受け取ったデータをjson形式に直す
    const result = await resp.json();

    let handhistory_list = " ";
    handid_array = [];
    for(let i = 0; i < result.handhistory.length; i++){
        let item = result.handhistory[i];
        handhistory_list += '<dl class="row justify-content-start border-top border-5 btn-outline-primary" role="button" onmouseover="preview_open(' + i + ')"><dt class="col-4 text-truncate">' + item.name + '</dt><dd class="col-8 text-start"><p>コメント：' + item.comment + '</p><p>タグ：' + item.tag1 + '　' + '　' + item.tag2 + '　' + item.tag3 + '</p></dd></dl>' + '<div class="text-start d-flex"><button class="btn btn-outline-primary col-3 fs-2" onclick="edit(' + i + ')">編集</button><button class="btn btn-outline-primary col-3 fs-2" onclick="demo_start(' + i +  ')">動画作成</button><button class="btn btn-outline-primary col-3 fs-2" onclick="text_show(' + i + ')">テキスト</button><button class="btn btn-outline-primary col-3 fs-2" >チャット</button><button class="btn btn-outline-danger col-3 fs-2" onclick="data_delete(' + i + ')">削除</button></div>';

        handid_array.push(item.id);
    }

    document.getElementById("handhistory_box").innerHTML = handhistory_list;
 }

 async function handhistory_search(){
    const word = document.getElementById("search_word").value;
    const senddata = {
        methodpass:"3",
        word:word,
    }
    const resp = await fetch('/page06_1', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata),
    })
    const result = await resp.json();
    let handhistory_list = " ";
    handid_array = [];
    for(let i = 0; i < result.handhistory.length; i++){
        let item = result.handhistory[i];
        handhistory_list += '<dl class="row justify-content-start border-top border-5 btn-outline-primary" role="button" onmouseover="preview_open(' + i + ')"><dt class="col-4 text-truncate">' + item.name + '</dt><dd class="col-8 text-start"><p>コメント：' + item.comment + '</p><p>タグ：' + item.tag1 + '　' + '　' + item.tag2 + '　' + item.tag3 + '</p></dd></dl>' + '<div class="text-start d-flex"><button class="btn btn-outline-primary col-3 fs-2" onclick="edit(' + i + ')">編集</button><button class="btn btn-outline-primary col-3 fs-2" onclick="demo_start(' + i +  ')">動画作成</button><button class="btn btn-outline-primary col-3 fs-2" onclick="text_show(' + i + ')">テキスト</button><button class="btn btn-outline-primary col-3 fs-2" >チャット</button><button class="btn btn-outline-danger col-3 fs-2" onclick="data_delete(' + i + ')">削除</button></div>';

        handid_array.push(item.id);
    }
    document.getElementById("handhistory_box").innerHTML = handhistory_list;

}

//検索ボックスを監視して、検索ワードがなくなったら即すべてのハンドヒストリーのデータを表示できるようにしておく
document.getElementById('search_word').addEventListener( "change", () => {
    if(document.getElementById('search_word').value == ""){
        handhistory_list_open();
    }
})


//ゲーム内容を再現して動画をつくるメソッド
async function demo_start(num){
    //サーバーに送るデータをまとめる。数値型だと上手くいかなかったので、文字列に直す
    let id = handid_array[num];
    const senddata = {
        methodpass:"4",
        id:String(id),
    }
    //サーバーから返ってきたデータを受け取る変数。
    //データをjson形式に変換して、ポスト送信
    const resp = await fetch('/page06_1', {
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(senddata),
    })
    //受け取ったデータをjson形式に直す
    const result = await resp.json();

    var myModal = new bootstrap.Modal(document.getElementById('demo_Modal'), {
        keyboard: false
    })

    myModal.show();

    demo_set(result.setting, result.players, result.board, result.preflop, result.flop, result.turn, result.river);
}
    
async function text_show(num){
    let id = handid_array[num];
    const senddata = {
        methodpass:"5",
        id:String(id),
    }

    const resp = await fetch('/page06_1', {
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





async function edit(num){
    if(confirm("このハンドヒストリーを編集しますか？")){
        let handid = handid_array[num];
        let form = document.createElement('form');
        form.method = 'POST';
        form.action = "";

        let methodpass = document.createElement('input');
        methodpass.type = 'hidden';
        methodpass.name = 'methodpass';
        methodpass.value = '6'; 
        let id = document.createElement('input');
        id.type = 'hidden';
        id.name = 'id';
        id.value = String(handid);
        
        form.appendChild(methodpass);
        form.appendChild(id);
        document.body.appendChild(form);

        form.submit();
    }
}

function data_delete(num){
    if(confirm("このハンドヒストリーを削除しますか？") == true){
        let handid = handid_array[num];
        let form = document.createElement('form');
        form.method = 'POST';
        form.action = "";

        let methodpass = document.createElement('input');
        methodpass.type = 'hidden';
        methodpass.name = 'methodpass';
        methodpass.value = '7'; 
        let id = document.createElement('input');
        id.type = 'hidden';
        id.name = 'id';
        id.value = String(handid);
        
        form.appendChild(methodpass);
        form.appendChild(id);
        document.body.appendChild(form);

        form.submit();

        
    }
}

