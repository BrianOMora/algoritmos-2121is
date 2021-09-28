var nombres = ["oki","okix2"];

var animales = ["perro","gatox2","perrox2","gato","pajaro","elefante",nombres];

 var perro = ["perro","ok",5.5,true,false,1,"jaja","jeje",8,.5,false,true,"ju",animales];

/* console.log(perro);

/for (var x = 0; x < perro.length; x++) {
/    console.log(perro[x]);
}
*/

var humano = {
    "nombre" : "Brian",
    "apellido" : "Mora",
    "edad" : 26, 
    "Casado" : false,
    "saludo" :"hola",
    "musica" : {
        "rock" : {
            "genero": "alternativo",
            "bandas":{
                "bandauno" : "Interpol",
                "bandados" : "Arctick",
            }
        },
        "electronica" : "psytrance",
    },
    "cosas" : perro,
}
console.log(humano);
