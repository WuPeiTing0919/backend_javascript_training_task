const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
let purchaseRecords = [];

// 第一階段：新增課程購買記錄（優惠定價）
function addPurchaseRecord(name,courses){
    let price = 0;
    let total = 0;

    // 計算課堂數量所對應的課堂單價
    switch (true){
        case courses >= 1 && courses <= 10 :
            price = 1500;
            break;

        case courses >= 11 && courses <= 20 :
            price = 1300;
            break;
        
        case courses >= 21 :
            price = 1100;
            break;
        
        default :
            console.log("輸入錯誤，請輸入有效的會員名稱和課程數量");
            return;
    }

    total = courses * price;
    
    console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${total} 元。`);
    purchaseRecords.push({
            name : name,
            courses : courses,
            price : price,
            total : total
        });
}

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");

// 第二階段：計算目前的總營業額
let totalPrice = 0
function calculateTotalPrice(myArray){
    myArray.forEach(item => {
        totalPrice += item.total;
    });

    console.log(`目前總營業額為 ${totalPrice} 元`);
}

calculateTotalPrice(purchaseRecords);

// 第三階段：篩選出還沒有購課的會員
function filterNoPurchaseMember(myArray,dataArray){
    let noCoursesArray = dataArray.filter(item => 
        myArray.map(e => e.name).indexOf(item) === -1
    );

    console.log(`未購買課程的會員有：${noCoursesArray}`);
}

filterNoPurchaseMember(purchaseRecords,members);
