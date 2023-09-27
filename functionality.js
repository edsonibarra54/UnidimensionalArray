const tam = 10;
var arreglo = new Array(tam);

function begin(){
    for (var i = 0 ; i < tam ; i++){
        arreglo[i] = (Math.floor(Math.random() * 100)) + 1;
    }
    console.log(arreglo);
}