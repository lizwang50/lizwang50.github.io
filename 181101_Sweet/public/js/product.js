//product-1.html 撈資料

var xhr = new XMLHttpRequest(); //透過瀏覽器去跟別的伺服器要資料的時候使用
var url = "http://localhost:3000/posts" ;
xhr.open('get', url , true);
xhr.send(null);


//撈取資料並且串字串丟入HTML中
xhr.onload = function updateProductList() {
  var data = JSON.parse(xhr.responseText);
  var dataLen = data.length;
  var cardList = document.querySelector('.product-list');
  var str = '';
  for (let i = 0; i < dataLen; i++) {
    str += `
  <div class="col-md-4">
    <div class="item-card mb-4"><a href="product-2.html" title="本日精選">
        <div style="background-image: url('` + data[i].productImage + `')" class="item-img">
          <div class="item-tag">本日精選</div>
          <div class="item-starred-icon">
            <label class="ui-checked-display">
              <input type="checkbox" class="ui-checkbox"><i class="material-icons ui-show">favorite</i><i
                class="material-icons ui-hidden">favorite_border</i>
            </label>
          </div>
        </div>
      </a>
      <div class="item-body d-flex flex-column text-center"><a href="product-2.html" title="` + data[i].productName + `">
          <div class="item-name text-primary">` + data[i].productName + `</div>
        </a><strong class="item-price text-primary">` + data[i].productPrice + `</strong></div><a href="carts.html" title="加入購物車"
        class="btn btn-lg btn-block btn-primary-lighter">加入購物車</a>
    </div>
  </div>
    `
  }
  cardList.innerHTML = str;
}

