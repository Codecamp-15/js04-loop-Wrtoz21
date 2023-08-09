//()parenthesis วงเล็บ 
// {} bracket  ปีกกา
// [] square bracket = ก้ามปู

// for(let i = 1; i <= 20; i++)
//     {
//     if(i % 3 == 0 && i % 5 ==0){
//         console.log('FizzBuzz')

//     }
//     else if (i %5 == 0){
//         console.log('Fizz')
        
//     }
//     else if (i % 3 == 0){
//         console.log('Buzz')
        
//     }
//     console.log(i)
// }
// EX3
// for(let i = 1; i <= 20; i++)
//     {
//     if(i % 3 == 0 && i % 5 ==0){ console.log('FizzBuzz')   }
//     else if(i % 5 ==0){ console.log('Fizz')   }
//     else if(i % 3 == 0){ continue }
//     console.log(i)
//     }
// EX3B
// for(let i = 1; i <= 20; i++){
//     //i = 2 log(2) ,log(even)
//     if (i % 2==0) console.log(i);
//     else continue;//update ค้า และเริ่มรัน loop ถัดไป
//     console.log('even');
// }
// EX4 concat string

// let str='';
// for(let i = 1; i <= 10; i++){
//     //Guard
//     if (i%3==0) continue;
//     str +=i;
//     // " " + 1 => "1"
//     // "1" + 2 => "12"
// }
// console.log(str);

// EX5 : remove vowel (a,e,i,o,u)
// let src = 'codecame';
// let res = ''; //cdcmmp
// //src.length ==> 8
// //src[0] ==> c
// // src[1] ==> o
// for(let i = 0; i < src.length; i++){
//     let c = src[i];
//     if(c == 'a' ||c == 'e' ||c== 'i' ||c== 'o' ||c== 'u' ) continue;
// res = res + src[i];    
// }
// console.log(res)

// Multiplication table

for(let i = 2; i <= 3; i++){
    for(let j = 0; j <=12; j++){
        console.log(`${i}*${j} = ${1*j}`);
    }
    console.log('\n')
}

