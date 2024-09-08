const botonNumeros = document.getElementsByName('data_number');
const botonOpera = document.getElementsByName('data_opera');
const botonEqual = document.getElementsByName('data_equal')[0];
const botonDelete = document.getElementsByName('data_delete')[0];
let result = document.getElementById('result');
let opeActual = '';
let opeAnterior = '';
let operacion = undefined;




for (let i = 0; i < botonNumeros.length; i++) {
    botonNumeros[i].addEventListener('click', function(){
        // Agregar número
        agregarNumero(botonNumeros[i].innerText)
        //alert(botonNumeros[i].innerText);
    });
};


for (let i = 0; i < botonOpera.length; i++) {
    botonOpera[i].addEventListener('click', function(){
        // Operar
        selectOperacion(botonOpera[i].innerText)
        //alert(botonOpera[i].innerText);
    });
};


botonEqual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});


botonDelete.addEventListener('click',function(){
    clear();
    actualizarDisplay();
});


function agregarNumero(numero){
    opeActual = opeActual.toString() + numero.toString();
    actualizarDisplay();
};

function selectOperacion(operador){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular();
    }

    operacion = operador.toString();
    opeAnterior = opeActual;
    opeActual = '';

};


function calcular(){
    let calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    
    switch(operacion){
        case '+': 
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;

    }

    opeActual = calculo;
    operacion = undefined;
    opeAnterior = ''; 


}


function clear(){
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}


function actualizarDisplay(){
    result.value = opeActual;
}


clear();



