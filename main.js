// Sistema de abas
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        // Remove classe ativo de todos
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        // Adiciona classe ativo ao clicado
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Sistema de contagem regressiva tática
const contadores = document.querySelectorAll(".contador");

// Datas objetivo para cada missão (ajuste conforme necessário)
const tempoObjetivo1 = new Date("2026-10-05T00:00:00"); 
const tempoObjetivo2 = new Date("2026-12-05T00:00:00"); 
const tempoObjetivo3 = new Date("2026-12-30T00:00:00"); 
const tempoObjetivo4 = new Date("2026-10-05T00:00:00"); 

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    
    if (tempoFinal <= 0){
        return [0, 0, 0, 0];
    }
    
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    
    return [dias, horas, minutos, segundos];
}

function atualizaCronometro(){
    for (let i = 0; i < contadores.length; i++){
        const tempo = calculaTempo(tempos[i]);
        document.getElementById("dias" + i).textContent = String(tempo[0]).padStart(2, '0');
        document.getElementById("horas" + i).textContent = String(tempo[1]).padStart(2, '0');
        document.getElementById("min" + i).textContent = String(tempo[2]).padStart(2, '0');
        document.getElementById("seg" + i).textContent = String(tempo[3]).padStart(2, '0');
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

// Inicia os cronômetros ao carregar a página
document.addEventListener('DOMContentLoaded', comecaCronometro);

// Efeito adicional: som de clique tático (opcional)
document.querySelectorAll('.botao').forEach(botao => {
    botao.addEventListener('click', function() {
        // Aqui você pode adicionar um som de clique tático se desejar
        // const audio = new Audio('click-tatico.mp3');
        // audio.volume = 0.3;
        // audio.play().catch(e => console.log('Audio não reproduzido:', e));
    });
});