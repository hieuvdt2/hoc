// object- doi tuong
// key - value
// propertiles(thuoc tinh)
// metthods(phuog thuc)


// const person = {
//     name: "pete",
//     age: 19,
//     color: "white"
// }

// function : ham
// function sayHello(){
//     console.log("gello");
// }
// sayHello();

// function caculate(a,h){
//     return(a+h)/2
// }
// const s= caculate(1,3);
// console.log(s);

// EX
//  ex1
// tạo 1 function nhận vào số n
// tính n!
// function tinhGT(n) {
//     let giaithua = 1;
//     for (let i = 1; i <= n; i = i + 1) {
//        giaithua= giaithua * i
//     }
//     return giaithua;

// }
// const s = tinhGT(3);
// console.log(s);
//  ex2
// tạo 1 function nhận vào a,b,c
// trả về max

// cach 1
// function maxx(a,b,c) {


//     if(a>b && a>c){
//         return a;
//     }else if( b>a && b>c ){
//         return b;
//     }else {
//         return c;
//     }
    
// }
// const s =maxx(1,2,4);
// console.log(s);


// cach 2

// function max(a,b,c){
//     return Math.max(a,b,c);
// }
//  ex3
// tạo 1 function nhận vào 1 mảng số
// tính tổng các phần tử trong mảng số

// function sum(arr){
//     let result = 0;
//     for(let number of arr){
//         result = result+number;
//     }
//     return result;
// }
// const s = [1,2,4];
// console.log(sum(s));

// //  ex4
// // tạo 1 function nhận vào 1 chuỗi
// //  trả về chuỗi nghịch đảo


// function reverse(str){
//     let result = str.split("").reverse().join("");
//     return result;
// }
// console.log(reverse("hello"));

//  ex5
// tạo 1 function nhận vào 1 chuỗi, kiểm tra xem chuỗi đó có phải là
// chuỗi palindrome
// nếu có trả về true, không trả về false
// function isPalindrome(str){
//     return str.toLowerCase()=== reverse(str.toLowerCase());

// }console.log(isPalindrome("pop"));



//  Object(C/R/U/D)
const person = {
        name: "pete",
        age: 19,
        color: "white",
     sayHello: function(){
         console.log("hello");
         return this;
     },
    };
  
    person.sayGoodBye = function(name){
                console.log(`Goodbye ${name}`);
            };
        person.sayHello();
        console.log(person);
    // R : read

    // console.log(person.name);
    // console.log(person["name"]);

    // const randomString = " age";
    // person[randomString];

    // Create

    // person.hair = "yellow"
//   
    //  U : update
    // person.name = "hieu";

    // delete
    // delete person.name;
    // console.log(person);

    // Loop
    // for(let key in person){
    //     console.log(key, person[key]);
    // }