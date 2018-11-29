var list = document.querySelector('.list'); //欲新增列表資料進去的父層區域
var sendData = document.querySelector('.send');  //監測點選按鈕後輸入的值
var data = JSON.parse(localStorage.getItem('listData')) || [];

sendData.addEventListener('click', addData);  //新增按鈕的監聽事件;點選按鈕即執行addData
list.addEventListener('click', toggleDone);   //新增點選按鈕後,刪除的動作
updateList(data);  //更新資料顯示


function addData(e) {
    e.preventDefault(); //取消元素默認行為；常用於ａ連結與Submit按鈕等，透過JS去檢查表單有無錯誤後，再post去傳送.
    var txt = document.querySelector('.text').value;  //將input使用者填入的值取出
    var todo = {  //新增變數 等於一個object物件，裡面增加一個內容，內容部分就是上面的txt
      content: txt
    };
    data.push(todo); //更新要把新增的todolist內容push進去
    updateList(data);//重新更新資料，跑updatelist function中的for迴圈將新資料載入
    localStorage.setItem('listData', JSON.stringify(data)) //最後存入localStorage，並且新增listData項目，將Data轉文字存入
  }

function updateList(items) {  // 這一個 items 是從 function updateList(items) 傳入的參數 而這個值是從呼叫的點傳入的,所以可以從呼叫 updateList({ 傳入的變數 }) 的地方開始尋找
  str = '';
  var len = items.length;
  for (var i=0; i<len;i++){
    str += '<div class="card mt-2">' + '<div class="card-body">' + '<div class="custom-control custom-checkbox d-flex">' + '<input type="checkbox" class="custom-control-input" id="customCheck1">' + '<label class="custom-control-label listContent" for="customCheck1">' + items[i].content + '</label>' + '<div class="ml-auto"><a href="#"><i class="fas fa-times ml-1" data-index=' + i + '/></i></a>' +'</div></div></div></div>';
    // str += '<li><a href="#" data-index=' +  i + ' />刪除</a> <span>' + items[i].content + '</span></li>';
  }
  list.innerHTML = str;
}

function toggleDone(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'I') { return };//如果點到的內容不是i就不執行
  var body = e.target.dataset.body;

  data.splice(body,1); //資料刪除
  localStorage.setItem('listData',JSON.stringify(data));
  updateList(data); //重新渲染將資料更新
}

