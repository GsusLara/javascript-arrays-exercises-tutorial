

var myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here
let newArray=[];
const myFunction=numero=>{
    newArray.push(numero*3);
}
myNumbers.map(myFunction);
console.log(newArray);