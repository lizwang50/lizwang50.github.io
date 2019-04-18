var sendData = document.querySelector('#sendLogin'); //綁定監聽
sendData.addEventListener('click', signin); //建立監聽事件

function signin(e) {
  e.preventDefault();
  //製作回傳的陣列
  var emailStr = document.querySelector('.account1').value;
  var passwordStr = document.querySelector('.password1').value;
  var account = {};
  account.email = emailStr;
  account.password = passwordStr;

  var xhr = new XMLHttpRequest();
  xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);
  xhr.setRequestHeader('Content-type', 'application/json') //設定格式
  var data = JSON.stringify(account); //字串化
  xhr.send(data);
  xhr.onload = function () {
    var callbackData = JSON.parse(xhr.responseText); //撈出認證成功資訊,可用consoleLog檢查是否成功
    console.log(callbackData);
    var veriStr = callbackData.message; //判斷是否驗證成功
    if (veriStr === '登入失敗') {
      alert('帳號登入失敗');
    } else if((veriStr === '登入成功')) {
      alert('帳號登入成功');
      window.location.assign("http://127.0.0.1:5500/public/customer-page.html");
    }
  }
}

var send = document.querySelector('#sendSignup');
send.addEventListener('click', signup);

function signup() {
  var emailStr = document.querySelector('.account2').value;
  var passwordStr = document.querySelector('.password2').value;
  var account = {};
  account.email = emailStr;
  account.password = passwordStr;

  var xhr = new XMLHttpRequest();
  xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true); //true:非同步
  xhr.setRequestHeader('Content-type', 'application/json') //設定格式
  var data = JSON.stringify(account); //和localStorage一樣，要先轉為字串再送出
  xhr.send(data);
  xhr.onload = function () {
    var callbackData = JSON.parse(xhr.responseText); //撈出認證成功資訊,可用consoleLog檢查是否成功
    console.log(callbackData);
    var veriStr = callbackData.message; //判斷是否驗證成功
    if (veriStr == '帳號註冊成功') {
      alert('帳號註冊成功');
    } else {
      alert('帳號註冊失敗');
    }
  }
}

