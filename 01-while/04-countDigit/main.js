let number = (+(prompt("input number")));
let i = 1;
let count = 0;
while ( number >= 1){
    console.log(number)
    count++;
    number = number /10;
}

console.log(count)

// if (n<0) n= -n; หาค่าที่ติด -

// while(number){
//      
//     let remainder = n % 10;
//     n = (n-remainder) /10
//     sum += remainder;
//     count++;
// }
// console.log(count, sum);