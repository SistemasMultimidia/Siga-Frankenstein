const mbappe = document.getElementById("mbappe");
const cr7 = document.getElementById("cr7");
const zidane = document.getElementById("zidane");

function checarResposta(event){

    console.log("checando resposta...")

    if(event.targeted.id == cr7){
        console.log("resposta correta!")
    }
    else{
        console.log("respota incorreta!")
    }

}

mbappe.addEventListener("click", checarResposta);
cr7.addEventListener("click", checarResposta);
zidane.addEventListener("click", checarResposta);



