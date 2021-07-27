var moneyDict = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 50,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
};


function checkCashRegister(price, cash, cid) {
    let amtLeftToPay = Math.round((cash - price) * 100);
    let cidObj = cid.reduce((acc, [moneyType, amt]) =>{
        return {
            ...acc,
            [moneyType]: Math.round(amt * 100)
        }
    }, {});

    let moneyToGive = [];

    if(amtLeftToPay >= moneyDict['ONE HUNDRED'] && cidObj['ONE HUNDRED']){
        if(amtLeftToPay >= cidObj['ONE HUNDRED']){
            let amtToSubtract = cidObj['ONE HUNDRED'];
            amtLeftToPay -= amtToSubtract;
            moneyToGive.push['ONE HUNDRED', amtToSubtract / 100];
            cidObj['ONE HUNDRED'] = 0;
        } else {
            const amtToSubtract = Math.floor((amtLeftToPay/ moneyDict['ONE HUNDRED'])) * moneyDict['ONE HUNDRED'];
            amtLeftToPay -= amtToSubtract;
            moneyToGive.push([moneyType, amtToSubtract / 100]);
            cidObj['ONE HUNDRED'] -= amtToSubtract;
        }
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));