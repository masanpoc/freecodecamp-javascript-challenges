function rot13(str) {
    function shift(letter){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    alphabet += alphabet;
    let arr = alphabet.split('');
    let newLetter = arr[arr.indexOf(letter)+13];
    // console.log(letter, newLetter);
    return newLetter
    }
    let regex = /\w/g;
    str = str.replace(regex, shift);
    console.log(str);
    return str;
  }
  
  rot13("SERR PBQR PNZC");
  rot13("SERR CVMMN!")