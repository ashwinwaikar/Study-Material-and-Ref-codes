console.log("this is tut 42");

let myBtn=document.getElementById("myBtn");


let content=document.getElementById("content");

//get request with local file

// function getData(){
//     console.log("started getData");
//     url="harry.txt";
//     fetch(url).then((response)=>{
//         console.log("inside first then");
//         return response.text(); 
//     }).then((data)=>{
//         console.log("inside second then");
//         console.log(data);
//     })
// }

// get request with outside url
// function getData(){
//     console.log("started getData");
//     url="http://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("inside first then");
//         return response.json(); 
//     }).then((data)=>{
//         console.log("inside second then");
//         console.log(data);
//     })
// }

// console.log("before running getData");
// getData();
// console.log("after running getData");


//post request with outside url
function postData(){
    console.log("started getData");
    url="http://dummy.restapiexample.com/api/v1/create";
    data='{"name":"Ashwin waikar","salary":"123","age":"23"}'; //change name after every run
    params={
        "method":"post",
        "headers":{
            "content-Type":"application/json"
        },
        "body":data
        }
    fetch(url,params).then((response)=>{
        console.log("inside first then");
        return response.json(); 
    }).then((data)=>{
        console.log("inside second then");
        console.log(data);
    })
}

console.log("before running getData");
postData();
console.log("after running getData");

