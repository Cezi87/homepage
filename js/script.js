{
    const welcome = () => {
        console.log("Welcome to all developers!");
    }
    welcome();

    const button = document.querySelector(".js-button");
    const body = document.querySelector(".js-body");

    button.addEventListener("click", () => {
        body.classList.toggle("body--light");

        body.classList.contains("body--light") ? button.innerText = "Przyciemnij tło" : button.innerText = "Rozjaśnij tło";
    });
}