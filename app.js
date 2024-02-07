let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteador = [];
let numeroMaximo = 10;





function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    
    let numeroUsuario = document.getElementById("valorUsuario").value;
    numeroUsuario = parseInt(numeroUsuario);
    console.log(intentos);
  
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Felicidades, Has acertado en  ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
        //Para deshabilitar el boton jugar de nuevo
        document.getElementById('reiniciar').removeAttribute("disabled");
    }
    else{
    //El usuario no acerto

     if(numeroSecreto < numeroUsuario){
        asignarTextoElemento('p',"El numero secreto es menor");
     }

     else{
        asignarTextoElemento('p',"El numero secreto es mayor");
     }
     intentos++;
     limpiarCaja();
  
    }
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = ' ';
    document.querySelector("#valorUsuario").value = " ";
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.ceil(Math.random() * numeroMaximo);
    console.log(`Numero generado ${numeroGenerado}`);
    console.log(`Lista: ${listaNumerosSorteador}`);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteador.length == numeroMaximo){
        asignarTextoElemento('p',"Ya se sortearon todos los numeros posibles!")
    }
    else{
        //Si el numero generado esta incluido en la lista

        if(listaNumerosSorteador.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteador.push(numeroGenerado);
            return numeroGenerado;
        }
     
    }


   
    
}


function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del numero Secreto!");
    asignarTextoElemento("p",`Ingresa un numero del 1 al ${numeroMaximo}`);
    //Generar el numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //Inicializar el numero de intentos
    intentos = 1;
}



function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el 2do boton
    document.querySelector("#reiniciar").setAttribute("disabled",true);  
}

condicionesIniciales();


