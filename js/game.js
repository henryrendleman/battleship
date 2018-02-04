var BattleShip = {};
var player1 = {player : '', board : ''};
var player2 = {player : '', board : ''};
function setupGame(){

  if( $('#numberOfPlayers').val()){
    player1.player = new BattleShip.Player('human');
    player1.board = new BattleShip.GameBoard(player1);
  }
  
  var computerPlayer = new BattleShip.Player();
  var opponentBoard = new BattleShip.GameBoard(computerPlayer);
}

