function lyricsGenerator(ridim) {
    let salida;
    let concatenar='';
    let con=0;
    ridim.forEach(element => {
        if (element===1){
            salida='Drop the base'
            con+=1
            if(con===3){
                salida='Drop the base ¡¡¡Break the base!!!'
            }
          }else{
            salida='Boom'
          }
          concatenar+=' '+salida+' '
    });
   return concatenar
  }
// test Data
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))