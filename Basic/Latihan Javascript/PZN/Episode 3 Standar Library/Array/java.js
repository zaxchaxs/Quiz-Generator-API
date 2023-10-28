

// Array
/* untuk lebih rinci cek di
   https://youtu.be/oFTeb4Lkwek?t=1255  */

    {
    const array1 = ['a', 'b', 'c'];
    array1.forEach(value => console.log(value));
    }

    {
        const posh = ["Irzi", "Rahmatullah", "Zaxhchax"];
        posh.forEach(function (index, value){
            console.info(`${value} : ${index}`);
        })
    }

    {
        //array transform

        const girl = "Irzi rahmatullah spd mpd si it whatever".split(" ");
        const ladies = girl.map( (value) => value.toUpperCase() );
        console.info (ladies)

        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const total = numbers.reduce( (value1, value2) => value1 + value2);
        console.info (total);
    }