class card{
    constructor(name, suit, num, path){
        this.name = name;
        this.num = num;
        this.suit = suit;
        this.path = path;
    }
}

//全53枚のカードを生成
const s01 = new card("As", "s", 14, "/images/card-img/s01.JPG");const s02 = new card("2s", "s", 2, "/images/card-img/s02.JPG");const s03 = new card("3s", "s", 3, "/images/card-img/s03.JPG");const s04 = new card("4s", "s", 4, "/images/card-img/s04.JPG");
const s05 = new card("5s","s", 5, "/images/card-img/s05.JPG");const s06 = new card("6s", "s", 6, "/images/card-img/s06.JPG");const s07 = new card("7s", "s", 7, "/images/card-img/s07.JPG");const s08 = new card("8s", "s", 8, "/images/card-img/s08.JPG");
const s09 = new card("9s", "s", 9, "/images/card-img/s09.JPG");const s10 = new card("Ts", "s", 10, "/images/card-img/s10.JPG");const s11 = new card("Js", "s", 11, "/images/card-img/s11.JPG");const s12 = new card("Qs", "s", 12, "/images/card-img/s12.JPG");
const s13 = new card("Ks", "s", 13, "/images/card-img/s13.JPG");
const d01 = new card("Ad", "d", 14, "/images/card-img/d01.JPG");const d02 = new card("2d", "d", 2, "/images/card-img/d02.JPG");const d03 = new card("3d", "d", 3, "/images/card-img/d03.JPG");const d04 = new card("4d", "d", 4, "/images/card-img/d04.JPG");
const d05 = new card("5d", "d", 5, "/images/card-img/d05.JPG");const d06 = new card("6d", "d", 6, "/images/card-img/d06.JPG");const d07 = new card("7d", "d", 7, "/images/card-img/d07.JPG");const d08 = new card("8d", "d", 8, "/images/card-img/d08.JPG");
const d09 = new card("9d", "d", 9, "/images/card-img/d09.JPG");const d10 = new card("Td", "d", 10, "/images/card-img/d10.JPG");const d11 = new card("Jd", "d", 11, "/images/card-img/d11.JPG");const d12 = new card("Qd", "d", 12, "/images/card-img/d12.JPG");
const d13 = new card("Kd", "d", 13, "/images/card-img/d13.JPG");
const h01 = new card("Ah", "h", 14, "/images/card-img/h01.JPG");const h02 = new card("2h", "h", 2, "/images/card-img/h02.JPG");const h03 = new card("3h", "h", 3, "/images/card-img/h03.JPG");const h04 = new card("4h", "h", 4, "/images/card-img/h04.JPG");
const h05 = new card("5h", "h", 5, "/images/card-img/h05.JPG");const h06 = new card("6h", "h", 6, "/images/card-img/h06.JPG");const h07 = new card("7h", "h", 7, "/images/card-img/h07.JPG");const h08 = new card("8h", "h", 8, "/images/card-img/h08.JPG");
const h09 = new card("9h", "h", 9, "/images/card-img/h09.JPG");const h10 = new card("Th", "h", 10, "/images/card-img/h10.JPG");const h11 = new card("Jh", "h", 11, "/images/card-img/h11.JPG");const h12 = new card("Qh", "h", 12, "/images/card-img/h12.JPG");
const h13 = new card("Kh", "h", 13, "/images/card-img/h13.JPG");
const c01 = new card("Ac", "c", 14, "/images/card-img/c01.JPG");const c02 = new card("2c", "c", 2, "/images/card-img/c02.JPG");const c03 = new card("3c", "c", 3, "/images/card-img/c03.JPG");const c04 = new card("4c", "c", 4, "/images/card-img/c04.JPG");
const c05 = new card("5c", "c", 5, "/images/card-img/c05.JPG");const c06 = new card("6c", "c", 6, "/images/card-img/c06.JPG");const c07 = new card("7c", "c", 7, "/images/card-img/c07.JPG");const c08 = new card("8c", "c", 8, "/images/card-img/c08.JPG");
const c09 = new card("9c", "c", 9, "/images/card-img/c09.JPG");const c10 = new card("Tc", "c", 10, "/images/card-img/c10.JPG");const c11 = new card("Jc", "c", 11, "/images/card-img/c11.JPG");const c12 = new card("Qc", "c", 12, "/images/card-img/c12.JPG");
const c13 = new card("Kc", "c", 13, "/images/card-img/c13.JPG");
const dummy = new card("dummy", "dummy", 0, "/images/card-img/trumpdummy.JPG");

const card_List = [
    s02, s03, s04, s05, s06, s07, s08, s09, s10, s11, s12, s13, s01,
    h02, h03, h04, h05, h06, h07, h08, h09, h10, h11, h12, h13, h01,
    d02, d03, d04, d05, d06, d07, d08, d09, d10, d11, d12, d13, d01,
    c02, c03, c04, c05, c06, c07, c08, c09, c10, c11, c12, c13, c01
]

function card_compare(card1, card2){
    if(card1.num < card2.num){
        return -1;
    }
    if(card1.num > card2.num){
        return 1;
    }
    return 0;
}

