function getParkingLotState (estado){
    let parqueo={
        totalSlots:0,
        availableSlots:0,
       occupiedSlots:0
    };
    estado.forEach(fila => {
            fila.forEach(campo=>{
                if(campo==1){
                    parqueo.occupiedSlots+=1
                    parqueo.totalSlots+=1
                }else if(campo==2){
                    parqueo.availableSlots+=1
                    parqueo.totalSlots+=1
                }
            })
    });
    return parqueo
}
let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
console.log(getParkingLotState(parking_state))