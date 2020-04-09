function redirectPlay(){
    window.location.href="/src/play.html";    
}

function jogada(moveOption){
    
    moveOptions = ["Rock", "Paper", "Scissors"];    
    
    li = document.querySelectorAll(".user-player > ul > li");
    choice = document.createTextNode(moveOptions[moveOption]);
    p = document.createElement("p");
    imgOption = document.querySelector(".user-player > img");
    p.appendChild(choice);
    
    if(moveOption == 0){
        li[0].appendChild(p);
        imgOption.setAttribute("src","./assets/rock.svg")
    }
    if(moveOption == 1){
        li[1].appendChild(p);
        imgOption.setAttribute("src","./assets/paper.svg");
    } 
    if(moveOption == 2){
        li[2].appendChild(p);
        imgOption.setAttribute("src","./assets/scissors.svg")
    }

    console.log();
}