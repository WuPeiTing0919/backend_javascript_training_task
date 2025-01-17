// ### 題目一：變數練習
// 情境：Alex 正在健身房鍛鍊，他正在使用跑步機慢跑，請用變數描述以下狀態：
// 1. 請宣告一個 `const` 變數名稱為 `alexAge`，並賦予值為 `25`。
// 2. 請宣告一個 `const` 變數名稱為 `alexMembershipID`，並賦予值為字串 `"GYM2024-12345"`。
// 3. 請宣告一個 `const` 變數名稱為 `isRunningOnTreadmill`，並賦予值為 `true`。
// 4. 使用 `console.log()` 輸出 `alexAge`、`alexMembershipID` 和 `isRunningOnTreadmill`。

const alexAge = 25;
const alexMembershipID = "GYM2024-12345";
const isRunningOnTreadmill = true;
console.log(
    "alexAge : " + alexAge,
    "alexMembershipID : " + alexMembershipID,
    "isRunningOnTreadmill : " + isRunningOnTreadmill
);

// ### 題目二：變數命名練習
// - 瑜伽團課 - 300 元
// - 重訓團課 - 500 元
// - 重訓 1 對 1 課程 - 1500 元
// 情境：Alex 這個月的運動預算有 3000 元
// 請修改以下中文變數名稱，讓他符合變數語意

const yogaClass = 300;
const reTrainingClass = 500;
const reTrainingClass_1by1 = 1500;
const monthlyBudget = 3000;

// ### 題目三：變數計算
// 呈上題，Alex 想要規劃好自己的運動課程，需符合以下三個條件，請將花費總數計算在 AlexBudget 上，一起幫幫他吧！
// 條件一：一定至少要買 1 堂重訓團課和瑜伽團課
// 條件二：瑜伽團課只能一次買 3 堂
// 條件三：一定要花到 2400 以上，並購買 5 堂課程

// 花費總金額
let total = 0;
// Alex 的預算金額
let AlexBudget = monthlyBudget;
// 堂數總數
let classSum = 0;

// 各課程的購買堂數
let yogaClassCount = 3;
let reTrainingClassCount = 1;
let reTrainingClass_1by1Count = 1;

classSum = yogaClassCount + reTrainingClassCount + reTrainingClass_1by1Count;
total = yogaClass * yogaClassCount + reTrainingClass * reTrainingClassCount + reTrainingClass_1by1 * reTrainingClass_1by1Count;

// 是否符合 3 個條件
if((classSum >= 5 && total > 2400) && (yogaClassCount >= 1 && reTrainingClassCount >= 1) && (yogaClassCount%3 == 0)){
  console.log("達成目標");
}else{
  console.log("未達成目標");
}

AlexBudget -= total;
console.log(`Alex 買完課程了，總花費 ${total} 元，他一共剩下 ${AlexBudget} 元`);

// ### 題目四：線稿圖截圖，看圖宣告變數
// 請參考資料夾內 q4.webp 圖片
// 請依照你看到的內容來嘗試設計變數和值（至少 3 個）
let classObj = [
  {
      classTitle: "14堂組合包方案",
      price: 2520,
      classDescribe: {
          classNum: 14,
          classHour: 50,
          avgClassPrice: 180,
          disCount: 9
      }
  }
];
console.log(classObj);

// ### 題目五：布林值與變數定義，看是否有用對 const, let
// 情境：Alex 在往健身房的路上，望向城市的風景，請描述她看到的一切，並宣告變數與賦予值
// 4-1. Alex 在等紅綠燈，他抬頭看一下現在是紅燈，還有 28 秒綠燈（最多 3 個宣告）
// 4-2. 目前一起等待的機車有 8 台
// 4.3. Alex 望向天空，看到天上有 5 朵白雲和 1 顆太陽

let trafficLight = "Red";
let trafficLightTime = 28;
let isWaittrafficLight = true;
let scooterNum = 8;
let cloud = 5;
const Sum = 1;

// ### 題目六：情境題：簡單變數計算
// 情境：Alex 每天都會帶著 2000cc 的水壺
// 他早上喝了 500cc
// 中午又喝了 800cc
// 下午去健身前，先裝了 1000cc 的水
// 健身時，又喝掉了 700cc
// 那麼他的水壺還剩下多少 cc 的水？
// 以下的 Code 寫到一半，再請幫幫 Alex

