async function submit_login(){
    const name = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    let id = document.createElement("input");
    id.name = "id";
    id.value = await digestMessage(name);
    let pw = document.createElement("input");
    pw.name = "pw";
    pw.value = await digestMessage(password);
    let form = document.createElement("form");
    form.name = "login_form";
    form.method = "POST";
    form.action = "page02";
    form.style.display = "none";
    document.body.appendChild(form);
    form.appendChild(id);
    form.appendChild(pw);
    form.submit();
}

async function submit_userregister(){
    const name = document.getElementById("username").value;
    const password01 = document.getElementById("password01").value;
    const password02 = document.getElementById("password02").value;

    if(name.length < 8 || name.length > 16){
        confirm("ユーザIDの長さが不適切です。")
        return;
    }
    if(password01.length < 8 || password02.length > 16){
        confirm("パスワードの長さが不適切です。");
        return;
    }
    if(password01 != password02){
        confirm("再入力したパスワードが違います。");
        return;
    }
    
    let id = document.createElement("input");
    id.name = "id";
    id.value = await digestMessage(name);
    let pw = document.createElement("input");
    pw.name = "pw";
    pw.value = await digestMessage(password01);
    let form = document.createElement("form");
    form.name = "user_form";
    form.method = "POST";
    form.action = "page03";
    form.style.display = "none";
    document.body.appendChild(form);
    form.appendChild(id);
    form.appendChild(pw);
    form.submit();
}

//IDとパスワードをsha256の文字列に変換する関数
async function digestMessage(message) {
    const msgUint8 = new TextEncoder().encode(message);                           // (utf-8 の) Uint8Array にエンコードする
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgUint8);           // メッセージをハッシュする
    const hashArray = Array.from(new Uint8Array(hashBuffer));                     // バッファーをバイト列に変換する
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // バイト列を16進文字列に変換する
    return hashHex;
}

function logout(){
    if(confirm("ログアウトしますか？")){
        let form = document.createElement("form");
        form.name = "logout_form";
        form.method = "POST";
        form.action = "page04/logout";
        form.style.display = "none";
        document.body.appendChild(form);
        form.submit();
    }
}

function change_nickname(){
    if(confirm("ニックネームを変えますか？")){
        var myModal = new bootstrap.Modal(document.getElementById('nickname_change_Modal'), {
            keyboard: false
        })
        myModal.show()
    }
}

function form_submit(){
    let newname = document.getElementById("newname").value;
    if(newname == ""){
        confirm("名前が入力されていません。")
    }else{
        document.myform.action = "/page04";
        document.myform.submit();
    }
}