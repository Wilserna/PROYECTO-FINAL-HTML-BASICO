// const array = new Array(10)

// array[0] = 'Array 0'
// array[1] = 'Array 1'
// array[2] = 'Array 2'
// array[3] = 'Array 3'
// array[4] = 'Array 4'
// array[5] = 'Array 5'
// array[6] = 'Array 6'
// array[7] = 7
// array[8] = 8
// array[9] = 9

// document.getElementById('lista').innerHTML= array
// console.log(array)
// console.log(array)
// console.log(array[4])
// console.log(array.length)

// const array = [9,5,7,2,4,8]
// console.log(array)
// console.log(array.sort())

// const array = ['1','2','3','4','5','6','7']
// console.log(array[array.length-1])
// const array = ['Wilson','Armando','Serna','Padilla']
// let frase = ''

// for (let index = 0; index < array.length; index++) {
//   frase += '<li>' + array[index] + '</li>'
    
// }
// document.getElementById('lista').innerHTML = frase
// const array = ['Curso', 'Back','End','Java']
// array[array.length] = 'Front'
// array[array.length] = 'Stack'

// console.log(array)
// const array = ['Curso','Back','End','Curso','Java','Curso']
// const resultado = array.filter(x => x=='Curso')
// console.log(resultado)

// const array = [
//     {nombre: 'Wilson', apellido: 'Serna'},
//     {nombre: 'Yenni', apellido: 'Ortega'},
//     {nombre: 'Juan', apellido: 'Serna'},
//     {nombre: 'Oriana', apellido: 'Serna'},
//     {nombre: 'Laura', apellido: 'Serna'}
// ]

// const resultado = array.filter(x => x.apellido == 'Serna')
// console.log(resultado)

// const usuarios = ['Wilson','Paola','Juan','Oriana','Laura'];
// const lista = usuarios.map(elem => {
//     return '<li>' + elem + '</li>';
// });
// const render = '<ul>' + lista.join('') + '</ul>';
// document.write(render);

// const numeros = [1,2,1,3,4];
// let todosPositivos = numeros.every((valor)=>{
//     return valor >= 0;
// })
// console.log(todosPositivos);

// const array = ["safari","chrome","firefox","edge"];
// const resultado = array.fill('Gamer',1);
// console.log(resultado);

//some () si al menos un elemento es positiivo
// const numeros = [-1,-2,2,-4];
// let almenosunPositivo = numeros.some((valor)=>{
//     return valor >= 0;
// })
// console.log(almenosunPositivo)

//every todos los elemento son positivos
// const numeros = [1,2,3,1];
// let todosPositivos = numeros.every((valor)=>{
//     return valor >= 0;
// })
// console.log(todosPositivos);

//pop elimina el ultimo elemento
// let buscadores = ["Chrome", "Firefox","Edge"];
// buscadores.pop();
// console.log(buscadores);

//push agrega elemento al final
// const array = ["Chrome", "Edge","Opera","Firefox"]
// array.push('Safari');
// console.log(array);

//shift elimina el primer elemento
// let buscadores = ["Chrome","Firefox","Edge"];
// buscadores.shift();
// console.log(buscadores);

//unshift agrega un elemento al inicio
// let buscadores = ["Chrome","Firefox","Opera"];
// buscadores.unshift('Safari');
// console.log(buscadores);

//find encuentra el primer elemento de referencia
// const array = ["safari","Chrome","Edge","Opera"];
// const resultado = array.find(x => x=='Opera');
// console.log(resultado);

//findIndexof() cuenta cantidad de elementos antes de encontrar la referencia
// const array = ["Chrome", "Edge","Safari","Opera"];
// const resultado = array.findIndex(x => x=='Safari');
// console.log(resultado);

//splice reemplaza elementos por la referencia
// const array = ["Chrome","Edge","Firefox","Opera"];
// array.splice(1,3,'Wilson');
// console.log(array);

//slice() devuelve el gurpo de elementos seleccionados
// const array = ["Chrome","Opera","Safari","Edge","Firefox"];
// const resultado = array.slice(1,3);
// console.log(resultado);

//join() permite agregar separadores a el arreglo
// const array = ["Chrome","Opera","Edge","Safari"];
// document.getElementById('lista').innerHTML = array.join('*');

//foreach metodo para iterar sobre un arreglo
const colores = ["Rojo","Verde","Azul"];
colores.forEach((elemento,indice) => console.log(elemento,indice));