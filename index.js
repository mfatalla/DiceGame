
function playDiceGame(){
  // player1
  var firstRandomNum = Math.floor(Math.random()* 6) + 1
  var firstDiceImage = 'images/' + firstRandomNum + '.png';

  document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage)

  // player2
  var secondRandomNum = Math.floor(Math.random()* 6) + 1
  var secondDiceImage = 'images/' + secondRandomNum + '.png';

  document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage)

  // if statement
  if (firstRandomNum > secondRandomNum){
    document.querySelector('h1').innerHTML = 'Player 1 Wins! 🏆';
  } else if (firstRandomNum < secondRandomNum){
    document.querySelector('h1').innerHTML = 'Player 2 Wins! 🏆';
  }else {
    document.querySelector('h1').innerHTML = 'Draw ⚔️';
  }

}
playDiceGame();
document.querySelector('button').addEventListener('click', playDiceGame);
