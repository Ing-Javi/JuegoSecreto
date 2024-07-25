   
    let numeroSecreto = 0;
    let intentos=0;
    let numeroMaximo =10;
    let listaNumerosGenerados = [];

    
    function asignarTextoElemento(elemento, texto){
        let elementoHTML = document.querySelector(elemento);
        elementoHTML.innerHTML= texto;
        return;
    }

    function verificarIntento(){
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
        
        if(numeroSecreto === numeroDeUsuario){
            asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ?'vez':'veces'}`);
            document.getElementById("reiniciar").removeAttribute('disabled');
            
        } else {
            if (numeroSecreto > numeroDeUsuario){
                asignarTextoElemento('p','el numero secreto es mayor');
            }else {
                asignarTextoElemento('p','el numero secreto es menor');
            }
            intentos++;
        }
        limpiarCaja();
        return;
    }

    function limpiarCaja(){
        document.getElementById('valorUsuario').value="";
    }

    function generaNumeroSecreto() {
        let numeroAleatorio = Math.floor(Math.random()*numeroMaximo)+1;
        
        console.log(numeroAleatorio);
        console.log(listaNumerosGenerados);
        if(listaNumerosGenerados.length == numeroMaximo){
            asignarTextoElemento('p','Ya sorteaste todos los numeros');
        }else{

             if(listaNumerosGenerados.includes(numeroAleatorio)) {

            return generaNumeroSecreto();

             } else{
            listaNumerosGenerados.push(numeroAleatorio);
            return numeroAleatorio;

            }

        }   
    }



    function condicionesIniciales(){
        asignarTextoElemento('h1','juego del numero secreto');
        asignarTextoElemento('p',`Indique un numero del 1 al ${numeroMaximo}`);
        numeroSecreto = generaNumeroSecreto();
        intentos = 1;
        //console.log(numeroSecreto);
    }

    function reiniciarJuego(){
        limpiarCaja();
        condicionesIniciales();
        document.getElementById("reiniciar").setAttribute('disabled',true);
    }

    condicionesIniciales();

