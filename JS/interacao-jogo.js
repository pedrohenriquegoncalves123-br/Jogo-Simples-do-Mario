const mario = document.querySelector(".mario");
const placar = document.querySelector(".placar-game");
const container = document.querySelector(".container");
let placarJogo = 0;
const contador = document.getElementById("contador");

const pipe = document.querySelector(".tubo");


window.addEventListener("keydown", () => {

    mario.classList.add("jump");
    placarGame();

    setTimeout(() => {
        mario.classList.remove("jump");
        placarGame();
    }, 1500);

});

const botaoPular = document.querySelector(".btn-pular").addEventListener("click", () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
        placarGame();
    }, 1500);
})


const playAgain = document.querySelector(".btn-play-again");


const loop = setInterval(() => {
    let pipePosicao = Number(pipe.offsetLeft);
    let marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosicao < 120 && marioPosicao <= 70) {

        pipe.style.animation = "none";
        mario.classList.remove("jump");
        pipe.style.left = `${pipePosicao}px`;

        mario.style.bottom = `${marioPosicao}px`;

        mario.src = "../imagens/mario-game-over.jpg";
        mario.style.width = "120px";
        playAgain.classList.add("hidden-button");

        gameOver.classList.add('ativo');
    }


}, 10);

playAgain.addEventListener("click", () => {
    location.reload(true);
    let pipePosicao = Number(pipe.offsetLeft);
    mario.src = "./imagens/mario.gif";
    pipe.style.animation = "deslizar";
    pipePosicao.left = `${100}%`;
    mario.style.width = `${140}px`;
});

function placarGame() {
    let canoPassou = false;
    const mario = document.querySelector(".mario");
    let marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');
    let pipePosicao = Number(pipe.offsetLeft);
    const contador = document.getElementById("contador");
    const contadorNum = Number(0);

    if (!canoPassou) {

        const gameOver = document.getElementById("gameOver");
        if (pipePosicao <= -80 && marioPosicao > 70) {
            canoPassou = true;
        }

        if (canoPassou) {
            contador = contadorNum + 1;
        }
    }

    return contador
}
