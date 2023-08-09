
// sum = 0;
// for (i =1;i<=100;i++)
// {
   
//  sum =  sum + i;
 
// 2
// let sumEven=0;
// for(let i=1;i<=100;i++){
//     if(i%2==0) 
//     sumEven += i;
//     else sumOdd += i;
// }
// console.log(sumEven,sumOdd);

let sumEvenSquare = 0;
let sumThirdSquare = 0;
for(let i = 1 ; i <= 100; i++)
{
    if (i%2 ==0)
    {
        sumEvenSquare = sumEvenSquare +i **2;
    }

    if(i%3 == 0)
    {
        sumThirdSquare = sumThirdSquare+i **2;
    }
}
console.log(`sumEvenSQ: ${sumEvenSquare}`);
console.log(`sumThirdSQ: ${sumThirdSquare}`);
console.log(`Result is: ${sumEvenSquare -sumThirdSquare}`);






