var titulo = document.querySelector(".titulo");
titulo.textContent = " TABELA NUTRIÇÃO"


var pacientes = document.querySelectorAll(".paciente");

    console.log(pacientes.length);

    for( var i = 0; i < pacientes.length ; i++){        
        var paciente = pacientes[i];        
        
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc"); // busca a tag td imc
    tdImc.textContent = imc
   


var pesoEValido = validaPeso(peso);
var alturaEvalida = validaAltura(altura);

if (!pesoEValido ){
    console.log("Peso invalido")
    pesoEValido = false;
    tdImc.textContent = "Peso inválido"
    paciente.style.backgroundColor = "lightcoral"
    }        

if (! alturaEvalida ){
    console.log("Altura invalida")
    alturaEvalida = false;
    tdImc.textContent = "Altura invalida"
}
    
if (alturaEvalida && pesoEValido){
    var imc = calculaImc(peso,altura);
    console.log(imc)
    tdImc.textContent = imc;
} 
    }

//Função que valida o peso no form
function validaPeso (peso){
    if (peso >= 0  && peso < 1000){
        return true;
    }else{
        return false;
    }
}
//Função que valida a altura n form
function validaAltura (altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    } else{
        return false;
    }
}


// Função que calcula o imc
 function calculaImc(peso,altura){
    var imc = 0;

    imc  = peso / (altura * altura);
    return imc.toFixed(2);
 }





