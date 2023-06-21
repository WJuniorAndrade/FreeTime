var horas = document.querySelector("#horas-vagas")
var data = document.querySelector("#data-servico")
var atend =  document.getElementsByName("atendimento")
var enviar = document.getElementById("enviar")

enviar.addEventListener("click", function (event) {
    event.preventDefault()
    console.log(horas.value);

    console.log(data.value);


    console.log(atend);



})