function make_text(setting, board, players, preflop, flop, turn, river){
    //settingのテキストを作成
    setting_for_text = setting;
    let setting_text_l01 = "ゲームの種類：" + setting.game;
    let setting_text_l02 = 'ブラインド：' + setting.sblind + " / " + setting.bblind + " " + setting.uni;
    let setting_text_l03;
    if(setting.anteplayer == "BigBlind"){
        setting_text_l03 = "BBアンティ　" + setting.anteamount; 
    }else if(setting.anteplayer == "AllPlayer"){
        setting_text_l03 = "All player　" + setting.anteamount;
    }else{
        setting_text_l03 = "アンティなし"
    }
    setting_text_l03 += "　" + "ストラドラー：" + Number(setting.stradler) + "人";

    document.getElementById("setting_text").innerHTML = '<p>' + setting_text_l01 + "　" + setting_text_l02 + '</p>' + '<p>' + setting_text_l03 + '</p>';

    //プレイヤー情報のまとめ。カラムレイアウトをプレイヤーの人数分つくる。
    let players_inner = " ";
    players_for_text = players;

    for(item of players){
        let player_name;
        let card1;
        let card2;
        if(item.name != ""){
            player_name = item.position + "(" + item.name + ")";
        }else{
            player_name = item.position;
        }
        if(item.card1 == "dummy"){
            card1 = " ";
        }else{
            card1 = item.card1;
        }
        if(item.card2 == "dummy"){
            card2 = " ";
        }else{
            card2 = item.card2;
        }
        players_inner += '<div class="col-4 border">' + '<div>' + player_name + '</div>' + '<div>' + item.stack + setting.uni + '</div>' + '<div>' + card1 + " " + card2 + '</div>' + '</div>'
    }
    document.getElementById("player_text").innerHTML = players_inner;

    //ボードのカードまとめ
    let board_text = "ボード：[ ";
    board_for_text = board;
    if(board.card1 != "dummy" && board.card2 != "dummy" && board.card3 != "dummy"){
        board_text += board.card1 + " " + board.card2 + " " + board.card3;
    }
    if(board.card4 != "dummy"){
        board_text += " " + board.card4;
    }
    if(board.card5 != "dummy"){
        board_text += " " + board.card5;
    }
    if(board_text != "ボード：[ "){
        board_text += " ]";
        document.getElementById("board_text").innerHTML = board_text;
    }else{
        document.getElementById("board_text").innerHTML = "";
    }

    //ここからゲーム内容のまとめ
    initialize(setting, players);
    let preflop_text = '<p>【プリフロップ】</p>' + '<p>pot:' + pot + '</p>';

    read_through(preflop[28], setting, players, preflop, flop, turn, river);
    let flop_text = '<p>【フロップ】</p>' + '<p>pot:' + pot + '</p>';
    read_through(flop[28], setting, players, preflop, flop, turn, river);
    let turn_text = '<p>【ターン】</p>' + '<p>pot:' + pot + '</p>';
    read_through(turn[28], setting, players, preflop, flop, turn, river);
    let river_text = '<p>【リバー】</p>' + '<p>pot:' + pot + '</p>';

    let street_inner = " ";
    for(let i = 0; i < preflop.length; i++){
        if(preflop[i].position == ""){
            break;
        }else{
            players_array.forEach((value) => {
                if(value.position == preflop[i].position){
                    street_inner += '<p>' + value.name + " " + preflop[i].action + " ";
                        if(preflop[i]. action == 'raise' || preflop[i].action == "bet" || preflop[i].action == 'All-in'){
                            street_inner += preflop[i].chip + setting.uni + '</p>';
                        }else{
                            street_inner += '</p>';
                        }
                }
            })
        }
    }
    document.getElementById('preflop_text').innerHTML = "";
    if(street_inner != " "){
        document.getElementById('preflop_text').innerHTML = preflop_text + street_inner;
    }
    street_inner = " ";

    read_through(preflop[28], setting, players, preflop, flop, turn, river);
    for(let i = 0; i < flop.length; i++){
        if(flop[i].position == ""){
            break;
        }else{
            players_array.forEach((value) => {
                if(value.position == flop[i].position){
                    street_inner += '<p>' + value.name + " " + flop[i].action + " ";
                        if(flop[i]. action == 'raise' || flop[i].action == 'bet' || flop[i].action == 'All-in'){
                            street_inner += flop[i].chip + setting.uni + '</p>';
                        }else{
                            street_inner += '</p>';
                        }
                }
            })
        }
    }
    document.getElementById('flop_text').innerHTML = "";
    if(street_inner != " "){
        document.getElementById('flop_text').innerHTML = flop_text + street_inner;
    }

    street_inner = " ";
    for(let i = 0; i < turn.length; i++){
        if(turn[i].position == ""){
            break;
        }else{
            players_array.forEach((value) => {
                if(value.position == turn[i].position){
                    street_inner += '<p>' + value.name + " " + turn[i].action + " ";
                        if(turn[i]. action == 'raise' || turn[i].action == 'bet' || turn[i].action == 'All-in'){
                            street_inner += turn[i].chip + setting.uni + '</p>';
                        }else{
                            street_inner += '</p>';
                        }
                }
            })
        }
    }
    document.getElementById('turn_text').innerHTML = "";
    if(street_inner != " "){
        document.getElementById('turn_text').innerHTML = turn_text + street_inner;
    }

    street_inner = " ";
    for(let i = 0; i < river.length; i++){
        if(river[i].position == ""){
            break;
        }else{
            players_array.forEach((value) => {
                if(value.position == river[i].position){
                    street_inner += '<p>' + value.name + " " + river[i].action + " ";
                        if(river[i]. action == 'raise' || river[i].action == 'bet' || river[i].action == 'All-in'){
                            street_inner += river[i].chip + setting.uni + '</p>';
                        }else{
                            street_inner += '</p>';
                        }
                }
            })
        }
    }
    document.getElementById('river_text').innerHTML = "";
    if(street_inner != " "){
        document.getElementById('river_text').innerHTML = river_text + street_inner;
    }

    //ゲームの結果を記述する。
    //まず、ラストシーンはどこかを確定する。
    let show_down_text = " ";
    let last_scene;
    if(board.card1 != "dummy" && board.card2 != "dummy" && board.card3 != "dummy" && board.card4 != "dummy" && board.card5 != "dummy" ){
        let num = 1;
        while(num != 29 && river[num].position != ""){
            num++
        }
        last_scene = river[num-1];
    }else if(board.card1 != "dummy" && board.card2 != "dummy" && board.card3 != "dummy" && board.card4 != "dummy" && board.card5 == "dummy" ){
        let num = 1;
        while(num != 29 && turn[num].position != ""){
            num++
        }
        last_scene = turn[num-1];
    }else if(board.card1 != "dummy" && board.card2 != "dummy" && board.card3 != "dummy" && board.card4 == "dummy" && board.card5 == "dummy" ){
        let num = 1;
        while(num != 29 && flop[num].position != ""){
            num++
        }
        last_scene = flop[num-1];
    }else{
        let num = 1;
        while(num != 29 && preflop[num].position != ""){
            num++
        }
        last_scene = preflop[num-1];
    }
    //surviversを決定する。
    show_down(last_scene, players, setting, board, preflop, flop, turn, river);
    //surviversで一番強いハンドを持つプレイヤーの役を取り出す。
    let mostStrongHand = survivers[survivers.length-1].hand;
    //最終的な勝者を格納する配列に、mostStrongHandと同じ役を持つプレイヤーを格納する。
    let winners = [];
    for(let i = 0; i < survivers.length; i++){
        if(compare_hand(mostStrongHand, survivers[i].hand) == 0){
            winners.push(survivers[i]);
        }
    }
    //ショーダウンのテキストを決定する。
    for(let i = 0; i < winners.length; i++){
        show_down_text += winners[i].name;
        if(i != winners.length-1){
            show_down_text += ",";
        }
    }
    //ショーダウン前に決着がついた場合はwinだけを、それ以外の場合は役まで表示する
    if(survivers.length == 1){
        show_down_text += " win";
    }else{
        show_down_text += " win by " + mostStrongHand.name;
    }
    document.getElementById("showdown_text").innerHTML = show_down_text;

        var myModal = new bootstrap.Modal(document.getElementById('text_modal'), {
            keyboard: false
        })

        myModal.show();
}

//イラスト入りのテキストも作れるようにする
let setting_for_text;
let players_for_text;
let board_for_text;
function text_change(){
    let players_inner = " ";
    let players = players_for_text;
    let setting = setting_for_text;
    //プレイヤーのテキストを書き換え
    for(item of players){
        let player_name;
        let card1;
        let card2;
        if(item.name != ""){
            player_name = item.position + "(" + item.name + ")";
        }else{
            player_name = item.position;
        }
        if(item.card1 == "dummy"){
            card1 = " ";
        }else{
            card_List.forEach(value => {
                if(value.name == item.card1){
                    card1 = '<img src=' + value.path + ' width=50px hspace=2px vspace=2px>';
                }
            }) 
        }
        if(item.card2 == "dummy"){
            card2 = " ";
        }else{
            card_List.forEach(value => {
                if(value.name == item.card2){
                    card2 = '<img src=' + value.path + ' width=50px hspace=2px vspace=2px>';
                }
            })
        }
        players_inner += '<div class="col-4 border">' + '<div>' + player_name + '</div>' + '<div>' + item.stack + setting.uni + '</div>' + '<div>' + card1 + " " + card2 + '</div>' + '</div>';
    }
    document.getElementById("player_text").innerHTML = players_inner;

    //ボードのテキストを書き換え
    let board_text = "ボード：";
    let board = board_for_text;
    if(board.card1 != "dummy" && board.card2 != "dummy" && board.card3 != "dummy"){
        let card1;
        let card2;
        let card3;
        card_List.forEach(value => {
            if(value.name == board.card1){
                card1 = '<img src=' + value.path + ' width=50px hspace=2px vspace=2px>';
            }
            if(value.name == board.card2){
                card2 = '<img src=' + value.path + ' width=50px hspace=2px vspace=2px>';
            }
            if(value.name == board.card3){
                card3 = '<img src=' + value.path + ' width=50px hspace=2px vspace=2px>';
            }
        })
        board_text += card1 + " " + card2 + " " + card3;
    }
    if(board.card4 != "dummy"){
        let card4;
        card_List.forEach(value => {
            if(value.name == board.card4){
                card4 = '<img src=' + value.path + ' width=50px hspace=2px vspace=2px>';
            }
        })
        board_text += card4;
    }
    if(board.card5 != "dummy"){
        let card5;
        card_List.forEach(value => {
            if(value.name == board.card5){
                card5 = '<img src=' + value.path + ' width=50px hspace=2px vspace=2px>';
            }
        })
        board_text += card5;
    }
    if(board_text != "ボード："){
        document.getElementById("board_text").innerHTML = board_text;
    }else{
        document.getElementById("board_text").innerHTML = "";
    }
    document.getElementById("text_switch").innerHTML = '<button type="button" class="btn btn-info" onclick="text_undo()">テキスト切り替え</button>'; 
}

//イラストつきのものを元のテキストオンリーのものに戻すメソッド
function text_undo(){
    //プレイヤー。
    let players_inner = " ";
    let players = players_for_text;
    let setting = setting_for_text;
    for(item of players){
        let player_name;
        let card1;
        let card2;
        if(item.name != ""){
            player_name = item.position + "(" + item.name + ")";
        }else{
            player_name = item.position;
        }
        if(item.card1 == "dummy"){
            card1 = " ";
        }else{
            card1 = item.card1;
        }
        if(item.card2 == "dummy"){
            card2 = " ";
        }else{
            card2 = item.card2;
        }
        players_inner += '<div class="col-4 border">' + '<div>' + player_name + '</div>' + '<div>' + item.stack + setting.uni + '</div>' + '<div>' + card1 + " " + card2 + '</div>' + '</div>';
    }
    document.getElementById("player_text").innerHTML = players_inner;

    //ボードのカードまとめ
    let board_text = "ボード：[ ";
    let board = board_for_text;
    if(board.card1 != "dummy" && board.card2 != "dummy" && board.card3 != "dummy"){
        board_text += board.card1 + " " + board.card2 + " " + board.card3;
    }
    if(board.card4 != "dummy"){
        board_text += " " + board.card4;
    }
    if(board.card5 != "dummy"){
        board_text += " " + board.card5;
    }
    if(board_text != "ボード：[ "){
        board_text += " ]";
        document.getElementById("board_text").innerHTML = board_text;
    }else{
        document.getElementById("board_text").innerHTML = "";
    }
    document.getElementById("text_switch").innerHTML = '<button type="button" class="btn btn-info" onclick="text_change()">テキスト切り替え</button>';
}

