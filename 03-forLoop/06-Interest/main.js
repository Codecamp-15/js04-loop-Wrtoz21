

for (let j = 1; j <= 10; j++) 
{
    money = 100000;
    interestrate = 2.5;
    let balance = 0;
    balance = money+((money*2.5)/100);
    for(let i = 1;i<j;i++)
    {
        balance = balance+((balance*2.5)/100)
    }

    console.log(balance)
    
    
}