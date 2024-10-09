document.getElementById("start-part1").addEventListener("click", function() {
    document.getElementById("instructions").classList.add("hidden");
    document.getElementById("part1").classList.remove("hidden");
});

document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Captura as respostas
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');

    // Verifica se todas as perguntas foram respondidas
    if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6) {
        alert("Por favor, responda todas as perguntas.");
        return;
    }

    // Aqui você define a lógica para determinar o jogador
    let jogador = "";
    let imgSrc = "";

    // Exemplo de lógica baseada nas respostas
    if (q1.value === "A" && q2.value === "A") {
        jogador = "Neymar";
        imgSrc = "url_da_imagem_do_neymar.jpg"; // Adicione a URL da imagem
    } else if (q1.value === "B" && q2.value === "B") {
        jogador = "Casemiro";
        imgSrc = "url_da_imagem_do_casemiro.jpg"; // Adicione a URL da imagem
    }
    // Adicione mais condições conforme necessário

    // Exibe o resultado
    document.getElementById("temperament-details").innerText = `Você é: ${jogador}`;
    document.getElementById("temperament-img").src = imgSrc;

    // Mostra o resultado e oculta a parte do quiz
    document.getElementById("part1").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    const startButton = document.getElementById("start-part1");
const colors = ["blue", "yellow", "green"];
let currentColorIndex = 0;

function changeColor() {
    startButton.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Altera a cor a cada 500ms
setInterval(changeColor, 500);
});