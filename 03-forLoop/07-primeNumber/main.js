for (let n = 2; n <= 100; n++) {
    let isPrime = true;//วิธีการที่เรียกว่า flag
    for (let divider = 2; divider < n; divider++) {
        if (n % divider ==0) 
        {
            isPrime = false;
            break;
            //^ ให้หยุดการทำงานเมื่อเจอเงื่อนไข
        }
    
    if (isPrime) console.log(n);
}
}