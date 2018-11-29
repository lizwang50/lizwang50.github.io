var sendData = document.querySelector('.send');  //監測點選按鈕後輸入的值
var list = document.querySelector('.list'); //欲新增列表資料進去的父層區域
var dataBMI = JSON.parse(localStorage.getItem('BMIData')) || [];


sendData.addEventListener('click', addData);  //新增按鈕的監聽事件;點選按鈕即執行addData
list.addEventListener('click', toggleDone);   //新增點選按鈕後,刪除的動作
updateList(dataBMI);  //更新資料顯示

//計算BMI + 判斷BMI狀況&身高體重數字 + 存入localStorage
function addData(e) {
  e.preventDefault();
  var height1 = document.querySelector('.yourHeight').value;
  var height = parseInt(document.querySelector('.yourHeight').value) / 100 * 2;
  var weight = document.querySelector('.yourWeight').value;
  var BMINum = weight / height;
  var analyze = '';
  var borderClass = '';
  //判斷BMI狀況
  var healthyweight = ['理想　　','healthyweight'];
  var underweight = ['稍輕　　','underweight'];
  var overweight = ['稍重　　','overweight'];
  var severelyobese = ['輕度肥胖','severelyobese'];
  var moderatelyobese = ['中度肥胖', 'moderatelyobese'];

  // // 判斷身高體重是否為空
  // if (heigth == '' || weight == '') {
  //   alert('身高及體重不可為空');
  //   // 跳出這一個function
  //   return false;
  // }
  if (BMINum < 18.5) {
    analyze = underweight[0];
    borderClass = underweight[1];
  } else if (18.5 < BMINum && BMINum < 25) {
    analyze = healthyweight[0];
    borderClass = healthyweight[1];
  } else if (25.1 > BMINum && BMINum < 30) {
    analyze = overweight[0];
    borderClass = overweight[1];
  } else if (30.1 > BMINum && BMINum < 35) {
    analyze = severelyobese[0];
    borderClass = severelyobese[1];
  } else if (35.1 > BMINum && BMINum < 40) {
    analyze = moderatelyobese[0];
    borderClass = moderatelyobese[1];
  }
  var BMI = {
    value: BMINum.toFixed(2),  //取小數點後兩位
    condition: analyze,
    heightData: height1,
    weightData: weight,
    classData: borderClass,
  };
  
  dataBMI.push(BMI);
  updateList(dataBMI);
  localStorage.setItem('BMIData', JSON.stringify(dataBMI));
}

//取出localStorage的陣列,並且新增卡片
function updateList(items) {
  str = '';
  var len = items.length;
  var divCard = '<div class="card mb-3 w-100 ';
  var divCardEnd = '">';
  var divCardBody = '<div class="card-body box-shadow d-inline-flex ">';
  var cardTitle = '<h5 class="card-title mb-0 font-weight-bold">';
  var cardTitleEnd = '</h5>';
  var cardTextBMI1 = '<p class="ml-5 mb-0 ">BMI</p>';
  var cardTextData = '<h5 class="text-muted ml-2 mb-0">';
  var cardTextweight = '<p class="ml-5 mb-0 ">weight</p>';
  var cardTextheight = '<p class="ml-5 mb-0 ">height</p>';
  var toggleDelete = '<a href="#" class="ml-auto"><i class="fas fa-times ml-1" data-index=';
  var deleteEnd = '/></i></a>';
  var divEnd = '</div>';
  for (var i = 0; i < len; i++) {
    str += divCard + items[i].classData + divCardEnd + divCardBody + cardTitle + items[i].condition + cardTitleEnd + cardTextBMI1 + cardTextData + items[i].value + cardTitleEnd + cardTextweight + cardTextData + items[i].weightData + cardTitleEnd + cardTextheight + cardTextData + items[i].heightData + cardTitleEnd + toggleDelete + i + deleteEnd + divEnd + divEnd;
  }
  list.innerHTML = str;
}

function toggleDone(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'I') { return };//如果點到的內容不是i就不執行
  var body = e.target.dataset.body; 
  dataBMI.splice(body, 1); //資料刪除
  localStorage.setItem('BMIData', JSON.stringify(dataBMI));
  updateList(dataBMI); //重新渲染將資料更新
}

//validation




