const squares = document.querySelectorAll('.square');
const mole = ['mole1', 'mole2', 'mole3', 'mole4', 'mole5', 'mole6'];
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const goblinImagem = document.querySelector('goblin-imagem')

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare () {
    var moleRandom = Math.floor(Math.random() * mole.length + 1);
    
    squares.forEach(square => {
        square.classList.remove('mole1', 'mole2', 'mole3', 'mole4', 'mole5', 'mole6');
    })
    
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole' + moleRandom); 
    
    hitPosition = randomSquare.id

}


function moveMole() {
    timerId = setInterval(randomSquare, 1000);
    
}
squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})
moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Seu placar final foi : ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)
