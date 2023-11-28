let persona = {
    id : 880769955,
    nombre : 'Wilson',
    genero : 'Masculino',
    edad : 38
}

let banco = {
    numeroCuenta : 807699551,
    nombreCliente : 'WilsonSerna',
    deposito : 150000,
    saldo : 2000000
}
persona.id = 654321
console.log('Persona: ', persona)
console.log('Banco: ', banco)

console.log(persona["nombre"])
console.log(persona.genero)
console.log(persona["edad"])
console.log(banco.deposito)
console.log(banco["saldo"])