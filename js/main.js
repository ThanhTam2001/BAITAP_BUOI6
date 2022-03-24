function bai1() {
    var tong = 0;
    var temp = 0;
    while (tong < 10000) {
        temp++;
        tong += temp;
    }
    document.getElementById("kqBai1").innerHTML = "Số nguyên dương nhỏ nhất: " + temp;
}
bai1();


function tinhTongBai2(x,n) {
    var tong = x;
    if(n == 0){
        return 1;
    }
    for (var i = 1; i <= n; i++) {
        tong += x*i;
    }
    return tong;
}

document.getElementById("btnTinhBai2").onclick = function(){
    var x = document.getElementById("soX").value * 1;
    var n = document.getElementById("soN").value * 1;
    var kq = tinhTongBai2(x,n);
    document.getElementById("kqBai2").innerHTML = "Kết quả là: " + kq;
}

document.getElementById("btnTinhBai3").onclick = function(){
    var n = document.getElementById("soN2").value * 1;
    var giaiThua = 1;
    for (var i = 1; i <= n; i++) {
        giaiThua *= i;
    }
    document.getElementById("kqBai3").innerHTML = "Kết quả là: " + giaiThua;
}
var checkTF = 1;
document.getElementById("btnTaoDiv").onclick = function(){
    var div = document.createElement("div");
    div.style.color = "white";
    div.style.padding = "20px";
    div.style.lineHeight = "0px";
    if(checkTF % 2 == 0){
        div.style.background = "red";
        div.style.width = "100%";
        div.style.height = "30px";
        div.innerText = "Div chẵn " + checkTF;
        document.getElementById("kqBai4").appendChild(div);
        checkTF++;
    }else{
        div.style.background = "blue";
        div.style.width = "100%";
        div.style.height = "30px";
        div.innerText = "Div lẻ " + checkTF;
        document.getElementById("kqBai4").appendChild(div);
        checkTF++;
    }
}