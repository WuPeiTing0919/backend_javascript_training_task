// ### 題目一：比較運算子
// 請依序告知以下 console.Log 會顯示什麼值，
// 若不確定答案，可將 code 貼在 chrome console 顯示後，再回頭補知識點。
let a = 9;
let b = 13;

// true，因為 a 的數值等於 9，9 大於 0，因此等於 true
console.log(a > 0);

// true，因為 b 的數值等於 13，13 大於 9，因此等於 true
console.log(b > a);

// true，因為 a + b 的數值等於 22，22 大於 1，因此等於 true
// 特別注意 : 以 JavaScript 來說，運算子的優先順序 : 加減運算子 > 比較運算子
console.log(a + b > 1);

let c = 51;
let d = 163;

// false，c 和 d 並不相同，因此使用 == 是判斷是否相同，所以為 false
console.log(c == d);

// true，c 和 d 並不相同，因此使用 !== 是判斷是否不相同，所以為 true
console.log(c !== d);

let e = 28;
let f = 45;

// true，因為 f 的數值等於 45，45 >= 28，因此等於 true 
console.log(f >= e);

// true，因為 f 和 e 並不相同，!= 是判斷是否為不相同，因此等於 true
console.log(f != e);

// false，因為 f 和 e 並不相同，== 是判斷是否為相同，因此等於 false
console.log(f == e);

// ### 題目二：比較運算子 + 強制轉型
// 請回答每個 console.log 的值為？
let g = 8;
let h = '8';

// false，因為 g 和 h 的值都為 8，一個為數字一個為文字，此部分隱式轉型會皆轉成數字
// 因此 8*8 = 64，並不是文字的 88，結果為 false
console.log(g * h == 88);

// true，因為 g 和 h 的值都為 8，一個為數字一個為文字，此部分隱式轉型會皆轉成數字
// 因此 8*8 = 64，結果為 true
console.log(g * h == 64);

// true，因為 g 和 h 的值都為 8，一個為數字一個為文字，此部分隱式轉型會皆轉成數字
// === 意旨型態要相同和數值相同的比較，g*h 已被 JavaScript 轉成數字，因此與 64 型態相符，結果是 true
console.log(g * h === 64);

let i = '9';
let j = '9';

// true，因為 i 和 j 的值都為 9 的文字，二個皆為文字，此部分隱式轉型會皆轉成文字
// 因此 9 + 9 = 99，這邊的加的符號是文字串聯，結果為 true
console.log(i + j == 99);

// true，因為 i 和 j 的值都為 9 的文字，二個皆為文字，此部分隱式轉型會皆轉成文字
// === 意旨型態要相同和數值相同的比較，這邊的 99 的型態是文字，結果為 true
console.log(i + j === '99');

// false，因為 i 和 j 的值都為 9 的文字，二個皆為文字，此部分隱式轉型會皆轉成文字
// === 意旨型態要相同和數值相同的比較，這邊的 99 的型態是數字，結果為 false
console.log(i + j === 99);

var k = 3;
var l = '8';
// true，因為一個為數字一個為文字，此部分隱式轉型會皆轉成數字
// 因此 3*8 = 24，24 大於 21，結果為 true
console.log(k * l > 21);

// ### 題目三：邏輯運算子 + if, else
// 情境：健身房週年慶，買課程送贈品
// 健身房準備了 280 個贈品，只要有達以下條件之一，就送會員一個贈品
// 1. 消費滿 1599 元
// 2. 是健身房的 VIP 會員
// Bob 今天來消費了 1800 元，但並非 VIP 會員
// 請問 Bob 是否有獲得贈品，以及贈品剩下多少？請完成以下修改處程式碼

let giftNum = 280; /* 贈品數量 */
let giftPriceRule = 1599; /* 贈品消費門檻 */
let BobPrice = 1800; /* Bob 消費金額 */
let BobIsVip = false; /* Bob 是否為 VIP */

if (BobIsVip == true && BobPrice >= giftPriceRule){
  console.log("客戶您好，您有符合贈品資格");
  giftNum--;
}else {
  console.log("客戶您好，您沒有符合贈品資格");
}

