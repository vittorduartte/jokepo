function getRandomChoice() {
    var options = ["rock", "paper", "scissors"]
    min = Math.ceil(0);
    max = Math.floor(3);
    choice = Math.floor(Math.random() * (max - min)) + min;
    return options[choice]
}

function restartRound() {
    var labelSelected = document.querySelector(".choice__label.is-selected");
    var iconSelected = document.querySelector(".choice__icon.is-selected");
    var iconPlayer = document.querySelector("img.icon-choice_player.is-stopped");
    var iconCom = document.querySelector("img.icon-choice_com.is-stopped");
    document.querySelector("span.round-count").textContent++;

    var iconChoice = document.querySelector(".icon-choice_player");
    var iconCom = document.querySelector(".icon-choice_com");

    if(labelSelected && iconSelected && iconPlayer && iconCom) {
        iconSelected.classList.remove("is-selected");
        labelSelected.classList.remove("is-selected");
        iconPlayer.classList.remove("is-stopped");
        iconCom.classList.remove("is-stopped");
    }

    iconChoice.setAttribute("src", "./src/assets/images/icon-rock.svg")
    iconCom.setAttribute("src", `./src/assets/images/icon-rock-com.svg`)

}

function getWinnerRound(player, com) {
    var iconPlayer = document.querySelector(".icon-choice_player");
    var iconCom = document.querySelector(".icon-choice_com");

    if(player==com) {
        return "draw-game";
    } if (player==="rock" && com==="scissors") {
        iconPlayer.setAttribute("src", "./src/assets/images/icon-yeah.svg");
        iconCom.setAttribute("src", "./src/assets/images/icon-destroi.svg");
        document.querySelector("span#player").innerHTML++;

        return false;
    } if (player==="rock" && com==="paper") {
        iconCom.setAttribute("src", "./src/assets/images/icon-yeah-com.svg");
        iconPlayer.setAttribute("src", "./src/assets/images/icon-destroi.svg");
        document.querySelector("span#com").innerHTML++;
        
        return false;
    } if (player==="paper" && com==="scissors") {
        iconCom.setAttribute("src", "./src/assets/images/icon-yeah-com.svg");
        iconPlayer.setAttribute("src", "./src/assets/images/icon-destroi.svg");
        document.querySelector("span#com").innerHTML++;
        
        return false;
    } if (player==="paper" && com==="rock") {
        iconPlayer.setAttribute("src", "./src/assets/images/icon-yeah.svg");
        iconCom.setAttribute("src", "./src/assets/images/icon-destroi.svg");
        document.querySelector("span#player").innerHTML++;

        return false;
    } if (player==="scissors" && com==="paper") {
        iconPlayer.setAttribute("src", "./src/assets/images/icon-yeah.svg");
        iconCom.setAttribute("src", "./src/assets/images/icon-destroi.svg");
        document.querySelector("span#player").innerHTML++;

        return false;
    } if (player==="scissors" && com==="rock") {
        iconCom.setAttribute("src", "./src/assets/images/icon-yeah-com.svg");
        iconPlayer.setAttribute("src", "./src/assets/images/icon-destroi.svg");
        document.querySelector("span#com").innerHTML++;
        
        return false;
    } 
}

function selectPlayerChoice(player, com) {
    var iconChoice = document.querySelector(".icon-choice_player");
    var iconCom = document.querySelector(".icon-choice_com");
    var labelChoice = document.querySelector(`.choice__label.${player}`);
    var labelSelected = document.querySelector(".choice__label.is-selected");
    var choiceIcon = document.querySelector(`.choice__icon.${player}`);
    var iconSelected = document.querySelector(".choice__icon.is-selected");
    
    if(labelSelected && iconSelected) {
        iconSelected.classList.remove("is-selected");
        labelSelected.classList.remove("is-selected");
    }

    if (player === "rock") {
        iconChoice.classList.add("is-stopped");
        iconCom.classList.add("is-stopped");
        iconChoice.setAttribute("src", "./src/assets/images/icon-rock.svg")
        iconCom.setAttribute("src", `./src/assets/images/icon-${com}-com.svg`)
        labelChoice.classList.add("is-selected");
        choiceIcon.classList.add("is-selected");

        getWinnerRound(player, com);
        setTimeout(() => {
            restartRound();
        }, 2000);

        return false
    } if (player === "scissors") {
        iconChoice.classList.add("is-stopped");
        iconCom.classList.add("is-stopped");
        iconChoice.setAttribute("src", "./src/assets/images/icon-scissors.svg")
        iconCom.setAttribute("src", `./src/assets/images/icon-${com}-com.svg`)
        labelChoice.classList.add("is-selected");
        choiceIcon.classList.add("is-selected");

        getWinnerRound(player, com);
        setTimeout(() => {
            restartRound();
        }, 2000);

        return false
    } if (player === "paper") {
        iconChoice.classList.add("is-stopped");
        iconCom.classList.add("is-stopped");
        iconChoice.setAttribute("src", "./src/assets/images/icon-paper.svg")
        iconCom.setAttribute("src", `./src/assets/images/icon-${com}-com.svg`)
        labelChoice.classList.add("is-selected");
        choiceIcon.classList.add("is-selected");

        getWinnerRound(player, com);
        setTimeout(() => {
            restartRound();
        }, 2000);

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