class player {
    constructor(position){
        this.position = position;
        this.paychip = 0;
    }

    set name(value){
        this._name = String(value);
    }

    get name(){
        return this._name;
    }

    set paychip(value){
        this._paychip = Number(value);
    }

    get paychip(){
        return this._paychip;
    }

    set stack(value){
        this._stack = Number(value);
    }

    get stack(){
        return this._stack;
    }

    set action(value){
        this._action = value;
    }

    get action(){
        return this._action;
    }

    set card1(value){
        this._card1 = value;
    }

    get card1(){
        return this._card1;
    }

    set card2(value){
        this._card2 = value;
    }

    get card2(){
        return this._card2;
    }

    set hand(value){
        this._hand = value;
    }

    get hand(){
        return this._hand;
    }

    reset(){
        this.action = "";
        this.card1 = "";
        this.card2 = "";
        this.hand = "";
        this.paychip = 0;
        this.name = "";
        this.stack = 0;
    }
}
let pot;
let bet_amount;
function bet(player, chip){
    player.stack = (player.stack * 100 - (chip * 100 - player.paychip * 100))/100;
    pot = (pot * 100 + chip * 100 - player.paychip * 100)/100;
    player.paychip = chip;
}
const UTG = new player("UTG");const EP1 = new player("EP1");const EP2 = new player("EP2");
const LJ = new player("LJ");const HJ = new player("HJ");const CO = new player("CO");
const BTN = new player("BTN");const SB = new player("SB");const BB = new player("BB");
let players_array;
//テーブルを初期状態にするメソッド
function initialize(setting, players){
    if(setting.players == "2"){
        players_array = [SB, BB];
    }else if(setting.players == "6"){
        players_array = [UTG, HJ, CO, BTN, SB, BB];
    }else if(setting.players == "9"){
        players_array = [UTG, EP1, EP2, LJ, HJ, CO, BTN, SB, BB];
    }
    players_array.forEach((value) => {
        value.reset();
    })
    //データベースから取得したプレイヤーデータをプレイヤーオブジェクトに反映させる。
    for(let i = 0; i < players_array.length; i++){
        let card1;
        let card2;
        players.forEach(value => {
            if(players_array[i].position == value.position){
                if(value.name != ""){
                    players_array[i].name = value.name;
                }else{
                    players_array[i].name = players_array[i].position;
                }
                players_array[i].stack = value.stack;
                card1 = value.card1;
                card2 = value.card2;
            }
        })
        if(card1 == "dummy"){
            players_array[i].card1 = dummy;
        }
        if(card2 == "dummy"){
            players_array[i].card2 = dummy;
        }
        card_List.forEach(value => {
            if(value.name == card1){
                players_array[i].card1 = value;
            }
            if(value.name == card2){
                players_array[i].card2 = value;
            }
        })
    }
    //potとbet_amountを初期化。
    bet_amount = setting.bblind;
    pot = 0;
    //sb、bbの支払い。
    bet(SB, setting.sblind);
    bet(BB, setting.bblind);
    //ストラドラーの支払い。ストラドラーの人数によって分岐
    let stradler = Number(setting.stradler);
    if(setting.players == "6"){
        if(stradler >= 1){
            bet(UTG, bet_amount*2);
            bet_amount = bet_amount * 2;
        }
        if(stradler >= 2){
            bet(HJ, bet_amount*2);
            bet_amount = bet_amount * 2;
        }
        if(stradler >= 3){
            bet(CO, bet_amount*2);
            bet_amount = bet_amount * 2;
        }
    }else if(setting.players == "9"){
        if(stradler >= 1){
            bet(UTG, bet_amount*2);
            bet_amount = bet_amount * 2;
        }
        if(stradler >= 2){
            bet(EP1, bet_amount*2);
            bet_amount = bet_amount * 2;
        }
        if(stradler >= 3){
            bet(EP2, bet_amount*2);
            bet_amount = bet_amount * 2;
        }
        if(stradler >= 4){
            bet(LJ, bet_amount*2);
            bet_amount = bet_amount * 2;
        }
        if(stradler >= 5){
            bet(HJ, bet_amount*2);
            bet_amount = bet_amount * 2;
        }
        if(stradler >= 6){
            bet(CO, bet_amount*2);
            bet_amount = bet_amount * 2;
        }
    }
    //アンティの支払い。支払う人の種類によって場合分け
    if(setting.anteplayer == "BigBlind"){
        BB.stack -= Number(setting.anteamount);
        pot += Number(setting.anteamount);
    }else if(setting.anteplayer == "AllPlayer"){
        players_array.forEach(value => {
            value.stack -= Number(setting.anteamount);
        })
        pot += Number(setting.anteamount)*players_array.length;
    }
    //最初は全てのプレイヤーを待機状態に設定する
    players_array.forEach(function(value){
        value.action = "wait";
    })
}

//ある一場面に置けるゲームの内容を読み取り、プレイヤーの状態を変化させるためのメソッド
//sceneはpreflop, flop, turn, riverのどれかの一要素
//sceneのpositionプロパティはnullでないこと前提
function read(scene){
    players_array.forEach(value => {
        if(value.position == scene.position){
            value.action = scene.action;
            switch(value.action){
                case "call":
                    bet(value, bet_amount);
                    break;
                case "raise":
                    bet_amount = scene.chip;
                    bet(value, bet_amount);
                    break;
                case "bet":
                    bet_amount = scene.chip;
                    bet(value, bet_amount);
                    break;
                case "All-in":
                    if(scene.chip >= bet_amount){
                        bet_amount = scene.chip;
                        bet(value, bet_amount);
                    }else{
                        bet(value, scene.chip);
                    }
                    break;
            }
        }
    })
}

//指定された一場面にたいし、プリフロップからさかのぼって、その行までのプレイヤーの各状態を保存するメソッド
function read_through(scene, setting, players, preflop, flop, turn, river){
    //プレイヤーの状態を初期化
    initialize(setting, players);
    if(scene.street == "preflop"){
        //対象の場面がプリフロップだった場合
        for(let i = 0; i < scene.num; i++){
            read(preflop[i]);
        }
    }else if(scene.street == "flop"){
        //対象の場面がフロップだった場合
        for(let i = 0; i < 29; i++){
            if(preflop[i].position != ""){
                read(preflop[i]);
            }
        }
        players_array.forEach(value => {
            value.paychip = 0;
            if(value.action != "fold" && value.action != "All-in"){
                value.action = "wait";
            }
        })
        for(let i = 0; i < scene.num; i++){
            read(flop[i]);
        }
    }else if(scene.street == "turn"){
        //対象の場面がターンだった場合。
        for(let i = 0; i < 29; i++){
            if(preflop[i].position != ""){
                read(preflop[i]);
            }
        }
        players_array.forEach(value => {
            value.paychip = 0;
            if(value.action != "fold" && value.action != "All-in"){
                value.action = "wait";
            }
        })
        for(let i = 0; i < 29; i++){
            if(flop[i].position != ""){
                read(flop[i]);
            }
        }
        players_array.forEach(value => {
            value.paychip = 0;
            if(value.action != "fold" && value.action != "All-in"){
                value.action = "wait";
            }
        })
        for(let i = 0; i < scene.num; i++){
            read(turn[i]);
        }
    }else if(scene.street == "river"){
        //対象の場面がリバーだった場合。
        for(let i = 0; i < 29; i++){
            if(preflop[i].position != ""){
                read(preflop[i]);
            }
        }
        players_array.forEach(value => {
            value.paychip = 0;
            if(value.action != "fold" && value.action != "All-in"){
                value.action = "wait";
            }
        })
        for(let i = 0; i < 29; i++){
            if(flop[i].position != ""){
                read(flop[i]);
            }
        }
        players_array.forEach(value => {
            value.paychip = 0;
            if(value.action != "fold" && value.action != "All-in"){
                value.action = "wait";
            }
        })
        for(let i = 0; i < 29; i++){
            if(turn[i].position != ""){
                read(turn[i]);
            }
        }
        players_array.forEach(value => {
            value.paychip = 0;
            if(value.action != "fold" && value.action != "All-in"){
                value.action = "wait";
            }
        })
        for(let i = 0; i < scene.num; i++){
            read(river[i]);
        }
    }
}
let recorder;
//デモビデオを再生するための下準備のメソッド。
//各ストリートのフラグを設定し、フレームを作成するメソッドに引き渡す。
function demo_set(setting, players, board, preflop, flop, turn, river){
    let num = 0;
    let pf_flg = true;
    let f_flg = true;
    let t_flg = true;
    let r_flg = true;
    let end_flg = false;
    let now = "preflop";

    //ボードのどこまでが開かれているかによって場合分けする。
    if(board.card1 != "dummy" && board.card2 != "dummy" && board.card3 != "dummy" && board.card4 != "dummy" && board.card5 == "dummy"){
        r_flg = false;
    }else if(board.card1 != "dummy" && board.card2 != "dummy" && board.card3 != "dummy" && board.card4  == "dummy" && board.card5 == "dummy"){
        r_flg = false;
        t_flg = false;
    }else if(board.card1 == "dummy" && board.card2 == "dummy" && board.card3 == "dummy" && board.card4  == "dummy" && board.card5 == "dummy"){
        r_flg = false;
        t_flg = false;
        f_flg = false;
    }
    //canvasを取得
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext('2d');
    //canvasからストリームを取得
    let stream = canvas.captureStream();
    //ストリームからMediaRecorderを生成
    recorder = new MediaRecorder(stream, {mimeType:'video/webm; codecs=VP9'});
    //video/mp4; codecs="avc1.4d002a", {mimeType:'video/mp4; codecs=vp9'}
    //ダウンロード用のリンクを生成する文章を準備
    let download_text = document.getElementById("download_text");
    //クリック時にリンクを生成中だという表示をおこなう
    download_text.innerHTML = "ダウンロードリンクを準備中...";
    //録画終了時に動画ファイルのダウンロードリンクを生成する処理
    recorder.ondataavailable = function(e) {
        let videoBlob = new Blob([e.data], { type:'video/webm' });
        blobUrl = window.URL.createObjectURL(videoBlob);
        download_text.innerHTML = '<a href="#" id="downloadlink">ダウンロード</a>';
        let anchor = document.getElementById('downloadlink');
        anchor.download = 'pokerchron.webm';
        anchor.href = blobUrl;
    }
    
    //録画開始
    recorder.start();

    //準備ができたら、次のメソッドに値を引き渡す。
    demo_frame(setting, players, board, preflop, flop, turn, river, pf_flg, f_flg, t_flg, r_flg, end_flg, now, num)
}