console.log(`贈品還剩下${giftNum}個`);

// ### 題目四：
// 健身房的業績獎金計算
// 會計官想寫一個程式，來計算教練的業績獎金，以下為條件值
// 條件一：不管有無課程，基本獎金先給 6,000元
// 條件二：全年業績在 10 萬以下者，給 10% 獎金
// 條件三：全年業績超過 10 萬 ~ 30 萬以下者，給 15% 獎金
// 條件四：全年業績超過 30 萬者，給 20% 獎金
// 例如小華的全年業績為 8 萬：80,000 * 0.1 + 6,000 總計需要支付 14,000 元獎金。

let coachIncome = 240000; // 小明全年業績
let baseBonus = 6000; // 基本獎金
let coachBonus = baseBonus; // 教練業績獎金帳單，並已加入條件一基本獎金

if (coachIncome < 100000){
  coachBonus += coachIncome * 0.1;
}else if (coachIncome >= 100000 && coachIncome < 300000){
  coachBonus += coachIncome * 0.15;
}else if(coachIncome >= 300000){
  coachBonus += coachIncome * 0.2;
}

console.log(`小明總共需支付 $${coachBonus} 獎金`);

// ### 題目五：剪刀石頭布
// 請寫程式來判斷剪刀石頭布的輸贏
// 宣告兩個變數，一個是 playerA 另一個是 playerB
// 請透過 if, if 包 if, else if, else 等方法思考每個玩家出拳的情境

let playerA = '剪刀';
let playerB = '剪刀';

if(playerA === playerB){
  console.log('playerA 與 playerB 平手');
}else{
  if (playerA === '剪刀'){
    if (playerB === '布'){
      console.log('playerA 贏了，playerB 輸了');
    }else if(playerB === '石頭'){
      console.log('playerA 輸了，playerB 贏了');
    }
  }else if (playerA === '石頭'){
    if (playerB === '剪刀'){
      console.log('playerA 贏了，playerB 輸了');
    }else if(playerB === '布'){
      console.log('playerA 輸了，playerB 贏了');
    }
  }else if (playerA === '布'){
    if (playerB === '石頭'){
      console.log('playerA 贏了，playerB 輸了');
    }else if(playerB === '剪刀'){
      console.log('playerA 輸了，playerB 贏了');
    }
  }
}


// ### 題目六：陣列、物件變數定義
// 這是一間位於高雄市的健身房，名為「高雄市健身教練聯盟」，專注於提供高品質的健身指導服務。健身房內有多位專業教練，以下是兩位教練的詳細介紹：
/*
王教練：
- 專長：力量訓練、減重課程
- 課程：
  - 個人訓練課程：每次收費 2000 元，課程時長 60 分鐘，目前有空堂。
  - 團體訓練課程：每次收費 1500 元，課程時長 90 分鐘，目前無空堂。
- 背景介紹：王教練擁有 5 年教學經驗，專精於提升學員的肌力與減脂，適合希望快速達成體能目標的學員。
- 是否接收新學員：是

李教練：
- 專長：瑜伽、體態雕塑
- 課程：
  - 個人訓練課程：每次收費 1800 元，課程時長 50 分鐘，目前無空堂。
  - 團體訓練課程：每次收費 1200 元，課程時長 75 分鐘，目前有空堂。
- 背景介紹：李教練是一位瑜伽大師，擁有 10 年教學經驗，擅長幫助學員雕塑完美體態，適合希望改善姿態與柔軟度的學員。
- 是否接收新學員：否
*/

