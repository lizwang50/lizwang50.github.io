//加入購物車
//mission1: 新增產品陣列
const getProductValue = document.querySelector('.item-1'); //綁定購物車button
const addCartList = document.querySelector('.list'); //欲新增列表資料進去的父層區域
const dataCartList = JSON.parse(localStorage.getItem('productInfos'))|| [];

function addProductItem(e){
    e.preventDefault();    //取消a連結預設
    const productName = e.target.dataset.name;
    const productPrice = e.target.dataset.price;
    const productImage = e.target.dataset.img;
    const productSKU = e.target.dataset.sku;
    const cartList = {
        cartItemName : productName,
        cartItemPrice : productPrice,
        cartItemImg : productImage,
        cartItemSKU : productSKU,
    }
    const cartString = JSON.stringify(cartList);
    dataCartList.push(cartList); //push() 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。
    updateList(dataCartList);
    localStorage.setItem('productInfos', cartString);  //將產品陣列字串加入Local Storage
    ;}
//mission2: 將產品陣列從Local storage拿出來組字串
function updataCarts(items){
    str = '';
    const cartItemLen = items.length;
    console.log(cartItemLen);
}




getProductValue.addEventListener('click',addProductItem); //新增加入購物車按鈕的監聽事件;點選按鈕即執行addProductItem

