function checkCashRegister(price, cash, cid) {
    // calculate amount to return
    let amount = cash - price;
    // calculate sum of cash we have
  
    let cid2=cid.map(el=> el[1]);
    let sumCash = (accumulator, currentValue)=>accumulator+currentValue;
    let sum = cid2.reduce(sumCash, 0);
    sum=Math.round(sum*100)/100;
  
    // console.log(amount);
    // console.log(sum);
  
    // define object to return
  
    let cashChange = {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    }
  
    // if not enough money --> return insufficient funds
    if(sum<amount){
      // console.log('not enough');
      return cashChange}
    //  -----------------
    
    // start calculating: what do we have?
    // console.log(cid2);
  
  
    
    // if amount>100 
    // --> do we have onehundreds?&&amount>100?  -> +1 (set new amount and push onehundred to changearray) -> do we have onehundreds? &&amount>100? --> +1 -> loop until amount<100 or onehundreds=0
    function loop(incash, index, money, currency) {
      while(incash[index]>0 && money>=currency){
        incash[index]=incash[index]-currency;
        money=Math.round((money-currency)*100)/100;
      }
      let arr=[incash, money];
      return arr
    }
    // create a copy of cid2
    let cid2Compare = cid2.slice(0);
    // we use the function for every currency starting from last array element
    let arrCompare=[];
    
    for(let j=cid2.length-1; j>=0; j--){
  
      switch(j){
  
        // check one hundred
        case 8:
        let arr8=loop(cid2Compare, j, amount, 100);
        // set new incash
        cid2Compare=arr8[0];
        // set new amount
        amount=arr8[1];
        // console.log(cid2);
        // console.log(cid2Compare);
        // console.log(amount);
        break;
  
        case 7:
        let arr7=loop(cid2Compare, j, amount, 20);
        // set new incash
        cid2Compare=arr7[0];
        // set new amount
        amount=arr7[1];
        // console.log(cid2);
        // console.log(cid2Compare);
        // console.log(amount);
        break;
  
        case 6:
        let arr6=loop(cid2Compare, j, amount, 10);
        // set new incash
        cid2Compare=arr6[0];
        // set new amount
        amount=arr6[1];
        // console.log(cid2);
        // console.log(cid2Compare);
        // console.log(amount);
        break;
  
        case 5:
        let arr5=loop(cid2Compare, j, amount, 5);
        // set new incash
        cid2Compare=arr5[0];
        // set new amount
        amount=arr5[1];
        // console.log(cid2);
        // console.log(cid2Compare);
        // console.log(amount);
        break;
  
        case 4:
        let arr4=loop(cid2Compare, j, amount, 1);
        // set new incash
        cid2Compare=arr4[0];
        // set new amount
        amount=arr4[1];
        // console.log(cid2);
        // console.log(cid2Compare);
        // console.log(amount);
        break;
  
        case 3:
        let arr3=loop(cid2Compare, j, amount, 0.25);
        // set new incash
        cid2Compare=arr3[0];
        // set new amount
        amount=arr3[1];
        // console.log(cid2);
        // console.log(cid2Compare);
        // console.log(amount);
        break;
  
        case 2:
        let arr2=loop(cid2Compare, j, amount, 0.1);
        // set new incash
        cid2Compare=arr2[0];
        // set new amount
        amount=arr2[1];
        // console.log(cid2);
        // console.log(cid2Compare);
        // console.log(amount);
        break;
  
        case 1:
        let arr1=loop(cid2Compare, j, amount, 0.05);
        // set new incash
        cid2Compare=arr1[0];
        // set new amount
        amount=arr1[1];
        // console.log(cid2);
        // console.log(cid2Compare);
        // console.log(amount);
        break;
  
        case 0:
        let arr0=loop(cid2Compare, j, amount, 0.01);
        // set new incash
        cid2Compare=arr0[0];
        // set new amount
        amount=arr0[1];
        console.log(cid2);
        console.log(cid2Compare);
        console.log(amount);
        break;
      }
      arrCompare.unshift(Math.round((cid2[j]-cid2Compare[j])*100)/100);
    }
  
    if(amount!=0){
      return cashChange
    }
  
    console.log(arrCompare);
    for(let n=0; n<cid.length; n++){
      cid[n][1]=arrCompare[n];
    }
    if(Math.round((cid2Compare.reduce(sumCash)*100))/100==0){
      cashChange.status='CLOSED';
      cashChange.change=cid;
      return cashChange
    }
    
    // we have to filter the array to display only if value !=0
    console.log(cid);
    cid=cid.filter(el=>el[1]>0);
    cid=cid.reverse();
    console.log(cid);
    
  
    cashChange.status='OPEN';
    cashChange.change=cid;
    console.log(cashChange);
    return cashChange
  
  }
  
  checkCashRegister(10.37, 200, [["PENNY", 1.03], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 600], ["ONE HUNDRED", 0]]);