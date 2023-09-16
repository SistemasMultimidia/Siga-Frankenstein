var y = Math.floor(Math.random() * 20) + "%";

function atirar() {

    var estrela1 = document.getElementById("estrela1");
    var estrela2 = document.getElementById("estrela2");
    var estrela3 = document.getElementById("estrela3");
    var estrela4 = document.getElementById("estrela4");
    var estrela5 = document.getElementById("estrela5");
    var estrela6 = document.getElementById("estrela6");

    estrela1.classList.toggle("voando");
    estrela2.classList.toggle("voando");
    estrela3.classList.toggle("voando");
    estrela4.classList.toggle("voando");
    estrela5.classList.toggle("voando");
    estrela6.classList.toggle("voando");

    var variacao = 70

    estrela1.style.paddingTop = y;
    y = Math.floor(Math.random() * variacao) + "%";
    estrela2.style.paddingTop = y;
    y = Math.floor(Math.random() * variacao) + "%";
    estrela3.style.paddingTop = y;
    y = Math.floor(Math.random() * variacao) + "%";
    estrela4.style.paddingTop = y;
    y = Math.floor(Math.random() * variacao) + "%";
    estrela5.style.paddingTop = y;
    y = Math.floor(Math.random() * variacao) + "%";
    estrela6.style.paddingTop = y;

}

function animarCanvas() {
    
}
