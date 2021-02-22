var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    let salida=[];
    people.forEach(nombre=>{
        if (nombre!=personName){
            salida.push(nombre);
        }
    });
    return salida
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));