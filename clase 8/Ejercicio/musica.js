var lis_generos = ["Rock","Reguetón","Metal","Electronica","Rap"];

var musica = {
    "genero0" :{
        "artista": "The Beatles",
        "album" : {
            "nombre": "Help!",
            "canciones": ["The Night Before","I Need You"]
        }
    },
    "genero1" :{
        "artista": "Jhay Cortez",
        "album" : {
            "nombre": "Timelezz",
            "canciones": ["Tokio","Está deja"]
        }
    },
    "genero2" :{
        "artista": "Rammstein",
        "album" : {
            "nombre": "Sehnsucht",
            "canciones": ["Du hast","Tier","Spiel mit mir"]
        }
    },
    "genero3" :{
        "artista": "Skrillex",
        "album" : {
            "nombre": "Triple Vinyl Box",
            "canciones": ["Bangarang","First of the year"]
        }
    },
    "genero4" :{
        "artista": "Bbno$",
        "album" : {
            "nombre": "Edamame",
            "canciones": ["I remember","Adamame"]
        }
    }
}

var genero = "";
for(let a=0; a<lis_generos.length; a++){
    genero+=a+".- "+lis_generos[a]+"\n";
}

var opc_genero=parseInt(prompt("Elige un genero\n"+genero));

var resultado="";
if(opc_genero<lis_generos.length){
    resultado+="Genero: "+lis_generos[opc_genero]+"\n";
    resultado+="Artista: "+musica["genero"+opc_genero]["artista"]+"\n";
    resultado+="Album: "+musica["genero"+opc_genero]["album"]["nombre"]+"\n";
    for(let i=0; i<musica["genero"+opc_genero]["album"]["canciones"].length; i++){
        resultado+="\t"+(i+1)+".- "+musica["genero"+opc_genero]["album"]["canciones"][i]+"\n";
    }
    console.log(resultado);
}else{
    console.log("No existe el genero");
}