//Extraindo iformações do paciente do form


var adicionarBotao = document.querySelector("#adicionar-paciente");       
adicionarBotao.addEventListener("click", (event) =>{
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulário (form);    

   var pacienteTr = montaTr(paciente);
   
   var erros = validaPaciente(paciente);
    console.log(erros);
   if (erros.length > 0){
        exibeMensagensDeErro(erros);

        return;
   }
// Adicionando o paciente na tabela
    var tabela =  document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
    form.reset();
    var mensagensDeErro = document.querySelector("#mensagens-erro");
    mensagensDeErro.innerHTML = "";
});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML ="";

    erros.forEach( function(erro)  {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li)
    });
}

function obtemPacienteDoFormulário (form){
    
var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
}
return paciente
};

//Criando TR do paciente

function montaTr (paciente){
    var pacienteTr = document.createElement("tr");    
    pacienteTr.classList.add("paciente");
             
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;                           

};

function montaTd(dado,classe){  
    var td = document.createElement("td")
    td.textContent =  dado;
    td.classList.add(classe);

    return td;
}

// Funnção que valida os campos do pacientes
function validaPaciente(paciente){

    var erros = [];    
   
    if(paciente.nome.length =="")  erros.push("O nome não pode ficar em branco");
    //if(paciente.nome.length == "") alert("O campo nome não pode ficar em branco")   
    
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido"); 
    
    if (paciente.peso.length == "") erros.push("O campo peso não pode ficar em branco");

    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");

    if(paciente.altura.length =="") erros.push("O campo altura não pode ficar em branco");

    if (paciente.gordura.length == "") erros.push("O campo gordura não pode ficar em branco"); 

        
    return erros;
}