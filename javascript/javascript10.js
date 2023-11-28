// let framework = ['HTML','JAVASCRIPT','CSS','REACT'];
// let tecnologias = document.getElementById('bucles');
// let salida = '';
// for (let index = 0; index < framework.length; index++) {
//     salida += framework[index] + ', ';
//     tecnologias.textContent = salida;
// }

// for (framework of framework){
//     console.log(framework);
// }

// const estudiante = {
//     nombre: 'Wilson',
//     edad: '38',
//     herramientas: ['HTML','JAVASCRIPT','CSS','REACT']
// }

// for (const key in estudiante) {
//     console.log(estudiante[key])
// }

// let numeros = [1,2,3,4,5,6];

// numeros.forEach(numeros => {
//     console.log(numeros);
// });

// let edad = 0;

// while(edad<18){
//     console.log('Tienes '+ edad + ' años, eres MENOR de edad');
//     edad++;
// }

// console.log('Tienes ' + edad + ' años, eres MAYOR de edad');

// let edad = 2;
// do{
//     console.log('Tienes '+ edad + ' años, eres MENOR de edad');
//     edad++;
// }while(edad<18);
// console.log('Tienes ' + edad + ' años, eres MAYOR de edad');

// let framework = new Set(['HTML','JAVASCRIPT','CSS','REACT','HTML','JAVASCRIPT','CSS','REACT']);
// framework.add('JAVA');
// framework.delete('REACT');
// console.log(framework);

// let framework = new Set(['HTML','JAVASCRIPT','CSS','REACT','HTML','JAVASCRIPT','CSS','REACT']);
// framework.add('JAVA');
// let validacion = framework.has('REACT');
// console.log(validacion);

// let framework = new Set(['HTML','JAVASCRIPT','CSS','REACT','HTML','JAVASCRIPT','CSS','REACT']);
// framework.add('JAVA');
// let validacion = framework.size;
// console.log(validacion);

// let mapa = new Map([
//     ['Portatiles', 12],
//     ['Impresoras', 5],
//     ['Teclados', 3]
// ])

// mapa.set('Mouse', 15);
// console.log(mapa);

// let a = typeof 'Wilson';
// let b = typeof 3.1416;
// let c = typeof true;
// let d = typeof ['Wilson', 'Paola', 'Oriana', 'Laura', 'Juan'];
// console.log(a + ' ' + b + ' ' + c + ' ' + d);

//instance of
// class Rabbit {}
// let rabbit = new Rabbit();
// console.log(rabbit instanceof Rabbit);
// let arr = [1,2,3];
// console.log(arr instanceof Array);
// console.log(arr instanceof Object);

//Ciclos - Regex
// let frase = 'Padre nuestro que estas en los cielos, santificado sea tu nombre venga a nosotros tu reino';
// let busqueda = frase.search(/Cielos/i);
// let pattern = /Cielos/i;
// let resultado = pattern.exec(frase);
// console.log(resultado);

//try - catch
// try{
//     console.log('inicio de intentos de prueba');
//     //codigo
//     console.log('Fin de las ejecuciones');
// }catch(err){
//     console.log('se ignora porque no hay errores');
// }

// try{
//     //codigo
//     console.log('Llamado al backEnd');
// }catch{
//     //codigo
//     console.log('captura el error');
// }finally{
//     //codigo
//     console.log('siempre se ejecuta');
// }

//callback
// function mostrarConsola(num){
//     console.log(num);
// }
// function calcular (num1,num2,callback){
//     let suma=num1+num2;
//     callback(suma);
// }
// calcular(1,3,mostrarConsola);

function crearCita(cita,callback){
    var miCita="como yo siempre digo, "+cita;
    callback(miCita);
}
function logCita(cita){
    console.log(cita);
}
crearCita("come tus vegetales!",logCita);
