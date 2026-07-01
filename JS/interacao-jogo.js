const mario = document.querySelector(".mario");
const container = document.querySelector(".container");
const pipe = document.querySelector(".tubo");

window.addEventListener("keydown", () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 1500);

})

const loop = setInterval(() => {
    let pipePosicao = Number(pipe.offsetLeft);

    let marioPosicao = Number(mario.offsetBottom);

    if (pipePosicao < 140 || marioPosicao <= 85) {
        mario.src = "imagens/mario-game-over.jpg";
        pipe.classList.remove("pipe-slide");
    }
}, 10);