//作成するデモビデオの各フレームをつくるメソッド。

function demo_frame(setting, players, board, preflop, flop, turn, river, pf_flg, f_flg, t_flg, r_flg, end_flg, now, num){
    // document.getElementById("test").innerHTML = "num:" + num + " pf_flg:" + pf_flg + " f_flg" + f_flg + " t_flg:" + t_flg + " r_flg:" + r_flg + " now:" + now + " end_flg:" + end_flg;
    let position;
    let action;
    let last_scene;
    //最初にテーブル状況を初期化。
    initialize(setting, players);
    //各ストリートの各場面を順番に再現していき、全ての場面が終われば、そのストリートのフラグをfalseにする。
    //全てのフラグがfalseになったときにendフラグをtrueにし、ループから抜け出せるようにする。
    if(pf_flg == true){
        //プリフロップの場面を再現するとき。
        if(num == 0){
            //num==では、テーブルの初期状態の描画をしたいので、何もしないまま通過する。
            num++;
        }else if(num > 0){
            //num>0では、その場面を再現する。
            //numにおける場面の中身が空っぽではないことを確認する。
            if(preflop[num].position != ""){
                read_through(preflop[num-1], setting, players, preflop, flop, turn, river);
                position = preflop[num-1].position;
                action = preflop[num-1].action;
                num++;
            }else{
                read_through(preflop[num-1], setting, players, preflop, flop, turn, river);
                position = preflop[num-1].position;
                action = preflop[num-1].action;
                //場面の中身が空っぽの場合は、そこでプリフロップは終了ということ。フラグを偽にする。
                pf_flg = false;
                //次の処理に備えて、numを初期値に戻す。
                num = 0;
                //lastsceneの可能性もあるので、記録
                last_scene = preflop[num-1];
            } 
        }
    }else if(f_flg == true){
        //フロップの場面を再現する時。。
        if(num == 0){
            //num==-1では、テーブルの初期状態の描画をしたいので、何もしないまま通過する。
            read_through(preflop[28], setting, players, preflop, flop, turn, river);
            players_array.forEach(value => {
                value.paychip = 0;
                if(value.action != "fold" && value.action != "All-in"){
                    value.action = "wait";
                }
            })
            num++;
        }else if(num > 0){
            //num>0では、実際のその場面を再現する。
            //場面の中身が空っぽではないことを確認する。
            if(flop[num].position != ""){
                read_through(flop[num-1], setting, players, preflop, flop, turn, river);
                position = flop[num-1].position;
                action = flop[num-1].action;
                num++
            }else{
                read_through(flop[num-1], setting, players, preflop, flop, turn, river);
                position = flop[num-1].position;
                action = flop[num-1].action;
                //場面の中身が空っぽの場合は、そこでフロップは終了ということ。フラグを偽にする。
                f_flg = false;
                //次の処理に備えて、numを初期値に戻す。
                num = 0;
                //lastsceneの可能性もあるので、記録
                last_scene = flop[num-1];                
            }
        }
        //現時点がフロップだということを示しておく。
        now = "flop";
    }else if(t_flg == true){
        //ターンの場面を再現する時。。
        if(num == 0){
            read_through(flop[28], setting, players, preflop, flop, turn, river);
            players_array.forEach(value => {
                value.paychip = 0;
                if(value.action != "fold" && value.action != "All-in"){
                    value.action = "wait";
                }
            })
            //num==0では、テーブルの初期状態の描画をしたいので、何もしないまま通過する。
            num++;
        }else if(num > 0){
            //num>0では、実際のその場面を再現する。
            //場面の中身が空っぽではないことを確認する。
            if(turn[num].position != ""){
                read_through(turn[num-1], setting, players, preflop, flop, turn, river);
                position = turn[num-1].position;
                action = turn[num-1].action;
                num++
            }else{
                read_through(turn[num-1], setting, players, preflop, flop, turn, river);
                position = turn[num-1].position;
                action = turn[num-1].action;
                //場面の中身が空っぽの場合は、そこでフロップは終了ということ。フラグを偽にする。
                t_flg = false;
                //次の処理に備えて、numを初期値に戻す。
                num = 0;
                //lastsceneの可能性もあるので、記録
                last_scene = turn[num-1]; 
            }
        }
        //現時点がターンだということを示しておく。
        now = "turn";
    }else if(r_flg == true){
        //リバーの場面を再現する時。。
        if(num == 0){
            read_through(turn[28], setting, players, preflop, flop, turn, river);
            players_array.forEach(value => {
                value.paychip = 0;
                if(value.action != "fold" && value.action != "All-in"){
                    value.action = "wait";
                }
            })
            //num==0では、テーブルの初期状態の描画をしたいので、何もしないまま通過する。
            num++;
        }else if(num > 0){
            //num>0では、実際のその場面を再現する。
            //場面の中身が空っぽではないことを確認する。
            if(river[num].position != ""){
                read_through(river[num-1], setting, players, preflop, flop, turn, river);
                position = river[num-1].position;
                action = river[num-1].action;
                num++
            }else{
                read_through(river[num-1], setting, players, preflop, flop, turn, river);
                position = river[num-1].position;
                action = river[num-1].action;
                //場面の中身が空っぽの場合は、そこでリバーは終了ということ。フラグを偽にする。
                r_flg = false;
                //lastsceneの可能性もあるので、記録
                last_scene = river[num-1]; 
            }
        }
        //現時点がリバーだということを示しておく。
        now = "river";
    }
    //変化したプレイヤーの状態に応じ、canvasに描画する。
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    //まずは以前の描画を削除
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ポーカーテーブル
    pokertable(ctx);
    //ポット
    draw_pot(ctx, pot);
    //ボード
    if(now == "flop"){
        draw_board(ctx, 3, board);
    }else if(now == "turn"){
        draw_board(ctx, 4, board);
    }else if(now == "river"){
        draw_board(ctx, 5, board);
    }
    //プレイヤーとプレイヤーのハンド
    players_array.forEach(value => {
        // document.getElementById("test").innerHTML = value.card1.path + value.card2.path;
        draw_player(ctx, value, setting);
        draw_card(ctx, value, setting);
    })
    //最後にアクションしたプレイヤーにアクション表示を出す。
    draw_sign(ctx, position, action, setting);
    //全てのフラグが回収されているかを確認。されていれば、endフラグをfalseにする。
    if(pf_flg == false && f_flg == false && t_flg == false && r_flg == false){
        end_flg = true;
    }
    //endフラグが初期値のままであれば、時間をおいて全ての変数を引き継いでもう一度同じ処理をする。
    if(end_flg == false){
        setTimeout(() => {
            demo_frame(setting, players, board, preflop, flop, turn, river, pf_flg, f_flg, t_flg, r_flg, end_flg, now, num);
        }, 1000);
    }else{
        //end_flgがtrueであれば、勝利演出を表示する。
        setTimeout(() => {
            draw_winner(last_scene, players, setting, board, preflop, flop, turn, river);
        }, 1000);
        setTimeout(() => {
            draw_winner(last_scene, players, setting, board, preflop, flop, turn, river);
        }, 3000);
        setTimeout(() => {
            //録画終了
            recorder.stop();
        }, 3000)
    }
}


