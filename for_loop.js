console.log("this is for loop tut");

//ARRAY OF STRINGS
let people = ["harry", "ashwin", "vanashree", "shyam", "prabhakar", "waikar", "khapre"];
console.log(people);

//ITTRATING TRADITIONAL FOR LOOP
// for (let i = 0; i < people.length; i++) {
//     const element = people[i];
//     console.log(element);
//}

//for in loop gives indexs when it comes to an ARRAY
for (let key in people) {
    console.log(key);
}


let obj = {
    Name: "Harry Waikar",
    Hobbies: "Bhur jane",
    Language: "Bhu bhu"
};
// console.log(obj);

//****************************FOR IN LOOP***************************
// ITTRATING OBJECT

//1.1 ITTRATING OBJECT USING TRADITIONAL FOR LOOP------- YARRRR SO HARD
for (let index = 0; index < Object.keys(obj).length; index++) {
    const element = obj[Object.keys(obj)[index]];
    console.log(element);
}
console.log(obj["Name"]);
console.log(obj.Name);


//1.2 ITTRATING OBJECT USING TRADITIONAL FOR IN LOOP----Easy
for (let key in obj) {
    console.log(obj[key]);
}
console.log(obj.Name);
console.log(obj["Name"]);


//IITRATING STRING

//2.1 we can also use FOR IN loop for the string

let myString = "This is my string";
for (let key in myString) {
    console.log(myString[key]);
}

//2.2 IITRATING STRING USING TRADITIONAL FOR LOOP

for (let index = 0; index < myString.length; index++) {
    const element = myString[index];
    console.log(element);
}


//****************************FOR OF LOOP***************************
console.log("****************************FOR OF LOOP***************************");

// FOR OF LOOP for the array
people = ["harry", "ashwin", "vanashree", "shyam", "prabhakar", "waikar", "khapre"];

for (let key of people) {
    console.log(key);
}
console.log(people);

// FOR OF LOOP for the STRINGS
myString = "This is my string";
for (let key of myString) {
    console.log(key);
}

// FOR OF LOOP for the object
obj = {
    Name: "Harry Waikar",
    Hobbies: "Bhur jane",
    Language: "Bhu bhu"
};

//we will get error here because obj is not an itrable item
// for(let key of obj){
//     console.log(key);
// }