let myWater = 2000;
myWater -= 500;
myWater -= 800;
myWater += 1000;
myWater -= 700;
console.log(`Alex 的水壺還有 ${myWater}cc 的水`);

// ### 題目七：情境題：變數計算
// 情境：Anna 每週都會到單次計費型的健身房運動，週日運動結束後，想知道自己本週的消費金額，但結帳系統出了點問題，Anna 決定自己用 JS 來計算。
// Anna 的總金額（totalBill）先從零開始計算。
// 健身房計費為：每小時器械使用費 50 元，每堂團體課程費用 150 元
// 她本週用了器械 3 小時。
// 她本週參加了 2 堂團體課程。

let totalBill = 0;
let machineUsePriceTotal = 0;
let groupClassesTotal = 0;
let machineUseHour = 3;
let groupClassesCount = 2;
const machineUsePrice = 50;
const classGroupPrice = 150;

machineUsePriceTotal = machineUsePrice * machineUseHour;
groupClassesTotal = classGroupPrice * groupClassesCount;
totalBill = machineUsePriceTotal + groupClassesTotal;

console.log(
    `Anna 本週器械使用費共 ${machineUsePriceTotal} 元，團體課費用共 ${groupClassesTotal} 元，一共消費金額是 ${totalBill}元`
);


// ### 題目八：變數重新賦予值
// 情境：請依照以下程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更

// 宣告了一個 a 的變數，並賦予了一個數字型別為 8 的值
let a = 8;
// 宣告了一個 b 的變數，並賦予了一個數字型別為 0 的值
let b = 0;
// 修改 a 變數內的值，並賦予了一個數字型別為 13 的值
// 此時 a = 13，b = 0
a = 13;
// 修改 a 變數內的值，並賦予了 b 的變數加上數字型別為 4 的值
// 此時 a = 4，b = 0
a = b + 4;
// a 的變數減 b 的變數的值，但因為沒有等於，所以並沒有賦予值出去
// 此時 a = 4，b = 0
a - b;
// 修改 b 的變數內的值，並賦予了 b 的變數再加上數字型別為 1 的值
// 此時 a = 4，b = 1
b += 1;

console.log(`a:${a},b:${b}`);

// ### 題目九：型別查詢
// 請不要觀看 console.log，透過註解告知解答每個變數的型別

// a 是數字 number
// b 是數字 number

// c 是字串 string
// 因為 world 是文字
let c = 'world'; 

// d 是數字 number
// 因為 456 沒有用單引號包覆，所以是數字
let d = 456; 

// e 是字串 string
// 文字 + 數字會轉型成文字，這邊的加符號等於字串串聯意思，不是數字加減意思
let e = c + d; 

// f 是布林 boolean
// true/false 都是布林型態
let f = false; 

// g 是數字 number
// 數字 + 數字等於數字，這邊的加符號是數字加減意思
let g = d + d; 

// h 是數字 number
// 布林 + 數字，布林的 true/false 會換成 1/0，因此會轉型成數字，這裡的加符號等於加減的意思
let h = f + g; 

// ### 題目十：傳值與傳址參考
// 情境：請依照程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更

// 宣告了一個 numberArr1 的變數，並賦予了一個數字陣列為 5、10、15 的值給此變數
let numberArr1 = [5, 10, 15];

// 宣告了一個 numberArr2 的變數，並賦予了一個數字陣列為 numberArr1 給此變數
// 此時為傳址，兩個變數指向相同的記憶體
let numberArr2 = numberArr1;

// numberArr2 陣列中增加 20 數字型態的值並放在陣列最後面
// 由於傳址關係，因此 numberArr1 結果與 numberArr2 相同
// numberArr1 = [5, 10, 15, 20]，numberArr2 = [5, 10, 15, 20]
numberArr2.push(20);

// numberArr2 重新賦予新的數字型態陣列給他，因此指向新的記憶體與 numberArr1 不同
// numberArr1 = [5, 10, 15, 20]，numberArr2 = [25, 30, 35]
numberArr2 = [25, 30, 35];
console.log(numberArr1, numberArr2);
