var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let arr=[];
mix.forEach(variable=>arr.push(typeof variable));
console.log(arr);