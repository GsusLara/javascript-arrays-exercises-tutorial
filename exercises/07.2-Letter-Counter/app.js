let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

for (let i = 0; i < par.length; i++) {
    let letra = par.charAt(i)
    letra=letra.toLowerCase();
    if (letra == ' '){
        continue;
    }
    let espacio
    if (counts[letra]==undefined){
        counts[letra] = 1
    }else{
        counts[letra] = counts[letra]+1
    }
}
console.log(counts);