//canvas関連のメソッドをまとめる。
//人数によって分岐する。
//ポーカーテーブル
function pokertable(ctx){
        ctx.fillStyle = 'rgb(142, 255, 120)';
        ctx.fillRect(0, 0, 800, 400);
        // let img = new Image();
        // img.src = 'haikei-img/haikei01.JPG';
        // ctx.drawImage(img, 0, 0, 800, 400);
        ctx.fillStyle = 'rgb(0, 166, 0)';
        ctx.beginPath();
        ctx.arc(250, 200, 100, Math.PI / 2, Math.PI * 3 / 2, false);
        ctx.lineTo(550, 100);
        ctx.arc(550, 200, 100, Math.PI * 3 / 2, Math.PI /2, false);
        ctx.lineTo(250, 300);
        ctx.stroke();
        ctx.fill();
        ctx.fillStyle = 'rgb(200, 200, 200)';
        ctx.beginPath();
        ctx.arc(283, 283, 8, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.font = "12px serif";
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.textAlign = "center";
        ctx.fillText("D", 283, 287);
}
//potのメソッド
//potの描画
function draw_pot(ctx, pot){
        ctx.font = "bold 20px serif"
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.textAlign = "center";
        ctx.fillText("pot: " + pot, 400, 170);
}
//ボードのカード
function draw_board(ctx, num, board){
    let board_array = [dummy, dummy, dummy, dummy, dummy];
    card_List.forEach(value => {
        if(value.name == board.card1){
            board_array[0] = value;
        }
        if(value.name == board.card2){
            board_array[1] = value;
        }
        if(value.name == board.card3){
            board_array[2] = value;
        }
        if(value.name == board.card4){
            board_array[3] = value;
        }
        if(value.name == board.card5){
            board_array[4] = value;
        }
    })
    let board1 = new Image();
    board1.src = board_array[0].path;
    let board2 = new Image();
    board2.src = board_array[1].path;
    let board3 = new Image();
    board3.src = board_array[2].path;
    let board4 = new Image();
    board4.src = board_array[3].path;
    let board5 = new Image();
    board5.src = board_array[4].path;
        for(let i = 0; i < num; i++){
            switch(i){
                case 0:
                    ctx.drawImage(board1, 342, 200, 25, 38);
                    break;
                case 1:
                    ctx.drawImage(board2, 369, 200, 25, 38);
                    break;
                case 2:
                    ctx.drawImage(board3, 396, 200, 25, 38);
                    break;
                case 3: 
                    ctx.drawImage(board4, 423, 200, 25, 38);
                    break;
                case 4:
                    ctx.drawImage(board5, 450, 200, 25, 38);
                    break;
            }
        }
}

//playerのメソッド
function draw_player(ctx, player, setting){
    if(setting.players == "9"){
        let player_color;
        let chip_color;
        let position = player.position;
        let name = player.name;
        let stack = player.stack;
        let action = player.action;
        let chip = player.paychip;
        switch(action){
            case "call":
                player_color = 'rgb(0, 150, 255)';
                chip_color = 'rgb(0, 150, 255)';
                break;
            case "check":
                player_color = 'rgb(0, 150, 255)';
                chip_color = 'rgb(0, 150, 255)';
                break;
            case "raise":
                player_color =  'rgb(255, 0, 0)';
                chip_color =  'rgb(255, 0, 0)';
                break;
            case "bet":
                player_color =  'rgb(255, 0, 0)';
                chip_color =  'rgb(255, 0, 0)';
                break;
            case "fold":
                player_color = 'rgb(160, 160, 160)';
                chip_color = 'rgb(160, 160, 160)';
                break;
            case "wait":
                player_color = 'rgb(255, 255, 255)';
                chip_color = 'rgb(0, 0, 0)';
                break;
            case "All-in":
            player_color =  'rgb(255, 0, 0)';
            chip_color =  'rgb(255, 0, 0)';            
            break;
        }
        ctx.beginPath();
        ctx.fillStyle = player_color;
        switch(position){	
            case "UTG":
                ctx.arc(250, 70, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(250, 115, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(chip, 250, 137.5);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 250, 65);
                ctx.fillText(stack, 250, 83);
                break;
            case "EP1":
                ctx.arc(400, 70, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(400, 115, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(chip, 400, 137.5);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 400, 65);
                ctx.fillText(stack, 400, 83);
                break;
            case "EP2":
                ctx.arc(550, 70, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(550, 115, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(chip, 550, 137.5);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 550, 65);
                ctx.fillText(stack, 550, 83);
                break;
            case "LJ":
                ctx.arc(680, 200, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(635, 200, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'end';
                    ctx.fillText(chip, 623, 205);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 680, 195);
                ctx.fillText(stack, 680, 213);
                break;
            case "HJ":
                ctx.arc(550, 330, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(550, 285, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(chip, 550, 273);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 550, 325);
                ctx.fillText(stack, 550,343);
                break;
            case "CO":
                ctx.arc(400, 330, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(400, 285, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(chip, 400, 273);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 400, 325);
                ctx.fillText(stack, 400,343);
                break;
            case "BTN":
                ctx.arc(250, 330, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(250, 285, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(chip, 250, 273);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 250, 325);
                ctx.fillText(stack, 250,343);
                break;
            case "SB":
                ctx.arc(130, 250, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(173, 237, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'start';
                    ctx.fillText(chip, 185, 242);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 130, 245);
                ctx.fillText(stack, 130,263);
                break;
            case "BB":
                ctx.arc(130, 150, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(173, 163, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'start';
                    ctx.fillText(chip, 185, 168);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 130, 145);
                ctx.fillText(stack, 130,163);
                break;
        }
    }else if(setting.players == "6"){
        let player_color;
        let chip_color;
        let name = player.name;
        let position = player.position;
        let stack = player.stack;
        let action = player.action;
        let chip = player.paychip;
        switch(action){
            case "call":
                player_color = 'rgb(0, 150, 255)';
                chip_color = 'rgb(0, 150, 255)';
                break;
            case "check":
                player_color = 'rgb(0, 150, 255)';
                chip_color = 'rgb(0, 150, 255)';
                break;
            case "raise":
                player_color =  'rgb(255, 0, 0)';
                chip_color =  'rgb(255, 0, 0)';
                break;
            case "bet":
                player_color =  'rgb(255, 0, 0)';
                chip_color =  'rgb(255, 0, 0)';
                break;
            case "fold":
                player_color = 'rgb(160, 160, 160)';
                chip_color = 'rgb(160, 160, 160)';
                break;
            case "wait":
                player_color = 'rgb(255, 255, 255)';
                chip_color = 'rgb(0, 0, 0)';
                break;
            case "All-in":
            player_color =  'rgb(255, 0, 0)';
            chip_color =  'rgb(255, 0, 0)';            
            break;
        }
        ctx.beginPath();
        ctx.fillStyle = player_color;
        switch(position){	
            case "UTG":
                ctx.arc(500, 70, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(500, 113, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(chip, 500, 135);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 500, 65);
                ctx.fillText(stack, 500, 83);
                break;
            case "HJ":
                ctx.arc(680, 200, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(638, 200, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'end';
                    ctx.fillText(chip, 620, 205);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 680, 195);
                ctx.fillText(stack, 680, 213);
                break;
            case "CO":
                ctx.arc(500, 330, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(500, 287, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(chip, 500, 270);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 500, 325);
                ctx.fillText(stack, 500,343);
                break;
            case "BTN":
                ctx.arc(300, 330, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(300, 287, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(chip, 300, 270);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 300, 325);
                ctx.fillText(stack, 300,343);
                break;
            case "SB":
                ctx.arc(120, 200, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(163, 200, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'start';
                    ctx.fillText(chip, 178, 203);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 120, 195);
                ctx.fillText(stack, 120,213);
                break;
            case "BB":
                ctx.arc(300, 70, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(300, 113, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(chip, 300, 135);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 300, 65);
                ctx.fillText(stack, 300, 83);
                break;
        }
    }else if(setting.players == "2"){
        let player_color;
        let chip_color;
        let name = player.name;
        let position = player.position;
        let stack = player.stack;
        let action = player.action;
        let chip = player.paychip;
        switch(action){
            case "call":
                player_color = 'rgb(0, 150, 255)';
                chip_color = 'rgb(0, 150, 255)';
                break;
            case "check":
                player_color = 'rgb(0, 150, 255)';
                chip_color = 'rgb(0, 150, 255)';
                break;
            case "raise":
                player_color =  'rgb(255, 0, 0)';
                chip_color =  'rgb(255, 0, 0)';
                break;
            case "bet":
                player_color =  'rgb(255, 0, 0)';
                chip_color =  'rgb(255, 0, 0)';
                break;
            case "fold":
                player_color = 'rgb(160, 160, 160)';
                chip_color = 'rgb(160, 160, 160)';
                break;
            case "wait":
                player_color = 'rgb(255, 255, 255)';
                chip_color = 'rgb(0, 0, 0)';
                break;
            case "All-in":
            player_color =  'rgb(255, 0, 0)';
            chip_color =  'rgb(255, 0, 0)';            
            break;
        }
        ctx.beginPath();
        ctx.fillStyle = player_color;
        switch(position){	
            case "SB":
                ctx.arc(400, 330, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(400, 287, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(chip, 400, 270);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 400, 325);
                ctx.fillText(stack, 400,343);
                break;
            case "BB":
                ctx.arc(400, 70, 30, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill();
                if(chip != "0"){
                    ctx.fillStyle = chip_color;
                    ctx.beginPath();
                    ctx.arc(400, 113, 10, 0, Math.PI * 2, true);
                    ctx.stroke();
                    ctx.fill();
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    ctx.font = '12px serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(chip, 400, 135);
                }
                ctx.fillStyle = 'rgb(0, 0, 0)'
                ctx.font = 'italic bold 12px selif';
                ctx.textAlign = 'center';
                ctx.fillText(name, 400, 65);
                ctx.fillText(stack, 400, 83);
                break;
        }
    }
}
//アクションの表示をするメソッド
function draw_sign(ctx, position, action, setting){
    if(setting.players == "9"){
        let action_color = 'rgb(255, 255, 255)';
        let sign_color;
        switch(action){
            case "call":
                sign_color = 'rgb(0, 150, 255)';
                break;
            case "check":
                sign_color = 'rgb(0, 150, 255)';
                break;
            case "raise":
                sign_color =  'rgb(255, 0, 0)';	
                break;
            case "bet":
                sign_color =  'rgb(255, 0, 0)';
                break;
            case "All-in":
                sign_color =  'rgb(255, 0, 0)';
                break;			
            case "fold":
                sign_color = 'rgb(160, 160, 160)';
                break;
            case "All-in":
                sign_color =  'rgb(255, 0, 0)';	
                break;
            default:
                sign_color = 'rgb(255, 255, 255)';
        }
        ctx.fillStyle = sign_color;
        ctx.font = '18px serif';
        switch(position){
            case "UTG": 
                ctx.fillRect(220, 15, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 250, 31);
                break;
            case "EP1": 
                ctx.fillRect(370, 15, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 400, 31);
                break;
            case "EP2": 
                ctx.fillRect(520, 15, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 550, 31);
                break;
            case "LJ":
                ctx.fillRect(650, 145, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 680, 163);
                break;
            case "HJ":
                ctx.fillRect(520, 365, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 550, 382);
                break;
            case "CO":
                ctx.fillRect(370, 365, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 400, 382);
                break;
            case "BTN":
                ctx.fillRect(220, 365, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 250, 382);
                break;
            case "SB": 
                ctx.fillRect(100, 285, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 130, 302);
                break;
            case "BB":
                ctx.fillRect(100, 95, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 130, 112);
                break;
        }
    }else if(setting.players == "6"){
        let action_color = 'rgb(255, 255, 255)';
        let sign_color;
        switch(action){
            case "call":
                sign_color = 'rgb(0, 150, 255)';
                break;
            case "check":
                sign_color = 'rgb(0, 150, 255)';
                break;
            case "raise":
                sign_color =  'rgb(255, 0, 0)';	
                break;
            case "bet":
                sign_color =  'rgb(255, 0, 0)';
                break;
            case "All-in":
                sign_color =  'rgb(255, 0, 0)';
                break;			
            case "fold":
                sign_color = 'rgb(160, 160, 160)';
                break;
            case "All-in":
                sign_color =  'rgb(255, 0, 0)';	
                break;
            default:
                sign_color = 'rgb(255, 255, 255)';
        }
        ctx.fillStyle = sign_color;
        ctx.font = '18px serif';
        switch(position){
            case "UTG": 
                ctx.fillRect(470, 15, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 500, 33);
                break;
            case "HJ":
                ctx.fillRect(650, 145, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 680, 163);
                break;
            case "CO":
                ctx.fillRect(470, 365, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 500, 382);
                break;
            case "BTN":
                ctx.fillRect(270, 365, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 300, 382);
                break;
            case "SB": 
                ctx.fillRect(90, 145, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 120, 163);
                break;
            case "BB":
                ctx.fillRect(270, 15, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 300, 33);
                break;
        }
    }else if(setting.players == "2"){
        let action_color = 'rgb(255, 255, 255)';
        let sign_color;
        switch(action){
            case "call":
                sign_color = 'rgb(0, 150, 255)';
                break;
            case "check":
                sign_color = 'rgb(0, 150, 255)';
                break;
            case "raise":
                sign_color =  'rgb(255, 0, 0)';	
                break;
            case "bet":
                sign_color =  'rgb(255, 0, 0)';
                break;
            case "All-in":
                sign_color =  'rgb(255, 0, 0)';
                break;			
            case "fold":
                sign_color = 'rgb(160, 160, 160)';
                break;
            case "All-in":
                sign_color =  'rgb(255, 0, 0)';	
                break;
            default:
                sign_color = 'rgb(255, 255, 255)';
        }
        ctx.fillStyle = sign_color;
        ctx.font = '18px serif';
        switch(position){
            case "SB":
                ctx.fillRect(370, 365, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 400, 382);
                break;
            case "BB":
                ctx.fillRect(370, 15, 60, 20);
                ctx.fillStyle = action_color;
                ctx.textAlign = "center";
                ctx.fillText(action, 400, 33);
                break;
        }
    }
}

//playerのカードを表示するメソッド
function draw_card(ctx, player, setting){
    if(setting.players == "9"){
        let card1;
        let card2;
        let card1_x;
        let card1_y;
        let card2_x;
        let card2_y;
        switch(player.position){
            case "UTG": 
                card1 = new Image();
                card1.src = UTG.card1.path;
                card2 = new Image();
                card2.src = UTG.card2.path;
                card1_x = 165;
                card1_y = 52;
                card2_x = 192;
                card2_y = 52;
                break;
            case "EP1":
                card1 = new Image();
                card1.src = EP1.card1.path;
                card2 = new Image();
                card2.src = EP1.card2.path;
                card1_x = 315;
                card1_y = 52;
                card2_x = 342;
                card2_y = 52;
                break;
            case "EP2":
                card1 = new Image();
                card1.src = EP2.card1.path;
                card2 = new Image();
                card2.src = EP2.card2.path;
                card1_x = 582;
                card1_y = 52;
                card2_x = 610;
                card2_y = 52;
                break;
            case "LJ": 
                card1 = new Image();
                card1.src = LJ.card1.path;
                card2 = new Image();
                card2.src = LJ.card2.path;
                card1_x = 712;
                card1_y = 180;
                card2_x = 739;
                card2_y = 180;
                break;
            case "HJ":
                card1 = new Image();
                card1.src = HJ.card1.path;
                card2 = new Image();
                card2.src = HJ.card2.path;
                card1_x = 582;
                card1_y = 312;
                card2_x = 609;
                card2_y = 312;
                break;
            case "CO": 
                card1 = new Image();
                card1.src = CO.card1.path;
                card2 = new Image();
                card2.src = CO.card2.path;
                card1_x = 432;
                card1_y = 312;
                card2_x = 459;
                card2_y = 312;
                break;
            case "BTN": 
                card1 = new Image();
                card1.src = BTN.card1.path;
                card2 = new Image();
                card2.src = BTN.card2.path;
                card1_x = 166;
                card1_y = 312;
                card2_x = 193;
                card2_y = 312;
                break;
            case "SB": 
                card1 = new Image();
                card1.src = SB.card1.path;
                card2 = new Image();
                card2.src = SB.card2.path;
                card1_x = 46;
                card1_y = 231;
                card2_x = 73;
                card2_y = 231;
                break;
            case "BB": 
                card1 = new Image();
                card1.src = BB.card1.path;
                card2 = new Image();
                card2.src = BB.card2.path;
                card1_x = 46;
                card1_y = 131;
                card2_x = 73;
                card2_y = 131;
                break;
        }
        ctx.drawImage(card1, card1_x, card1_y, 25, 38);
        ctx.drawImage(card2, card2_x, card2_y, 25, 38);
    }else if(setting.players == "6"){
        let card1;
        let card2;
        let card1_x;
        let card1_y;
        let card2_x;
        let card2_y;
        switch(player.position){
            case "UTG": 
                card1 = new Image();
                card1.src = UTG.card1.path;
                card2 = new Image();
                card2.src = UTG.card2.path;
                card1_x = 533;
                card1_y = 52;
                card2_x = 560;
                card2_y = 52;
                break;
            case "HJ":
                card1 = new Image();
                card1.src = HJ.card1.path;
                card2 = new Image();
                card2.src = HJ.card2.path;
                card1_x = 713;
                card1_y = 181;
                card2_x = 740;
                card2_y = 181;
                break;
            case "CO": 
                card1 = new Image();
                card1.src = CO.card1.path;
                card2 = new Image();
                card2.src = CO.card2.path;
                card1_x = 533;
                card1_y = 312;
                card2_x = 560;
                card2_y = 312;
                break;
            case "BTN": 
                card1 = new Image();
                card1.src = BTN.card1.path;
                card2 = new Image();
                card2.src = BTN.card2.path;
                card1_x = 242;
                card1_y = 312;
                card2_x = 215;
                card2_y = 312;
                break;
            case "SB": 
                card1 = new Image();
                card1.src = SB.card1.path;
                card2 = new Image();
                card2.src = SB.card2.path;
                card1_x = 62;
                card1_y = 181;
                card2_x = 35;
                card2_y = 181;
                break;
            case "BB": 
                card1 = new Image();
                card1.src = BB.card1.path;
                card2 = new Image();
                card2.src = BB.card2.path;
                card1_x = 243;
                card1_y = 52;
                card2_x = 215;
                card2_y = 52;
                break;
        }
        ctx.drawImage(card1, card1_x, card1_y, 25, 38);
        ctx.drawImage(card2, card2_x, card2_y, 25, 38);
    }else if(setting.players == "2"){
        let card1;
        let card2;
        let card1_x;
        let card1_y;
        let card2_x;
        let card2_y;
        switch(player.position){
            case "SB": 
                card1 = new Image();
                card1.src = SB.card1.path;
                card2 = new Image();
                card2.src = SB.card2.path;
                card1_x = 342;
                card1_y = 312;
                card2_x = 315;
                card2_y = 312;
                break;
            case "BB": 
                card1 = new Image();
                card1.src = BB.card1.path;
                card2 = new Image();
                card2.src = BB.card2.path;
                card1_x = 343;
                card1_y = 52;
                card2_x = 315;
                card2_y = 52;
                break;
        }
        ctx.drawImage(card1, card1_x, card1_y, 25, 38);
        ctx.drawImage(card2, card2_x, card2_y, 25, 38);
    }
}
//プレイヤーの勝ち負けを決めるメソッド
//最初に、ポーカーの役を定義する。
class dummyPokerHand {
    constructor(){
        this.name = " ";
        this.strength = -1;
    }
}
class highCard{
    constructor(rank, kikker1, kikker2, kikker3, kikker4){
        this.name = "High Card";
        this.strength = 0;
        this.rank = rank;
        this.kikker1 = kikker1;
        this.kikker2 = kikker2;
        this.kikker3 = kikker3;
        this.kikker4 = kikker4;
    }
}
class onePair {
    constructor(rank, kikker1, kikker2, kikker3){
        this.name = "One Pair";
        this.strength = 1;
        this.rank = rank;
        this.kikker1 = kikker1;
        this.kikker2 = kikker2;
        this.kikker3 = kikker3;
    }
}
class twoPair{
    constructor(rank1, rank2, kikker){
        this.name = "Two Pair";
        this.strength = 2;
        this.rank1 = rank1;
        this.rank2 = rank2;
        this.kikker = kikker;
    }
}
class threeCard{
    constructor(rank, kikker1, kikker2){
        this.name = "Three Of A Kind";
        this.strength = 3;
        this.rank = rank;
        this.kikker1 = kikker1;
        this.kikker2 = kikker2;
    }
}
class straight{
    constructor(rank){
        this.name = "Straight";
        this.strength = 4;
        this.rank = rank;
    }
}
class flush{
    constructor(rank, kikker1, kikker2, kikker3, kikker4){
        this.name = "Flush";
        this.strength = 5;
        this.rank = rank;
        this.kikker1 = kikker1;
        this.kikker2 = kikker2;
        this.kikker3 = kikker3;
        this.kikker4 = kikker4;
    }
}
class fullHouse{
    constructor(rank1, rank2){
        this.name = "Full House";
        this.strength = 6;
        this.rank1 = rank1;
        this.rank2 = rank2;
    }
}
class fourCard{
    constructor(rank, kikker){
        this.name = "Four Of A Kind";
        this.strength = 7;
        this.rank = rank;
        this.kikker = kikker;
    }
}
class straightFlush{
    constructor(rank){
        this.name = "Straight Flush";
        this.strength = 8;
        this.rank = rank;
    }
}
class royalStraightFlush{
    constructor(){
        this.name = "Royal Straight Flush";
        this.strength = 9;
    }
}
//役同士を比べる時の比較関数
function compare_hand(h1, h2){
    //まずは役の強さを比べる
    if(h1.strength < h2.strength){
        return -1;
    }
    if(h1.strength > h2.strength){
        return 1;
    }
    //役の強さが同じ場合、役の種類によって比べるものを変える
    switch(h1.strength){
        case 0:
            if(h1.rank != h2.rank){
                return h1.rank-h2.rank;
            }else if(h1.kikker1 != h2.kikker1){
                return h1.kikker1-h2.kikker1;
            }else if(h1.kikker2 != h2.kikker2){
                return h1.kikker2-h2.kikker2;
            }else if(h1.kikker3 != h2.kikker3){
                return h1.kikker3-h2.kikker3;
            }else if(h1.kikker4 != h2.kikker4){
                return h1.kikker4-h2.kikker4;
            }else{
                return 0;
            }
            break;
        case 1: 
            if(h1.rank != h2.rank){
                return h1.rank-h2.rank;
            }else if(h1.kikker1 != h2.kikker1){
                return h1.kikker1-h2.kikker1;
            }else if(h1.kikker2 != h2.kikker2){
                return h1.kikker2-h2.kikker2;
            }else if(h1.kikker3 != h2.kikker3){
                return h1.kikker3-h2.kikker3;
            }else{
                return 0;
            }
            break;
        case 2: 
            if(h1.rank1 != h2.rank1){
                return h1.rank1-h2.rank1;
            }else if(h1.rank2 != h2.rank2){
                return h1.rank2-h2.rank2;
            }else if(h1.kikker != h2.kikker){
                return h1.kikker-h2.kikker;
            }else{
                return 0;
            }
            break;
        case 3:
            if(h1.rank != h2.rank){
                return h1.rank-h2.rank;
            }else if(h1.kikker1 != h2.kikker1){
                return h1.kikker1-h2.kikker1;
            }else if(h1.kikker2 !=h2.kikker2){
                return h1.kikker2-h2.kikker2;
            }else{
                return 0;
            }
            break;
        case 4:
            if(h1.rank != h2.rank){
                return h1.rank-h2.rank;
            }else{
                return 0;
            }
            break;
        case 5:
            if(h1.rank != h2.rank){
                return h1.rank-h2.rank;
            }else if(h1.kikker1 != h2.kikker1){
                return h1.kikker1-h2.kikker1;
            }else if(h1.kikker2 != h2.kikker2){
                return h1.kikker2-h2.kikker2;
            }else if(h1.kikker3 != h2.kikker3){
                return h1.kikker3-h2.kikker3;
            }else{
                return 0;
            }
            break;
        case 6:
            if(h1.rank1 != h2.rank1){
                return h1.rank1-h2.rank1;
            }else if(h1.rank2 != h2.rank2){
                return h1.rank2-h2.rank2;
            }else{
                return 0;
            }
            break;
        case 7: 
            if(h1.rank != h2.rank){
                return h1.rank-h2.rank;
            }else if(h1.kikker != h2.kikker){
                return h1.kikker-h2.kikker;
            }else{
                return 0;
            }
            break;
        case 8:
            if(h1.rank != h2.rank){
                return h1.rank-h2.rank;
            }else{
                return 0;
            }
            break;
        default: 
            return 0;
    }
}
//プレイヤー同士の比較関数。ハンドの比較関数にのっとって行う
function compare_player(p1, p2){
    return compare_hand(p1.hand, p2.hand);
}
//5枚のカードを組み合わせて役を確定させるメソッドを定義
function pokerHand(cards){
    //返り値を格納する変数を定義
    let hand;
    //カードの並び順を昇順に並べ替え
    cards.sort(card_compare);
    //五枚のカードの並び順によって変化する変数を定義
    let card_analyzer = 1;
    for(let i = 1; i < cards.length; i++){
        if(card_compare(cards[i],cards[i-1]) == 0){
            //前後のカードの数字が同じでなければ＋１
            card_analyzer++;
        }else{
            //違っていれば桁を繰り上げて＋１
            card_analyzer = card_analyzer * 10 + 1;
        }
    }
    //ストレートになっているかの確認
    let straight_judge = true;
    for(let i = 1; i < cards.length; i++){
        if(cards[i-1].num != cards[i].num-1){
            straight_judge = false;
        }
    }
    //5ハイストレートの場合を特別に確認
    let five_high_straight = false;
    if(cards[0].num == 2 && cards[1].num == 3 && cards[2].num == 4 && cards[3].num == 5 && cards[4].num == 14){
        five_high_straight = true;
    }
    //フラッシュになっているかの確認
    let flush_judge = true;
    for(let i = 1; i < cards.length; i++){
        if(cards[i-1].suit != cards[i].suit){
            flush_judge = false;
        }
    }
    
    //場合分けをして役を確定すると同時にキッカーやランクも設定
    switch(card_analyzer){
        //ワンペアのケース
        case 2111:
            hand = new onePair(cards[0].num, cards[4].num, cards[3].num, cards[2].num);
            break;
        case 1211: 
            hand = new onePair(cards[1].num, cards[4].num, cards[3].num, cards[0].num);
            break;
        case 1121:
            hand = new onePair(cards[2].num, cards[4].num, cards[1].num, cards[0].num);
            break;
        case 1112:
            hand = new onePair(cards[4].num, cards[2].num, cards[1].num, cards[0].num);
            break;
        //ツーペアのケース
        case 221:
            hand = new twoPair(cards[2].num, cards[0].num, cards[4].num);
            break;
        case 212:
            hand = new twoPair(cards[3].num, cards[0].num, cards[2].num);
            break;
        case 122:
            hand = new twoPair(cards[3].num, cards[1].num, cards[0].num);
            break;
        //スリーカードのケース
        case 311:
            hand = new threeCard(cards[0].num, cards[4].num, cards[3].num);
            break;
        case 131:
            hand = new threeCard(cards[1].num, cards[4].num, cards[0].num);
            break;
        case 113:
            hand = new threeCard(cards[2].num, cards[1].num, cards[0].num);
            break;
        //フルハウスのケース
        case 32:
            hand = new fullHouse(cards[0].num, cards[3].num);
            break;
        case 23:
            hand = new fullHouse(cards[2].num, cards[0].num);
            break;
        //フォーカードのケース
        case 41:
            hand = new fourCard(cards[0].num, cards[4].num);
            break;
        case 14:
            hand = new fourCard(cards[1].num, cards[0].num);
            break;
        //カードが全てバラバラの場合は、ストレートフラッシュ、フラッシュ、ストレート、ハイカードで場合分けをする。
        case 11111:
            if((straight_judge == true || five_high_straight == true) && flush_judge == true){
                if(cards[4].num == 13){
                    hand = new royalStraightFlush();
                }else{
                    hand = new straightFlush(cards[4].num);
                }
            }else if(flush_judge == true){
                hand = new flush(cards[4].num, cards[3].num, cards[2].num, cards[1].num, cards[0].num);
            }else if(straight_judge == true){
                hand = new straight(cards[4].num);
            }else if(five_high_straight == true){
                hand = new straight(cards[3].num);
            }else{
                hand = new highCard(cards[4].num, cards[3].num, cards[2].num, cards[1].num, cards[0].num);
            }
            break;
    }
    return hand;
}
//5枚のボードと2枚のカードを組み合わせてプレイヤーの役を確定させるメソッドを定義
function PlayerHand(player, board){
    let board_array = [dummy, dummy, dummy, dummy, dummy];
    card_List.forEach(value => {
        if(value.name == board.card1){
            board_array[0] = value;
        }
        if(value.name == board.card2){
            board_array[1] = value;
        }
        if(value.name == board.card3){
            board_array[2] = value;
        }
        if(value.name == board.card4){
            board_array[3] = value;
        }
        if(value.name == board.card5){
            board_array[4] = value;
        }
    })
    //ボードとプレイヤーのハンドを合わせた配列を作る
    let all_card = [board_array[0], board_array[1], board_array[2], board_array[3], board_array[4], player.card1, player.card2];
    //返り値用の変数を定義
    let mostStrongHand;
    //ダミーカードがまぎれている場合は、無条件でダミー役に確定
    if(all_card.includes(dummy) == true){
        mostStrongHand = new dummyPokerHand();
    }else{
        //そうでない場合は、全てのカードの組み合わせを試してその中で最強の役で確定する
        let hand_array = [];
        for(let i = 0; i < all_card.length-4; i++){
            for(let j = i+1; j < all_card.length-3; j++){
                for(let k = j+1; k < all_card.length-2; k++){
                    for(let l = k+1; l < all_card.length-1; l++){
                        for(let m = l+1; m < all_card.length; m++){
                            let hand = [all_card[i], all_card[j], all_card[k], all_card[l], all_card[m]];
                            hand_array.push(pokerHand(hand));
                        }
                    }
                }
            }
        }
    
        hand_array.sort(compare_hand);
        mostStrongHand = hand_array[hand_array.length-1];
    }
    return mostStrongHand;
}
//一番最後の場面を設定した後、勝者を決定するメソッド
let survivers = [];
function show_down(last_scene, players, setting, board, preflop, flop, turn, river){
    //最後の場面までのゲームを再現
    read_through(last_scene, setting, players, preflop, flop, turn, river);
    //最後の場面まで生き残っていたプレイヤーたちを配列に格納する。
    survivers = [];
    players_array.forEach(value => {
        if(value.action != "fold"){
            survivers.push(value);
        }
    })
    //生き残りプレイヤーたちのハンドを決定する。
    survivers.forEach(value => {
        value.hand = PlayerHand(value, board);
    })
    //生き残りプレイヤーをハンドの強さでソートする。
    survivers.sort(compare_player);
}

//勝利演出をcanvas上に描画するメソッド
function draw_win(ctx, position, setting){
    let text_color = 'rgb(255, 255, 0)';
    let insite_color = 'rgb(255, 255, 100)'
    ctx.font = '20px serif';

    if(setting.players == "9"){
        switch(position){
            case "UTG": 
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 250, 31);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 250, 31);
                break;
            case "EP1": 
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 400, 31);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 400, 31);
                break;
            case "EP2": 
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 550, 31);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 550, 31);
                break;
            case "LJ":
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 680, 163);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 680, 163);
                break;
            case "HJ":
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 550, 382);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 550, 382);
                break;
            case "CO":
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 400, 382);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 400, 382);
                break;
            case "BTN":
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 250, 382);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 250, 382);
                break;
            case "SB": 
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 130, 302);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 130, 302);
                break;
            case "BB":
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 130, 112);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 130, 112);
                break;
        }
    }else if(setting.players == "6"){
        switch(position){
            case "UTG": 
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 500, 33);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 500, 33);
                break;
            case "HJ":
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 680, 163);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 680, 163);
                break;
            case "CO":
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 500, 382);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 500, 382);
                break;
            case "BTN":
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 300, 382);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 300, 382);
                break;
            case "SB": 
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 120, 163);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 120, 163);
                break;
            case "BB":
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 300, 33);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 300, 33);
                break;
        }
    }else if(setting.players == "2"){
        switch(position){
            case "SB": 
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 400, 382);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 400, 382);
                break;
            case "BB":
                ctx.fillStyle = text_color;
                ctx.textAlign = "center";
                ctx.strokeText("Win", 400, 33);
                ctx.fillStyle = insite_color;
                ctx.fillText("Win", 400, 33);
                break;
        }
    }
}

