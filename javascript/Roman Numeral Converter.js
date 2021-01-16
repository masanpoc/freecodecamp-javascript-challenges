function convertToRoman(num) {
    function compare(number, array){
        let romanian;
        switch(number){
            case '1':
            romanian=array[0];
            break;

            case '2':
            romanian=array[0]+array[0];
            break;

            case '3':
            romanian=array[0]+array[0]+array[0];
            break;

            case '4':
            romanian=array[0]+array[1];
            break;

            case '5':
            romanian=array[1];
            break;

            case '6':
            romanian=array[1]+array[0];
            break;

            case '7':
            romanian=array[1]+array[0]+array[0];
            break;

            case '8':
            romanian=array[1]+array[0]+array[0]+array[0];
            break;

            case '9':
            romanian=array[0]+array[2];
            break;
        }
        return romanian
    }

    function thousand(number){
        let arrThousand = ['M'];
        let romanNumber= "";
        for(let n=0; n<number; n++){
            romanNumber+=arrThousand[0];
        }
        return romanNumber
    }
    function hundred(number){
        let arrHundred = ['C', 'D', 'M'];
        let romanNumber = compare(number, arrHundred);
        return romanNumber
    }
    function nty(number){
        let arrNty = ['X', 'L', 'C'];
        let romanNumber = compare(number, arrNty);
        return romanNumber
    }
    function zero(number){
        let arrZero = ['I', 'V', 'X'];
        let romanNumber = compare(number, arrZero);
        return romanNumber
    }
    // how many numbers do we have? 
    // last element-zero sublast element - nty ...
    let arr = num.toString().split('').reverse();
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        switch(i){
            case 0:
            // console.log(arr[i], zero(arr[i]));
            newArr.push(zero(arr[i]));
            break;

            case 1:
            // console.log(arr[i],nty(arr[i]));
            newArr.push(nty(arr[i]));
            break;

            case 2:
            console.log(i);
            newArr.push(hundred(arr[i]));
            break;

            case 3:
            console.log(i);
            newArr.push(thousand(arr[i]));
            break;
        }
    }
    console.log(newArr);
    
    let result = newArr.reverse().join('');
    result = result.toUpperCase();
    console.log(result);
    return result;
}

convertToRoman(3999);