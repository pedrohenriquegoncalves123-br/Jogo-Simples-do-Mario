const mario = document.querySelector(".mario");
const container = document.querySelector(".container");

const pipe = document.querySelector(".tubo");


window.addEventListener("keydown", () => {

    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 1500);

});

const botaoPular = document.querySelector(".btn-pular").addEventListener("click", () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
        placarGame();
    }, 1500);
});

const setaPular = document.querySelector(".btn-pular span");

const playAgain = document.querySelector(".btn-reiniciar");


const loop = setInterval(() => {
    let pipePosicao = Number(pipe.offsetLeft);
    let marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosicao < 110 && marioPosicao <= 70) {

        pipe.style.animation = "none";
        mario.classList.remove("jump");
        pipe.style.left = `${pipePosicao}px`;

        mario.style.bottom = `${marioPosicao}px`;

        mario.src = "../imagens/mario-game-over.jpg";
        mario.style.width = "120px";
        playAgain.classList.add("hidden-button");
        const telaGameOver = document.querySelector(".game-over-screen")
        telaGameOver.classList.add('active-button');
        setaPular.classList.remove('seta-pular');
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

const contador = document.getElementById("contador");

let placarJogo = 0;
let canoPassou = false;

const loopPlacar = setInterval(() => {
    let pipePosicao = pipe.offsetLeft;

    if (pipePosicao < 0 && !canoPassou) {
        placarJogo++;
        contador.innerText = placarJogo;
        canoPassou = true;
    }

    if (pipePosicao > 110) {
        canoPassou = false;
    }

    const placarFinal = document.querySelector("span.placar-final");
    placarFinal.innerHTML = placarJogo;

}, 10);

function resetarJogo() {
    placarJogo = 0;
    canoPassou = false;
    contador.innerHTML = 0;

    //Escondendo a tela de game over
}