     // For Loop
{
        const x = 5;
    for (let i = 1; i <= 5; i++) {
        console.info(`ini for loop yang ke ${i}`)
    }
}   


    // For Of
{
    const numbers = [200, 300, 400, 500, 600];
    for (const number of numbers) {
        console.log(`for of ${number}`)
        
    }
}


// While Loop
{
    let x = 0;
    while(x < 7){
        console.log(`ini while loop yang ke ${x}`)
        x++
    };
}


// Do While Loop
{
    let i = 3;
    do {
        console.log(i)
        i++
    } while (i < 3) 
}   


// Continue Statement
{
    for (let i = 0; i < 20; i++) {
        if (i % 2 === 0 )continue;
        console.log(`ini continue statement : ${i}`)
        
    }
}