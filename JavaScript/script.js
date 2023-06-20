const mbappe = document.getElementById('mbappe');
const cr7 = document.getElementById('cr7');
const zidane = document.getElementById('zidane');

function checarResposta(event){

    alert("checando resposta...")

    if(event.target.id == 'cr7'){
        alert("resposta correta!")
    }
    else{
        alert("respota incorreta!")
    }

}

mbappe.addEventListener("click", checarResposta);
cr7.addEventListener("click", checarResposta);
zidane.addEventListener("click", checarResposta);



