const mario = document.querySelector(".mario");
const placar = document.querySelector(".game-placar");
let canoPassou = false;
const container = document.querySelector(".container");

const pipe = document.querySelector(".tubo");



window.addEventListener("keydown", () => {

    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 1500);

});



const playAgain = document.querySelector(".btn-play-again");

const loop = setInterval(() => {
    let pipePosicao = Number(pipe.offsetLeft);

    let marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosicao < 120 && marioPosicao <= 70) {

        pipe.style.animation = "none";
        mario.classList.remove("jump");
        pipe.style.left = `${pipePosicao}px`;

        mario.style.bottom = `${marioPosicao}px`;

        mario.src = "./imagens/mario-game-over.jpg";
        mario.style.width = "120px";
        playAgain.classList.add("hidden-button");
    }

    const contador = document.getElementById("contador")
    if (pipePosicao < 0) {

        contador.innerHTML = placarJogo;
    }

    if (pipePosicao < 30 && pipePosicao > 0 && marioPosicao > 70) {
        if (!canoPassou) {
            placarJogo++;
            contador.innerHTML = placarJogo;
            canoPassou = true;
        }
    }
}, 10);


playAgain.addEventListener("click", () => {
    location.reload(true);

})
