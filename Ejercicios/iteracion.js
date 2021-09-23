numero=parseInt(prompt("Ingresa el numero que desa saber su iteracion")); 
var iteracion = numero;
var resultado;
var a = 0;
var b;
var suma;
    for(var i = 0; i < iteracion; i++){
        b=parseInt(prompt("Ingresa el numero para la iteracion")); 
        suma = a + b;
        a = suma;  
    }

    console.log("La suma es: " + suma);