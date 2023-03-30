const imgPlayerChoise= document.getElementById('playerChoise');
const imgPcChoise= document.getElementById('pcChoise');

const pResult= document.getElementById('result');
const pScore= document.getElementById('score');

const buttons = document.querySelectorAll('button');

const choice=['piedra','papel','tijera'];
const filesname={
'piedra':'images/rock.png',
'papel':'images/paper.png',
'tijera':'images/scissors.png'
};

var scoreW=0;
var scoreL=0;
buttons.forEach(
    button=>button.addEventListener('click',startGame));


function startGame(event) {

    const button = event.currentTarget;
    const playerChoise = button.dataset.choice;
    console.log(playerChoise)
    const computerChoise = getComputerChoice()
    console.log(computerChoise)
    const winner = getWinner(playerChoise, computerChoise)
    console.log(`El ganador es: ${winner}`)

  

    imgPlayerChoise.setAttribute('src',filesname[playerChoise]);
    imgPcChoise.setAttribute('src',filesname[computerChoise]);

    let result;
  
    if (winner === 'player') {

        result='Tu ganas';
        ++scoreW;
    } else if (winner === 'computer') {
        result='Tu pierdes';
        ++scoreL;
    } else {
        result='Empatas';

    }
    pResult.innerHTML=` ${result} eligiendo <Strong>${playerChoise} </Strong> sobre <Strong>${computerChoise}</Strong>`;
    pScore.innerHTML=` Has ganado <Strong>${scoreW} </Strong>.Has perdido <Strong>${scoreL}</Strong>`;
    if (winner === 'player') {


    } else if (winner === 'computer') {

     
    } else {


    }
}


function getComputerChoice() {

    const i = parseInt(Math.random() * 3);
    return choice[i];
}

function getWinner(playerChoise, computerChoice) {
    if (playerChoise === computerChoice) {
        return null;
    }

    if (playerChoise === 'piedra') {
        if (computerChoice === 'papel') {
            return 'computer';
        } else {
            return 'player';
        }

    } else if (playerChoise === 'papel') {
            if (computerChoice === 'piedra') {
                return 'player';
            } else {
                return 'computer';
            }
        } else {
                if (computerChoice === 'papel') {
                    return 'player';
                } else {
                    return 'computer';
                }
            
        }
    }
