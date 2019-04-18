//新增資料
var sendNew = document.querySelector('.sendNew');
sendNew.addEventListener('click',sendProduct);

function sendProduct(e){
  e.preventDefault();
  var productName = document.querySelector('#productName').value;
  var productPrice = document.querySelector('#productPrice').value;
  var productIntro = document.querySelector('#productIntro').value;
  var productImage = document.querySelector('#productImage').value;
  var productList = {
    "productName" : productName,
    "productPrice" : productPrice,
    "productIntro" : productIntro,
    "productImage" : productImage
  }
  var newProduct = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/posts",
    "dataType" : 'json', // 預期從server接收的資料型態
    "contentType" : 'application/json; charset=utf-8', // 要送到server的資料型態    
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
      "Postman-Token": "c02b3542-ec41-497a-ba38-d57b15286999"
    },
    "data": productList,
  }
  
  $.ajax(newProduct).done(function (response) {
    console.log(response);
  });
}

//刪除資料
var productList = document.querySelector('.product-list');

function deleteItem(e) {
  var index = e.target.dataset.index;
  if (e.target.nodeName !== 'BUTTON') { return };//如果點到的內容不是i就不執行
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  xhr.open("DELETE", url + "/" + index);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("Postman-Token", "3b4f8676-9587-4a90-ba19-3b4340f697c1");
  
  xhr.send(null);
}

productList.addEventListener('click', deleteItem);   //點選按鈕後,刪除的動作
