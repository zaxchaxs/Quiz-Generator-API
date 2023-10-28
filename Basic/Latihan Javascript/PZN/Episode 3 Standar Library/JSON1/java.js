

// JSON
// https://www.json.org/json-en.html


{
    const person = {
        firstName : "Zaxch",
        lastName : "Chaxs",
        myPrivacy : {
            country : "Indonesia",
            school: "Tamat dong",
            phoneNum: 0821
        },
        hobbies: ["Game", "Turu"]
    };

    const json = JSON.stringify(person);   // dari object ke json
    console.info(json);

    const jsonV1 = JSON.parse(json);    // dari json ke object
    console.info(jsonV1);

}





