const playerOpcoes = document.querySelectorAll('.imgPlayer');
var playerEscolha = "";
const enemyOpcoes = document.querySelectorAll('.imgEnemy');
var enemyEscolha = "";


function vencedor(){
    let msg = document.querySelector('h2');
    let empate = parseInt(document.querySelector('#empate').value);
    let vitoria = parseInt(document.querySelector('#vitoria').value);
    let derrota = parseInt(document.querySelector('#perdeu').value);


    if(playerEscolha == enemyEscolha){
        msg.innerHTML = 'Empate';
        document.querySelector('#empate').value = empate + 1;
    }

    if(playerEscolha == 'pedra'){
        if(enemyEscolha == 'papel'){
            msg.innerHTML = 'Perdeu';
            document.querySelector('#perdeu').value = derrota + 1;
        }
        
        else if(enemyEscolha == 'tesoura'){
            msg.innerHTML = 'Ganhou';
            document.querySelector('#vitoria').value = vitoria + 1;
        }
    }

    if(playerEscolha == 'papel'){
        if(enemyEscolha == 'tesoura'){
            msg.innerHTML = 'Perdeu';
            document.querySelector('#perdeu').value = derrota + 1;
        }
        
        else if(enemyEscolha == 'pedra'){
            msg.innerHTML = 'Ganhou';
            document.querySelector('#vitoria').value = vitoria + 1;
        }
    }

    if(playerEscolha == 'tesoura'){
        if(enemyEscolha == 'pedra'){
            msg.innerHTML = 'Perdeu';
            document.querySelector('#perdeu').value = derrota + 1;
        }
        
        else if(enemyEscolha == 'papel'){
            msg.innerHTML = 'Ganhou';
            document.querySelector('#vitoria').value = vitoria + 1;
        }
    }
}
function enemyJogada(){
    let random = Math.floor(Math.random()*3);
    for (let i = 0; i < enemyOpcoes.length; i++){
        if(i == random){
            enemyOpcoes[i].style.opacity = 1;
            enemyEscolha = enemyOpcoes[i].getAttribute('option');
        }
    }
    vencedor();
}
function resetOpacidade(){
    for(let i = 0; i < playerOpcoes.length; i++){
        playerOpcoes[i].style.opacity = 0.3;
    }
    for(let i = 0; i < enemyOpcoes.length; i++){
        enemyOpcoes[i].style.opacity = 0;
    }
}

for(let i = 0; i < playerOpcoes.length; i++){
    playerOpcoes[i].addEventListener('click',(target)=>{
        resetOpacidade();
        playerEscolha = target.target.getAttribute('option');
        target.target.style.opacity = 1;
        enemyJogada();
    })
}