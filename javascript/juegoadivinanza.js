//se programa el azar
let numeroAzar = Math.floor(Math.random()*100);

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let intentos = 0;

//Se programa la operacion
function chequearResultado(){
    intentos++;
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado <1 || numeroIngresado >100 || isNaN>(numeroIngresado)){
        mensaje.textContent = 'Ingresa un valor valido entre 1 y 100';
        mensaje.style.color = 'orange';
        return;
    } 

    if(numeroIngresado == numeroAzar){
        mensaje.textContent = 'Felicidades adivinaste el numero';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true; 
    }

    else if(numeroIngresado < numeroAzar){
        mensaje.textContent = 'El numero debe ser mayor';
        mensaje.style.color = 'red';
    }
    else{
        mensaje.textContent = 'El numero debe ser menor';
        mensaje.style.color = 'yellow';
    }
}
