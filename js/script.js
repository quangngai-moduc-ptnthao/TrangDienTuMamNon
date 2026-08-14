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
                      📅 ${bai.NGAY_DANG ? new Date(bai.NGAY_DANG).toLocaleDateString("vi-VN") : ""}
                    </p>
                    <p class="post-author">
                        ✍️ ${bai.TAC_GIA || ""}
                    </p>

                    <p class="post-description">
                        ${bai.NOI_DUNG || ""}
                    </p>
<button class="btn-xem-bai">
    📖 Xem bài viết
</button>
                </div>
                       `;

          const nutXem = article.querySelector(".btn-xem-bai");

nutXem.addEventListener("click", function() {

    // Tạo cửa sổ đọc bài viết
    const modal = document.createElement("div");

    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.65)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "99999";
    modal.style.padding = "20px";
    modal.style.boxSizing = "border-box";

    modal.innerHTML = `
        <div style="
            background:white;
            width:90%;
            max-width:900px;
            max-height:90vh;
            overflow-y:auto;
            border-radius:18px;
            padding:30px;
            box-sizing:border-box;
            box-shadow:0 10px 40px rgba(0,0,0,0.3);
        ">

            <div style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                gap:15px;
                margin-bottom:20px;
            ">

                <h2 style="
                    margin:0;
                    color:#075aaa;
                    font-size:28px;
                ">
                    📖 ${bai.TIEU_DE || "Bài viết"}
                </h2>

                <button class="dong-bai-viet" style="
                    border:none;
                    background:#075aaa;
                    color:white;
                    width:40px;
                    height:40px;
                    border-radius:50%;
                    font-size:22px;
                    cursor:pointer;
                ">
                    ×
                </button>

            </div>

            <div style="
                border-bottom:1px solid #ddd;
                padding-bottom:15px;
                margin-bottom:20px;
                color:#555;
                line-height:1.8;
            ">
                <div>🏷️ ${bai.DANH_MUC || "Tin tức"}</div>
                <div>📅 ${bai.NGAY_DANG ? new Date(bai.NGAY_DANG).toLocaleDateString("vi-VN") : ""}</div>
                <div>✍️ ${bai.TAC_GIA || ""}</div>
            </div>

            <div style="
                font-size:18px;
                line-height:1.8;
                color:#333;
                white-space:pre-line;
            ">
                ${bai.NOI_DUNG || "Bài viết chưa có nội dung."}
            </div>

            <div style="
                text-align:center;
                margin-top:30px;
                padding-top:20px;
                border-top:1px solid #ddd;
            ">
                <button class="dong-bai-viet" style="
                    background:#075aaa;
                    color:white;
                    border:none;
                    padding:12px 28px;
                    border-radius:8px;
                    font-size:16px;
                    cursor:pointer;
                ">
                    Đóng bài viết
                </button>
            </div>

        </div>
    `;

    // Nút đóng bài viết
    modal.querySelectorAll(".dong-bai-viet").forEach(function(nut) {
        nut.addEventListener("click", function() {
            modal.remove();
        });
    });

    // Bấm ra ngoài cửa sổ cũng đóng
    modal.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });

    // Hiện cửa sổ
    document.body.appendChild(modal);

});

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

