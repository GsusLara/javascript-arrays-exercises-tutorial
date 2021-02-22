// Code goes here
let matrixBuilder = (medida => {
    let caja=[];
    for (let a = 0; a < medida; a++) {
        let fila = [];
        for (let i = 0; i < medida; i++) {
            //fila.push(Math.floor(Math.random() * (2 - 0) + 0))
            fila.push(1)
        }
        caja.push(fila);
    }
    return caja
})
// do not change anything from this line down
console.log(matrixBuilder(5))