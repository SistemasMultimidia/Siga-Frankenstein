var y = Math.floor(Math.random() * 20) + "%";

function atirar() {

    var estrela = document.getElementById("estrela");
    var estrela1 = document.getElementById("estrela1");
    var estrela2 = document.getElementById("estrela2");
    var estrela3 = document.getElementById("estrela3");
    var estrela4 = document.getElementById("estrela4");

    estrela.classList.toggle("voando");
    estrela1.classList.toggle("voando");
    estrela2.classList.toggle("voando");
    estrela3.classList.toggle("voando");
    estrela4.classList.toggle("voando");

    estrela.style.paddingTop = y;
    y = Math.floor(Math.random() * 20) + "%";
    estrela1.style.paddingTop = y;
    y = Math.floor(Math.random() * 20) + "%";
    estrela2.style.paddingTop = y;
    y = Math.floor(Math.random() * 20) + "%";
    estrela3.style.paddingTop = y;
    y = Math.floor(Math.random() * 20) + "%";
    estrela4.style.paddingTop = y;

}

//function mudar
