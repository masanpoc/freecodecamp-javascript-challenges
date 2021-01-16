function telephoneCheck(str) {
    // if it contains sth different than /([0-9]/ at beginning --> return false
    if(str.match(/^[0-9(]/g)==null){return false}
    // if it contains sth different than number/()/-/\s --> return false
    if(str.match(/[0-9-()\s]+/g)!=str){return false}
    // if it contains ( and not ) after --> return false
    if(str.match(/([(])(?!.+[)])/g)!=null){return false}
    // if it contains ) and not ( before --> return false
    if(str.match(/(?<![(].+)([)])/g)!=null){return false}
    // if it contains ()
    if(str.match(/[(].+[)]/g)!=null){
      // but inside there are not 3/1 numbers--> return false
       if(str.match(/[(](([0-9]{3})|[0-9])[)]/g)==null){return false}
    }  
    // if it contains <10 or >11 numbers --> false
    let str2 = str.replace(/[()-\s]/g, '');
    console.log(str2);
    if(str2.length>11 || str2.length<10){return false}
    // if str contains 11 numbers && 1st is not 1 --> false
    if(str2.length==11 && str2[0]!=1){return false}
    
  
    return true;
  }
  
  // telephoneCheck("555-555-5555");
  telephoneCheck("1 456- 789 4444");
  telephoneCheck("(6054756961)");
  telephoneCheck("123**&!!asdf#")