let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// your code here
const mergeTwoList = lista => {
    let even = [];
    let odd = [];
    let salida=[];
    lista.forEach(numero => {
        if (numero % 2 == 0) {
            even.push(numero);
        } else {
            odd.push(numero);
        }
    });
    odd.forEach(impar=>{salida.push(impar)});
    even.forEach(par=>{salida.push(par)});
    return salida
}
console.log(mergeTwoList(list_of_numbers))
