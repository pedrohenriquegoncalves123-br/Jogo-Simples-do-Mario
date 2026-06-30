const mario = document.querySelector(".mario");
const tubo = document.querySelector(".tubo");
const container = document.querySelector(".container");

window.addEventListener("keydown", (pular) => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 1500);

    // Calcula o bottom atual
    const posicao = tubo.getBoundingClientRect();
    console.log(posicao.bottom);

    if (tubo) {

    }
})

