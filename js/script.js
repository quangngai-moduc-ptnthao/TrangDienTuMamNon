/*=========================================================
      HP OFFICE 1.0
      SCRIPT.JS
=========================================================*/


/*==========================
      ĐỒNG HỒ
===========================*/

function capNhatDongHo(){

const now = new Date();

const thu = [
"Chủ nhật",
"Thứ Hai",
"Thứ Ba",
"Thứ Tư",
"Thứ Năm",
"Thứ Sáu",
"Thứ Bảy"
];

let day = thu[now.getDay()];

let date = String(now.getDate()).padStart(2,"0");

let month = String(now.getMonth()+1).padStart(2,"0");

let year = now.getFullYear();

let hour = String(now.getHours()).padStart(2,"0");

let minute = String(now.getMinutes()).padStart(2,"0");

let second = String(now.getSeconds()).padStart(2,"0");

let text =
`${day} - ${date}/${month}/${year}
🕒 ${hour}:${minute}:${second}`;

let clock=document.getElementById("clock");

if(clock){

clock.innerHTML=text;

}

}

setInterval(capNhatDongHo,1000);

capNhatDongHo();



/*==========================
      LỜI CHÀO
===========================*/

function loiChao(){

let hour=new Date().getHours();

let text="";

if(hour<11){

text="🌞 Chào buổi sáng! Chúc cô Ngọc Thảo một ngày làm việc hiệu quả.";

}
else if(hour<18){

text="☀️ Chào buổi chiều! Chúc cô nhiều năng lượng.";

}
else{

text="🌙 Chào buổi tối! Chúc cô nghỉ ngơi vui vẻ.";

}

let welcome=document.querySelector(".welcome");

if(welcome){

welcome.innerHTML=text;

}

}

loiChao();



/*==========================
      NÚT LÊN ĐẦU
===========================*/

window.onscroll=function(){

let btn=document.getElementById("topBtn");

if(!btn) return;

if(document.body.scrollTop>300 ||
document.documentElement.scrollTop>300){

btn.style.display="block";

}
else{

btn.style.display="none";

}

}


function lenDauTrang(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}



/*==========================
      TÌM KIẾM MENU
===========================*/

function timKiem(){

let input=document.getElementById("searchInput");

if(!input) return;

let filter=input.value.toUpperCase();

let cards=document.querySelectorAll(".service-card");

cards.forEach(function(card){

let text=card.innerText.toUpperCase();

if(text.indexOf(filter)>-1){

card.style.display="block";

}else{

card.style.display="none";

}

});

}

let search=document.getElementById("searchInput");

if(search){

search.addEventListener("keyup",timKiem);

}



/*==========================
      HIỆU ỨNG CARD
===========================*/

const cards=document.querySelectorAll(".service-card");

cards.forEach(function(card){

card.addEventListener("mouseenter",function(){

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",function(){

card.style.transform="translateY(0px)";

});

});



/*==========================
      THÔNG BÁO
===========================*/

console.log("HP Office 1.0 đã khởi động.");



/*==========================
      NĂM HIỆN TẠI
===========================*/

const year=new Date().getFullYear();

console.log("© "+year);



/*==========================
      LOAD
===========================*/

window.addEventListener("load",function(){

console.log("Website đã tải hoàn tất.");

});