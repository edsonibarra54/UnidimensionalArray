const tam = 10;
var array = new Array(tam);

function begin(){
    for (var i = 0 ; i < tam ; i++){
        array[i] = (Math.floor(Math.random() * 100)) + 1;
    }
    console.log(array);
}

function checkValue(position){
    document.getElementById(position).innerHTML = array[position];
}