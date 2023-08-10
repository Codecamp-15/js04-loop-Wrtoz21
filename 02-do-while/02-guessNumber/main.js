// let ansNumber = prompt('Enter numbers');
// let isNull = ansNumber == null;
// let isEmtry = ansNumber.trim() === '';
// let isNan = isNaN(ansNumber);
// let isValid = ansNumber == null || ansNumber.trim() ==='' || isNaN(ansNumber);
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// if (isValid){
//     alert('Invalid input');
// }else if (outOfRange){
//     alert('Invalid Range');
// }else if (isInRange){
//     alert("Try to guss number")
// }
let ansNumber ='';
let isEmpty;
let isNan;
do{
    ansNumber = prompt('Enter your magic number');
    isEmpty = ansNumber.trim()==='';
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber)<1 || Number(ansNumber) > 99;
    if (isEmpty || isNan){
        alert('Invalid Input, Try 1-99');
    }else if (outOfRange){
        alert('Invalid Range, Try 1-99');
    }
} while (isEmpty || isNan);

do{
    gussNumber = prompt("Enter your answer") || '';
    isEmpty = gussNumber.trim()==='';
    isNan = isNaN(gussNumber);
    outOfRange = Number(gussNumber)<1 || Number(gussNumber) > 99;
    if (isEmpty || isNan){
        alert('Invalid Input, Try 1-99');
    }else if (outOfRange){
        alert('Invalid Range, Try 1-99');
    }else if(+gussNumber > +ansNumber){
        alert('Too high')
    }
    else if(+gussNumber < +ansNumber){
        alert('Too Low');
    }
    else if(+gussNumber === +ansNumber){
        alert('Correct');
    }

}while(+gussNumber != +ansNumber);