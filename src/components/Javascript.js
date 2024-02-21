//1. write a javscript function that return the reverse string
// function rev(str){
//     return str.split("").reverse().join("")
// }

// console.log(rev("Hello"));

// const usingLoop = (str) =>{
//     debugger
//     let string = ""
//     for(let i=str.length;i>=0;i--){
//         console.log("length",str.length)
//         console.log("str[i]",str[i])
//         string = string + str[i]
//     }
//     return string;
// }

// const string = "hello world"
// const resultUsingLoop = usingLoop(string)
// console.log(resultUsingLoop)


// 2.	Write a JavaScript function that checks whether a passed string is palindrome or not
// function Pal(str){
//     let string = str.split("").reverse().join("")
//     console.log(string);
//     if (string == str){
//         console.log("Is Palindrome")
//     }else{
//         console.log("Not a Palindrome")
//     }
// }
// Pal("madam")

// const usingloop = (str) => {
//     let string = "";
//     debugger
//     for (let i = str.length - 1; i >= 0; i--) {
//         console.log("str.length", str.length)
//         console.log("str[i]", str[i]);
//         string += str[i];
//     }
//     if (string === str) {
//         console.log("Is Palindrome");
//     } else {
//         console.log("Not a Palindrome");
//     }
// }

// usingloop("madam");


// 3.Write a JavaScript function that return a passed string with letters in alphabetical order.
// function alpha(str){
//     return str.split("").sort().join("")
// }
// console.log(alpha("hello"));

// const usingloop = (str) =>{
//     debugger
//     let charAt = str.split("")
//     console.log("charAt",charAt);
//     for (let i =0;i<str.length;i++){
//         for(let j = i+1;j<str.length;j++){
//             if(charAt[i]>charAt[j]){
//                 [charAt[i],charAt[j]] = [charAt[j],charAt[i]]
//             }
//         }
//     }
//     return charAt.join('')
// }

// const resultUsingLoop = usingloop("hello") 
// console.log("resultUsingLoop",resultUsingLoop)


// 4.	Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper Case.
// function Upper(str){
//     let UpperString = str.split(" ").map((word) => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//     console.log(UpperString);
// }

// Upper("hello how are you");

// const usingLoop = (str) =>{
//     const string =str.split(" ")
//   let newString =""
    
//     for(let i = 0; i< string.length;i++){
//         newString += string[i].charAt(0).toUpperCase() + string[i].substring(1)+" "
//     }
//     return newString
// }

// const resultUsingLoop = usingLoop("hello how are you");
// console.log("resultUsingLoop",resultUsingLoop)


// 5.Write a JavaScript function to get the number of occurrences of each letter in specified string
//   function occr(str) {
//     let occrStr = {};
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (occrStr[char]) {
//             occrStr[char]++;
//         } else {
//             occrStr[char] = 1;
//         }
//     }
//     return occrStr;
// }

// console.log(occr("Hello"));


// 6.	loop an array and add member of it

// const arr = [10,20,30,20,3,12]
// function addmember(arr){
//     console.log(arr);
//     let sum = 0;
//     for (let i = 0;i<arr.length;i++){
//         console.log("arr[i]",arr[i])
//         // sum += arr[i]     else second
//         sum = sum+arr[i];
//         console.log("sum",sum);
//     }
//     return sum
// }
// const resultUisngLoop =addmember(arr)

// console.log("resultUisngLoop",resultUisngLoop)


// 7.	In an array of numbers and strings,only add those member which are not strings
// const arr = ["hello", 20, "world", 30, 50, "welcome"];

// function noString(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             sum += arr[i];
//         }
//     }

//     console.log("Sum of numbers:", sum);
// }

// noString(arr);


// 8. Loop an array of objects and remove all objects which don't have gender's value male
