document.getElementById("NeymarBtn").addEventListener("click", ()  => selecionarCarta("Neymar") )

document.getElementById("MessBtn").addEventListener("click", () => selecionarCarta("Messi"))

document.getElementById("CrisBtn").addEventListener("click", ()=> selecionarCarta("Ronaldo"))

let cartaSelecionada = null

const atributos = {
    "Neymar" : {velocidade: 90, drible: 99, chute: 85, passe: 92},
    "Messi"  : {velocidade: 82, drible:90, chute: 95, passe: 99},
    "Ronaldo"  : {velociodade: 80, drible: 83, chute: 99, passe: 80},
 }

 function selecionarCarta(jogador){
    cartaSelecionada = jogador
    document.getElementById("res").innerText = `!! Você escolheu ${jogador} !!`
 }
function escolherCartaInimigo(){
   //aqui eu obtenho o array com todas as chaves e removo a minha carta selecionada
   const jogador = Object.keys(atributos).filter(j => j !== cartaSelecionada)
   const index = Math.floor(Math.random() * jogador.length);
   return jogador[index];

}

 function compararAtributos(atributo){
    if(!cartaSelecionada){
        alert('Selecione uma carta para continuarmos')
        return
    }

    const inimigo = escolherCartaInimigo();
    const valorPlayer = atributos[cartaSelecionada][atributo];
    const valorInimigo = atributos[inimigo][atributo];

    let resultado = `Você escolheu ${cartaSelecionada} com ${valorPlayer} vs ${inimigo} com ${valorInimigo} no atributo ${atributo.toUpperCase()}. `;

    if (valorPlayer > valorInimigo) {
        resultado += "🏆 Você venceu!";
    } else if (valorPlayer < valorInimigo) {
        resultado += "😢 Você perdeu!";
    } else {
        resultado += "⚔️ Empate!";
    }

    document.getElementById("resDaComparação").innerText = resultado;
 
 }

 document.querySelectorAll(".compacao button").forEach(btn => {
   btn.addEventListener("click", () => compararAtributos(btn.innerText.toLowerCase()));
});