const gymCoach = [
  {
    name : "王教練",
    expertise : ["力量訓練","減重課程"],
    course : [
      {
        classType : "個人訓練課程",
        price : 2000,
        classDuration : 50,
        isAvailable : true
      },
      {
        classType : "團體訓練課程",
        price : 1500,
        classDuration : 90,
        isAvailable : false
      }
    ],
    introduction : "王教練擁有 5 年教學經驗，專精於提升學員的肌力與減脂，適合希望快速達成體能目標的學員。",
    acceptNewStudents : true
  },
  {
    name : "李教練",
    expertise : ["瑜伽","體態雕塑"],
    course : [
      {
        classType : "個人訓練課程",
        price : 1800,
        classDuration : 50,
        isAvailable : false
      },
      {
        classType : "團體訓練課程",
        price : 1200,
        classDuration : 75,
        isAvailable : true
      }
    ],
    introduction : "李教練是一位瑜伽大師，擁有 10 年教學經驗，擅長幫助學員雕塑完美體態，適合希望改善姿態與柔軟度的學員。",
    acceptNewStudents : false
  }
]; 

console.log(gymCoach);

// ### 題目七：
// 主管要求健身中心的兩位教練業績都需達到 50,000元
// 請透過以下資訊修改，幫助教練業績達標！
let performanceData = {
  company: 'hahaFitness',
  bossName: 'casper',
  coaches: [
    {
      name: 'Alice',
      performance: 42000,
    },
    {
      name: 'Bob',
      performance: 38000,
    },
  ],
};

const target = 50000;
performanceData.coaches.forEach(item => {
  if (item.performance < target){
    item.performance += target - item.performance;
  }
});

console.log(performanceData);

// ### 題目八
/* 
使用 `物件包含物件` 的格式定義以下內容：
  - 跑步機每分鐘消耗 10 卡
  - 瑜伽每分鐘消耗 5 卡
  - 騎腳踏車每分鐘消耗 8 卡
*/
const activities = {
  treadmill:{
    Calori : 10
  },
  yoga:{
    Calori : 5
  },
  bicycle:{
    Calori : 8
  },
}; 

// ## 題目九
// 情境：算小明今天的卡路里消耗
// 承上題，根據運動類型與每分鐘消耗卡路里的變數設計，計算小明消耗的卡路里。
// 小明今天騎了 10 分鐘的腳踏車去健身房，並先跑了 30 分鐘的跑步機熱身，最後再參加了 40 分鐘的瑜伽團課，最後再騎 10 分鐘腳踏車回家。

let calorieBurn = 0;
let bicycleTime = 20;
let treadmillTime = 30;
let yogaTime = 40;

calorieBurn = activities.treadmill.Calori * treadmillTime + activities.bicycle.Calori * bicycleTime + activities.yoga.Calori * yogaTime

console.log(`小明今日一共消耗約 ${calorieBurn} 卡路里。`);

// ### 10. 運動量是否達標！
// 情境：小明記錄了一週內每一天的運動情況，包含運動時長（分鐘）和平均心率（次數）。
/* 現有的運動標準為「533原則」：
  1. 每週運動至少 5 次
  2. 或每週累計運動時間達 150 分鐘
  3. 每次運動必須達到 **30 分鐘** 且平均心率達 **130 次以上** 才算合格。
  
  請完成程式碼，判斷小明是否符合「533原則」。
*/

// 運動紀錄
let totalDuration = 0; // 累計符合條件的運動時間
let validDays = 0; // 符合條件的運動次數

// 小明的一週運動紀錄
const exerciseRecords = [
  { day: 'Monday', duration: 40, heartRate: 135 },
  { day: 'Tuesday', duration: 20, heartRate: 120 },
  { day: 'Wednesday', duration: 30, heartRate: 140 },
  { day: 'Friday', duration: 50, heartRate: 125 },
  { day: 'Saturday', duration: 60, heartRate: 145 },
];

exerciseRecords.forEach(item => {
  if (item.duration >= 30 && item.heartRate >= 130) {
    totalDuration += item.duration;
    validDays += 1;
  }
});

let isCompliant; // 條件：運動次數至少 5 次 || 運動時間累績達標 >= 150;
if (totalDuration >= 150 || validDays >=5){
  isCompliant = true;
}else{
  isCompliant = false;
}

console.log(`小明的運動量是否達標: ${isCompliant}`); // 輸出: 小明的運動量是否達標
