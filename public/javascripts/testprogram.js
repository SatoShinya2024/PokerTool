function submit_form(){
    const test01 = document.getElementById("test01");
    const test02 = document.getElementById("test02");
    const test03 = document.getElementById("test03");
    const test04 = document.getElementById("test04");

    test03.value = test01.value;
    test04.value = test02.value;

    document.myform.submit();
}
let num = 10;
function count(){
    document.getElementById('text').innerHTML = num;
    num--;
}