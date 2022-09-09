var btn1 = document.getElementById(1);
var btn2 = document.getElementById(2);
var btn3 = document.getElementById(3);
var btn4 = document.getElementById(4);
var btn5 = document.getElementById(5);
var btn6 = document.getElementById(6);
var btn7 = document.getElementById(7);
var btn8 = document.getElementById(8);
var btn9 = document.getElementById(9);
var btnRes = document.getElementById('rst');
var outcme = document.getElementById('outcome');
var Arr = [
[0, 0, 0],
[0, 0, 0],
[0, 0, 0],
];
btn1.onclick = cringe1;
btn2.onclick = cringe2;
btn3.onclick = cringe3;
btn4.onclick = cringe4;
btn5.onclick = cringe5;
btn6.onclick = cringe6;
btn7.onclick = cringe7;
btn8.onclick = cringe8;
btn9.onclick = cringe9;
btnRes.onclick = cringe10;
var perem = 0;

function cringe1() {
btn1.disabled = true;
if (perem == 0) {//btn1.textContent = "X"; 
    perem++; Arr[0][0] = "X"; document.getElementById('img01').style.zIndex="1"; check();}
else {//btn1.textContent = "O";
    perem--; Arr[0][0] = "O";document.getElementById('img11').style.zIndex="1"; check();}
}
function cringe2() {
btn2.disabled = true;
if (perem== 0) {//btn2.textContent = "X";
    perem++; Arr[0][1] = "X";document.getElementById('img02').style.zIndex="1"; check();}
else {//btn2.textContent = "O";
    perem--; Arr[0][1] = "O"; document.getElementById('img12').style.zIndex="1"; check();}
 //console.log(Arr);
}
function cringe3() {
btn3.disabled = true;  
if (perem  == 0) {//btn3.textContent = "X";
    perem++;Arr[0][2] = "X";document.getElementById('img03').style.zIndex="1"; check();}
 else {//btn3.textContent = "O";
    perem--;Arr[0][2] = "O";document.getElementById('img13').style.zIndex="1";check();} 
}
function cringe4() {
btn4.disabled = true;   
if (perem == 0) {//btn4.textContent = "X";
    perem++;Arr[1][0] = "X";document.getElementById('img04').style.zIndex="1";check();}
 else {//btn4.textContent = "O";
    perem--;Arr[1][0] = "O";document.getElementById('img14').style.zIndex="1";check();} 
}
function cringe5() {
btn5.disabled = true;    
if (perem == 0) {//btn5.textContent = "X";
    perem++;Arr[1][1] = "X";document.getElementById('img05').style.zIndex="1";check();}
 else {//btn5.textContent = "O";
    perem--;Arr[1][1] = "O";document.getElementById('img15').style.zIndex="1";check();}
}
function cringe6() {
btn6.disabled = true;  
if (perem == 0) {//btn6.textContent = "X";
    perem++;Arr[1][2] = "X";document.getElementById('img06').style.zIndex="1";check();}
 else {//btn6.textContent = "O";
    perem--;Arr[1][2] = "O";document.getElementById('img16').style.zIndex="1";check();}  
}
function cringe7() {
btn7.disabled = true;    
if (perem == 0) {//btn7.textContent = "X";
    perem++;Arr[2][0] = "X";document.getElementById('img07').style.zIndex="1";check();}
 else {//btn7.textContent = "O";
    perem--;Arr[2][0] = "O";document.getElementById('img17').style.zIndex="1";check();}
}
function cringe8() {
btn8.disabled = true;   
if (perem == 0) {//btn8.textContent = "X";
    perem++;Arr[2][1] = "X";document.getElementById('img08').style.zIndex="1";check();}
 else {//btn8.textContent = "O";
    perem--;Arr[2][1] = "O";document.getElementById('img18').style.zIndex="1";check();} 
}
function cringe9() {
btn9.disabled = true;   
if (perem  == 0) {//btn9.textContent = "X";
    perem++;Arr[2][2] = "X";document.getElementById('img09').style.zIndex="1";check();}
 else {//btn9.textContent = "O";
    perem--;Arr[2][2] = "O";document.getElementById('img19').style.zIndex="1";check();} 
}
function check() {


if (hasWon(Arr)) {winoutcome();}
else if ((Arr[0].indexOf(0) == -1)&&(Arr[1].indexOf(0) == -1)&&(Arr[2].indexOf(0) == -1)) {outcme.textContent='Winner: noone :(';}

return 0;
}

function winoutcome() {
    if (perem  == 1) {
outcme.textContent=`Winner:Player X`;}
    else {outcme.textContent=`Winner:Player O`;}
for (let i = 1; i<10; i++) {
    document.getElementById(`${i}`).disabled = true;
  }
return 0;
}
function cringe10() {
    for (let i = 1; i<10; i++) {
        document.getElementById(`img0${i}`).style.zIndex="-1";
        document.getElementById(`img1${i}`).style.zIndex="-1";
        document.getElementById(`${i}`).disabled = false;
        document.getElementById(`${i}`).textContent  = '⠀';
        document.getElementById('outcome').textContent = 'Winner:';
      }
      Arr = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        ];
    perem=0;
    return 0;
}
function hasWon() {
        if ((Arr[0][0]== 'X') && (Arr[0][1]== 'X')&&(Arr[0][2]== 'X')) {return true;}
        if ((Arr[0][0]== 'O') && (Arr[0][1]== 'O')&&(Arr[0][2]== 'O')) {return true;}
        if ((Arr[1][0]== 'X') && (Arr[1][1]== 'X')&&(Arr[1][2]== 'X')) {return true;}
        if ((Arr[1][0]== 'O') && (Arr[1][1]== 'O')&&(Arr[1][2]== 'O')) {return true;}
        if ((Arr[2][0]== 'X') && (Arr[2][1]== 'X')&&(Arr[2][2]== 'X')) {return true;}
        if ((Arr[2][0]== 'O') && (Arr[2][1]== 'O')&&(Arr[2][2]== 'O')) {return true;}
    if ((Arr[0][0]== 'X') && (Arr[1][0]== 'X')&&(Arr[2][0]== 'X')) {return true;}
    if ((Arr[0][0]== 'O') && (Arr[1][0]== 'O')&&(Arr[2][0]== 'O')) {return true;}
    if ((Arr[0][1]== 'X') && (Arr[1][1]== 'X')&&(Arr[2][1]== 'X')) {return true;}
    if ((Arr[0][1]== 'O') && (Arr[1][1]== 'O')&&(Arr[2][1]== 'O')) {return true;}
    if ((Arr[0][2]== 'X') && (Arr[1][2]== 'X')&&(Arr[2][2]== 'X')) {return true;}
    if ((Arr[0][2]== 'O') && (Arr[1][2]== 'O')&&(Arr[2][2]== 'O')) {return true;}
        if ((Arr[0][0]== 'X') && (Arr[1][1]== 'X')&&(Arr[2][2]== 'X')) {return true;}
        if ((Arr[0][0]== 'O') && (Arr[1][1]== 'O')&&(Arr[2][2]== 'O')) {return true;}
    if ((Arr[2][0]== 'X') && (Arr[1][1]== 'X')&&(Arr[0][2]== 'X')) {return true;}
    if ((Arr[2][0]== 'O') && (Arr[1][1]== 'O')&&(Arr[0][2]== 'O')) {return true;}
    return false;
}
