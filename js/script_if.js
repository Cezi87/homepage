console.log("Cześć!");
let button = document.querySelector(".js-button");
let body = document.querySelector(".body");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    if (body.classList.contains("body--dark")) {
        button.innerText = "Przyciemnij tło";
    } else {
        button.innerText = "Rozjaśnij tło";
    }
});