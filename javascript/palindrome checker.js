function palindrome(str) {
    // remove punctuation and whitespace
    let regex = /[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-\s]/gi
    str = str.replace(regex, '');
    // lowerCase
    str= str.toLowerCase();
    // transform into an array
    let arr = str.split('');
    // check if there is a palindrome for each el
    let newArr = arr.filter(function(el,index){
      if(el==arr[arr.length-1-index]){
        return true
      } else {
        return false
      }
    });
    console.log(arr);
    console.log(newArr);
    if(arr.length==newArr.length){
      console.log('works');
      return true
    } else {
      console.log('oops');
      return false
    }
  }
  
  palindrome("race car");
  // palindrome("A man, a plan, a canal. Panama");
  // palindrome("almostomla");
  // palindrome("My age is 0, 0 si ega ym.");