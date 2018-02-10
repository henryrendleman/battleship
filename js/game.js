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
  
  $('#'+playerBoardId+' td').not('.navigation').on('click',function(){
    let currentPiece = player.board.getCurrentlyPlacingPiece();
    $(this).addClass(currentPiece);
    let allThisPiecePlaced = player.board.placePiece(currentPiece,getLocationsForPlacedPiece(currentPiece));
    if(allThisPiecePlaced){
      let message = player.board.getCurrentlyPlacingPieceMessage();
      if(message.length){
        $('#messageCenter').html(message);
      }
      else{
        $('#'+playerBoardId+' td').not('.navigation').off('click');
      }
    }
  });
  $('#messageCenter').html(player.board.getCurrentlyPlacingPieceMessage());
    // $.each(allPieces,function(key,value) {
  //   $('#messageCenter').html(`Place your ${key} for ${value} blocks`);
  //   while ($('.placed-on').length != value) {
  //     //wait 15 seconds and check again
  //   }

}

getLocationsForPlacedPiece(pieceName){
  
}