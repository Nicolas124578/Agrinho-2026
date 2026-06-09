// Lista de dicas sustentáveis
const dicas = [
    "Evite sacolas plásticas: leve sempre uma ecobag de pano ao fazer compras.",
    "Reduza o tempo no chuveiro. Cinco minutos são suficientes para uma boa higiene.",
    "Desligue os aparelhos da tomada quando não estiverem em uso (modo stand-by também consome energia!).",
    "Prefira lâmpadas de LED, elas duram mais e economizam até 80% de energia.",
    "Evite o desperdício de papel: use o verso de folhas impressas como rascunho.",
    "Separe o lixo orgânico do lixo reciclável na sua casa.",
    "Tente fazer pequenos trajetos a pé ou de bicicleta em vez de usar o carro.",
    "Aproveite a luz natural abrindo janelas e cortinas durante o dia.",
    "Antes de comprar algo novo, pergunte-se: 'Eu realmente preciso disso?'."
];

// Seleção dos elementos do HTML
const botaoDica = document.getElementById("btn-dica");
const textoDica = document.getElementById("texto-dica");

// Função para sortear uma dica sem repetir a anterior imediatamente
let ultimaDicaIndex = -1;

function gerarDica() {
    let novoIndex;
    
    // Garante que a próxima dica seja diferente da atual
    do {
        novoIndex = Math.floor(Math.random() * dicas.length);
    } while (novoIndex === ultimaDicaIndex);
    
    ultimaDicaIndex = novoIndex;
    
    // Atualiza o texto na tela com efeito de fade simples
    textoDica.style.opacity = 0;
    setTimeout(() => {
        textoDica.innerText = dicas[novoIndex];
        textoDica.style.opacity = 1;
    }, 200);
}

// Ouvinte de clique no botão
botaoDica.addEventListener("click", gerarDica);