//canvas上で勝者を決定するメソッド
function draw_winner(last_scene, players, setting, board, preflop, flop, turn, river){
    //surviversを決定する
    show_down(last_scene, players, setting, board, preflop, flop, turn, river)
    //surviversで一番強いハンドを持つプレイヤーの役を取り出す。
    let mostStrongHand = survivers[survivers.length-1].hand;
    //最終的な勝者を格納する配列に、mostStrongHandと同じ役を持つプレイヤーを格納する。
    let winners = [];
    for(let i = 0; i < survivers.length; i++){
        if(compare_hand(mostStrongHand, survivers[i].hand) == 0){
            winners.push(survivers[i]);
        }
    }
    //念のためもう一度、lastsceneまでアクションを振り返った後、勝利演出を表示する。
    read_through(last_scene, setting, players, preflop, flop, turn, river);
    //残っているプレイヤーをwait状態にする。
    players_array.forEach(value => {
        value.paychip = 0;
        if(value.action != "fold"){
            value.action = "wait";
        }
    })
    //canvasに各種要素を描画する。
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pokertable(ctx);
    draw_pot(ctx, pot);
    if(last_scene.street == "flop"){
        draw_board(ctx, 3, board);
    }else if(last_scene.street == "turn"){
        draw_board(ctx, 4, board);
    }else if(last_scene.street == "river"){
        draw_board(ctx, 5, board);
    }
    //プレイヤーとプレイヤーのハンド
    players_array.forEach(value => {
        draw_player(ctx, value, setting);
        draw_card(ctx, value, setting);
    })
    winners.forEach(value => {
        draw_win(ctx, value.position, setting);
    })
}