//setting関係のメソッド
function unit_change(){
    document.getElementsByName('player_unit').forEach(function(value){value.innerHTML = document.getElementById('unit').value;})
}

function effectivestack_change(){
    document.getElementsByName("player_stack").forEach(function(value){
        value.value = document.getElementById("effective_stack").value;
    })
}

//ダイアログ関係のメソッド
//カードオブジェクトを生成する
class card {
    constructor(name, suit, num, path){
        this.name = name;
        this.suit = suit;
        this.num = Number(num);
        this.path = path;
    }
}
//カード同士の比較関数
function card_compare(card1, card2){
    if(card1.num < card2.num){
        return -1;
    }
    if(card1.num > card2.num){
        return 1;
    }
    return 0;
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
    

let players_card = [dummy, dummy, dummy, dummy];
let array_number = 0;
let card_id;
let clicked = false;
let board_array = new Array(dummy, dummy, dummy, dummy, dummy);
let boardOrhand;
   
function card_click(c_name, num, target){
    //クリックしたものがプレイヤーのハンドの場合
    if(target == "hand"){
        //ダブルクリック時、クリックしたカードをダミーカードに戻す。
        if(clicked == true){
            document.getElementById(c_name).src = "/images/card-img/trumpdummy.JPG"
            players_card[num] = dummy;
        }
        if(clicked == true){
            clicked = false;
        }else{
            clicked = true;
        }
        //シングルクリック時、ダイアログを開く。
        //時間差を付けることで、シングルクリックとダブルクリックを区分けする。
        setTimeout(() => {
            if(clicked == true){
                array_number = num;
                boardOrhand = target;
                card_elem = document.getElementById(c_name);
                let title = document.getElementById("card_dialog_title");
                title.innerHTML = card_elem.name + "のカードを<br>登録する";
                card_List.forEach(function(value){
                    if(players_card.includes(value) == true || board_array.includes(value) == true){
                        document.getElementById(value.name).style.opacity = 0.5;
                    }else{
                        document.getElementById(value.name).style.opacity = 1;
                    }
                })
                let card_dialog = new bootstrap.Modal(document.getElementById("card_dialog"), {
                    keyboard:false
                }) ;
                card_dialog.show();
                clicked = false;
            }
        }, 300);
    }else{
        //ボードの場合
        //ハンドの時と同様にダブルクリックとシングルクリックで処理を分ける。
        if(clicked == true){
            board_array[num] = dummy;
            document.getElementById(c_name).src = "/images/card-img/trumpdummy.JPG";
            //ボードの場合は、アコーディオン内のカードの画像も入れ替える
            switch(num){
                case 0:
                    document.getElementById("flop_card01").src = "/images/card-img/trumpdummy.JPG";
                    break;
                case 1:
                    document.getElementById("flop_card02").src = "/images/card-img/trumpdummy.JPG";
                    break;
                case 2:
                    document.getElementById("flop_card03").src = "/images/card-img/trumpdummy.JPG";
                    break;
                case 3:
                    document.getElementById("turn_card").src = "/images/card-img/trumpdummy.JPG";
                    break;
                case 4:
                    document.getElementById("river_card").src = "/images/card-img/trumpdummy.JPG";
                    break;
            }
        }
        //シングルクリック時、ダイアログを開いてカード選択へ移行
        if(clicked == true){
            clicked = false;
        }else{
            clicked = true;
        }
        setTimeout(function(){
            if(clicked == true){
                boardOrhand = target;
                array_number = num;
                card_elem = document.getElementById(c_name);
                let title = document.getElementById('card_dialog_title');
                title.innerHTML = card_elem.name + "のカードを<br>登録する";
                card_List.forEach(function(value){
                    if(players_card.includes(value) == true || board_array.includes(value) == true){
                        document.getElementById(value.name).style.opacity = 0.5;
                    }else{
                        document.getElementById(value.name).style.opacity = 1;
                    }
                })
                let card_dialog = new bootstrap.Modal(document.getElementById("card_dialog"), {
                    keyboard:false
                }) ;
                card_dialog.show();
                clicked = false;
            }
        }, 300);
    }
}
    
//クリックしたカードを所定の位置に配置する
function card_register(c_name, number){
    let replace_card = document.getElementById(c_name);
    if(players_card.includes(card_List[number]) == false && board_array.includes(card_List[number]) == false){
        if(boardOrhand == "hand"){
            card_elem.src = replace_card.src;
            players_card[array_number] = card_List[number];
        }else if(boardOrhand == "board"){
            card_elem.src = replace_card.src;
            switch(array_number){
                case 0:
                    document.getElementById("flop_card01").src = replace_card.src;
                    break;
                case 1:
                    document.getElementById("flop_card02").src = replace_card.src;
                    break;
                case 2:
                    document.getElementById("flop_card03").src = replace_card.src;
                    break;
                case 3:
                    document.getElementById("turn_card").src = replace_card.src;
                    break;
                case 4:
                    document.getElementById("river_card").src = replace_card.src;
                    break;
            }
            board_array[array_number] = card_List[number];
        }
        const card_dialog = new bootstrap.Modal(document.getElementById("card_dialog"), {
            keyboard:false
        }) ;
        card_dialog.hide();
    }
}    
//スマホ向けの機能。一度登録したカードをダミーカードに戻す
function card_clear(c_names, nums, target){
    for(item of c_names){
        document.getElementById(item).src = "/images/card-img/trumpdummy.JPG";
    }
    if(target == "hand"){
        for(item of nums){
            players_card[item] = dummy;
        }
    }else if(target == "board"){
        for(item of nums){
            board_array[item] = dummy;
        }
    }
}
//行記述に関するメソッド
/*プレイラインの動作を記入。一行ごとにオブジェクトを生成し、その中にプレイヤーのアクションを格納する。*/
class playline {
    constructor(name, elem, line_number){
        this.name = name;
        this.elem = elem;
        this.line_number = line_number;
        this.reset();
    }
    set playerArray(value){
        this._playerArray = value;
    }
    get playerArray(){
        return this._playerArray;
    }
    
    set actionArray(value){
        this._actionArray = value;
    }
    get actionArray(){
        return this._actionArray;
    }
    
    set whoSelect(value){
        this._whoSelect = value;
    }
    get whoSelect(){
        return this._whoSelect;
    }
    
    set actionSelect(value){
        this._actionSelect = value;
    }
    get actionSelect(){
        return this._actionSelect;
    }
    
    set howMuch(value){
        this._howMuch = value;
    }
    get howMuch(){
        return this._howMuch;
    }
    
    set waitPlayer(value){
        this._waitPlayer = value;
    }
    get waitPlayer(){
        return this._waitPlayer;
    }
    
    set allinPlayer(value){
        this._allinPlayer = value;
    }
    get allinPlayer(){
        return this._allinPlayer;
    }
    reset(){
        this.playerArray = [];
        this.actionArray = [];
        this.whoSelect = "";
        this.actionSelect = "";
        this.howMuch = "";
        this.waitPlayer = [];
        this.allinPlayer = [];
    }
}
const preflop_L01 = new playline("preflop_L01", document.getElementById("preflop_L01"), 1);const preflop_L02 = new playline("preflop_L02", document.getElementById("preflop_L02"), 2);const preflop_L03 = new playline("preflop_L03", document.getElementById("preflop_L03"), 3);
const preflop_L04 = new playline("preflop_L04", document.getElementById("preflop_L04"), 4);const preflop_L05 = new playline("preflop_L05", document.getElementById("preflop_L05"), 5);const preflop_L06 = new playline("preflop_L06", document.getElementById("preflop_L06"), 6);
const preflop_L07 = new playline("preflop_L07", document.getElementById("preflop_L07"), 7);const preflop_L08 = new playline("preflop_L08", document.getElementById("preflop_L08"), 8);const preflop_L09 = new playline("preflop_L09", document.getElementById("preflop_L09"), 9);
const preflop_L10 = new playline("preflop_L10", document.getElementById("preflop_L10"), 10);const preflop_L11 = new playline("preflop_L11", document.getElementById("preflop_L11"), 11);const preflop_L12 = new playline("preflop_L12", document.getElementById("preflop_L12"), 12);
const preflop_L13 = new playline("preflop_L13", document.getElementById("preflop_L13"), 13);const preflop_L14 = new playline("preflop_L14", document.getElementById("preflop_L14"), 14);const preflop_L15 = new playline("preflop_L15", document.getElementById("preflop_L15"),15);
const preflop_L16 = new playline("preflop_L16", document.getElementById("preflop_L16"), 16);const preflop_L17 = new playline("preflop_L17", document.getElementById("preflop_L17"), 17);const preflop_L18 = new playline("preflop_L18", document.getElementById("preflop_L18"), 18);
const preflop_L19 = new playline("preflop_L19", document.getElementById("preflop_L19"), 19);const preflop_L20 = new playline("preflop_L20", document.getElementById("preflop_L20"), 20);const preflop_L21 = new playline("preflop_L21", document.getElementById("preflop_L21"), 21);
const preflop_L22 = new playline("preflop_L22", document.getElementById("preflop_L22"), 22);const preflop_L23 = new playline("preflop_L23", document.getElementById("preflop_L23"), 23);const preflop_L24 = new playline("preflop_L24", document.getElementById("preflop_L24"), 24);
const preflop_L25 = new playline("preflop_L25", document.getElementById("preflop_L25"), 25);const preflop_L26 = new playline("preflop_L26", document.getElementById("preflop_L26"), 26);const preflop_L27 = new playline("preflop_L27", document.getElementById("preflop_L27"), 27);
const preflop_L28 = new playline("preflop_L28", document.getElementById("preflop_L28"), 28);const preflop_L29 = new playline("preflop_L29", document.getElementById("preflop_L29"), 29);const preflop_L30 = new playline("preflop_L30", document.getElementById("preflop_L30"), 30);

const preflop_line_array = new Array(preflop_L01, preflop_L02, preflop_L03, preflop_L04, preflop_L05,
                                        preflop_L06, preflop_L07, preflop_L08, preflop_L09, preflop_L10,
                                        preflop_L11, preflop_L12, preflop_L13, preflop_L14, preflop_L15,
                                        preflop_L16, preflop_L17, preflop_L18, preflop_L19, preflop_L20,
                                        preflop_L21, preflop_L22, preflop_L23, preflop_L24, preflop_L25,
                                        preflop_L26, preflop_L27, preflop_L28, preflop_L29, preflop_L30);

const flop_L01 = new playline("flop_L01", document.getElementById("flop_L01"), 1);const flop_L02 = new playline("flop_L02", document.getElementById("flop_L02"), 2);const flop_L03 = new playline("flop_L03", document.getElementById("flop_L03"), 3);
const flop_L04 = new playline("flop_L04", document.getElementById("flop_L04"), 4);const flop_L05 = new playline("flop_L05", document.getElementById("flop_L05"), 5);const flop_L06 = new playline("flop_L06", document.getElementById("flop_L06"), 6);
const flop_L07 = new playline("flop_L07", document.getElementById("flop_L07"), 7);const flop_L08 = new playline("flop_L08", document.getElementById("flop_L08"), 8);const flop_L09 = new playline("flop_L09", document.getElementById("flop_L09"), 9);
const flop_L10 = new playline("flop_L10", document.getElementById("flop_L10"), 10);const flop_L11 = new playline("flop_L11", document.getElementById("flop_L11"), 11);const flop_L12 = new playline("flop_L12", document.getElementById("flop_L12"), 12);
const flop_L13 = new playline("flop_L13", document.getElementById("flop_L13"), 13);const flop_L14 = new playline("flop_L14", document.getElementById("flop_L14"), 14);const flop_L15 = new playline("flop_L15", document.getElementById("flop_L15"), 15);
const flop_L16 = new playline("flop_L16", document.getElementById("flop_L16"), 16);const flop_L17 = new playline("flop_L17", document.getElementById("flop_L17"), 17);const flop_L18 = new playline("flop_L18", document.getElementById("flop_L18"), 18);
const flop_L19 = new playline("flop_L19", document.getElementById("flop_L19"), 19);const flop_L20 = new playline("flop_L20", document.getElementById("flop_L20"), 20);const flop_L21 = new playline("flop_L21", document.getElementById("flop_L21"), 21);
const flop_L22 = new playline("flop_L22", document.getElementById("flop_L22"), 22);const flop_L23 = new playline("flop_L23", document.getElementById("flop_L23"), 23);const flop_L24 = new playline("flop_L24", document.getElementById("flop_L24"), 24);
const flop_L25 = new playline("flop_L25", document.getElementById("flop_L25"), 25);const flop_L26 = new playline("flop_L26", document.getElementById("flop_L26"), 26);const flop_L27 = new playline("flop_L27", document.getElementById("flop_L27"), 27);
const flop_L28 = new playline("flop_L28", document.getElementById("flop_L28"), 28);const flop_L29 = new playline("flop_L29", document.getElementById("flop_L29"), 29);const flop_L30 = new playline("flop_L30", document.getElementById("flop_L30"), 30);

const flop_line_array = new Array(flop_L01, flop_L02, flop_L03, flop_L04, flop_L05, flop_L06, flop_L07, flop_L08, flop_L09,
                                    flop_L10, flop_L11, flop_L12, flop_L13, flop_L14, flop_L15, flop_L16, flop_L17, flop_L18, flop_L19,
                                    flop_L20, flop_L21, flop_L22, flop_L23, flop_L24, flop_L25, flop_L26, flop_L27, flop_L28, flop_L29,
                                    flop_L30);

const turn_L01 = new playline("turn_L01", document.getElementById("turn_L01"), 1);const turn_L02 = new playline("turn_L02", document.getElementById("turn_L02"), 2);const turn_L03 = new playline("turn_L03", document.getElementById("turn_L03"), 3);
const turn_L04 = new playline("turn_L04", document.getElementById("turn_L04"), 4);const turn_L05 = new playline("turn_L05", document.getElementById("turn_L05"), 5);const turn_L06 = new playline("turn_L06", document.getElementById("turn_L06"), 6);
const turn_L07 = new playline("turn_L07", document.getElementById("turn_L07"), 7);const turn_L08 = new playline("turn_L08", document.getElementById("turn_L08"), 8);const turn_L09 = new playline("turn_L09", document.getElementById("turn_L09"), 9);
const turn_L10 = new playline("turn_L10", document.getElementById("turn_L10"), 10);const turn_L11 = new playline("turn_L11", document.getElementById("turn_L11"), 11);const turn_L12 = new playline("turn_L12", document.getElementById("turn_L12"), 12);
const turn_L13 = new playline("turn_L13", document.getElementById("turn_L13"), 13);const turn_L14 = new playline("turn_L14", document.getElementById("turn_L14"), 14);const turn_L15 = new playline("turn_L15", document.getElementById("turn_L15"), 15);
const turn_L16 = new playline("turn_L16", document.getElementById("turn_L16"), 16);const turn_L17 = new playline("turn_L17", document.getElementById("turn_L17"), 17);const turn_L18 = new playline("turn_L18", document.getElementById("turn_L18"), 18);
const turn_L19 = new playline("turn_L19", document.getElementById("turn_L19"), 19);const turn_L20 = new playline("turn_L20", document.getElementById("turn_L20"), 20);const turn_L21 = new playline("turn_L21", document.getElementById("turn_L21"), 21);
const turn_L22 = new playline("turn_L22", document.getElementById("turn_L22"), 22);const turn_L23 = new playline("turn_L23", document.getElementById("turn_L23"), 23);const turn_L24 = new playline("turn_L24", document.getElementById("turn_L24"), 24);
const turn_L25 = new playline("turn_L25", document.getElementById("turn_L25"), 25);const turn_L26 = new playline("turn_L26", document.getElementById("turn_L26"), 26);const turn_L27 = new playline("turn_L27", document.getElementById("turn_L27"), 27);
const turn_L28 = new playline("turn_L28", document.getElementById("turn_L28"), 28);const turn_L29 = new playline("turn_L29", document.getElementById("turn_L29"), 29);const turn_L30 = new playline("turn_L30", document.getElementById("turn_L30"), 30);

const turn_line_array = new Array(turn_L01, turn_L02, turn_L03, turn_L04, turn_L05, turn_L06, turn_L07, turn_L08, turn_L09,
                                    turn_L10, turn_L11, turn_L12, turn_L13, turn_L14, turn_L15, turn_L16, turn_L17, turn_L18, turn_L19,
                                    turn_L20, turn_L21, turn_L22, turn_L23, turn_L24, turn_L25, turn_L26, turn_L27, turn_L28, turn_L29,
                                    turn_L30);

const river_L01 = new playline("river_L01", document.getElementById("river_L01"), 1);const river_L02 = new playline("river_L02", document.getElementById("river_L02"), 2);const river_L03 = new playline("river_L03", document.getElementById("river_L03"), 3);
const river_L04 = new playline("river_L04", document.getElementById("river_L04"), 4);const river_L05 = new playline("river_L05", document.getElementById("river_L05"), 5);const river_L06 = new playline("river_L06", document.getElementById("river_L06"), 6);
const river_L07 = new playline("river_L07", document.getElementById("river_L07"), 7);const river_L08 = new playline("river_L08", document.getElementById("river_L08"), 8);const river_L09 = new playline("river_L09", document.getElementById("river_L09"), 9);
const river_L10 = new playline("river_L10", document.getElementById("river_L10"), 10);const river_L11 = new playline("river_L11", document.getElementById("river_L11"), 11);const river_L12 = new playline("river_L12", document.getElementById("river_L12"), 12);
const river_L13 = new playline("river_L13", document.getElementById("river_L13"), 13);const river_L14 = new playline("river_L14", document.getElementById("river_L14"), 14);const river_L15 = new playline("river_L15", document.getElementById("river_L15"), 15);
const river_L16 = new playline("river_L16", document.getElementById("river_L16"), 16);const river_L17 = new playline("river_L17", document.getElementById("river_L17"), 17);const river_L18 = new playline("river_L18", document.getElementById("river_L18"), 18);
const river_L19 = new playline("river_L19", document.getElementById("river_L19"), 19);const river_L20 = new playline("river_L20", document.getElementById("river_L20"), 20);const river_L21 = new playline("river_L21", document.getElementById("river_L21"), 21);
const river_L22 = new playline("river_L22", document.getElementById("river_L22"), 22);const river_L23 = new playline("river_L23", document.getElementById("river_L23"), 23);const river_L24 = new playline("river_L24", document.getElementById("river_L24"), 24);
const river_L25 = new playline("river_L25", document.getElementById("river_L25"), 25);const river_L26 = new playline("river_L26", document.getElementById("river_L26"), 26);const river_L27 = new playline("river_L27", document.getElementById("river_L27"), 27);
const river_L28 = new playline("river_L28", document.getElementById("river_L28"), 28);const river_L29 = new playline("river_L29", document.getElementById("river_L29"), 29);const river_L30 = new playline("river_L30", document.getElementById("river_L30"), 30);

const river_line_array = new Array(river_L01, river_L02, river_L03, river_L04, river_L05, river_L06, river_L07, river_L08, river_L09,
                                    river_L10, river_L11, river_L12, river_L13, river_L14, river_L15, river_L16, river_L17, river_L18, river_L19,
                                    river_L20, river_L21, river_L22, river_L23, river_L24, river_L25, river_L26, river_L27, river_L28, river_L29, 
                                    river_L30);
    
/*アクションの選択肢の種類を並べる*/
const action_array01 = ["check", "raise", "All-in"];
const action_array02 = ["fold", "call", "raise", "All-in"];
const action_array03 = ["check", "bet", "All-in"];
/*プレイヤーのアクションの順番の初期値*/
/*プリフロアクションの初期値*/
preflop_L01.playerArray = ["SB"];
preflop_L01.waitPlayer = ["BB"];
let last_player = "BB";
preflop_L01.actionArray = action_array02;
/*文章をセットする行とボタンを表示する行の初期値*/
let present_line = preflop_L01;
let next_line = preflop_L02;
//指定された行の一つ前の行を返すメソッド
function previous_line(playline){
    let result;
    if(preflop_line_array.includes(playline)){
        if(playline == preflop_L01){
            result = preflop_L01;
        }else{
            result = preflop_line_array[playline.line_number-2];
        }
    }else if(flop_line_array.includes(playline)){
        if(playline == flop_L01){
            result = flop_L01;
        }else{
            result = flop_line_array[playline.line_number-2];
        }
    }else if(turn_line_array.includes(playline)){
        if(playline == turn_L01){
            result = turn_L01;
        }else{
            result = turn_line_array[playline.line_number-2];
        }
    }else if(river_line_array.includes(playline)){
        if(playline == river_L01){
            result = river_L01;
        }else{
            result = river_line_array[playline.line_number-2];
        }
    }
    return result;
}
/*文章をセットする行とボタンを表示する際、変数内で用いる行の設定*/
let temporary_present_line;
let temporary_next_line;
/*ダイアログ表示ボタンとやり直しボタンの設定*/
let preflop_describe_button = '<button class="btn btn-warning fs-1" onclick="show_describe_dialog(present_line, next_line)">プリフロップのアクションを入力する</botton>';
let AllDelete_button = '<button  class="btn btn-outline-secondary fs-1" onclick="AllDlete()">やり直す</botton>';
/*次のストリートに移動する*/
let flop_describe_button = '<button class="btn btn-warning fs-1" onclick="show_describe_dialog(present_line, next_line)">フロップのアクションを入力する</button>';
let turn_describe_button = '<button class="btn btn-warning fs-1" onclick="show_describe_dialog(present_line, next_line)">ターンのアクションを入力する</button>';
let river_describe_button = '<button class="btn btn-warning fs-1" onclick="show_describe_dialog(present_line, next_line)">リバーのアクションを入力する</button>';
let pf_next_button = '<button class="btn btn-outline-success fs-1" onclick="go_to_next(`flop`)">フロップへ移動する</button>';
let f_next_button = '<button class="btn btn-outline-success fs-1" onclick="go_to_next(`turn`)">ターンへ移動する</button>';
let t_next_button = '<button class="btn btn-outline-success fs-1" onclick="go_to_next(`river`)">リバーへ移動する</button>';
let show_result_button = '<button class="btn btn-outline-success fs-1" onclick="show_result()">ショーダウン</button>'
    
/*ダイアログの表示時、内部の選択肢を配列を用いて設定する*/
function show_describe_dialog(l1, l2){
    let who_option;
    let action_option;
    /*まずは、whoのオプションを設定*/
    for(let i = 0; i < l1.playerArray.length; i++){
        who_option = who_option + '<option>' + l1.playerArray[i]; + '</option>';
    }
    if(preflop_line_array.includes(l1) == true){
        //アクションの入力がプリフロップの時は、リンプで回ってきた状況で、最後のプレイヤーが選択された場合、自動的にアクションのSELECTボックスを変更するメソッドを仕込んでおく。
        document.getElementById("describe_dialog_who").innerHTML = '<select id="who_select" class="form-select fs-1" onclick="limp_option(this.value,' + l1.line_number + ')">' + who_option + '</select>';
    }else{
        //プリフロップ以外の状況なら、解く考えなくてよい。
        document.getElementById("describe_dialog_who").innerHTML = '<select class="form-select fs-1" id="who_select">' + who_option + '</select>';
    }
    //次に、actionのオプションを設定。
    for(let i = 0;i < l1.actionArray.length; i++){
        action_option = action_option + '<option>' + l1.actionArray[i] + '</option>';
    }
    document.getElementById("describe_dialog_action").innerHTML = '<select class="form-select fs-1" id="action_select" onchange = "raise_or_bet(this.value)">' + action_option + '</select>';
    //ベット額を記入するnumberのテキストボックスを設定
    document.getElementById("describe_dialog_how").innerHTML = '<input class="form-select fs-1" type="number" id = "describe_dialog_input">';
    document.getElementById("describe_dialog_input").disabled = true;
    //単位も付ける
    document.getElementById("describe_dialog_unit").innerHTML = '<p class="fs-1">' + document.getElementById("unit").value + '</p>';
    //ダイアログのボタンを設定
    //記述内容の決定をすると同時に、モーダルを閉じる
    if(l1 == present_line && l2 == next_line){
        //新規行の挿入の場合
        document.getElementById("describe_dialog_button").innerHTML 
                = '<button class="btn btn-danger fs-1"  data-bs-dismiss="modal" onclick="action_register(present_line, next_line, document.getElementById(`who_select`).value, document.getElementById(`action_select`).value, document.getElementById(`describe_dialog_input`).value)">決定</button>' + '<button class="btn btn-secondary fs-1" data-bs-dismiss="modal">戻る</button>';
    }else{
        /*既存の行の変更の場合*/
        temporary_present_line = l1;
        temporary_next_line = l2;
        document.getElementById("describe_dialog_button").innerHTML = '<button class="btn btn-danger fs-1"  data-bs-dismiss="modal" onclick="action_register(temporary_present_line, temporary_next_line, document.getElementById(`who_select`).value, document.getElementById(`action_select`).value, document.getElementById(`describe_dialog_input`).value)">決定</button>' + '<button  data-bs-dismiss="modal" class="btn btn-secondary fs-1">戻る</button>';
    }
    //モーダルを開く
    let myModal = new bootstrap.Modal(document.getElementById("describe_dialog"), {
        keyboard: false
    })
    myModal.show();
}    
/*アクションがベット、レイズの時のみ額の入力を可能にする。*/
//ミニマムレイズの設定
/*アクションがベットとレイズ以外の場合、額を０にする*/
function raise_or_bet(value){
    if(value == "raise" || value == "bet"){
        document.getElementById("describe_dialog_input").disabled = false;
        document.getElementById("describe_dialog_input").value = 2*(Number(document.getElementById("big_blind").value));
    }else{
        document.getElementById("describe_dialog_input").disabled = true;
        document.getElementById("describe_dialog_input").value = 0;
    }
} 
    
/*リンプ時のオプションを設定*/
//リンプ時は特殊なoptionを用意する。
function limp_option(value, num){
    //選択肢が最後にアクションをするプレイヤーかどうかをまず確認。
    let limp_flg = false;
    if(value == last_player){
        limp_flg = true;
    }
    //指定された行を特定
    let line;
    preflop_line_array.forEach(value => {
        if(value.line_number == num){
            line = value;
        }
    })
    
    //プリフロップのl1までの行のアクションを確認し、レイズが入っていれば、問題なし
    for(let i = 0; i < num; i++){
        if(preflop_line_array[i].actionSelect == "raise" || preflop_line_array[i].actionSelect == "All-in"){
            limp_flg = false;
        }
    }
    let action_option;
    if(limp_flg == true){
        //リンプの条件が満たされていた場合、アクション選択肢配列を自動的に変更する。
        line.actionArray = action_array01;
        for(let i = 0;i < line.actionArray.length; i++){
            action_option = action_option + '<option>' +  line.actionArray[i] + '</option>';
        }
        document.getElementById("describe_dialog_action").innerHTML = '<select class="form-select fs-1" id="action_select" onchange = "raise_or_bet(this.value)">' + action_option + '</select>';
    }else{
        //リンプの条件が満たされていなかった場合、あるいは満たされていた条件が解除された場合、アクション選択肢配列を元のものに戻す。
        line.actionArray = action_array02;
        for(let i = 0;i < line.actionArray.length; i++){
            action_option = action_option + '<option>' + line.actionArray[i] + '</option>';
        }
        document.getElementById("describe_dialog_action").innerHTML = '<select class="form-select fs-1" id="action_select" onchange = "raise_or_bet(this.value)">' + action_option + '</select>';
    }
}   
/*やり直しボタンの設定*/
function AllDlete(){
    for(let i = 0; i < 30; i++){
        //全ての行を初期化する操作
        preflop_line_array[i].elem.innerHTML = '';
        flop_line_array[i].elem.innerHTML = '';
        turn_line_array[i].elem.innerHTML = '';
        river_line_array[i].elem.innerHTML = '';
        //全ての行のオブジェクトを初期化する。
        preflop_line_array[i].reset();
        flop_line_array[i].reset();
        turn_line_array[i].reset();
        river_line_array[i].reset();
    }
    //主要データを再初期化
    present_line = preflop_L01;
    next_line = preflop_L02;
    preflop_L01.playerArray = ["SB"];
    preflop_L01.waitPlayer = ["BB"];
    last_player = "BB";
    preflop_L01.actionArray = action_array02;    
    document.getElementById("pf_describe_button").innerHTML = '<button class="btn btn-warning fs-1" onclick="show_describe_dialog(present_line, next_line)">プリフロップのアクションを入力する</botton>';
    document.getElementById("pf_goto_next").innerHTML = '<button class="btn btn-outline-success fs-1" onclick="go_to_next(`flop`)">フロップへ移動する</button>';
    document.getElementById("f_describe_button").innerHTML = "";
    document.getElementById("f_goto_next").innerHTML = "";
    document.getElementById("t_describe_button").innerHTML = "";
    document.getElementById("t_goto_next").innerHTML = "";
    document.getElementById("r_describe_button").innerHTML = "";
    document.getElementById("r_show_down").innerHTML = "";
    document.getElementById("pot_flop_start").innerHTML = "";
    document.getElementById("pot_turn_start").innerHTML = "";
    document.getElementById("pot_river_start").innerHTML = "";
}     
/*ある一つの行を指定し、その行も含めて下の行の内容を全て削除する、という場合。*/
function partial_Delete(line){
    if(preflop_line_array.includes(line) == true){
        //行がプリフロップにある場合
        //フロップ以下の行を全て初期化
        for(let i = 0; i < 30; i++){
            flop_line_array[i].elem.innerHTML = '';
            turn_line_array[i].elem.innerHTML = '';
            river_line_array[i].elem.innerHTML = '';
            flop_line_array[i].reset();
            turn_line_array[i].reset();
            river_line_array[i].reset();
        }
        //プリフロップを処理
        for(let i = line.line_number; i < preflop_line_array.length; i++){
            preflop_line_array[i].elem.innerHTML = '';
            preflop_line_array[i].reset();
        }
        //他の状態を巻き戻す。
        document.getElementById("pf_describe_button").innerHTML = preflop_describe_button;
        document.getElementById("pf_goto_next").innerHTML = pf_next_button;
        document.getElementById("f_describe_button").innerHTML = "";
        document.getElementById("f_goto_next").innerHTML = "";
        document.getElementById("t_describe_button").innerHTML = "";
        document.getElementById("t_goto_next").innerHTML = "";
        document.getElementById("r_describe_button").innerHTML = "";
        document.getElementById("r_show_down").innerHTML = "";
        document.getElementById("pot_flop_start").innerHTML = "";
        document.getElementById("pot_turn_start").innerHTML = "";
        document.getElementById("pot_river_start").innerHTML = "";
    }else if(flop_line_array.includes(line) == true){
        //行がフロップにある場合
        //ターン以下の行を全て初期化
        for(let i = 0; i < 30; i++){
            turn_line_array[i].elem.innerHTML = '';
            river_line_array[i].elem.innerHTML = '';
            turn_line_array[i].reset();
            river_line_array[i].reset();
        }
        //フロップを処理
        for(let i = line.line_number; i < flop_line_array.length; i++){
            flop_line_array[i].elem.innerHTML = '';
            flop_line_array[i].reset();
        }
        document.getElementById("f_describe_button").innerHTML = flop_describe_button;
        document.getElementById("f_goto_next").innerHTML = f_next_button;
        document.getElementById("t_describe_button").innerHTML = "";
        document.getElementById("t_goto_next").innerHTML = "";
        document.getElementById("r_describe_button").innerHTML = "";
        document.getElementById("r_show_down").innerHTML = "";
        document.getElementById("pot_turn_start").innerHTML = "";
        document.getElementById("pot_river_start").innerHTML = "";
    }else if(turn_line_array.includes(line)){
        //行がターンにある場合
        //リバーの行を全て初期化
        for(let i = 0; i < 30; i++){
            river_line_array[i].elem.innerHTML = '';
            river_line_array[i].reset();
        }
        //ターンを処理
        for(let i = line.line_number; i < turn_line_array.length; i++){
            turn_line_array[i].elem.innerHTML = '';
            turn_line_array[i].reset();
        }
        document.getElementById("t_describe_button").innerHTML = turn_describe_button;
        document.getElementById("t_goto_next").innerHTML = t_next_button;
        document.getElementById("r_describe_button").innerHTML = "";
        document.getElementById("r_show_down").innerHTML = "";
        document.getElementById("pot_river_start").innerHTML = "";
    }else if(river_line_array.includes(line)){
        //行がリバーにある場合
        for(let i = line.line_number; i < river_line_array.length; i++){
            river_line_array[i].elem.innerHTML = '';
            river_line_array[i].reset();
        }
    }
}    
    
    
/*入力を決定する操作*/
/*l1に文章を入力したい行を、l2にその次の行を代入したい*/
function action_register(l1, l2, who_select, action_select, how_much){
    //ストリートを確認し、line-arrayを決定する
    let street;
    let line_array;
    if(preflop_line_array.includes(l1) == true){
        street = "preflop";
        line_array = preflop_line_array;
    }else if(flop_line_array.includes(l1) == true){
        street = "flop";
        line_array = flop_line_array;
    }else if(turn_line_array.includes(l1) == true){
        street = "turn";
        line_array = turn_line_array;
    }else{
        street = "river";
        line_array = river_line_array;
    }

    //表示する文章を制作
    //アクションする人間が入力されていない場合、ここでダイアログを終了
    if(who_select == ""){
        return;
    }
    let sentence;
    short_allin_flg = false;

    //まずはl1の直前の位置までread_throughを起動し、プレイヤーのスタックを確認する。
    //各ストリートの初めの状態が指定されていた場合、初期状態のメソッドを使う。
    if(l1.line_number == 1){
        starting_situation(street);
    }else{
        read_through(previous_line(l1));
    }
    //アクションがオールインの時はプレイヤーのスタック量と同じ量をベット額とする。
    if(action_select == "All-in"){
        All_player.forEach(function(value){
            if(value.position == who_select){
                how_much = value.stack + value.paychip;
            }
        })
    }
    //アクションがレイズで、かつレイズ額がミニマムレイズに届かない場合、レイズ額をミニマムレイズに変更する
    if(action_select == "raise" && how_much < minraise){
        how_much = minraise;
    }
    //アクションがベットで、かつベット額がミニマムベットよりも低い場合、ベット額をミニマムベットに変更する
    if(action_select == "bet" && how_much < minbet){
        how_much = minbet;
    }
    //オールインの設定。レイズ額やコール額がプレイヤーのスタックを超えていた場合、アクションをオールインに変更する
    //プレイヤーのスタックとレイズ額を確認して、それに応じてアクションを変更する。
    //最初に、レイズオールインの時のケース
    if(action_select == "raise" || action_select == "bet"){
        All_player.forEach(function(value){
            if(value.position == who_select && how_much >= value.stack + value.paychip){
                action_select = "All-in";
                how_much = value.stack + value.paychip;
            }
        })
    }
    //次に、ショートオールインの時のケース
    if(action_select == "call" || action_select == "All-in"){
        All_player.forEach(function(value){
            if(value.position == who_select && bet_amount >= value.stack + value.paychip){
                action_select = "All-in";
                short_allin_flg = true;
                how_much = value.stack + value.paychip;
            }
        })
    }
    //アクションがベットとレイズ以外の場合、額を表示しない
    if(action_select == "raise" || action_select == "bet"){
        sentence = who_select + " " + action_select + " " + how_much +  document.getElementById("unit").value;
    }else{
        sentence = who_select + " " + action_select;
    }
    //最初の行の入力が終わった時、やり直しボタンの種類と配置を決定する
    if(l1 == preflop_L01){
        document.getElementById("AllDelete").innerHTML = AllDelete_button;
    }

    //文章表示前に、l1とl2を確認。新規行挿入でなく、行の内容変更なのであれば、l1よりも下の行を全て消去する
    if(l1 != present_line && l2 != next_line){
        partial_Delete(l1);
    }

    //アクションを飛ばされたプレイヤーの処理。プリフロップの場合、またはプリフロップ以外でも事前にベットをしているプレイヤーがいる場合はフォールドする
    let jumped_sentence;
    let player_index = l1.playerArray.indexOf(who_select);
    let bet_player = false;
    for(let i = 0; i <= line_array.indexOf(l1); i++){
        if(line_array[i].actionSelect == "bet"){
            bet_player = true;
        }
    }
    if(street == "preflop" || bet_player == true){
        for(let i = 0; i < player_index; i++){
            jumped_sentence = l1.playerArray[0] + " " + 'fold';
            //l1の行に文を表示
            l1.elem.innerHTML = jumped_sentence;
            //l1の行のオブジェクトに値を格納
            l1.whoSelect = l1.playerArray[0];
            l1.actionSelect = "fold";
            //l2の行のオブジェクトに選択肢配列を格納
            l2.waitPlayer = JSON.parse(JSON.stringify(l1.waitPlayer));
            l2.playerArray = JSON.parse(JSON.stringify(l1.playerArray));
            l2.allinPlayer = JSON.parse(JSON.stringify(l1.playerArray));
            l2.playerArray.shift();
            l2.actionArray = l1.actionArray;
            //もしも、l2が30行目のオブジェクトなら、ここで処理を終了させる
            if(line_array.indexOf(l2) == 30){
                l2.elem.innerHTML = "これ以上は入力できません";
                return;
            }
            //l1の行とl2の行を更新
            l1 = line_array[l1.line_number];
            l2 = line_array[l2.line_number];
        }
    }else{
        //それ以外の場合、チェックにする。
        for(let i = 0; i < player_index; i++){
            jumped_sentence = l1.playerArray[0] + " " + 'check';
            //l1の行に文を表示
            l1.elem.innerHTML = jumped_sentence;
            //l1の行のオブジェクトに値を格納
            l1.whoSelect = l1.playerArray[0];
            l1.actionSelect = "check";
            //l2の行のオブジェクトに選択肢配列を格納
            l2.waitPlayer = JSON.parse(JSON.stringify(l1.waitPlayer));
            l2.waitPlayer.push(l1.playerArray[0]);
            l2.playerArray = JSON.parse(JSON.stringify(l1.playerArray));
            l2.playerArray.shift();
            l2.actionArray = l1.actionArray;
            l2.allinPlayer = JSON.parse(JSON.stringify(l1.allinPlayer));
            //もしも、l2が30行目のオブジェクトなら、ここで処理を終了させる
            if(l2.line_number == 30){
                l2.elem.innerHTML = "これ以上は入力できません";
                return;
            }
            //l1の行とl2の行を更新
            l1 = line_array[l1.line_number];
            l2 = line_array[l2.line_number];
        }
    }
    //l1の行に文章を表示、次の行にボタンを表示させる
    l1.elem.innerHTML = sentence;
    //l1の行のオブジェクトに値を格納
    l1.whoSelect = who_select;
    l1.actionSelect = action_select;
    //次の行のオブジェクトに選択肢配列を格納
    if(action_select == "fold"){
        /*foldであれば、先頭の要素を削除する*/
        l2.playerArray =  JSON.parse(JSON.stringify(l1.playerArray));
        l2.playerArray.shift();
        l2.allinPlayer = JSON.parse(JSON.stringify(l1.allinPlayer));
        l2.actionArray = l1.actionArray;
        l2.waitPlayer = JSON.parse(JSON.stringify(l1.waitPlayer));
    }else if(action_select == "call" || action_select == "check"){
        //チェックまたはコールであれば、アクション待ちプレイヤーと選択肢配列を更新する
        l2.waitPlayer = JSON.parse(JSON.stringify(l1.waitPlayer));
        l2.waitPlayer.push(who_select);
        l2.playerArray = JSON.parse(JSON.stringify(l1.playerArray));
        l2.playerArray.shift();
        l2.actionArray = l1.actionArray;
        l2.allinPlayer = JSON.parse(JSON.stringify(l1.allinPlayer));
        //プリフロップで、かつ誰もレイズしていなかった場合、BB及びストラドラーはオプションの権利がある。
        let option_playing = true;
        //2人以上のプレイヤーがリンプしてきても影響を及ぼさないようにする
        let first_limp = true;
        for(let i = 0; i < l1.line_number-1; i++){
            if(line_array[i].actionSelect == "raise" || line_array[i].actionSelect == "All-in"){
                option_playing = false;
            }
            if(line_array[i].actionSelect == "call"){
                first_limp = false;
            }
        }
        if(option_playing == true && first_limp == true && street == "preflop"){
            //オプションの条件が満たされたとき、プレイヤー選択肢配列にBBまたはストラドラーを入れる
            l2.playerArray = l1.playerArray.concat(l1.waitPlayer);
            l2.playerArray.shift();
            l2.waitPlayer.shift();
        }
    }else if(action_select == "All-in"){
        //アクションしたプレイヤーをl2のオールインプレイヤーの配列に格納する
        l2.allinPlayer = JSON.parse(JSON.stringify(l1.allinPlayer));
        l2.allinPlayer.push(who_select)
        //ショートオールインの時はコールと同じ扱い。レイズオールインの時はレイズと同じ扱い
        if(short_allin_flg == true){
            l2.playerArray = JSON.parse(JSON.stringify(l1.playerArray));
            l2.playerArray.shift();
            l2.actionArray = l1.actionArray;
            l2.waitPlayer = JSON.parse(JSON.stringify(l1.waitPlayer));
        }else{
            l2.playerArray = l1.playerArray.concat(l1.waitPlayer);            
            l2.playerArray.shift();
            l2.actionArray = action_array02;
        }
        l1.howMuch = how_much;
    }else{
        //ベットまたはレイズであれば、アクション待ちプレイヤーと選択肢配列を更新する
        l2.playerArray = l1.playerArray.concat(l1.waitPlayer);
        l2.playerArray.shift();
        l2.allinPlayer = JSON.parse(JSON.stringify(l1.allinPlayer));
        l1.howMuch = how_much;
        l2.waitPlayer = [who_select];
        //アクション配列は2で固定
        l2.actionArray = action_array02;
    }
    if(l1.line_number == 29){
        l2.elem.innerHTML = "これ以上は入力できません";
        return;
    }
    //現在の行と次の行を更新
    console.log("present_line:" + present_line.name);
    console.log("next_line:" + next_line.name);
    present_line = line_array[l1.line_number];
    next_line = line_array[l2.line_number];
    console.log("present_line:" + present_line.name);
    console.log("next_line:" + next_line.name);
}
function compare_playerarray(val1, val2){
    let num1;
    let num2;
    switch(val1){
        case "SB":
            num1 = 2;
            break;
        case "BB":
            num1 = 1;
            break;
    }
    switch(val2){
        case "SB":
            num2 = 2;
            break;
        case "BB":
            num2 = 1;
            break;
    }
    if(num1 < num2){
        return -1;
    }else if(num1 > num2){
        return 1;
    }else{
        return 0;
    }
}
    
function go_to_next(nextStreet){
    if(present_line.playerArray[0] != undefined){
        street_finish = window.confirm("まだアクションの残っているプレイヤーがいますが、よろしいですか？");
    }else{
        street_finish = true;
    }
    if(street_finish == true){
        switch(nextStreet){
            case 'flop':
                //一番最後の行オブジェクトを次のストリートの最初の行オブジェクトに引き継がせる
                if(present_line.waitPlayer.length > 1){
                    flop_L01.playerArray = JSON.parse(JSON.stringify(present_line.waitPlayer));
                }else{
                    flop_L01.playerArray = [];
                }
                flop_L01.playerArray.sort(compare_playerarray);
                flop_L01.actionArray = action_array03;
                flop_L01.allinPlayer = JSON.parse(JSON.stringify(present_line.allinPlayer));
                document.getElementById("pf_describe_button").innerHTML = "";
                document.getElementById("pf_goto_next").innerHTML = "";
                document.getElementById("f_describe_button").innerHTML = flop_describe_button;
                document.getElementById("f_goto_next").innerHTML = f_next_button;
                document.getElementById("flop").click();
                read_through(present_line);
                document.getElementById("pot_flop_start").innerHTML = "pot:" + pot + document.getElementById("unit").value;
                present_line = flop_L01;
                next_line = flop_L02;
                break;
            case "turn":
                if(present_line.waitPlayer.length > 1){
                    turn_L01.playerArray = JSON.parse(JSON.stringify(present_line.waitPlayer));
                }else{
                    turn_L01.playerArray = [];
                }
                turn_L01.playerArray.sort(compare_playerarray);
                turn_L01.actionArray = action_array03;
                turn_L01.allinPlayer = JSON.parse(JSON.stringify(present_line.allinPlayer));
                present_line = turn_L01;
                next_line = turn_L02;
                document.getElementById("f_describe_button").innerHTML = "";
                document.getElementById("f_goto_next").innerHTML = "";
                document.getElementById("t_describe_button").innerHTML = turn_describe_button;
                document.getElementById("t_goto_next").innerHTML = t_next_button;
                document.getElementById("turn").click();
                read_through(present_line);
                document.getElementById("pot_turn_start").innerHTML = "pot:" + pot + document.getElementById("unit").value;
                break;
            case "river":
                if(present_line.waitPlayer.length > 1){
                    river_L01.playerArray = JSON.parse(JSON.stringify(present_line.waitPlayer));
                }else{
                    river_L01.playerArray = [];
                }
                river_L01.playerArray.sort(compare_playerarray);
                river_L01.actionArray = action_array03;
                river_L01.allinPlayer = JSON.parse(JSON.stringify(present_line.allinPlayer));
                present_line = river_L01;
                next_line = river_L02;
                document.getElementById("t_describe_button").innerHTML = "";
                document.getElementById("t_goto_next").innerHTML = "";                
                document.getElementById("r_describe_button").innerHTML = river_describe_button;
                document.getElementById("r_show_down").innerHTML = show_result_button;
                document.getElementById("river").click();
                read_through(present_line);
                document.getElementById("pot_river_start").innerHTML = "pot:" + pot + document.getElementById("unit").value;
                break;
            default:
                window.confirm("error");
        }
    }
}    
//プレイヤーオブジェクトと役オブジェクトを生成し、プレイヤーの状態を保存。さらに、勝敗の判定まで行えるようにする。
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
const SB = new player("SB");const BB = new player("BB");
let All_player = [SB, BB];
//テーブルの初期状態を記録。
let pot;
let minbet;
let minraise;
let bet_amount;
//画像データの表示と非表示を切り替えるボタン
function canvas_open(){
    document.getElementById("canvas_wrapper").style.display = "block";
}
function canvas_close(){
    document.getElementById("canvas_wrapper").style.display = "none";
}
function bet(player, chip){
    player.stack = (player.stack * 1000 - (chip * 1000 - player.paychip * 1000))/1000;
    pot = (pot * 1000 + (chip * 1000 - player.paychip * 1000))/1000;
    player.paychip = chip;
}
function initialize(){
    //各プレイヤーのスタックを記録
    SB.stack = document.getElementById("SB_stack").value;
    BB.stack = document.getElementById("BB_stack").value;
    //各プレイヤーに名前が定義されていればnameを更新
    SB.name = document.getElementById("SB_person").value;
    BB.name = document.getElementById("BB_person").value;
    //各プレイヤーのpaychipを初期化
    All_player.forEach(function(value){
        value.paychip = 0;
    })
    //bet_amountを初期化
    minbet = document.getElementById("big_blind").value;
    bet_amount = minbet;
    //potの初期化
    pot = 0;
    //sb,bbの支払い
    bet(SB, document.getElementById("small_blind").value);
    bet(BB, document.getElementById("big_blind").value);
    minraise = bet_amount * 2;
    //アンティの支払い。支払う人の種類によって場合を分ける
    if(document.getElementById("ante_who").value == "BigBlind"){
        BB.stack -= document.getElementById("ante_amount").value;
        pot += Number(document.getElementById("ante_amount").value);
    }else if(document.getElementById("ante_who").value == "AllPlayer"){
        All_player.forEach(function(value){
            value.stack -= document.getElementById("ante_amount").value;
        })
        pot += document.getElementById("ante_amount").value * 2;
    }
    //最初は全てのプレイヤーを待機状態に設定する
    All_player.forEach(function(value){
        value.action = "wait";
    })
    //プレイヤーのハンドの設定。
    SB.card1 = players_card[0];
    SB.card2 = players_card[1]; 
    BB.card1 = players_card[2];
    BB.card2 = players_card[3];
}

//行オブジェクトを読み取り、プレイヤーオブジェクトに反映させるメソッド
function read(line){
    All_player.forEach(function(value){
        if(value.position == line.whoSelect){
            if(line.actionSelect != ""){
                value.action = line.actionSelect;
            }else{
                value.action = "wait";
            }
            switch(value.action){
                case "call":
                    bet(value, bet_amount);
                    break;
                case "raise":
                    let bet_amount_past = bet_amount;
                    bet_amount = line.howMuch;
                    bet(value, bet_amount);
                    minraise = (bet_amount * 1000 * 2 - bet_amount_past * 1000)/1000;
                    break;
                case "bet":
                    bet_amount = line.howMuch;
                    bet(value, bet_amount);
                    minraise = bet_amount * 2;
                    break;
                case "All-in":
                    //All-inの場合のベット額はhowMuch
                    //ただし、ショートオールインの時はbet_amountに影響を及ぼさないようにする
                    if(line.howMuch >= bet_amount){
                        let bet_amount_past = bet_amount;
                        bet_amount = line.howMuch;
                        bet(value, bet_amount);
                        minraise = (bet_amount * 1000 * 2 - bet_amount_past * 1000)/1000;
                    }else{
                        bet(value, line.howMuch)
                    }
                    break;
            }
        }
    })
}
//指定されたストリートにおける、初期状態をプレイヤーに反映させるメソッド
function starting_situation(street){
    //プリフロップの場合は、特に何もしなくていい
    initialize();
    if(street == "flop"){
        //フロップの場合
        let count = 0;
        while(preflop_line_array[count].innerHTML != "" && count != 29){
            read(preflop_line_array[count]);
            count++;
        }
        All_player.forEach(value => {
            if(value.action != "fold" && value.action != "All-in"){
                value.action = "wait";
            }
            value.paychip = 0;
        })
        minraise = 0;
        bet_amount = 0;
    }else if(street == "turn"){
        let count = 0;
        while(preflop_line_array[count].innerHTML != "" && count != 29){
            read(preflop_line_array[count]);
            count++;
        }
        All_player.forEach(value => {
            if(value.action != "fold" && value.action != "All-in"){
                value.action = "wait";
            }
            value.paychip = 0;
        })
        count = 0;
        minraise = 0;
        bet_amount = 0;
        while(flop_line_array[count].innerHTML != "" && count != 29){
            read(flop_line_array[count]);
            count++;
        }
        All_player.forEach(value => {
            if(value.action != "fold" && value.action != "All-in"){
                value.action = "wait";
            }
            value.paychip = 0;
        })
        minraise = 0;
        bet_amount = 0;
    }else if(street == "river"){
        let count = 0;
        while(preflop_line_array[count].innerHTML != "" && count != 29){
            read(preflop_line_array[count]);
            count++;
        }
        All_player.forEach(value => {
            if(value.action != "fold" && value.action != "All-in"){
                value.action = "wait";
            }
            value.paychip = 0;
        })
        count = 0;
        minraise = 0;
        bet_amount = 0;
        while(flop_line_array[count].innerHTML != "" && count != 29){
            read(flop_line_array[count]);
            count++;
        }
        All_player.forEach(value => {
            if(value.action != "fold" && value.action != "All-in"){
                value.action = "wait";
            }
            value.paychip = 0;
        })
        count = 0;
        minraise = 0;
        bet_amount = 0;
        while(turn_line_array[count].innerHTML != "" && count != 29){
            read(turn_line_array[count]);
            count++;
        }
        All_player.forEach(value => {
            if(value.action != "fold" && value.action != "All-in"){
                value.action = "wait";
            }
            value.paychip = 0;
        })
        minraise = 0;
        bet_amount = 0;
    }
}
//とある行を指定し、一番最初の行までさかのぼり、指定した行までを読み取るメソッド
function read_through(line){
    let street;
    let index_number;
    if(preflop_line_array.includes(line) == true){
        street = "preflop";
        index_number = preflop_line_array.indexOf(line);
    }else if(flop_line_array.includes(line) == true){
        street = "flop";
        index_number = flop_line_array.indexOf(line);
    }else if(turn_line_array.includes(line) == true){
        street = "turn";
        index_number = turn_line_array.indexOf(line);
    }else if(river_line_array.includes(line) == true){
        street = "river";
        index_number = river_line_array.indexOf(line);
    }
    //playerの状態を初期化
    if(street == "preflop"){
        initialize();
        for(let i = 0; i <= index_number; i++){
            read(preflop_line_array[i]);
        }
    }else if(street == "flop"){
        starting_situation(street);
        for(let i = 0; i <= index_number; i++){
            read(flop_line_array[i]);
        }
    }else if(street == "turn"){
        starting_situation(street);
        for(let i = 0; i <= index_number; i++){
            read(turn_line_array[i]);
        }
    }else if(street == "river"){
        starting_situation(street);
        for(let i = 0; i <= index_number; i++){
            read(river_line_array[i]);
        }
    }
}

//canvas関連のメソッド
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
    ctx.arc(430, 283, 8, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.font = "12px serif";
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.textAlign = "center";
    ctx.fillText("D", 430, 287);
}
//potの描画
function draw_pot(ctx, pot){
    ctx.font = "bold 20px serif"
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.textAlign = "center";
    ctx.fillText("pot: " + pot, 400, 170);
}
    
    //ボードのカードの描画
function draw_board(ctx, num){
    for(let i = 0; i < num; i++){
        switch(i){
            case 0:
                ctx.drawImage(document.getElementById("board_card1"), 342, 200, 25, 38);
                break;
            case 1:
                ctx.drawImage(document.getElementById("board_card2"), 369, 200, 25, 38);
                break;
            case 2:
                ctx.drawImage(document.getElementById("board_card3"), 396, 200, 25, 38);
                break;
            case 3: 
                ctx.drawImage(document.getElementById("board_card4"), 423, 200, 25, 38);
                break;
            case 4:
                ctx.drawImage(document.getElementById("board_card5"), 450, 200, 25, 38);
                break;
        }
    }
}
    
    //playerの描画
function draw_player(ctx, player){
    let player_color;
    let chip_color;
    let position = player.position;
    let name;
    if(player.name == ""){
        name = player.position;
    }else{
        name = player.name;
    }
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
    
function draw_sign(ctx, position, action){
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
    
function draw_card(ctx, player){
    let card1;
    let card2;
    let card1_x;
    let card1_y;
    let card2_x;
    let card2_y;
    switch(player.position){
        case "SB": 
            card1 = document.getElementById("SB_card1");
            card2 = document.getElementById("SB_card2");
            card1_x = 342;
            card1_y = 312;
            card2_x = 315;
            card2_y = 312;
            break;
        case "BB": 
            card1 = document.getElementById("BB_card1");
            card2 = document.getElementById("BB_card2");
            card1_x = 343;
            card1_y = 52;
            card2_x = 315;
            card2_y = 52;
            break;
    }
    ctx.drawImage(card1, card1_x, card1_y, 25, 38);
    ctx.drawImage(card2, card2_x, card2_y, 25, 38);
}
    
//指定された行オブジェクトまでの各プレイヤーの状態をcanvas上に描画するメソッド
function draw_situation(canvas_name, playline){
    let canvas = document.getElementById(canvas_name);
    let ctx = canvas.getContext("2d");
    //先にポーカーテーブルを書いておく
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pokertable(ctx);
    //各プレイヤーの状態をたどっておく。
    read_through(playline);
    //プレイヤーを描画。
    All_player.forEach(value => {
        draw_player(ctx, value);
    })
    All_player.forEach(function(value){
        draw_card(ctx, value);
    })
    //アクションを表示するサインを描画する
    draw_sign(ctx, playline.whoSelect, playline.actionSelect)
    //ボードのカードの描画
    if(flop_line_array.includes(playline)){
        draw_board(ctx, 3);
    }else if(turn_line_array.includes(playline)){
        draw_board(ctx, 4);
    }else if(river_line_array.includes(playline)){
        draw_board(ctx, 5);
    }
    draw_pot(ctx, pot);
}

//各ストリートの初期状態を描画するメソッド
function draw_starting(canvas_name, street){
    let canvas = document.getElementById(canvas_name);
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pokertable(ctx);
    if(street == "preflop"){
        initialize();
    }else if(street == "flop"){
        starting_situation(street);
        draw_board(ctx, 3);
    }else if(street == "turn"){
        starting_situation(street);
        draw_board(ctx, 4);
    }else if(street == "river"){
        starting_situation(street);
        draw_board(ctx, 5);
    }
    All_player.forEach(value => {
        draw_player(ctx, value);
    })
    All_player.forEach(value => {
        draw_card(ctx, value);
    })
    draw_pot(ctx, pot);
}    
//players_action,player_card,board_cardの内容に変化があった場合、自動的にcanvas内の描画を更新する
//players_hand/board
const observe_target01 = document.getElementById("players_action");
const observe_target02 = document.getElementById("players_hand");
const observe_target03 = document.getElementById("board");
//observerのオプション
const config = {attributes:true, childList:true, subtree:true, CharacterData:true};
//オブザーバインスタンスの作成
const observer = new MutationObserver((mutations) =>{
    mutations.forEach(() =>{
        draw_situation("canvas", previous_line(present_line));
    })
})
//対象ノードとオブザーバの設定を渡す
observer.observe(observe_target01, config);
observer.observe(observe_target02, config);
observer.observe(observe_target03, config);

//setting_wrapper内の変化に対してEventlistnerを付与する
//small_blind/big_blind/ante_who/ante_amount/stradle
//中身が変わったら、アクションの記述とcanvas内の描画をリセットする
document.getElementById("small_blind").addEventListener("change", function(){
    AllDlete();
    draw_situation("canvas", previous_line(present_line));
})
document.getElementById("big_blind").addEventListener("change", function(){
    AllDlete();
    draw_situation("canvas", previous_line(present_line));
})
document.getElementById("effective_stack").addEventListener("change", function(){
    AllDlete();
    draw_situation("canvas", previous_line(present_line));
})
document.getElementById("ante_who").addEventListener("change", function(){
    AllDlete();
    draw_situation("canvas", previous_line(present_line));
})
document.getElementById("ante_amount").addEventListener("change", function(){
    AllDlete();
    draw_situation("canvas", previous_line(present_line));
})
//player内の変化に対してEventlistnerを付与する。
document.getElementsByName("personal_name").forEach(function(value){
    value.addEventListener("change", function(){
        draw_situation("canvas", previous_line(present_line));
    })
})
document.getElementsByName("player_stack").forEach(function(value){
    value.addEventListener("change", function(){
        AllDlete();
        draw_situation("canvas", previous_line(present_line));
    })
})
    
//ポーカーの役に関するメソッド
//全ての役のクラスを定義する
class dummyPokerHand {
    constructor(){
        this.name = "登録されていないカードがあります"
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
function PlayerHand(player){
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
//ショーダウン時のメソッドを定義
let survivers = [];
function show_down(){
    //一番最後の行までのゲームの流れをたどっておく
    read_through(present_line);
    //フォールドせずに残っているプレイヤーたちをsurviversに格納
    survivers = [];
    All_player.forEach(value => {
        if(value.action != "fold"){
            survivers.push(value);
        }
    })
    //プレイヤー全員の役を確定させる
    survivers.forEach(value => {
        value.hand = PlayerHand(value);
    })
    
    //プレイヤーの配列をハンドの強さによってソートする
    survivers.sort(compare_player);
    
    //もっとも強いハンドを持つプレイヤーたちを格納する
    let winners = [];
    let MostStrongPlayer = survivers[survivers.length - 1];
    survivers.forEach(function(value){
        if(compare_player(value, MostStrongPlayer) == 0){
            winners.push(value);
        }
    })
    
    //ショーダウン結果の文章を作成。
    let players = " ";
    let array = [];
    for(let i = 0; i < winners.length; i++){
        players += (winners[i].position + " ");
        array.push(winners[i].position);
    }
    //勝者を集めた配列を更新しておく。
    winner_array = array;
}
//リザルト文を表示するメソッド
function show_result(){
    show_down();
    //surviversの要素数が一つのときは、つまり途中で他のプレイヤーたちが全て脱落してしまったとき。
    //その時はwinとだけ表示。それ以外の時は勝者の役の名前まで含めて表示する。
    let sentence;
    let players = " ";
    for(p of winner_array){
        players += p + " ";
    }
    if(survivers.length == 1 || survivers[survivers.length - 1].hand.strength == -1){
        sentence = players + "win";
    }else{
        sentence = players + "win by " + survivers[survivers.length - 1].hand.name;
    }
    //文章をリザルト部分に表示
    document.getElementById("show_down_result").innerHTML = sentence;
}    
//勝利プレイヤーの名前を集めた配列を設定
let winner_array = [];
//ショーダウンで勝利したプレイヤーにWinを表示するメソッド
function draw_win(ctx, name){
    let text_color = 'rgb(255, 255, 0)';
    let insite_color = 'rgb(255, 255, 100)'

    ctx.font = '20px serif';
    switch(name){
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
//ショーダウンでの勝利をキャンバスに表示する。
function draw_winner(canvas_name, playline){
    ctx = document.getElementById(canvas_name).getContext('2d');
    //指定したラインの直前までアクションをたどる
    read_through(playline);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pokertable(ctx);
    //一番初めに、勝利演出だけ描写しておく
    winner_array.forEach(value => {
        draw_win(ctx, value);
    })
    if(flop_line_array.includes(playline) == true){
        //指定されたlineがフロップの場合
        //フロップまでのカードを表示
        draw_board(ctx, 3);
    }
    else if(turn_line_array.includes(playline) == true){
        //指定されたlineがターンの場合。
        //ターンまでのカードを表示
        draw_board(ctx, 4);		
    }else if(river_line_array.includes(playline) == true){
        //指定されたlineがリバーの場合
        //リバーまでのカードを表示
        draw_board(ctx, 5);		
    }
    All_player.forEach(function(value){
        draw_player(ctx, value);
    })
    All_player.forEach(function(value){
        draw_card(ctx, value);
    })
    draw_pot(ctx, pot);
}
    
//canvas上の画像を動画に変換してダウンロードの為のurlを生成するメソッド
let recorder;
let recorder_on = false;
function frame_start(){
    //canvasを取得
    let canvas = document.getElementById("record_canvas");
    let ctx = canvas.getContext('2d');
    //canvasからストリームを取得
    let stream = canvas.captureStream();
    canvas.style.display = "block";
    //ストリームからMediaRecorderを生成
    recorder = new MediaRecorder(stream, {mimeType:'video/webm;codecs=vp9'});
    //ダウンロード用のリンクを生成する文章を準備
    let link_text = document.getElementById("link_text");
    //クリック時にリンクを生成中だという表示をおこなう
    link_text.innerHTML = "ダウンロードリンクを準備中...";
    //録画終了時に動画ファイルのダウンロードリンクを生成する処理
    recorder.ondataavailable = function(e) {
        let videoBlob = new Blob([e.data], { type: e.data.type });
        blobUrl = window.URL.createObjectURL(videoBlob);
        link_text.innerHTML = '<a href="#" id="downloadlink">ダウンロード</a>';
        let anchor = document.getElementById('downloadlink');
        anchor.download = 'poker-story.mp4';
        anchor.href = blobUrl;
        canvas.style.display = "none";
    }

    //録画開始
    recorder.start();
    //フレーム描画開始
    video_draw("record_canvas", true)
}
//canvas内で動画を再生するためのメソッド
function video_draw(canvas_name, onoff){
    let street;
    let pf_flg = false;
    let f_flg = false;
    let t_flg = false;
    let r_flg = false; 
    recorder_on = onoff;
    
    //ボードのカードがどこまで開いているかを確認。
    //それによって、どんなふうにメソッドを回すのかが決まる。
    if(board_array[0] != dummy && board_array[1] != dummy && board_array[2] != dummy && board_array[3] != dummy && board_array[4] != dummy){
        pf_flg = true;
        f_flg = true;
        t_flg = true;
        r_flg = true;
    }else if(board_array[0] != dummy && board_array[1] != dummy && board_array[2] != dummy && board_array[3] != dummy && board_array[4] == dummy){
        pf_flg = true;
        f_flg = true;
        t_flg = true;
    }else if(board_array[0] != dummy && board_array[1] != dummy && board_array[2] != dummy && board_array[3] == dummy && board_array[4] == dummy){
        pf_flg = true;
        f_flg = true;
    }else{
        pf_flg = true;

    }
    let end_flg = false;
    let num = -1;
    video_frame(canvas_name, num, pf_flg, f_flg, t_flg, r_flg, end_flg);
}

function video_frame(canvas_name, num, pf_flg, f_flg, t_flg, r_flg, end_flg){
    let canvas = document.getElementById(canvas_name);
    let ctx = canvas.getContext('2d');
    if(pf_flg){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pokertable(ctx);
        //プリフロップの描画をするとき。
        if(num == -1){
            //一番最初の描画では、初期状態を描いて終わる
            draw_starting(canvas_name, "preflop")
            num++;
        }else{
            //num>=0では、プリフロップの状況から一場面ずつ描画していく。
            draw_situation(canvas_name, preflop_line_array[num]);
            num++
        }
        //もしも、次の行に書かれている内容が空白ならば、そこでプリフロップの描画は終わり。次に移る。
        if(preflop_line_array[num].elem.innerHTML == ""){
            pf_flg = false;
            num = -1;
        }
    }else if(f_flg){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pokertable(ctx);
        //フロップの描画をするとき。
        if(num == -1){
            draw_starting(canvas_name, "flop")
            num++;
        }else{
            draw_situation(canvas_name, flop_line_array[num]);
            num++
        }
        //もしも、次の行に書かれている内容が空白ならば、そこでプリフロップの描画は終わり。次に移る。
        if(flop_line_array[num].elem.innerHTML == ""){
            f_flg = false;
            num = -1;
        }
    }else if(t_flg){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pokertable(ctx);
        if(num == -1){
            draw_starting(canvas_name, "turn");
            num++;
        }else{
            draw_situation(canvas_name, turn_line_array[num]);
            num++;
        }
        if(turn_line_array[num].elem.innerHTML == ""){
            t_flg = false;
            num = -1;
        }
    }else if(r_flg){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pokertable(ctx);
        if(num == -1){
            draw_starting(canvas_name, "river");
            num++;
        }else{
            draw_situation(canvas_name, river_line_array[num]);
            num++;
        }
        if(river_line_array[num].elem.innerHTML == ""){
            r_flg = false;
        }
    }else{
        //全てのフラグがfalseになったとき
        //end_flgをtrueにする
        end_flg = true;
    }
    //end_flgがfalseならば、同じメソッドをループさせる
    if(end_flg == false){
        setTimeout(() => {
            video_frame(canvas_name, num, pf_flg, f_flg, t_flg, r_flg, end_flg);
        }, 1000);
    }else{
        //end_flgがたっていれば、ここでループが終了
        //残りプレイヤーが一人の時と、リザルト文が表示されているときだけ、勝利演出を表示する
        show_down()
        if(survivers.length == 1 || document.getElementById("show_down_result").innerHTML != ""){
            draw_winner(canvas_name, present_line);
        }
    }
    //録画しているのなら、end_flgがtrueのときに録画終了
    if(end_flg == true && recorder_on == true){
        //録画終了
        setTimeout(() => {
            recorder.stop();
        }, 2000)
    }
}    
function open_text_dialog(){
    //setting関係のテキストを作成
    let setting_text_l01 = "ゲームの種類：" + document.getElementById("game_type").value;
    let setting_text_l02 = 'ブラインド：' + document.getElementById("small_blind").value + " / " + document.getElementById("big_blind").value + " " + document.getElementById("unit").value;
    let setting_text_l03; 
    if(document.getElementById("ante_who").value == "BigBlind"){
        setting_text_l03 = "BBアンティ　" + document.getElementById("ante_amount"); 
    }else if(document.getElementById("ante_who").value == "AllPlayer"){
        setting_text_l03 = "All player　" + document.getElementById("ante_amount");
    }else{
        setting_text_l03 = "アンティなし"
    }
    
    document.getElementById("setting_text").innerHTML = '<p>' + setting_text_l01 + "　" + setting_text_l02 + '</p>' + '<p>' + setting_text_l03 + '</p>';

    //プレイヤーのスタックのテキストを作成。名前がある場合はそれも反映させる
    let players_inner = " ";
    let SB = {position:"SB", name:"SB", stack:document.getElementById("SB_stack").value};
    let BB = {position:"BB", name:"BB", stack:document.getElementById("BB_stack").value};
    const players_array = [SB, BB];
    initialize();
    for(item of All_player){
        let player_name;
        let card1;
        let card2;
        let stack;
        players_array.forEach(function(value){
            if(item.position == value.position){
                if(item.name != ""){
                    value.name = value.position + '(' + item.name + ')';
                }
                player_name = value.name;
                card1 = item.card1.name;
                card2 = item.card2.name;
                stack = value.stack;
            }
        })
        if(card1 == "dummy"){
            card1 = " ";
        }
        if(card2 == "dummy"){
            card2 = " ";
        }
        players_inner += '<div class="col-4 ">' + '<p>' + player_name + ':' + stack + document.getElementById("unit").value + ' | ' + card1 + " " + card2 + '</p>' + '</div>';
    }
    document.getElementById("player_text").innerHTML = players_inner;

    //ボードのカードのまとめ
    let board_text = "ボード：[ ";
    if(board_array[0] != dummy && board_array[1] != dummy && board_array[2] != dummy){
        board_text += board_array[0].name + " " + board_array[1].name + " " + board_array[2].name;
    }
    if(board_array[3] != dummy){
        board_text += " " + board_array[3].name;
    }
    if(board_array[4] != dummy){
        board_text += " " + board_array[4].name;
    }
    if(board_text != "ボード：[ "){
        board_text += " ]";
        document.getElementById("board_text").innerHTML = board_text;
    }else{
        document.getElementById("board_text").innerHTML = "";
    }

    //ここからゲーム内容のまとめ
    let preflop_text = '<p>【プリフロップ】</p>';
    let flop_text = '<p>【フロップ】</p>';
    let turn_text = '<p>【ターン】</p>';
    let river_text = '<p>【リバー】</p>';
    let street_inner = " ";
    let count = 0;
    while(preflop_line_array[count].elem.innerHTML != "" && count != 29){
        street_inner += '<p>' + preflop_line_array[count].elem.innerHTML + '</p>';
        count++;
    }
    document.getElementById('preflop_text').innerHTML = "";
    if(street_inner != " "){
        document.getElementById('preflop_text').innerHTML = preflop_text + street_inner;
    }
    street_inner = " ";
    count = 0;
    while(flop_line_array[count].elem.innerHTML != "" && count != 29){
        street_inner += '<p>' + flop_line_array[count].elem.innerHTML + '</p>';
        count++;
    }
    document.getElementById('flop_text').innerHTML = "";
    if(street_inner != " "){
        document.getElementById('flop_text').innerHTML = flop_text + street_inner;
    }
    street_inner = " ";
    count = 0;
    while(turn_line_array[count].elem.innerHTML != "" && count != 29){
        street_inner += '<p>' + turn_line_array[count].elem.innerHTML + '</p>';
        count++;
    }
    document.getElementById('turn_text').innerHTML = "";
    if(street_inner != " "){
        document.getElementById('turn_text').innerHTML = turn_text + street_inner;
    }
    street_inner = " ";
    count = 0;
    while(river_line_array[count].elem.innerHTML != "" && count != 29){
        street_inner += '<p>' + river_line_array[count].elem.innerHTML + '</p>';
        count++;
    }
    document.getElementById("river_text").innerHTML = "";
    if(street_inner != " "){
        document.getElementById("river_text").innerHTML = river_text + street_inner;
    }

    //ゲームの結果を表示する。
    //surviversを決定して、残っているプレイヤーが一人だけなら、リザルト分を表示する。
    show_down();
    if(survivers.length == 1){
        show_result;
    }
    //リザルト文が表示されているとき、その文章をダイアログに表示する。
    if(document.getElementById("show_down_result").innerHTML != ""){
        document.getElementById("showdown_text").innerHTML = document.getElementById("show_down_result").innerHTML;
    }

    let myModal = new bootstrap.Modal(document.getElementById('text_modal'), {
            keyboard: false
    })
    myModal.show();
}

//イラストつきのテキストを作るメソッド
function text_change(){
    let players_inner = " ";
    let SB = {position:"SB", name:"SB", stack:document.getElementById("SB_stack").value};
    let BB = {position:"BB", name:"BB", stack:document.getElementById("BB_stack").value};
    const players_array = [SB, BB];
    initialize();
    for(item of All_player){
        let player_name;
        let card1;
        let card2;
        let stack;
        players_array.forEach(function(value){
            if(item.position == value.position){
                if(item.name != ""){
                    value.name = value.position + '(' + item.name + ')';
                }
                player_name = value.name;
                stack = value.stack;
            }
        })
        if(item.card1 == dummy){
            card1 = " ";
        }else{
            card1 = '<img src=' + item.card1.path + ' width=50px hspace=2px vspace=2px>';
        }

        if(item.card2 == dummy){
            card2 = " ";
        }else{
            card2 = '<img src=' + item.card2.path + ' width=50px hspace=2px vspace=2px>';
        }
        players_inner += '<div class="col-4">' + '<p>' + player_name + ':' + stack + document.getElementById("unit").value + ' | ' + card1 + " " + card2 + '</p>' + '</div>';
    }
    document.getElementById("player_text").innerHTML = players_inner;

    
    let board_text = "ボード：[ ";
    if(board_array[0] != dummy && board_array[1] != dummy && board_array[2] != dummy){
        let card1 = '<img src=' + board_array[0].path + ' width=50px hspace=2px vspace=2px>';
        let card2 = '<img src=' + board_array[1].path + ' width=50px hspace=2px vspace=2px>';
        let card3 = '<img src=' + board_array[2].path + ' width=50px hspace=2px vspace=2px>';
        board_text += card1 + card2 + card3;
    }
    if(board_array[3] != dummy){
        let card4 = '<img src=' + board_array[3].path + ' width=50px hspace=2px vspace=2px>';
        board_text += card4;
    }
    if(board_array[4] != dummy){
        let card5 = '<img src=' + board_array[4].path + ' width=50px hspace=2px vspace=2px>';
        board_text += card5;
    }
    if(board_text != "ボード：[ "){
        board_text += " ]";
        document.getElementById("board_text").innerHTML = board_text;
    }else{
        document.getElementById("board_text").innerHTML = "";
    }

    document.getElementById("text_switch").innerHTML = '<button type="button" class="btn btn-info fs-1" onclick="text_undo()">テキスト切り替え</button>';
}

function text_undo(){
    let players_inner = " ";
    let SB = {position:"SB", name:"SB", stack:document.getElementById("SB_stack").value};
    let BB = {position:"BB", name:"BB", stack:document.getElementById("BB_stack").value};
    const players_array = [SB, BB];
    initialize();
    for(item of All_player){
        let player_name;
        let card1;
        let card2;
        let stack;
        players_array.forEach(function(value){
            if(item.position == value.position){
                if(item.name != ""){
                    value.name = value.position + '(' + item.name + ')';
                }
                player_name = value.name;
                card1 = item.card1.name;
                card2 = item.card2.name;
                stack = value.stack;
            }
        })
        if(card1 == "dummy"){
            card1 = " ";
        }
        if(card2 == "dummy"){
            card2 = " ";
        }
        players_inner += '<div class="col-4 ">' + '<p>' + player_name + ':' + stack + document.getElementById("unit").value + ' | ' + card1 + " " + card2 + '</p>' + '</div>';
    }
    document.getElementById("player_text").innerHTML = players_inner;
    
    let board_text = "ボード：[ ";
    if(board_array[0] != dummy && board_array[1] != dummy && board_array[2] != dummy){
        board_text += board_array[0].name + " " + board_array[1].name + " " + board_array[2].name;
    }
    if(board_array[3] != dummy){
        board_text += " " + board_array[3].name;
    }
    if(board_array[4] != dummy){
        board_text += " " + board_array[4].name;
    }
    if(board_text != "ボード：[ "){
        board_text += " ]";
        document.getElementById("board_text").innerHTML = board_text;
    }else{
        document.getElementById("board_text").innerHTML = "";
    }
    
    document.getElementById("text_switch").innerHTML = '<button type="button" class="btn btn-info fs-1" onclick="text_change()">テキスト切り替え</button>';
}

//ユーザの入力をもとに、フォームを作成し、postするメソッド
function submit_form(){
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
    document.myform.action = "./page05_2_2";
    document.myform.submit();
}
