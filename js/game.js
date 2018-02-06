var BattleShip = {};
var player1 = {player : '', board : ''};
var player2 = {player : '', board : ''};

function setupGame(){
  player1.player = new BattleShip.Player('human', `Player 1`);
  player1.board = new BattleShip.GameBoard(player1.player);
  askPlayerToPlacePieces(player1,'player1Board');
  // if( $('#numberOfPlayers').val() == 2 ){
  //   player2.player = new BattleShip.Player('human', `Player 2`);
  //   player2.board = new BattleShip.GameBoard(player2.player);
  // }
  // else{
  //   player2.player = new BattleShip.Player();
  //   player2.board = new BattleShip.GameBoard(computerPlayer);
  // }
}

function askPlayerToPlacePieces(player, playerBoardId){
  let allPieces = player.board.pieces;
  console.log(allPieces);
  
  $('#'+playerBoardId+' td').not('.navigation').on('click',function(){
    $(this).addClass('placed-on');
  });
  $.each(allPieces,function(key,value) {
    let neededToPlace = 0;
    if($('.placed-on').length == value){
      $('#messageCenter').html(`Place your ${key} for ${value} blocks`);
    
    }
    else{
      setTimeout()
    }
    
  });
  
  function startPlacement(){
    
  }


}

function highlightAndCheck(){

}
