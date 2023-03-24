

function randomCapcha(){
    var renderCapcha = document.querySelector('#randomCap');
    var random = Math.floor(Math.random() * 99999) + 10000;
    var html = `<p id = "randomCapcha">${random}</p>`;
    renderCapcha.innerHTML = html;
}
randomCapcha();

function getCourse(){
    var textName = document.querySelector('#txtHoten').value;
    var textEmail = document.querySelector('#email').value; 
    var textPhone = document.querySelector('#txtSDT').value;
    var unit = document.querySelector('#txtDVVT').value;
    var content = document.querySelector('#floatingTextarea2').value;
    var sscaptra = document.querySelector("#Captcha").value;

    if(textName == "" || unit == "" || content == "" || sscaptra == ""){
        alert("Vui lòng nhập thông tin");
        return false;
    }

    var email = new RegExp('^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$');
    if(textEmail == ""){
        alert("Vui lòng nhập email");
        return false;
    }else if(!email.test(textEmail)){
        alert("Bạn đã nhập sai email vui lòng nhập lại");
        return false;
    }

    var phone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    if(textPhone ==""){
        alert("Vui lòng nhập số điện thoại");
        return false
    }else if(!phone.test(textPhone)){
        alert("Bạn đã nhập sai số điện thoại vui lòng nhập lại");
        return false;
    }

    var getValueCapcha = document.querySelector("#randomCapcha").textContent;
    if(getValueCapcha != sscaptra){
        alert("Mã captcha sai vui lòng nhập lại");
        return false;
    }
    alert("Gửi đi thành công");
}

