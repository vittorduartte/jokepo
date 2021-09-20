function getRandomChoice() {
    var options = ["rock", "paper", "scissors"]
    min = Math.ceil(0);
    max = Math.floor(3);
    choice = Math.floor(Math.random() * (max - min)) + min;
    return options[choice]
}

function selectPlayerChoice(player, com) {
    var iconChoice = document.querySelector(".icon-choice_player");
    var iconCom = document.querySelector(".icon-choice_com");
    var labelChoice = document.querySelector(`.label__choice.${player}`);
    var labelSelected = document.querySelector(".label__choice.is-selected");
    
    if(labelSelected) {
        console.log("Aqui");
        labelSelected.classList.remove("is-selected");
        labelSelected.setAttribute("style", "opacity: 0;");
    }

    if (player === "rock") {
        iconChoice.classList.add("is-stopped");
        iconCom.classList.add("is-stopped");
        iconChoice.setAttribute("src", "./assets/images/icon-rock.svg")
        iconCom.setAttribute("src", `./assets/images/icon-${com}-com.svg`)
        labelChoice.classList.add("is-selected");
        labelChoice.setAttribute("style", "opacity: 1;")
        return false
    } if (player === "scissor") {
        iconChoice.classList.add("is-stopped");
        iconCom.classList.add("is-stopped");
        iconChoice.setAttribute("src", "./assets/images/icon-scissors.svg")
        iconCom.setAttribute("src", `./assets/images/icon-${com}-com.svg`)
        labelChoice.setAttribute("style", "opacity: 1;")
        labelChoice.classList.add("is-selected");
        return false
    } if (player === "paper") {
        iconChoice.classList.add("is-stopped");
        iconCom.classList.add("is-stopped");
        iconChoice.setAttribute("src", "./assets/images/icon-paper.svg")
        iconCom.setAttribute("src", `./assets/images/icon-${com}-com.svg`)
        labelChoice.setAttribute("style", "opacity: 1;")
        labelChoice.classList.add("is-selected");
        return false
    }
}

var buttons = document.querySelectorAll(".choice>button");
buttons[0].addEventListener("click", function () {
    selectPlayerChoice(this.id, getRandomChoice())
}, false)
buttons[1].addEventListener("click", function () {
    selectPlayerChoice(this.id, getRandomChoice())
}, false)
buttons[2].addEventListener("click", function () {
    selectPlayerChoice(this.id, getRandomChoice())
}, false)
