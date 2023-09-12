var y = Math.floor(Math.random() * 20) + "%";

function atirar() {

    var estrela = document.getElementById("estrela");
    var estrela1 = document.getElementById("estrela1");
    var estrela2 = document.getElementById("estrela2");

    estrela.classList.toggle("voando");
    estrela1.classList.toggle("voando");
    estrela2.classList.toggle("voando");

    estrela.style.paddingTop = y;
    y = Math.floor(Math.random() * 15) + "%";
    estrela1.style.paddingTop = y;
    y = Math.floor(Math.random() * 15) + "%";
    estrela2.style.paddingTop = y;

}

//function mudar
