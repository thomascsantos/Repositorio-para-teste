let botao = document.getElementById("botao")
let cep = document.querySelector("#cep")
let div = document.querySelector(".div")
botao.addEventListener("click", () => {

    if (cep.value != "") {
        div.innerHTML += `<p>${cep.value}</p> `
    }
})

//teste para repositorio