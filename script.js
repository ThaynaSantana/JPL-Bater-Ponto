let hora_chegada;
let hora_saida;
let dia;
const html_hora_chegada = document.getElementById('hora-chegada');
const html_hora_saida = document.getElementById('hora-saida');

const marcarPonto = () => {
    const hoje = new Date()
    if(hora_chegada == undefined){
        hora_chegada = hoje.getHours()+":"+hoje.getMinutes()+":"+hoje.getSeconds();
        html_hora_chegada.innerHTML = hora_chegada;
    } else if(hora_saida == undefined) {
        hora_saida = hoje.getHours()+":"+hoje.getMinutes()+":"+hoje.getSeconds();
        html_hora_saida.innerHTML = hora_saida;
    } else {
        window.alert("Voce ja registrou seu ponto de entrada e saida do dia! Até amanha")
    }
}