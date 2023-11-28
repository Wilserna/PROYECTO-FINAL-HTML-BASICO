const persona = {
    nombre: 'Wilson',
    apellido: 'Serna',
    genero: 'Masculino',

    caminar: function(){
        return "Juan esta caminando"
    },

    nombreCompleto: function(){
        return this.nombre +" "+ this.apellido
    }
}

console.log(persona.caminar())
console.log(persona.nombreCompleto())