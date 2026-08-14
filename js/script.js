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

// ========================================
// HP OFFICE - ĐỌC BÀI VIẾT TỪ GOOGLE SHEET
// ========================================

const API_BAI_VIET =
"https://script.google.com/macros/s/AKfycbxQ2Czfj-mFkXENSvPMSEzaimVe8Mkb9w02nNC40mJ7DGIM475KJ5mmbCX1mOH1Ovo5/exec";

async function taiBaiViet() {

    const khuVuc = document.getElementById("danhSachBaiViet");

    if (!khuVuc) return;

    khuVuc.innerHTML = "<p>⏳ Đang tải bài viết...</p>";

    try {

        const response = await fetch(API_BAI_VIET);

        if (!response.ok) {
            throw new Error("Không thể kết nối API");
        }

        const data = await response.json();

        if (!data || data.length === 0) {
            khuVuc.innerHTML =
                "<p>📭 Chưa có bài viết nào.</p>";
            return;
        }

        khuVuc.innerHTML = "";

        data.forEach(function(bai) {

            const article = document.createElement("article");

            article.className = "post-card";

            article.innerHTML = `
                <div class="post-content">

                    <span class="post-category">
                        ${bai.DANH_MUC || "Tin tức"}
                    </span>

                    <h3>
                        ${bai.TIEU_DE || "Không có tiêu đề"}
                    </h3>

                    <p class="post-date">
                        📅 ${bai.NGAY_DANG || ""}
                    </p>

                    <p class="post-author">
                        ✍️ ${bai.TAC_GIA || ""}
                    </p>

                    <p class="post-description">
                        ${bai.NOI_DUNG || ""}
                    </p>

                </div>
            `;

            khuVuc.appendChild(article);

        });

    } catch (error) {

        console.error("Lỗi tải bài viết:", error);

        khuVuc.innerHTML = `
            <p>
                ⚠️ Không thể tải bài viết.
                Vui lòng kiểm tra kết nối.
            </p>
        `;
    }
}


// Tự động tải bài viết khi trang mở
document.addEventListener("DOMContentLoaded", function() {
    taiBaiViet();
});

