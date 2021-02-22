var arr = [45,67,87,23,5,32,60];

//Your code here.
let finarray=[]
for (let i=arr.length-1;i>-1;i=i-1){
    finarray.push(arr[i]);
}
console.log(finarray);