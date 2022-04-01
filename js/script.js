console.log("Cześć!");
let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");

button.addEventListener("click", () => {
    body.classList.toggle("body--light");

    body.classList.contains("body--light") ? button.innerText = "Przyciemnij tło" : button.innerText = "Rozjaśnij tło";
});