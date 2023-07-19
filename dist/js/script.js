var horas = document.querySelector("#horas-vagas");
var data = document.querySelector("#data-servico");
var atend = document.getElementById("manicure");
var enviar = document.getElementById("enviar");
var nome = document.querySelector("#nome-cliente");
const nu1 = document.querySelector("#nu1");
enviar.addEventListener("click", function (event) {
    event.preventDefault();
    /* console.log(horas.value);

    console.log(data.value);

    console.log(nome.value); */
    console.log(atend);
    nu1.classList.add("nu1");
});
