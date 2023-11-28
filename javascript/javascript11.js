let promesa1 = new Promise((response,reject) => {
    setTimeout(() => {
        let resp = '1 Respuesta del servicio'
        response(resp)
        reject('fallo')
    }, 1000);
})

let promesa2 = new Promise((response,reject) =>{
    setTimeout(() => {
        let resp = '2 Informacion Importante'
        response(resp)
        reject('fallo')
    }, 1000);
})

let promesa3 = new Promise((response,reject) =>{
    setTimeout(() => {
        let resp = '3 Respuesta del servicio e informacion Importante'
        response(resp)
        reject('fallo')
    }, 1000);
})

async function ejecutarPromesas(){
    let respuestaProm1 = await promesa1
    console.log(respuestaProm1)
    let respuestaProm2 = await promesa2
    console.log(respuestaProm2)
    let respuestaProm3 = await promesa3
    console.log(respuestaProm3)

}

ejecutarPromesas()