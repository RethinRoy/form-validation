let buttons = document.querySelectorAll('.container button');
let winnerDiv = document.querySelector('.winner');
let countX = 0;
let counto = 0;
let audio = new Audio('ting.mp3');
let point = 0;
let player = true;
let winningCriteria = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6]
]


buttons.forEach((button) => {
   button.addEventListener('click', (event) => {
      audio.play();
      
      if (player) {
         button.innerHTML = "x";
         player = false;
      } else {
         button.innerHTML = "o";
         player = true;
      }

      button.disabled = true;
      let cheakWinner = winLogic();
      point++;

      if (point == 9 && !cheakWinner) {
         winnerDiv.innerHTML = `It's a draw`;
      }
   });
});
function winLogic() {
   for (let value of winningCriteria) {

      let index1 = buttons[value[0]].innerHTML;
      let index2 = buttons[value[1]].innerHTML;
      let index3 = buttons[value[2]].innerHTML;
      if (index1 !== '' && index2 !== '' && index3 !== '') {
         if (index1 === index2 && index2 === index3) {
            disabledbtn();
            displayWin(index1);
            return true;
         }
      }
   }
}
function disabledbtn() {
   for (let singlebtn of buttons) {
      singlebtn.disabled = true;
   }
}
function displayWin(idx1) {
   if (idx1 == 'x') {
      countX++;
   } else if (idx1 == 'o') {
      counto++;
   }
   document.querySelector('.player1').innerHTML = countX;
   document.querySelector('.player2').innerHTML = counto;
    winnerDiv.innerHTML = `Winner ${idx1}`;
}


function ResetBtn() {
   for (let singlebtn of buttons) {
      singlebtn.disabled = false;
      singlebtn.innerHTML = '';
      winnerDiv.innerHTML = '';
      point = 0;
   }
}

